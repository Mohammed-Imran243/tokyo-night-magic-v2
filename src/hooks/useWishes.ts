import { useCallback, useEffect, useState } from "react";
import { seedWishes, type Wish } from "@/data/wishes";

/**
 * Wish storage. Currently backed by localStorage.
 * To move to a backend, replace `load`, `persist` and `addWish` internals
 * with API calls — the component API stays the same.
 */
const STORAGE_KEY = "tokyo.wishes.v1";
const LIKES_KEY = "tokyo.liked.v1";

function load(): Wish[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Wish[]) : [];
  } catch {
    return [];
  }
}

function persist(wishes: Wish[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(wishes));
  } catch {
    /* ignore quota errors */
  }
}

export function useWishes() {
  const [userWishes, setUserWishes] = useState<Wish[]>([]);
  const [liked, setLiked] = useState<string[]>([]);

  useEffect(() => {
    setUserWishes(load());
    try {
      const raw = window.localStorage.getItem(LIKES_KEY);
      if (raw) setLiked(JSON.parse(raw) as string[]);
    } catch {
      /* ignore */
    }
  }, []);

  const addWish = useCallback((input: { name: string; message: string; photo?: string }) => {
    const wish: Wish = {
      id: `local-${Date.now()}`,
      name: input.name.trim(),
      message: input.message.trim(),
      photo: input.photo,
      date: new Date().toISOString().slice(0, 10),
      likes: 0,
    };
    setUserWishes((prev) => {
      const next = [wish, ...prev];
      persist(next);
      return next;
    });
    return wish;
  }, []);

  const toggleLike = useCallback((id: string) => {
    setLiked((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      try {
        window.localStorage.setItem(LIKES_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const wishes: Wish[] = [...userWishes, ...seedWishes];

  return { wishes, addWish, liked, toggleLike };
}
