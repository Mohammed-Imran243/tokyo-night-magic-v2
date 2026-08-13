import { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "@/data/gallery";

export function Lightbox({
  items,
  index,
  onClose,
  onIndexChange,
}: {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  const touchX = useRef<number | null>(null);
  const item = items[index];

  const go = (dir: number) => onIndexChange((index + dir + items.length) % items.length);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  });

  if (!item) return null;

  const isVideo = item.type === "video" || item.src.endsWith(".mp4");

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Gallery media viewer"
      className="fixed inset-0 z-[80] flex flex-col bg-background/95 backdrop-blur-md"
      onTouchStart={(e) => {
        touchX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        const start = touchX.current;
        const end = e.changedTouches[0]?.clientX ?? null;
        if (start !== null && end !== null && Math.abs(end - start) > 50) go(end < start ? 1 : -1);
        touchX.current = null;
      }}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <span className="text-sm text-muted-foreground tabular-nums">
          {index + 1} / {items.length}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close viewer"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex min-h-0 flex-1 items-center justify-center px-3">
        {isVideo ? (
          <video
            key={item.src}
            src={item.src}
            controls
            autoPlay
            playsInline
            className="max-h-full max-w-full rounded-2xl border border-border object-contain shadow-2xl"
          />
        ) : (
          <img
            src={item.src}
            alt={item.alt}
            className="max-h-full max-w-full rounded-2xl border border-border object-contain shadow-2xl"
          />
        )}
      </div>

      <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous item"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <p className="min-w-0 truncate text-center text-sm text-muted-foreground">{item.caption}</p>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next item"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold hover:bg-gold/10 transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
