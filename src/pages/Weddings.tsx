import { Link } from "react-router-dom";
import { useState } from "react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Reveal, { RevealItem, RevealStagger } from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import PetalField from "../components/PetalField";
import EnquiryForm from "../components/EnquiryForm";
import Lightbox from "../components/Lightbox";
import FinalCTA from "../components/FinalCTA";
import { WEDDINGS, BANQUETS, DINING_TABLES, ROOMS, GALLERY } from "../data/media";

export default function Weddings() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div>
      <SEO
        title="Weddings | Hotel Binwa View & Banquets, Baijnath"
        description="A luxury wedding venue in Baijnath, Himachal Pradesh — ceremonies, receptions and celebrations at Hotel Binwa View & Banquets."
      />
      <PageHero
        image={WEDDINGS.hero}
        eyebrow="Weddings at Hotel Binwa View & Banquets"
        title="Your Forever Deserves a Beautiful Beginning."
        subtitle="A luxury wedding destination in Baijnath, Himachal Pradesh — where ceremonies, receptions and celebrations come together beautifully."
        height="full"
      />

      {/* The Venue */}
      <section className="relative overflow-hidden bg-ivory py-24 sm:py-32">
        <PetalField className="opacity-60" />
        <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <Reveal>
            <Eyebrow>The Venue</Eyebrow>
            <h2 className="mt-5 font-display text-4xl italic leading-tight text-charcoal sm:text-5xl">
              A Setting Worthy of Your Story.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-charcoal/70">
              Set against the Himalayan foothills, Hotel Binwa View & Banquets &amp;
              Banquets offers a 10,000 sq.ft grand banquet space, elegant
              indoor and outdoor areas, and a team experienced in bringing
              weddings of every scale to life.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <img src={WEDDINGS.ritual} alt="Traditional Indian wedding ritual" className="h-[420px] w-full rounded-sm object-cover sm:h-[500px]" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* The Celebration */}
      <section className="bg-burgundy-deep py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <Eyebrow tone="light">The Celebration</Eyebrow>
          <h2 className="mt-5 max-w-xl font-display text-4xl italic leading-tight text-ivory sm:text-5xl">
            From the First Ritual to the Last Dance.
          </h2>
          <RevealStagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Mehendi & Sangeet", img: "/mmmssssss.jpg" },
              { title: "The Ceremony", img: WEDDINGS.ringExchange },
              { title: "Reception", img: BANQUETS.receptionFloral },
              { title: "Farewell", img: WEDDINGS.embrace },
            ].map((c) => (
              <RevealItem key={c.title}>
                <div className="group relative h-72 overflow-hidden rounded-sm">
                  <img src={c.img} alt={c.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 to-transparent" />
                  <p className="absolute bottom-5 left-5 font-display text-lg italic text-ivory">{c.title}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* The Decor */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <Reveal className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3">
              <img src={BANQUETS.floralArch} alt="Floral wedding decor" className="h-64 w-full rounded-sm object-cover" loading="lazy" />
              <img src={BANQUETS.hallFlowers} alt="Banquet hall floral arrangement" className="mt-10 h-64 w-full rounded-sm object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.15} className="order-1 lg:order-2">
            <Eyebrow>The Décor</Eyebrow>
            <h2 className="mt-5 font-display text-4xl italic leading-tight text-charcoal sm:text-5xl">
              Details That Feel Like You.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-charcoal/70">
              From a floral mandap to a candlelit reception stage, our décor
              team works closely with every family to design a look that
              reflects their story — elegant, personal and beautifully lit.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The Dining */}
      <section className="bg-ivory-dark py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <Reveal>
            <Eyebrow>The Dining</Eyebrow>
            <h2 className="mt-5 font-display text-4xl italic leading-tight text-charcoal sm:text-5xl">
              A Feast Fit for the Occasion.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-charcoal/70">
              Wedding dining at Hotel Binwa View & Banquets is curated with care — from
              celebratory feasts to refined plated dinners for the reception.
            </p>
            <Link to="/dining" className="mt-6 inline-block text-xs font-semibold uppercase tracking-wider text-rose-dark underline underline-offset-4">
              Explore Dining →
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <img src={DINING_TABLES.fineSetting} alt="Wedding banquet dining setup" className="h-96 w-full rounded-sm object-cover" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* The Stay */}
      <section className="bg-charcoal py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10">
          <Reveal>
            <img src="/premium_room.jpg" alt="Comfortable stay for wedding guests" className="h-96 w-full rounded-sm object-cover" loading="lazy" />
          </Reveal>
          <Reveal delay={0.15}>
            <Eyebrow tone="light">The Stay</Eyebrow>
            <h2 className="mt-5 font-display text-4xl italic leading-tight text-ivory sm:text-5xl">
              Rest Well Between Every Ritual.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ivory/70">
              Families and guests travelling for the wedding can stay
              comfortably on-site, just steps away from every function.
            </p>
            <Link to="/stays" className="mt-6 inline-block rounded-full bg-ivory px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-charcoal transition-colors hover:bg-champagne">
              Explore Stays
            </Link>
          </Reveal>
        </div>
      </section>

      {/* The Experience */}
      <section className="relative overflow-hidden py-32 sm:py-40">
        <img src={WEDDINGS.couple2} alt="Wedding couple experience" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/25" />
        <PetalField />
        <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
          <Eyebrow tone="light" className="justify-center">The Experience</Eyebrow>
          <h2 className="mt-5 font-display text-4xl italic text-ivory sm:text-5xl">
            An Experience Guided, Start to Finish.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ivory/80">
            Our team supports every family from the first enquiry to the
            final farewell — coordinating décor, dining, stays and every
            detail in between.
          </p>
        </div>
      </section>

      {/* Wedding Gallery */}
      <section className="bg-ivory py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>Wedding Gallery</Eyebrow>
              <h2 className="mt-5 font-display text-4xl italic leading-tight text-charcoal sm:text-5xl">
                Moments From Real Celebrations.
              </h2>
            </div>
            <Link to="/gallery" className="text-xs font-semibold uppercase tracking-wider text-rose-dark underline underline-offset-4">
              View Full Gallery →
            </Link>
          </div>
          <div className="mt-14 columns-2 gap-3 sm:columns-3">
            {GALLERY.weddings.map((src, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="group mb-3 block w-full overflow-hidden rounded-sm"
              >
                <img
                  src={src}
                  alt="Wedding celebration moment at Hotel Binwa View & Banquets"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
        <Lightbox
          images={GALLERY.weddings}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      </section>

      {/* Wedding Enquiry */}
      <section className="bg-blush/40 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <div className="text-center">
            <Eyebrow className="justify-center">Wedding Enquiry</Eyebrow>
            <h2 className="mt-5 font-display text-4xl italic text-charcoal sm:text-5xl">
              Let's Check Your Date.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-charcoal/65">
              Share a few details about your celebration and our wedding team
              will get in touch to plan every detail with you.
            </p>
          </div>
          <div className="mt-12 rounded-2xl bg-ivory p-8 shadow-sm sm:p-10">
            <EnquiryForm tone="light" />
          </div>
        </div>
      </section>

      <FinalCTA image={BANQUETS.reception} />
    </div>
  );
}
