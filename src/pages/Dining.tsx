import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Reveal, { RevealItem, RevealStagger } from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import FinalCTA from "../components/FinalCTA";
import { FOOD, DINING_TABLES, WEDDINGS } from "../data/media";

export default function Dining() {
  return (
    <div>
      <SEO
        title="Dining | Hotel Binwa View & Banquets, Baijnath"
        description="Fine dining, celebration feasts and event catering at Hotel Binwa View & Banquets in Baijnath, Himachal Pradesh."
      />
      <PageHero
        image={DINING_TABLES.candlelit}
        eyebrow="Dining"
        title="Artistry on Every Plate."
        subtitle="Thoughtfully prepared dining for celebrations, guests and quiet family evenings alike."
        titleClassName="text-gold"
      />

      <section className="bg-ivory py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <Reveal>
            <Eyebrow>The Restaurant</Eyebrow>
            <h2 className="mt-5 font-display text-4xl italic leading-tight text-charcoal sm:text-5xl">
              Flavours Rooted in Tradition.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-charcoal/70">
              Our kitchen prepares dishes that balance regional tradition
              with refined presentation — served in an atmosphere as warm as
              the food itself.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <img src={FOOD.tandoori1} alt="Gourmet tandoori dish" className="h-[420px] w-full rounded-sm object-cover sm:h-[500px]" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory-dark py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <Eyebrow>A Taste of Hotel Binwa View & Banquets</Eyebrow>
          <h2 className="mt-5 max-w-xl font-display text-4xl italic leading-tight text-charcoal sm:text-5xl">
            Every Plate, Thoughtfully Composed.
          </h2>
          <RevealStagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[FOOD.tandoori2, FOOD.paneer, FOOD.plated1, FOOD.plated2, FOOD.poolside, FOOD.tandoori1].map((src, i) => (
              <RevealItem key={i}>
                <div className="h-64 overflow-hidden rounded-sm">
                  <img src={src} alt="Fine dining dish" className="h-full w-full object-cover" loading="lazy" />
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="bg-burgundy-deep py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <Reveal>
            <img src={DINING_TABLES.eventHall} alt="Celebration dining hall" className="h-96 w-full rounded-sm object-cover" loading="lazy" />
          </Reveal>
          <Reveal delay={0.15}>
            <Eyebrow tone="light">Celebration & Event Dining</Eyebrow>
            <h2 className="mt-5 font-display text-4xl italic leading-tight text-ivory sm:text-5xl">
              Dining Designed Around Your Event.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ivory/75">
              From wedding feasts to corporate dinners, our banquet dining
              team tailors the menu, service style and setting to match every
              occasion hosted at Hotel Binwa View & Banquets.
            </p>
          </Reveal>
        </div>
      </section>

      <FinalCTA image={WEDDINGS.embrace} />
    </div>
  );
}
