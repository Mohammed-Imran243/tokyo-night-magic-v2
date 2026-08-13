import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

export const galleryCategories = [
  "All",
  "Photos",
  "Gaming",
  "Screenshots",
  "Memories",
  "Random",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  id: string;
  /** Replace with "/media/your-image.jpg" to swap in your own file. */
  src: string;
  alt: string;
  caption?: string;
  category: Exclude<GalleryCategory, "All">;
};

export const galleryItems: GalleryItem[] = [
  { id: "p1", src: g1, alt: "Two friends under a starry sky", caption: "Rooftop nights.", category: "Photos" },
  { id: "p2", src: g2, alt: "Gaming setup glowing at night", caption: "Where the chaos happens.", category: "Gaming" },
  { id: "p3", src: g3, alt: "A handwritten letter with dried flowers", caption: "Words we never said out loud.", category: "Memories" },
  { id: "p4", src: g4, alt: "Constellations over a calm lake", caption: "Every star is a memory.", category: "Random" },
  { id: "p5", src: g5, alt: "Lanterns rising over water", caption: "Make a wish.", category: "Photos" },
  { id: "p6", src: g6, alt: "Birthday cake with sparklers", caption: "Another year of you.", category: "Memories" },
  { id: "p7", src: g2, alt: "Match result screenshot placeholder", caption: "Victory screen #1.", category: "Screenshots" },
  { id: "p8", src: g4, alt: "Night sky screenshot placeholder", caption: "Loading screen beauty.", category: "Screenshots" },
  { id: "p9", src: g1, alt: "Late night talk placeholder", caption: "3 AM conversations.", category: "Random" },
  { id: "p10", src: g5, alt: "Lantern festival placeholder", caption: "Our little festival.", category: "Gaming" },
];
