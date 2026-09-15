import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import EnquiryForm from "../components/EnquiryForm";
import MapSection from "../components/MapSection";
import { SITE } from "../data/site";
import { WEDDINGS } from "../data/media";

export default function Contact() {
  return (
    <div>
      <SEO
        title="Contact | Hotel Binwa View & Banquets, Baijnath"
        description="Get in touch with Hotel Binwa View & Banquets for wedding, banquet, event and stay enquiries in Baijnath, Himachal Pradesh."
      />
      <PageHero
        image={WEDDINGS.couple3}
        eyebrow="Contact"
        title="Let's Plan Your Celebration."
        subtitle="Reach out for weddings, banquets, events, stays and dining enquiries — our team responds personally to every message."
        align="center"
      />

      <section className="bg-ivory py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
          <Reveal>
            <Eyebrow>Reach Us Directly</Eyebrow>
            <h2 className="mt-5 font-display text-3xl italic text-charcoal sm:text-4xl">Get in Touch</h2>
            <ul className="mt-8 space-y-6 text-sm text-charcoal/70">
              <li>
                <p className="eyebrow text-[10px] text-rose-dark/80">Phone</p>
                <div className="mt-1 space-y-1 font-display text-xl italic text-charcoal">
                  <a href={SITE.phoneHref} className="block">{SITE.phone}</a>
                  <a href={SITE.landlineHref} className="block text-base">Landline: {SITE.landline}</a>
                </div>
              </li>
              <li>
                <p className="eyebrow text-[10px] text-rose-dark/80">Address</p>
                <p className="mt-1 leading-relaxed">
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}
                  <br />
                  {SITE.address.line3}
                  <br />
                  {SITE.address.landmark}
                </p>
              </li>
              <li>
                <p className="eyebrow text-[10px] text-rose-dark/80">Hours</p>
                <p className="mt-1 font-display text-xl italic text-charcoal">Open 24 Hours</p>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-gold px-6 py-3 text-xs font-semibold uppercase tracking-wider text-charcoal transition-colors hover:bg-rose hover:text-ivory"
              >
                WhatsApp Us
              </a>
              <a
                href={SITE.mapsLinks.primary}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-charcoal/20 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-charcoal"
              >
                Get Directions
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 border-t border-charcoal/10 pt-8 text-xs text-charcoal/60">
              <p>Wedding Enquiry</p>
              <p>Event Enquiry</p>
              <p>Stay Enquiry</p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-2xl border border-charcoal/10 bg-ivory p-8 shadow-sm sm:p-10">
              <EnquiryForm tone="light" />
            </div>
          </Reveal>
        </div>
      </section>

      <MapSection />
    </div>
  );
}
