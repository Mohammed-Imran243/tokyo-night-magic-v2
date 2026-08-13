import { useMemo } from "react";

/** Decorative animated night sky: stars, drifting lanterns, moon glow. */
export function NightSky({ lanterns = 10, stars = 70 }: { lanterns?: number; stars?: number }) {
  const starField = useMemo(
    () =>
      Array.from({ length: stars }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 5,
      })),
    [stars],
  );

  const lanternField = useMemo(
    () =>
      Array.from({ length: lanterns }, (_, i) => ({
        id: i,
        left: Math.random() * 96,
        size: Math.random() * 10 + 8,
        duration: Math.random() * 20 + 26,
        delay: Math.random() * 24,
      })),
    [lanterns],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet/20 blur-3xl animate-soft-pulse" />
      {starField.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-foreground animate-twinkle"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
      {lanternField.map((l) => (
        <span
          key={`l-${l.id}`}
          className="absolute bottom-0 rounded-[40%_40%_45%_45%] bg-gold/70 blur-[1px] animate-drift"
          style={{
            left: `${l.left}%`,
            width: l.size,
            height: l.size * 1.3,
            animationDuration: `${l.duration}s`,
            animationDelay: `${l.delay}s`,
            boxShadow: "0 0 18px 4px var(--color-gold)",
          }}
        />
      ))}
    </div>
  );
}
