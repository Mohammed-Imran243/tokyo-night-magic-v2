import "dotenv/config";
import mysql from "mysql2/promise";

let pool: mysql.Pool | undefined;
let initialized = false;

export function getPool(): mysql.Pool {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env["MYSQL_HOST"] ?? "localhost",
      port: Number(process.env["MYSQL_PORT"] ?? 3306),
      user: process.env["MYSQL_USER"] ?? "root",
      password: process.env["MYSQL_PASSWORD"] ?? "root",
      database: process.env["MYSQL_DATABASE"] ?? "tokyo_wishes",
      waitForConnections: true,
      connectionLimit: 5,
      queueLimit: 0,
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
  }
}
