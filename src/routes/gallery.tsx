import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/Section";
import { Gallery } from "@/components/Gallery";

const title = "Tokyo's Gallery 📸 | Photos, Games & Memories";
const description =
  "Photos, gaming nights, screenshots and memories — the little world we built for Tokyo's birthday.";

export const Route = createFileRoute("/gallery")({
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
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="pt-20">
      <Section>
        <SectionHeading title="Tokyo's Gallery 📸" subtitle="Tap any frame to open it fullscreen." />
        <Gallery />
      </Section>
    </div>
  );
}
