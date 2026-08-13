import { createServerFn } from "@tanstack/react-start";
import { getPool, ensureTableExists } from "./db";
import type { Wish } from "@/data/wishes";

interface WishRow {
  id: string;
  name: string;
  message: string;
  photo: string | null;
  date: string | Date;
  likes: number;
}

// ─── Fetch all wishes ────────────────────────────────────────────────
export const getWishes = createServerFn({ method: "GET" }).handler(
  async (): Promise<Wish[]> => {
    try {
      await ensureTableExists();
      const pool = getPool();
      const [rows] = await pool.query<mysql2Rows>(
        "SELECT id, name, message, photo, date, likes FROM wishes ORDER BY created_at DESC",
      );
      return (rows as WishRow[]).map((r) => ({
        id: r.id,
        name: r.name,
        message: r.message,
        ...(r.photo ? { photo: r.photo } : {}),
        date: formatDate(r.date),
        likes: r.likes,
      }));
    } catch (err) {
      console.error("Failed to fetch wishes from MySQL:", err);
      return [];
    }
  },
);

// ─── Add a new wish ──────────────────────────────────────────────────
export const addWish = createServerFn({ method: "POST" })
  .validator(
    (input: unknown): { name: string; message: string; photo?: string } => {
      const d = input as Record<string, unknown>;
      const name = String(d["name"] ?? "").trim();
      const message = String(d["message"] ?? "").trim();
      if (name.length < 2 || name.length > 40) throw new Error("Invalid name");
      if (message.length < 5 || message.length > 500) throw new Error("Invalid message");
      const photo = d["photo"] ? String(d["photo"]) : undefined;
      return photo ? { name, message, photo } : { name, message };
    },
  )
  .handler(async ({ data }): Promise<Wish> => {
    await ensureTableExists();
    const pool = getPool();
    const id = crypto.randomUUID();
    const today = new Date().toISOString().slice(0, 10);

    await pool.execute(
      "INSERT INTO wishes (id, name, message, photo, date) VALUES (?, ?, ?, ?, ?)",
      [id, data.name, data.message, data.photo ?? null, today],
    );

    return {
      id,
      name: data.name,
      message: data.message,
      ...(data.photo ? { photo: data.photo } : {}),
      date: today,
      likes: 0,
    };
  });

// ─── Toggle like (increment / decrement) ─────────────────────────────
export const toggleLike = createServerFn({ method: "POST" })
  .validator(
    (input: unknown): { id: string; liked: boolean } => {
      const d = input as Record<string, unknown>;
      return { id: String(d["id"]), liked: Boolean(d["liked"]) };
    },
  )
  .handler(async ({ data }): Promise<{ id: string; likes: number }> => {
    await ensureTableExists();
    const pool = getPool();
    if (data.liked) {
      await pool.execute("UPDATE wishes SET likes = likes + 1 WHERE id = ?", [data.id]);
    } else {
      await pool.execute("UPDATE wishes SET likes = GREATEST(likes - 1, 0) WHERE id = ?", [data.id]);
    }
    const [rows] = await pool.execute("SELECT likes FROM wishes WHERE id = ?", [data.id]);
    const result = rows as Array<{ likes: number }>;
    return { id: data.id, likes: result[0]?.likes ?? 0 };
  });

// ─── Helpers ──────────────────────────────────────────────────────────
function formatDate(val: string | Date): string {
  if (val instanceof Date) return val.toISOString().slice(0, 10);
  return String(val).slice(0, 10);
}

type mysql2Rows = import("mysql2").RowDataPacket[];
