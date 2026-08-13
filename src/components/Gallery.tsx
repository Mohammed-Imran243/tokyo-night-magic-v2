import { useMemo, useState } from "react";
import { galleryCategories, galleryItems, type GalleryCategory } from "@/data/gallery";
import { Lightbox } from "./Lightbox";
import { cn } from "@/lib/utils";

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
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setIndex(i)}
            className="group relative aspect-square overflow-hidden rounded-2xl border border-border hover-lift"
          >
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-2 text-left text-[0.7rem] text-foreground opacity-0 transition-opacity group-hover:opacity-100">
              {item.caption}
            </span>
          </button>
        ))}
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
