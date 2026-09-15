import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { SITE } from "../data/site";

const REVIEWS = [
  {
    name: "Ariyana Sharma",
    meta: "2 reviews · 1 photo",
    age: "2 months ago",
    text: "I had a very good stay at the Hotel Binwa View & Banquets. The food was delicious, the ambience was calm and peaceful and the service was up to the mark. The staff was cooperative and helped me throughout with utmost patience and respect. Especial thanks to Nikhil Katoch and Rajeev for making my stay safe and easy. They helped with the car service, laundry and respective towards my requests. Overall, you must visit this palace, it’s worth it.",
  },
  {
    name: "Sakinder Guleria",
    meta: "Local Guide · 196 reviews · 683 photos",
    age: "Edited 9 months ago",
    text: "I recently attended a marriage at Hotel Binwa View & Banquets, and the overall experience was outstanding. The palace truly stands out as an ideal venue for weddings and grand celebrations. The marriage arrangements were awesome from the decoration to the seating layout, everything was beautifully planned and executed with great attention to detail. The venue has a very elegant look, and the spacious halls make it perfect for hosting large gatherings comfortably.",
  },
  {
    name: "Kanika Sharma",
    meta: "3 reviews · 2 photos",
    age: "6 months ago",
    text: "We hosted our wedding at this banquet hotel and had a wonderful experience. The staff was very cooperative and managed everything smoothly. The decoration and ambience were beautiful and well maintained. Food quality and service were excellent. Overall, it was a memorable and stress-free experience for us and our guests. ❤️❤️❤️❤️ Special thanks to Pooja Mam.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-gold" aria-label="5 star review">
      {"★★★★★".split("").map((s, i) => (
        <span key={i}>{s}</span>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="bg-ivory-dark py-24 sm:py-32" id="reviews">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <Reveal>
          <div className="flex flex-col gap-8 border-b border-gold/20 pb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>Google Reviews</Eyebrow>
              <h2 className="mt-5 max-w-2xl font-display text-4xl italic leading-tight text-gold sm:text-5xl">
                Loved by Guests. Chosen for Celebrations.
              </h2>
            </div>
            <div className="flex shrink-0 flex-col items-start sm:items-end">
              <div className="flex items-center gap-3">
                <span className="font-display text-5xl italic leading-none text-charcoal">4.7</span>
                <div>
                  <Stars />
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-charcoal/60">
                    235 Google Reviews
                  </p>
                </div>
              </div>
              <span className="mt-3 inline-flex rounded-full border border-gold/30 bg-ivory px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-charcoal/70">
                Open 24 Hours
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <Reveal key={review.name} delay={index * 0.08}>
              <article className="flex h-full flex-col rounded-2xl border border-gold/20 bg-ivory p-7 shadow-sm sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl italic text-charcoal">{review.name}</h3>
                    <p className="mt-1 text-[11px] leading-relaxed text-charcoal/55">{review.meta}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-gold/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold">
                    Google
                  </span>
                </div>
                <Stars />
                <p className="mt-5 flex-1 text-sm leading-7 text-charcoal/75">
                  “{review.text}”
                </p>
                <div className="mt-7 flex items-center justify-between border-t border-charcoal/10 pt-5">
                  <span className="text-[10px] uppercase tracking-wider text-charcoal/45">{review.age}</span>
                  <a
                    href={SITE.mapsLinks.primary}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] font-semibold uppercase tracking-wider text-rose-dark underline underline-offset-4 transition-colors hover:text-burgundy"
                  >
                    Read on Google →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-gold/20 bg-ivory px-6 py-7 text-center sm:flex-row sm:text-left sm:px-8">
            <div>
              <p className="font-display text-2xl italic text-charcoal">See all 235 reviews on Google</p>
              <p className="mt-1 text-sm text-charcoal/55">Read the latest guest experiences and venue feedback.</p>
            </div>
            <a
              href={SITE.mapsLinks.primary}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-burgundy px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-ivory transition-colors hover:bg-rose-dark"
            >
              Open Google Reviews →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
