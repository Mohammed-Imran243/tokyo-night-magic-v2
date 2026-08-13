import { useCountdown } from "@/hooks/useCountdown";
import { site } from "@/data/site";

export function Countdown() {
  const t = useCountdown(site.birthday);
  const items = [
    { label: "Days", value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Minutes", value: t.minutes },
    { label: "Seconds", value: t.seconds },
  ];

  return (
    <ul className="grid w-full max-w-md grid-cols-2 gap-3 sm:max-w-xl sm:grid-cols-4">
      {items.map((i) => (
        <li
          key={i.label}
          className="glass-panel rounded-2xl px-3 py-4 text-center hover-lift"
        >
          <span className="block font-display text-3xl font-semibold tabular-nums text-gold sm:text-4xl">
            {String(i.value).padStart(2, "0")}
          </span>
          <span className="mt-1 block text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
            {i.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
