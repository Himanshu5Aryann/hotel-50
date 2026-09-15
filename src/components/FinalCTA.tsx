import { Link } from "react-router-dom";
import { SITE } from "../data/site";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import PetalField from "./PetalField";

export default function FinalCTA({ image }: { image: string }) {
  return (
    <section className="relative overflow-hidden py-32 sm:py-40">
      <img src={image} alt="Wedding celebration at Hotel Binwa View & Banquets" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/50" />
      <PetalField />
      <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
        <Reveal>
          <Eyebrow tone="light" className="justify-center">Begin Your Story</Eyebrow>
          <h2 className="mt-5 font-display text-4xl italic leading-tight text-gold sm:text-5xl lg:text-6xl">
            Your Moment Deserves the Right Setting.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ivory/80">
            Tell us about your celebration and let's create something
            unforgettable together.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/weddings"
              className="rounded-full bg-rose-dark px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-ivory transition-colors hover:bg-champagne hover:text-charcoal"
            >
              Plan Your Wedding
            </Link>
            <Link
              to="/events"
              className="rounded-full border border-ivory/40 px-8 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-ivory transition-colors hover:border-champagne hover:text-champagne"
            >
              Plan Your Event
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-ivory/70">
            <a href={SITE.phoneHref} className="underline decoration-champagne/40 underline-offset-4 hover:text-champagne">
              Call Us — {SITE.phone}
            </a>
            <a href={SITE.whatsappHref} target="_blank" rel="noreferrer" className="underline decoration-champagne/40 underline-offset-4 hover:text-champagne">
              WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
