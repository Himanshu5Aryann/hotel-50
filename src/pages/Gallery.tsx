import { useState } from "react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Lightbox from "../components/Lightbox";
import { GALLERY, WEDDINGS } from "../data/media";
import { cn } from "../utils/cn";

const CATEGORIES: { key: keyof typeof GALLERY; label: string }[] = [
  { key: "weddings", label: "Weddings" },
  { key: "banquets", label: "Banquets" },
  { key: "events", label: "Events" },
  { key: "venue", label: "Venue" },
  { key: "rooms", label: "Rooms" },
  { key: "dining", label: "Dining" },
  { key: "celebrations", label: "Celebrations" },
  { key: "himachal", label: "Himachal" },
  { key: "all", label: "All Photos" },
];

export default function Gallery() {
  const [active, setActive] = useState<keyof typeof GALLERY>("weddings");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const images = GALLERY[active];

  return (
    <div>
      <SEO
        title="Gallery | Hotel Binwa View & Banquets, Baijnath"
        description="Explore weddings, banquets, events, rooms, dining and the Himalayan setting of Hotel Binwa View & Banquets."
      />
      <PageHero
        image={WEDDINGS.hero}
        eyebrow="Gallery"
        title="Moments Worth Remembering."
        subtitle="A visual journey through weddings, banquets, events and everything that makes Hotel Binwa View & Banquets a celebration destination."
        height="tall"
        align="center"
      />

      <section className="bg-ivory py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                onClick={() => setActive(c.key)}
                className={cn(
                  "shrink-0 rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors",
                  active === c.key
                    ? "border-rose-dark bg-rose-dark text-ivory"
                    : "border-charcoal/15 text-charcoal/70 hover:border-rose-dark hover:text-rose-dark"
                )}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4">
            {images.map((src, i) => (
              <button
                key={`${active}-${i}`}
                onClick={() => setLightboxIndex(i)}
                className="group mb-4 block w-full overflow-hidden rounded-md bg-ivory-dark shadow-sm ring-1 ring-charcoal/5"
              >
                <img
                  src={src}
                  alt={`${active} gallery image ${i + 1} at Hotel Binwa View & Banquets`}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={images}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
