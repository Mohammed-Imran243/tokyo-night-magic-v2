import { useNavigate } from "@tanstack/react-router";
import { site } from "@/data/site";
import { NightSky } from "./NightSky";
import { Countdown } from "./Countdown";
import { GoldButton } from "./GoldButton";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden pt-24 pb-16 lg:pt-20 lg:pb-20">
      {/* ─── 1. New Free Fire Hero Background (Full Viewport Cover) ─────── */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-no-repeat transition-all duration-500 bg-[65%_center] sm:bg-[70%_center] lg:bg-[68%_center]"
        style={{ backgroundImage: `url(${site.hero.characterImage})` }}
      >
        {/* Desktop left-edge subtle gradient to ensure text readability against the dark part */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-background/50 via-background/10 to-transparent lg:block lg:w-[40%]" />

        {/* Mobile/Tablet readability gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background/85 lg:hidden" />

        {/* Top edge subtle blend */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />

        {/* Bottom edge smooth transition */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* ─── 2. Floating Lantern Effects (Reduced star specks for clean background) ─ */}
      <NightSky lanterns={8} stars={12} />

      {/* ─── 3. Existing Hero Layout & Content (Unchanged) ──────────── */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-xl animate-rise">
          <p className="font-display text-xl italic text-amber-200 sm:text-2xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
            {site.hero.kicker}
          </p>

          <h1 className="mt-1 font-display text-6xl font-semibold leading-none tracking-tight text-foreground sm:text-7xl lg:text-8xl drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
            <span className="gold-text">{site.hero.title}</span>{" "}
            <span className="align-middle text-3xl sm:text-4xl">👑</span>
          </h1>

          <p className="mt-4 max-w-md text-pretty text-base font-semibold text-white sm:text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.98)]">
            {site.hero.subtitle.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>

          <div className="mt-8">
            <Countdown />
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <GoldButton
              fullWidth
              className="sm:w-auto"
              onClick={() => {
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {site.hero.primaryCta}
            </GoldButton>

            <GoldButton
              variant="outline"
              fullWidth
              className="sm:w-auto"
              onClick={() => navigate({ to: "/wishes", hash: "leave-a-wish" })}
            >
              {site.hero.secondaryCta}
            </GoldButton>
          </div>
        </div>
      </div>
    </section>
  );
}
