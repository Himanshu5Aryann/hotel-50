import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Reveal, { RevealItem, RevealStagger } from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import FinalCTA from "../components/FinalCTA";
import { WEDDINGS, BANQUETS, CELEBRATIONS } from "../data/media";

const EVENT_CATEGORIES = [
  {
    title: "Weddings",
    desc: "Full-scale wedding celebrations across ceremony, reception and every ritual in between.",
    image: WEDDINGS.couple2,
    to: "/weddings",
  },
  {
    title: "Receptions",
    desc: "Elegant reception evenings with grand décor, dining and dancing.",
    image: BANQUETS.receptionFloral,
    to: "/banquets",
  },
  {
    title: "Engagements",
    desc: "Intimate ring ceremonies set with floral backdrops and soft lighting.",
    image: CELEBRATIONS.engagement1,
    to: "/weddings",
  },
  {
    title: "Birthdays",
    desc: "Milestone birthdays celebrated with personalised décor and warm hospitality.",
    image: "/qwert1.webp",
    to: "/contact",
  },
  {
    title: "Anniversaries",
    desc: "Celebrating years of togetherness with an evening to remember.",
    image: WEDDINGS.smiling,
    to: "/contact",
  },
  {
    title: "Corporate Events",
    desc: "Professional gatherings, product launches and team celebrations.",
    image: "/pexels-am83-14636319.jpg",
    to: "/banquets",
  },
  {
    title: "Conferences",
    desc: "Well-appointed spaces for conferences and business meets.",
    image: CELEBRATIONS.corporate1,
    to: "/banquets",
  },
  {
    title: "Family Celebrations",
    desc: "Festive gatherings, reunions and traditional family functions.",
    image: CELEBRATIONS.family1,
    to: "/contact",
  },
  {
    title: "Private Events",
    desc: "Personalised private functions hosted with discretion and care.",
    image: "/compressed_under_1mb (2).jpg",
    to: "/contact",
  },
];

export default function Events() {
  return (
    <div>
      <SEO
        title="Events | Hotel Binwa View & Banquets, Baijnath"
        description="Weddings, receptions, engagements, corporate events and family celebrations hosted at Hotel Binwa View & Banquets in Baijnath."
      />
      <PageHero
        image="/pexels-monu-prajapati-343619962-19346381.jpg"
        eyebrow="Events at Hotel Binwa View & Banquets"
        title="Every Occasion, Beautifully Hosted."
        subtitle="From weddings to corporate gatherings, our banquet space and team are ready for celebrations of every kind."
      />

      <section className="bg-ivory py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <RevealStagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {EVENT_CATEGORIES.map((c) => (
              <RevealItem key={c.title}>
                <Link to={c.to} className="group block">
                  <div className="h-64 overflow-hidden rounded-sm">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <p className="mt-4 font-display text-2xl italic text-charcoal">{c.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{c.desc}</p>
                  <span className="mt-3 inline-block text-[11px] font-semibold uppercase tracking-wider text-rose-dark">
                    Explore →
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <section className="bg-charcoal py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <Reveal>
            <Eyebrow tone="light" className="justify-center">Tailored to You</Eyebrow>
            <h2 className="mt-5 font-display text-4xl italic text-ivory sm:text-5xl">
              Don't See Your Occasion Listed?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ivory/70">
              Our team is happy to design a bespoke celebration for any
              occasion. Get in touch and let's talk about your event.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-block rounded-full bg-ivory px-8 py-4 text-xs font-semibold uppercase tracking-wider text-charcoal transition-colors hover:bg-champagne"
            >
              Speak to Our Team
            </Link>
          </Reveal>
        </div>
      </section>

      <FinalCTA image={BANQUETS.stage} />
    </div>
  );
}
