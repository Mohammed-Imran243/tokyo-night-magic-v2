import { useMemo, useState } from "react";
import { galleryCategories, galleryItems, type GalleryCategory } from "@/data/gallery";
import { Lightbox } from "./Lightbox";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

export function Gallery({ limit }: { limit?: number }) {
  const [category, setCategory] = useState<GalleryCategory>("All");
  const [index, setIndex] = useState<number | null>(null);

  const items = useMemo(() => {
    const filtered =
      category === "All" ? galleryItems : galleryItems.filter((i) => i.category === category);
    return limit ? filtered.slice(0, limit) : filtered;
  }, [category, limit]);

  return (
    <div>
      <div className="-mx-4 mb-6 flex snap-x gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
        {galleryCategories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            className={cn(
              "min-h-10 shrink-0 snap-start rounded-full border px-4 text-sm transition-colors",
              category === c
                ? "border-gold/60 bg-gold/15 text-gold"
                : "border-border text-muted-foreground hover:text-foreground",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item, i) => {
          const isVideo = item.type === "video" || item.src.endsWith(".mp4");
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={item.caption || item.alt}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-border hover-lift bg-card"
            >
              {isVideo ? (
                <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-midnight via-card to-background">
                  <video
                    src={item.src}
                    preload="none"
                    muted
                    playsInline
                    className="h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute flex h-11 w-11 items-center justify-center rounded-full bg-gold/20 backdrop-blur-md text-gold border border-gold/50 shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="h-5 w-5 fill-current ml-0.5" />
                  </div>
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}

              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent p-2.5 text-left text-[0.75rem] text-foreground opacity-0 transition-opacity group-hover:opacity-100">
                {item.caption}
              </span>
            </button>
          );
        })}
      </div>

      {index !== null ? (
        <Lightbox
          items={items}
          index={index}
          onClose={() => setIndex(null)}
          onIndexChange={setIndex}
        />
      ) : null}
    </div>
  );
}
