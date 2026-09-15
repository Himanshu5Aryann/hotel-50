import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import StatStrip from "../components/StatStrip";
import FinalCTA from "../components/FinalCTA";
import { WEDDINGS, BANQUETS, HOTEL, HIMACHAL } from "../data/media";

export default function About() {
  return (
    <div>
      <SEO
        title="About Us | Hotel Binwa View & Banquets"
        description="Discover the story of Hotel Binwa View & Banquets — 15+ years of weddings, banquets and hospitality in Baijnath, Himachal Pradesh."
      />
      <PageHero
        image={HOTEL.exteriorMist}
        eyebrow="About Us"
        title="A Destination Built for Celebration."
        subtitle="Hotel Binwa View & Banquets is a hospitality and celebration destination in Baijnath, Himachal Pradesh."
      />

      <section className="bg-ivory py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <Reveal>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mt-5 font-display text-4xl italic leading-tight text-charcoal sm:text-5xl">
              Fifteen Years of Weddings, Banquets and Belonging.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-charcoal/70">
              For over fifteen years, Hotel Binwa View & Banquets has
              welcomed families to celebrate their most important milestones —
              weddings, receptions, engagements and gatherings — against the
              backdrop of the Himalayan foothills near Baijnath.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-charcoal/70">
              What began as a hospitality venture has grown into one of the
              region's trusted celebration destinations, hosting over a
              thousand events across a 10,000 sq.ft grand banquet space,
              while continuing to offer comfortable stays and warm
              hospitality to every guest.
            </p>
            <Link
              to="/weddings"
              className="mt-8 inline-block rounded-full bg-burgundy px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-ivory transition-colors hover:bg-rose-dark"
            >
              Discover Weddings at Hotel Binwa View & Banquets
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-3">
              <img src={WEDDINGS.smiling} alt="Happy couple at their wedding" className="h-64 w-full rounded-sm object-cover" loading="lazy" />
              <img src={BANQUETS.stage} alt="Grand banquet stage decor" className="mt-10 h-64 w-full rounded-sm object-cover" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-burgundy-deep py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <StatStrip tone="dark" />
        </div>
      </section>

      <section className="relative overflow-hidden py-32 sm:py-40">
        <img src={HIMACHAL.valley} alt="Himalayan valley near Baijnath" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
        <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
          <Eyebrow tone="light" className="justify-center">Our Philosophy</Eyebrow>
          <h2 className="mt-5 font-display text-4xl italic text-ivory sm:text-5xl">
            Hospitality Rooted in the Himalayas.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ivory/80">
            We believe a celebration should feel as good as it looks. Our
            team blends attentive service, thoughtful décor and the natural
            beauty of Himachal Pradesh to create an experience every family
            remembers — long after the last dance.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <Eyebrow className="justify-center">Why Hotel Binwa View & Banquets</Eyebrow>
          <h2 className="mt-5 font-display text-4xl italic text-charcoal sm:text-5xl">
            Weddings First. Hospitality Always.
          </h2>
          <div className="mt-12 grid gap-10 text-left sm:grid-cols-3">
            <div>
              <p className="font-display text-2xl italic text-rose-dark">01</p>
              <p className="mt-2 font-display text-xl italic text-charcoal">A Grand Canvas</p>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
                10,000 sq.ft of banquet space that adapts to weddings,
                receptions, corporate events and intimate gatherings alike.
              </p>
            </div>
            <div>
              <p className="font-display text-2xl italic text-rose-dark">02</p>
              <p className="mt-2 font-display text-xl italic text-charcoal">Proven Experience</p>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
                1000+ events hosted and 15+ years of experience curating
                celebrations for families across Himachal Pradesh.
              </p>
            </div>
            <div>
              <p className="font-display text-2xl italic text-rose-dark">03</p>
              <p className="mt-2 font-display text-xl italic text-charcoal">A Complete Stay</p>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
                Comfortable rooms, fine dining and warm hospitality for
                guests travelling in for the celebration.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA image={WEDDINGS.ritual} />
    </div>
  );
}
