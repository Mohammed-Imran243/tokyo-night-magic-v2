import heroImage from "@/assets/tokyo-hero.jpg";

/**
 * Global site content. Edit anything here — no JSX changes needed.
 */
export const site = {
  name: "Tokyo",
  author: "Levi Father",
  /** Birthday target date for the countdown (ISO string, local time). */
  birthday: "2027-05-04T00:00:00",
  hero: {
    kicker: "Happy Birthday",
    title: "Tokyo",
    subtitle: [
      "Not just a game character,",
      "but the player of my heart. 💜",
    ],
    primaryCta: "Enter Tokyo's World ✨",
    secondaryCta: "Leave a Birthday Wish 💌",
    /** Replace this file to swap the character art. */
    characterImage: heroImage,
    characterAlt: "Illustration of Tokyo under a lantern-lit night sky",
  },
  about: {
    heading: "About Tokyo",
    cards: [
      {
        id: "rusher",
        title: "Our Rusher ⚡",
        body: "Fearless, stubborn and unstoppable. You rush into everything like there's no tomorrow, breaking barriers and taking down every challenge like a true beast.",
      },
      {
        id: "supporter",
        title: "Our Supporter 💜",
        body: "You've got my back, always. Healing, covering, and believing in us even when things look tough. The real MVP in every match and in life.",
      },
    ],
  },
  footer: {
    lines: [
      "Made with ❤️ by Levi Father",
      "For Tokyo, today, tomorrow and always. ✨",
    ],
    socials: [
      { id: "instagram", label: "Instagram", href: "https://instagram.com" },
      { id: "youtube", label: "YouTube", href: "https://youtube.com" },
      { id: "spotify", label: "Spotify", href: "https://spotify.com" },
    ],
  },
} as const;

export const navLinks = [
  { label: "Home", to: "/", hash: undefined },
  { label: "About Tokyo", to: "/", hash: "about" },
  { label: "Birthday Letter", to: "/", hash: "letter" },
  { label: "Wishes", to: "/wishes", hash: undefined },
  { label: "Gallery", to: "/gallery", hash: undefined },
] as const;
