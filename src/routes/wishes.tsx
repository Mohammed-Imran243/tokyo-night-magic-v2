import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/Section";
import { WishCard } from "@/components/WishCard";
import { WishForm } from "@/components/WishForm";
import { useWishes } from "@/hooks/useWishes";
import { wishesHeading } from "@/data/wishes";

const title = "Birthday Wishes for Tokyo 💌 | Leave Yours";
const description =
  "Read every birthday wish written for Tokyo and add your own message to her magical night.";

export const Route = createFileRoute("/wishes")({
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
  component: WishesPage,
});

function WishesPage() {
  const { wishes, addWish, liked, toggleLike } = useWishes();

  return (
    <div className="pt-20">
      <Section id="leave-a-wish">
        <SectionHeading title="Leave a Wish 💌" subtitle="One message. One memory. Forever." />
        <div className="mx-auto max-w-xl">
          <WishForm onSubmit={addWish} />
        </div>
      </Section>

      <Section id="all-wishes">
        <SectionHeading title={wishesHeading} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {wishes.map((w) => (
            <WishCard key={w.id} wish={w} liked={liked.includes(w.id)} onToggleLike={toggleLike} />
          ))}
        </div>
      </Section>
    </div>
  );
}
