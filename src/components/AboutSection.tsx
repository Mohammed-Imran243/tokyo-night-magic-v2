import { Zap, Shield } from "lucide-react";
import { site } from "@/data/site";
import { quickFacts } from "@/data/quickFacts";
import { Section, SectionHeading } from "./Section";

const icons = [Zap, Shield];

export function AboutSection() {
  return (
    <Section id="about">
      <SectionHeading title={site.about.heading} subtitle="Two sides of the same unstoppable person." />

      <div className="grid gap-5 md:grid-cols-2">
        {site.about.cards.map((card, i) => {
          const Icon = icons[i % icons.length]!;
          return (
            <article
              key={card.id}
              className="glass-panel hover-lift rounded-3xl p-6 sm:p-8"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/40 bg-accent/40">
                <Icon className="h-6 w-6 text-gold" />
              </div>
              <h3 className="font-display text-2xl text-foreground">{card.title}</h3>
              <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                {card.body}
              </p>
            </article>
          );
        })}
      </div>

      <div className="glass-panel mt-6 rounded-3xl p-5 sm:p-7">
        <h3 className="script-title mb-4 text-2xl">Quick Facts</h3>
        <ul className="grid gap-2.5 sm:grid-cols-2">
          {quickFacts.map((f) => (
            <li
              key={f.id}
              className="flex min-h-12 items-center gap-3 rounded-2xl border border-border/60 bg-secondary/40 px-4 py-2.5 text-sm text-foreground transition-colors hover:border-gold/40"
            >
              <span className="shrink-0 text-lg">{f.emoji}</span>
              <span className="min-w-0">{f.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
