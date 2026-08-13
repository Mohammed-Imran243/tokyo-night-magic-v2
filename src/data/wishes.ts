export type Wish = {
  id: string;
  name: string;
  message: string;
  date: string;
  likes: number;
  /** Optional avatar/photo URL. Falls back to initials when empty. */
  photo?: string;
};

export const wishesHeading = "All Wishes 💌";

export const seedWishes: Wish[] = [
  {
    id: "w1",
    name: "Shadow",
    message: "Happy Birthday Tokyo 💜 Keep shining always ✨",
    date: "2026-05-04",
    likes: 24,
  },
  {
    id: "w2",
    name: "Harry",
    message: "To the loudest, funniest teammate I know — may this year be as unstoppable as your rushes.",
    date: "2026-05-04",
    likes: 18,
  },
  {
    id: "w3",
    name: "Mira",
    message: "You overthink everything except being a great friend. Happy birthday, girl 🎂",
    date: "2026-05-03",
    likes: 31,
  },
  {
    id: "w4",
    name: "Kai",
    message: "Wishing you endless victories, zero lag and a lot of cake 🎮",
    date: "2026-05-03",
    likes: 12,
  },
  {
    id: "w5",
    name: "Aria",
    message: "May every dream you quietly hold become reality this year. Happy Birthday Tokyo!",
    date: "2026-05-02",
    likes: 9,
  },
  {
    id: "w6",
    name: "Levi Father",
    message: "Today, tomorrow and always — thank you for existing. 💜",
    date: "2026-05-04",
    likes: 47,
  },
];
