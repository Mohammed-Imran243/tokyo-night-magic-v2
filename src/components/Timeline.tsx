import { timeline, timelineHeading } from "@/data/timeline";
import { Section, SectionHeading } from "./Section";

export function Timeline() {
  return (
    <Section id="moments">
      <SectionHeading title={timelineHeading} subtitle="A few pieces of our story." />

      {/* Mobile: vertical timeline */}
      <ol className="relative ml-3 space-y-6 border-l border-gold/30 pl-6 md:hidden">
        {timeline.map((m) => (
          <li key={m.id} className="relative">
            <span className="absolute -left-[2.15rem] flex h-8 w-8 items-center justify-center rounded-full border border-gold/50 bg-card text-sm">
              {m.emoji}
            </span>
            <div className="glass-panel rounded-2xl p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-gold-soft">{m.date}</p>
              <h3 className="mt-1 font-display text-xl text-foreground">{m.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{m.caption}</p>
            </div>
          </li>
        ))}
      </ol>

      {/* Desktop: horizontal timeline */}
      <div className="hidden md:block">
        <div className="relative">
          <span className="absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
          <ol className="relative grid grid-cols-5 gap-4">
            {timeline.map((m) => (
              <li key={m.id} className="text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-card text-xl shadow-[var(--shadow-glow)]">
                  {m.emoji}
                </span>
                <p className="mt-4 text-[0.7rem] uppercase tracking-[0.18em] text-gold-soft">{m.date}</p>
                <h3 className="mt-1 font-display text-lg text-foreground">{m.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.caption}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
