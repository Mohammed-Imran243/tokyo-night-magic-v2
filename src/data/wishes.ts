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
