export type Track = {
  id: string;
  title: string;
  artist: string;
  /** Drop your own audio file in /public/media and update this path. */
  src: string;
};

export const playlistName = "Night Vibes";

export const tracks: Track[] = [
  { id: "t1", title: "Night Vibes", artist: "For Tokyo", src: "/media/track-1.mp3" },
  { id: "t2", title: "Lanterns", artist: "For Tokyo", src: "/media/track-2.mp3" },
  { id: "t3", title: "Happy Birthday", artist: "For Tokyo", src: "/media/track-3.mp3" },
];
