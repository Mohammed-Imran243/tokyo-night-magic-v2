import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Feather } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass-panel border-x-0 border-t-0" : "border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6 lg:flex lg:justify-between">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <Feather className="h-5 w-5 shrink-0 text-gold" />
          <span className="script-title truncate text-xl sm:text-2xl">{site.author}</span>
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((l) => (
            <li key={l.label}>
              <Link
                to={l.to}
                hash={l.hash}
                activeOptions={{ exact: true }}
                className="text-sm text-muted-foreground transition-colors hover:text-gold"
                activeProps={{ className: "text-gold" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/wishes"
              hash="leave-a-wish"
              className="inline-flex min-h-10 items-center rounded-full border border-gold/50 px-4 text-sm text-gold transition-all hover:bg-gold/10 hover:shadow-[var(--shadow-gold)]"
            >
              Leave a Wish 💌
            </Link>
          </li>
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu — bottom-anchored so it's easy to reach one-handed */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "glass-panel absolute inset-x-3 bottom-3 rounded-3xl p-4 transition-all duration-300",
            open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
          )}
        >
          <p className="script-title mb-3 px-2 text-2xl">Where to?</p>
          <ul className="grid gap-2">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  hash={l.hash}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center rounded-2xl border border-border/60 bg-secondary/40 px-4 text-base text-foreground active:scale-[0.99]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/wishes"
                hash="leave-a-wish"
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center justify-center rounded-2xl border border-gold/60 bg-[image:var(--gradient-violet)] px-4 text-base text-primary-foreground"
              >
                Leave a Wish 💌
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
