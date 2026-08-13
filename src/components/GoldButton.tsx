import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "gold" | "outline" | "ghost";
  fullWidth?: boolean;
  children: ReactNode;
};

export function GoldButton({
  variant = "gold",
  fullWidth,
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60",
        variant === "gold" &&
          "border border-gold/60 bg-[image:var(--gradient-violet)] text-primary-foreground shadow-[var(--shadow-glow)] hover:shadow-[var(--shadow-gold)] hover:brightness-110",
        variant === "outline" &&
          "border border-gold/50 bg-transparent text-gold hover:bg-gold/10 hover:shadow-[var(--shadow-gold)]",
        variant === "ghost" && "border border-transparent text-muted-foreground hover:text-foreground",
        fullWidth && "w-full",
        className,
      )}
    >
      {children}
    </button>
  );
}
