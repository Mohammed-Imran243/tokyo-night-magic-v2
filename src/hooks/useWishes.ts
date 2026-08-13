import { useCallback, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getWishes, addWish as addWishServer, toggleLike as toggleLikeServer } from "@/lib/wishes.server";
import type { Wish } from "@/data/wishes";

const LIKES_KEY = "tokyo.liked.v1";

function loadLiked(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(LIKES_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

export function useWishes() {
  const queryClient = useQueryClient();
  const [liked, setLiked] = useState<string[]>(loadLiked);

  // ─── Fetch wishes from MySQL via server function ───────────────────
  const { data: wishes = [] } = useQuery<Wish[]>({
    queryKey: ["wishes"],
    queryFn: () => getWishes(),
    staleTime: 10_000,
  });

  // ─── Add wish mutation ─────────────────────────────────────────────
  const { mutate: addWishMutate } = useMutation({
    mutationFn: (input: { name: string; message: string; photo?: string }) =>
      addWishServer({ data: input }),
    onSuccess: (newWish) => {
      // Optimistically prepend the new wish
      queryClient.setQueryData<Wish[]>(["wishes"], (old) =>
        old ? [newWish, ...old] : [newWish],
      );
    },
  });

  const addWish = useCallback(
    (input: { name: string; message: string; photo?: string }) => {
      addWishMutate(input);
    },
    [addWishMutate],
  );

  // ─── Toggle like mutation ──────────────────────────────────────────
  const { mutate: toggleLikeMutate } = useMutation({
    mutationFn: ({ id, liked }: { id: string; liked: boolean }) =>
      toggleLikeServer({ data: { id, liked } }),
    onSuccess: (result) => {
      // Update the wish's like count in cache
      queryClient.setQueryData<Wish[]>(["wishes"], (old) =>
        old
          ? old.map((w) => (w.id === result.id ? { ...w, likes: result.likes } : w))
          : [],
      );
    },
  });

  const toggleLike = useCallback(
    (id: string) => {
      setLiked((prev) => {
        const isLiked = prev.includes(id);
        const next = isLiked ? prev.filter((x) => x !== id) : [...prev, id];
        try {
          window.localStorage.setItem(LIKES_KEY, JSON.stringify(next));
        } catch {
          /* ignore */
        }
        // Fire the server mutation — liked = !isLiked (the new state)
        toggleLikeMutate({ id, liked: !isLiked });
        return next;
      });
    },
    [toggleLikeMutate],
  );

  return { wishes, addWish, liked, toggleLike };
}
