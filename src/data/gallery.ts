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
  { id: "img-1", src: "/memories/img-1.jpg", alt: "Tokyo memory photo 1", caption: "Special Moment ✨", category: "Photos", type: "image" },
  { id: "img-2", src: "/memories/img-2.jpg", alt: "Tokyo memory photo 2", caption: "Together 💜", category: "Photos", type: "image" },
  { id: "img-3", src: "/memories/img-3.jpg", alt: "Tokyo memory photo 3", caption: "Unforgettable 🎮", category: "Photos", type: "image" },
  { id: "img-4", src: "/memories/img-4.jpg", alt: "Tokyo memory photo 4", caption: "Our Quiet Place 🌟", category: "Photos", type: "image" },
  { id: "img-5", src: "/memories/img-5.jpg", alt: "Tokyo memory photo 5", caption: "Best Memories 💌", category: "Photos", type: "image" },
  { id: "img-6", src: "/memories/img-6.jpg", alt: "Tokyo memory photo 6", caption: "Rooftop Nights 🌃", category: "Photos", type: "image" },
  { id: "img-7", src: "/memories/img-7.jpg", alt: "Tokyo memory photo 7", caption: "Every Star a Memory ⭐", category: "Photos", type: "image" },
  { id: "img-8", src: "/memories/img-8.jpg", alt: "Tokyo memory photo 8", caption: "Victory Moment 🏆", category: "Photos", type: "image" },
  { id: "img-9", src: "/memories/img-9.jpg", alt: "Tokyo memory photo 9", caption: "Late Night Talks 💬", category: "Photos", type: "image" },
  { id: "img-10", src: "/memories/img-10.jpg", alt: "Tokyo memory photo 10", caption: "Lantern Sky 🏮", category: "Photos", type: "image" },
  { id: "img-11", src: "/memories/img-11.jpg", alt: "Tokyo memory photo 11", caption: "Quiet Smiles 😊", category: "Photos", type: "image" },
  { id: "img-12", src: "/memories/img-12.jpg", alt: "Tokyo memory photo 12", caption: "Always Together 💖", category: "Photos", type: "image" },
  { id: "img-13", src: "/memories/img-13.jpg", alt: "Tokyo memory photo 13", caption: "Forever Memory 💫", category: "Photos", type: "image" },
  { id: "img-14", src: "/memories/img-14.jpg", alt: "Tokyo memory photo 14", caption: "Sweet Moments 🌸", category: "Photos", type: "image" },
  { id: "img-15", src: "/memories/img-15.jpg", alt: "Tokyo memory photo 15", caption: "Golden Hour 🌅", category: "Photos", type: "image" },
  { id: "img-16", src: "/memories/img-16.jpg", alt: "Tokyo memory photo 16", caption: "Happy Memories 🎉", category: "Photos", type: "image" },
  { id: "img-17", src: "/memories/img-17.jpg", alt: "Tokyo memory photo 17", caption: "Starry Night 🌙", category: "Photos", type: "image" },
  { id: "img-18", src: "/memories/img-18.jpg", alt: "Tokyo memory photo 18", caption: "With You Always 💕", category: "Photos", type: "image" },

  { id: "vid-1", src: "/memories/vid-1.mp4", alt: "Tokyo memory video 1", caption: "Memory Video 1 🎬", category: "Videos", type: "video" },
  { id: "vid-2", src: "/memories/vid-2.mp4", alt: "Tokyo memory video 2", caption: "Memory Video 2 🎥", category: "Videos", type: "video" },
  { id: "vid-3", src: "/memories/vid-3.mp4", alt: "Tokyo memory video 3", caption: "Memory Video 3 📹", category: "Videos", type: "video" },
];
