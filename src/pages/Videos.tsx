import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Eyebrow from "../components/Eyebrow";
import Reveal from "../components/Reveal";

const VIDEO_ITEMS = [
  {
    title: "Celebration in Motion",
    src: "/whatsapp video 2026-09-11 at 5.19.30 pm.mp4",
    description: "A candid visual story of the people, details and emotion that shape the experience.",
  },
  {
    title: "Reception Moments",
    src: "/whatsapp video 2026-09-11 at 5.40.10 pm.mp4",
    description: "A quick look at the atmosphere, details and joy of a memorable event evening.",
  },
  {
    title: "Wedding Highlights",
    src: "/whatsapp video 2026-09-11 at 5.40.15 pm.mp4",
    description: "A warm glimpse of celebration moments captured at Hotel Binwa View & Banquets.",
  },
];

export default function Videos() {
  return (
    <div>
      <SEO
        title="Videos | Hotel Binwa View & Banquets, Baijnath"
        description="Video gallery featuring celebration moments, banquets and experiences at Hotel Binwa View & Banquets in Baijnath, Himachal Pradesh."
      />

      <PageHero
        image="/HA1.jpg"
        eyebrow="Video Gallery"
        title="Moments in Motion."
        subtitle="A closer look at weddings, banquets and celebrations shaped with warmth, elegance and unforgettable details."
      />

      <section className="bg-ivory py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <Reveal>
            <Eyebrow>Hotel Binwa View & Banquets</Eyebrow>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-5 max-w-2xl font-display text-4xl italic leading-tight text-charcoal sm:text-5xl">
              Celebrations, captured beautifully.
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-charcoal/70">
              Explore a curated collection of videos from recent celebrations and experiences at our venue. Each clip reflects the atmosphere, details and heartfelt moments that define a Hotel Binwa View & Banquets event.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {VIDEO_ITEMS.map((video, index) => (
              <Reveal key={video.src} delay={0.08 * (index + 1)}>
                <article className="group h-full overflow-hidden rounded-[1.75rem] border border-charcoal/10 bg-ivory shadow-[0_18px_40px_rgba(31,13,14,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(31,13,14,0.08)]">
                  <div className="overflow-hidden rounded-[1.5rem] p-3">
                    <video
                      className="aspect-video w-full rounded-[1.1rem] object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                      src={video.src}
                      controls
                      preload="metadata"
                      playsInline
                    />
                  </div>

                  <div className="space-y-3 px-6 pb-6 pt-2">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-rose-dark">
                      Video {index + 1}
                    </p>
                    <h3 className="font-display text-3xl italic leading-tight text-charcoal">
                      {video.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-charcoal/70">
                      {video.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-burgundy-deep py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-10">
          <Eyebrow tone="light">Back to the Main Site</Eyebrow>
          <h2 className="mt-5 font-display text-4xl italic leading-tight text-ivory sm:text-5xl">
            Ready to plan your next celebration?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ivory/75">
            Explore the full venue experience, wedding offerings, suite details and event planning information on the main website.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="rounded-full bg-gold px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal transition-colors hover:bg-champagne"
            >
              Return Home
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-ivory/35 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-ivory transition-colors hover:border-champagne hover:text-champagne"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
