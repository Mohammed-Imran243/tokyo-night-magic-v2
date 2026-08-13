import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { letter } from "@/data/letter";
import { Section } from "./Section";
import { GoldButton } from "./GoldButton";

export function LetterSection() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <Section id="letter">
      <div className="mx-auto max-w-3xl">
        <article className="parchment-card relative rounded-3xl p-6 sm:p-10">
          <h2 className="script-title text-3xl text-[oklch(0.42_0.09_60)] sm:text-4xl">
            {letter.title}
          </h2>
          <p className="mt-5 font-display text-lg">{letter.greeting}</p>
          <div className="mt-3 space-y-3 font-display text-base leading-relaxed sm:text-lg">
            {letter.preview.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <p className="mt-5 text-right font-display text-lg italic">{letter.signature}</p>
          <div className="mt-6">
            <GoldButton fullWidth className="sm:w-auto" onClick={() => setOpen(true)}>
              {letter.ctaLabel}
            </GoldButton>
          </div>
        </article>
      </div>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full birthday letter"
          className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-6"
        >
          <div className="absolute inset-0 bg-background/90 backdrop-blur-md" onClick={() => setOpen(false)} />
          <div className="parchment-card animate-rise relative flex max-h-[92svh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl">
            <div className="flex items-start justify-between gap-3 border-b border-[oklch(0.6_0.07_70/35%)] px-5 py-4">
              <h3 className="script-title min-w-0 text-2xl text-[oklch(0.42_0.09_60)] sm:text-3xl">
                {letter.title}
              </h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close letter"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[oklch(0.6_0.07_70/45%)]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="overflow-y-auto px-5 py-5 sm:px-8">
              <p className="font-display text-lg">{letter.greeting}</p>
              <div className="mt-3 space-y-4 font-display text-base leading-relaxed sm:text-lg">
                {letter.full.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <p className="mt-6 text-right font-display text-lg italic">{letter.signature}</p>
            </div>
          </div>
        </div>
      ) : null}
    </Section>
  );
}
