import { SITE } from "../data/site";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

export default function MapSection() {
  return (
    <section className="bg-charcoal py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
        <Reveal>
          <Eyebrow tone="light">Location</Eyebrow>
          <h2 className="mt-5 font-display text-4xl italic text-gold sm:text-5xl">
            Find Hotel Binwa View & Banquets.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ivory/70 sm:text-base">
            Located near Baijnath Public School in Neri, Hotel Binwa View & Banquets is a
            premium destination for weddings, banquets and grand celebrations
            in Baijnath, Himachal Pradesh.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ivory/70">
            {SITE.address.line1}
            <br />
            {SITE.address.line2}
            <br />
            {SITE.address.line3}
            <br />
            {SITE.address.landmark}
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <a
              href={SITE.mapsLinks.primary}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-rose-dark px-7 py-3 text-xs font-semibold uppercase tracking-wider text-ivory transition-colors hover:bg-burgundy"
            >
              Get Directions
            </a>
            <a
              href={SITE.phoneHref}
              className="rounded-full border border-ivory/25 px-7 py-3 text-xs font-semibold uppercase tracking-wider text-ivory transition-colors hover:border-champagne"
            >
              Call Hotel Binwa View & Banquets
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="overflow-hidden rounded-2xl border border-ivory/10 shadow-2xl">
            <iframe
              title="Hotel Binwa View & Banquets Google Maps Location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                SITE.mapsEmbedQuery
              )}&output=embed`}
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[15%]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
