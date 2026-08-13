import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { LetterSection } from "@/components/LetterSection";
import { Timeline } from "@/components/Timeline";
import { Gallery } from "@/components/Gallery";
import { Section, SectionHeading } from "@/components/Section";
import { WishCard } from "@/components/WishCard";
import { useWishes } from "@/hooks/useWishes";

const title = "Happy Birthday Tokyo 💜 | A Magical Night Made For You";
const description =
  "A cinematic birthday world for Tokyo — letters, wishes, memories and a lantern-lit night sky. Leave your birthday wish. ✨";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const { wishes, liked, toggleLike } = useWishes();

  return (
    <>
      <Hero />
      <AboutSection />
      <LetterSection />
      <Timeline />

      <Section id="gallery-preview">
        <SectionHeading title="Tokyo's Gallery 📸" subtitle="A few frames from our little world." />
        <Gallery limit={8} />
        <div className="mt-6 text-center">
          <Link
            to="/gallery"
            className="inline-flex min-h-11 items-center rounded-full border border-gold/50 px-6 text-sm text-gold transition-all hover:bg-gold/10"
          >
            View full gallery →
          </Link>
        </div>
      </Section>

      <Section id="wishes-preview">
        <SectionHeading title="Recent Wishes 💌" subtitle="Words from the people who love her." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {wishes.slice(0, 3).map((w) => (
            <WishCard key={w.id} wish={w} liked={liked.includes(w.id)} onToggleLike={toggleLike} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            to="/wishes"
            className="inline-flex min-h-11 items-center rounded-full border border-gold/50 px-6 text-sm text-gold transition-all hover:bg-gold/10"
          >
            All wishes & leave yours →
          </Link>
        </div>
      </Section>
    </>
  );
}
