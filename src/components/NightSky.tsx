import { useMemo } from "react";

/** Deterministic pseudo-random so server and client render identically. */
function rand(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

/** Decorative animated night sky: stars, drifting lanterns, moon glow. */
export function NightSky({ lanterns = 10, stars = 70 }: { lanterns?: number; stars?: number }) {
  const starField = useMemo(
    () =>
      Array.from({ length: stars }, (_, i) => ({
        id: i,
        left: rand(i + 1) * 100,
        top: rand(i + 101) * 100,
        size: rand(i + 201) * 2 + 1,
        delay: rand(i + 301) * 5,
      })),
    [stars],
  );

  const lanternField = useMemo(
    () =>
      Array.from({ length: lanterns }, (_, i) => ({
        id: i,
        left: rand(i + 401) * 96,
        size: rand(i + 501) * 10 + 8,
        duration: rand(i + 601) * 20 + 26,
        delay: rand(i + 701) * 24,
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
