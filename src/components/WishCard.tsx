import { Heart } from "lucide-react";
import type { Wish } from "@/data/wishes";
import { cn } from "@/lib/utils";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function WishCard({
  wish,
  liked,
  onToggleLike,
}: {
  wish: Wish;
  liked: boolean;
  onToggleLike: (id: string) => void;
}) {
  return (
    <article className="glass-panel hover-lift flex h-full flex-col rounded-3xl p-5">
      <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
        {wish.photo ? (
          <img
            src={wish.photo}
            alt=""
            loading="lazy"
            className="h-11 w-11 shrink-0 rounded-full border border-gold/40 object-cover"
          />
        ) : (
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/40 bg-accent/50 font-display text-sm text-gold">
            {initials(wish.name)}
          </span>
        )}
        <div className="min-w-0">
          <h3 className="truncate font-display text-lg text-foreground">{wish.name}</h3>
          <p className="text-xs text-muted-foreground">{wish.date}</p>
        </div>
      </div>

      <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
        {wish.message}
      </p>

      <button
        type="button"
        onClick={() => onToggleLike(wish.id)}
        aria-pressed={liked}
        aria-label={liked ? `Unlike wish from ${wish.name}` : `Like wish from ${wish.name}`}
        className={cn(
          "mt-4 inline-flex min-h-10 w-fit items-center gap-2 rounded-full border px-4 text-sm transition-colors",
          liked
            ? "border-pink/60 bg-pink/15 text-pink"
            : "border-border text-muted-foreground hover:border-pink/50 hover:text-pink",
        )}
      >
        <Heart className={cn("h-4 w-4", liked && "fill-current")} />
        <span className="tabular-nums">{wish.likes + (liked ? 1 : 0)}</span>
      </button>
    </article>
  );
}
