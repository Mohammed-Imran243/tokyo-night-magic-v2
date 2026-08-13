import { useNavigate } from "@tanstack/react-router";
import { site } from "@/data/site";
import { NightSky } from "./NightSky";
import { Countdown } from "./Countdown";
import { GoldButton } from "./GoldButton";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden pt-24 pb-12">
      <NightSky lanterns={12} stars={90} />

      {/* Character art: background layer on desktop, contained card on mobile */}
      <img
        src={site.hero.characterImage}
        alt={site.hero.characterAlt}
        width={1024}
        height={1408}
        className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover object-top opacity-70 [mask-image:linear-gradient(to_left,black_35%,transparent)] lg:block"
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center">
        <div className="animate-rise">
          <p className="font-display text-xl italic text-violet-soft sm:text-2xl">
            {site.hero.kicker}
          </p>
          <h1 className="mt-1 font-display text-6xl font-semibold leading-none tracking-tight text-foreground sm:text-7xl lg:text-8xl">
            <span className="gold-text">{site.hero.title}</span>{" "}
            <span className="align-middle text-3xl">👑</span>
          </h1>
          <p className="mt-4 max-w-md text-pretty text-base text-muted-foreground sm:text-lg">
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

        {/* Mobile / tablet framed portrait — never overlaps the text */}
        <div className="relative mx-auto w-full max-w-sm lg:hidden">
          <div className="glass-panel overflow-hidden rounded-3xl p-1.5">
            <img
              src={site.hero.characterImage}
              alt={site.hero.characterAlt}
              width={1024}
              height={1408}
              className="h-64 w-full rounded-[1.25rem] object-cover object-top sm:h-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
