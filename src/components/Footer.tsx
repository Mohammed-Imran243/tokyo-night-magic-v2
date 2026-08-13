import { Instagram, Youtube, Music } from "lucide-react";
import { site } from "@/data/site";
import { NightSky } from "./NightSky";

const iconFor = (id: string) => (id === "instagram" ? Instagram : id === "youtube" ? Youtube : Music);

export function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden border-t border-border px-4 py-12 pb-28 text-center sm:pb-16">
      <NightSky lanterns={4} stars={40} />
      <div className="relative mx-auto max-w-2xl">
        <p className="script-title text-2xl sm:text-3xl">{site.footer.lines[0]}</p>
        <p className="mt-2 text-sm text-muted-foreground">{site.footer.lines[1]}</p>
        <ul className="mt-6 flex items-center justify-center gap-3">
          {site.footer.socials.map((s) => {
            const Icon = iconFor(s.id);
            return (
              <li key={s.id}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 text-gold transition-shadow hover:shadow-[var(--shadow-gold)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
