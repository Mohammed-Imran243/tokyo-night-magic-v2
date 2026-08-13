import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("relative w-full px-4 py-14 sm:px-6 sm:py-20", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  title,
  subtitle,
  script = true,
}: {
  title: string;
  subtitle?: string;
  script?: boolean;
}) {
  return (
    <header className="mb-8 text-center sm:mb-12">
      <div className="mx-auto flex max-w-md items-center gap-3">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/50" />
        <h2
          className={cn(
            "text-balance px-2 text-3xl sm:text-4xl",
            script ? "script-title" : "font-display font-semibold text-foreground",
          )}
        >
          {title}
        </h2>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/50" />
      </div>
      {subtitle ? (
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">{subtitle}</p>
      ) : null}
    </header>
  );
}
