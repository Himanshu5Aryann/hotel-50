import { Link } from "react-router-dom";
import { useState } from "react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Reveal, { RevealItem, RevealStagger } from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import Lightbox from "../components/Lightbox";
import FinalCTA from "../components/FinalCTA";
import { BANQUETS, CELEBRATIONS, WEDDINGS, GALLERY } from "../data/media";

export default function Banquets() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div>
      <SEO
        title="Banquets | Hotel Binwa View & Banquets, Baijnath"
        description="A 10,000 sq.ft grand banquet hall in Baijnath, Himachal Pradesh — the ideal setting for weddings, receptions and grand events."
      />
      <PageHero
        image={BANQUETS.hero}
        eyebrow="The Banquet"
        title="Spaces Designed for Extraordinary Celebrations."
        subtitle="A 10,000 sq.ft grand banquet space at Hotel Binwa View & Banquets, ready for weddings, receptions and grand events."
        height="full"
      />

      <section className="bg-ivory py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <Eyebrow>The Grand Banquet</Eyebrow>
            <h2 className="mt-5 font-display text-4xl italic leading-tight text-charcoal sm:text-5xl">
              10,000 sq.ft of Possibility.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-charcoal/70">
              Our grand banquet space transforms to suit every celebration —
              a mandap and aisle for the ceremony, an open floor for the
              reception, or a formal layout for corporate gatherings.
            </p>
          </div>

          <RevealStagger className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {[BANQUETS.decor1, BANQUETS.stage, BANQUETS.prepared, BANQUETS.reception, BANQUETS.tablesHall, BANQUETS.brideVenue].map(
              (src, i) => (
                <RevealItem key={i}>
                  <button
                    onClick={() => setLightboxIndex(i)}
                    className="group block h-56 w-full overflow-hidden rounded-sm sm:h-72"
                  >
                    <img src={src} alt="Grand banquet hall setup" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  </button>
                </RevealItem>
              )
            )}
          </RevealStagger>
          <Lightbox
            images={[BANQUETS.decor1, BANQUETS.stage, BANQUETS.prepared, BANQUETS.reception, BANQUETS.tablesHall, BANQUETS.brideVenue]}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={setLightboxIndex}
          />
        </div>
      </section>

      {/* Interiors / stage / décor detail */}
      <section className="bg-burgundy-deep py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <Reveal>
            <img src={BANQUETS.floralArch} alt="Wedding stage floral arch" className="h-[420px] w-full rounded-sm object-cover sm:h-[500px]" loading="lazy" />
          </Reveal>
          <Reveal delay={0.15}>
            <Eyebrow tone="light">Stage &amp; Décor</Eyebrow>
            <h2 className="mt-5 font-display text-4xl italic leading-tight text-ivory sm:text-5xl">
              A Stage for Every Story.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ivory/75">
              Floral mandaps, illuminated stages and reception backdrops —
              each banquet setup is tailored to the couple and the occasion,
              with lighting and seating designed for comfort and elegance.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Corporate setup */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <Reveal>
            <Eyebrow>Beyond Weddings</Eyebrow>
            <h2 className="mt-5 font-display text-4xl italic leading-tight text-charcoal sm:text-5xl">
              Equally at Home for Corporate Events.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-charcoal/70">
              The same grand banquet space adapts seamlessly for conferences,
              corporate celebrations and private gatherings — professional,
              spacious and well-appointed.
            </p>
            <Link to="/events" className="mt-6 inline-block text-xs font-semibold uppercase tracking-wider text-rose-dark underline underline-offset-4">
              Explore All Events →
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-3">
              <img src="/pexels-am83-14636319.jpg" alt="Corporate conference at the venue" className="h-64 w-full rounded-sm object-cover" loading="lazy" />
              <img src={CELEBRATIONS.corporate2} alt="Corporate event setup" className="mt-10 h-64 w-full rounded-sm object-cover" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Banquet gallery */}
      <section className="bg-ivory-dark py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <Eyebrow>Banquet Gallery</Eyebrow>
          <h2 className="mt-5 max-w-xl font-display text-4xl italic leading-tight text-charcoal sm:text-5xl">
            Every Detail, Considered.
          </h2>
          <div className="mt-14 columns-2 gap-3 sm:columns-3">
            {GALLERY.banquets.map((src, i) => (
              <div key={i} className="mb-3 overflow-hidden rounded-sm">
                <img src={src} alt="Banquet detail" className="w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blush/40 py-20 sm:py-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center sm:px-8">
          <Eyebrow className="justify-center">Ready to Book</Eyebrow>
          <h2 className="font-display text-4xl italic text-charcoal sm:text-5xl">
            Check Your Event Availability.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="rounded-full bg-burgundy px-8 py-4 text-xs font-semibold uppercase tracking-wider text-ivory transition-colors hover:bg-rose-dark">
              Check Event Availability
            </Link>
            <Link to="/contact" className="rounded-full border border-charcoal/20 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-charcoal transition-colors hover:border-rose-dark hover:text-rose-dark">
              Plan Your Event
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA image={WEDDINGS.embrace} />
    </div>
  );
}
