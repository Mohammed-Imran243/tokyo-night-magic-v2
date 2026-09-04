export const galleryCategories = [
  "All",
  "Photos",
  "Videos",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category: Exclude<GalleryCategory, "All">;
  type?: "image" | "video";
};

export const galleryItems: GalleryItem[] = [
  { id: "img-1", src: "/memories/img-1.png", alt: "Tokyo memory photo", caption: "Memory ??", category: "Photos", type: "image" },
  { id: "img-2", src: "/memories/img-2.png", alt: "Tokyo memory photo", caption: "Memory ??", category: "Photos", type: "image" },
  { id: "img-3", src: "/memories/img-3.png", alt: "Tokyo memory photo", caption: "Memory ??", category: "Photos", type: "image" },
  { id: "img-4", src: "/memories/img-4.jpg", alt: "Tokyo memory photo", caption: "Memory ??", category: "Photos", type: "image" },
  { id: "img-5", src: "/memories/img-5.jpg", alt: "Tokyo memory photo", caption: "Memory ??", category: "Photos", type: "image" },
  { id: "img-6", src: "/memories/img-6.jpg", alt: "Tokyo memory photo", caption: "Memory ??", category: "Photos", type: "image" },
  { id: "img-7", src: "/memories/img-7.jpg", alt: "Tokyo memory photo", caption: "Memory ??", category: "Photos", type: "image" },
  { id: "img-8", src: "/memories/img-8.jpg", alt: "Tokyo memory photo", caption: "Memory ??", category: "Photos", type: "image" },
  { id: "img-9", src: "/memories/img-9.jpg", alt: "Tokyo memory photo", caption: "Memory ??", category: "Photos", type: "image" },
  { id: "img-10", src: "/memories/img-10.jpg", alt: "Tokyo memory photo", caption: "Memory ??", category: "Photos", type: "image" },
  { id: "img-11", src: "/memories/img-11.jpg", alt: "Tokyo memory photo", caption: "Memory ??", category: "Photos", type: "image" },
  { id: "img-12", src: "/memories/img-12.jpg", alt: "Tokyo memory photo", caption: "Memory ??", category: "Photos", type: "image" },
  { id: "img-13", src: "/memories/img-13.jpeg", alt: "Tokyo memory photo", caption: "Memory ??", category: "Photos", type: "image" },
  { id: "img-14", src: "/memories/img-14.jpeg", alt: "Tokyo memory photo", caption: "Memory ??", category: "Photos", type: "image" },
  { id: "img-15", src: "/memories/img-15.jpeg", alt: "Tokyo memory photo", caption: "Memory ??", category: "Photos", type: "image" },
  { id: "img-16", src: "/memories/img-16.jpeg", alt: "Tokyo memory photo", caption: "Memory ??", category: "Photos", type: "image" },
  { id: "img-17", src: "/memories/img-17.jpeg", alt: "Tokyo memory photo", caption: "Memory ??", category: "Photos", type: "image" },
  { id: "img-18", src: "/memories/img-18.jpeg", alt: "Tokyo memory photo", caption: "Memory ??", category: "Photos", type: "image" },
  { id: "img-19", src: "/memories/img-19.jpeg", alt: "Tokyo memory photo", caption: "Memory ??", category: "Photos", type: "image" },
  { id: "img-20", src: "/memories/img-20.jpeg", alt: "Tokyo memory photo", caption: "Memory ??", category: "Photos", type: "image" },
  { id: "img-21", src: "/memories/img-21.jpeg", alt: "Tokyo memory photo", caption: "Memory ??", category: "Photos", type: "image" },
  { id: "img-22", src: "/memories/img-22.jpeg", alt: "Tokyo memory photo", caption: "Memory ??", category: "Photos", type: "image" },
  { id: "img-23", src: "/memories/img-23.jpeg", alt: "Tokyo memory photo", caption: "Memory ??", category: "Photos", type: "image" },
  { id: "img-24", src: "/memories/img-24.jpeg", alt: "Tokyo memory photo", caption: "Memory ??", category: "Photos", type: "image" },
  { id: "img-25", src: "/memories/img-25.jpeg", alt: "Tokyo memory photo", caption: "Memory ??", category: "Photos", type: "image" },
  { id: "img-26", src: "/memories/img-26.jpeg", alt: "Tokyo memory photo", caption: "Memory ??", category: "Photos", type: "image" },
  { id: "img-27", src: "/memories/img-27.jpeg", alt: "Tokyo memory photo", caption: "Memory ??", category: "Photos", type: "image" },
  { id: "img-28", src: "/memories/img-28.jpeg", alt: "Tokyo memory photo", caption: "Memory ??", category: "Photos", type: "image" },
  { id: "img-29", src: "/memories/img-29.jpeg", alt: "Tokyo memory photo", caption: "Memory ??", category: "Photos", type: "image" },
  { id: "img-30", src: "/memories/img-30.jpeg", alt: "Tokyo memory photo", caption: "Memory ??", category: "Photos", type: "image" },

  { id: "vid-1", src: "/memories/vid-1.mp4", alt: "Tokyo memory video", caption: "Memory Video ??", category: "Videos", type: "video" },
  { id: "vid-2", src: "/memories/vid-2.mp4", alt: "Tokyo memory video", caption: "Memory Video ??", category: "Videos", type: "video" },
  { id: "vid-3", src: "/memories/vid-3.mp4", alt: "Tokyo memory video", caption: "Memory Video ??", category: "Videos", type: "video" },
  { id: "vid-4", src: "/memories/vid-4.mp4", alt: "Tokyo memory video", caption: "Memory Video ??", category: "Videos", type: "video" },
  { id: "vid-5", src: "/memories/vid-5.mp4", alt: "Tokyo memory video", caption: "Memory Video ??", category: "Videos", type: "video" },
  { id: "vid-6", src: "/memories/vid-6.mp4", alt: "Tokyo memory video", caption: "Memory Video ??", category: "Videos", type: "video" },
];

