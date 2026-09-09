import "dotenv/config";
import mysql from "mysql2/promise";
import { readFileSync } from "node:fs";

let pool: mysql.Pool | undefined;
let initialized = false;

/**
 * Resolves the Aiven CA certificate.
 * - Locally: put the downloaded ca.pem next to this file (or anywhere) and
 *   point MYSQL_CA_CERT_PATH at it in your .env.
 * - On Vercel: filesystem access to arbitrary paths in your repo can be
 *   unreliable in serverless bundles, so instead paste the FULL contents of
 *   ca.pem (including ---BEGIN/END--- lines) into a Vercel env var called
 *   MYSQL_CA_CERT. That takes priority if set.
 */
function getCaCert(): string | undefined {
  if (process.env["MYSQL_CA_CERT"]) {
    // Env var content, e.g. pasted directly into Vercel project settings.
    return process.env["MYSQL_CA_CERT"].replace(/\\n/g, "\n");
  }
  const path = process.env["MYSQL_CA_CERT_PATH"];
  if (path) {
    return readFileSync(path, "utf8");
  }
  return undefined;
}

export function getPool(): mysql.Pool {
  if (!pool) {
    const ca = getCaCert();
    console.log(
      "[db] CA cert loaded:",
      ca ? `yes (${ca.length} chars)` : "NO — falling back to rejectUnauthorized:false"
    );
    console.log("[db] MYSQL_CA_CERT set:", Boolean(process.env["MYSQL_CA_CERT"]));
    console.log("[db] MYSQL_CA_CERT_PATH:", process.env["MYSQL_CA_CERT_PATH"] ?? "(not set)");

    pool = mysql.createPool({
      host: process.env["MYSQL_HOST"] ?? "localhost",
      port: Number(process.env["MYSQL_PORT"] ?? 3306),
      user: process.env["MYSQL_USER"] ?? "root",
      password: process.env["MYSQL_PASSWORD"] ?? "root",
      database: process.env["MYSQL_DATABASE"] ?? "tokyo_wishes",
      waitForConnections: true,
      connectionLimit: 5,
      queueLimit: 0,
      ssl: ca
        ? {
            ca,
            rejectUnauthorized: true,
          }
        : {
            // Fallback ONLY if no CA cert is configured. This still encrypts
            // the connection but does not verify the server's identity —
            // fine for a quick local test, not recommended for production.
            rejectUnauthorized: false,
          },
    });
  }
  return pool;
}

export async function ensureTableExists(): Promise<void> {
  if (initialized) return;
  try {
    const p = getPool();
    await p.query(`
      CREATE TABLE IF NOT EXISTS wishes (
        id         VARCHAR(36) PRIMARY KEY,
        name       VARCHAR(40) NOT NULL,
        message    VARCHAR(500) NOT NULL,
        photo      LONGTEXT,
        date       DATE NOT NULL DEFAULT (CURRENT_DATE),
        likes      INT NOT NULL DEFAULT 0,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    initialized = true;
  } catch (err) {
    console.error("Error ensuring MySQL table exists:", err);
    throw err;
  }
}