export type Moment = {
  id: string;
  title: string;
  caption: string;
  date?: string;
  emoji: string;
};

export const timelineHeading = "Little Moments ✨";

export const timeline: Moment[] = [
  { id: "met", title: "The Day We Met", caption: "The beginning of everything.", date: "12 Jan 2023", emoji: "🌙" },
  { id: "first-talk", title: "First Conversation", caption: "That awkward little hello that became something memorable.", date: "14 Jan 2023", emoji: "💬" },
  { id: "first-game", title: "First Game", caption: "The beginning of our gaming chaos.", date: "Feb 2023", emoji: "🎮" },
  { id: "endless", title: "Endless Conversations", caption: "Somehow there was always something to talk about.", date: "2023 – 2025", emoji: "✨" },
  { id: "today", title: "Today", caption: "Another birthday, another memory.", date: "Today", emoji: "🎂" },
];
