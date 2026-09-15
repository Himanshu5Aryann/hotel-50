import { useState } from "react";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Eyebrow from "../components/Eyebrow";
import { WEDDINGS } from "../data/media";
import { SITE } from "../data/site";
import { cn } from "../utils/cn";

interface FaqItem {
  q: string;
  a: string;
}

const SECTIONS: { title: string; items: FaqItem[] }[] = [
  {
    title: "Weddings",
    items: [
      {
        q: "Does Hotel Binwa View & Banquets host full wedding functions?",
        a: "Yes. We regularly host complete wedding celebrations — from mehendi and sangeet to the wedding ceremony and reception — across our banquet space and grounds.",
      },
      {
        q: "Can we bring our own décor and wedding planner?",
        a: "Yes, our team is happy to coordinate with your décor team and wedding planner, or assist directly with planning your celebration.",
      },
    ],
  },
  {
    title: "Banquets",
    items: [
      {
        q: "How large is the banquet space?",
        a: "Our grand banquet space spans 10,000 sq.ft and can be configured for ceremonies, receptions, and seated dinners.",
      },
      {
        q: "Can the banquet hall be used for non-wedding events?",
        a: "Yes, the space is equally suited to corporate events, conferences, birthdays, anniversaries and family celebrations.",
      },
    ],
  },
  {
    title: "Events",
    items: [
      {
        q: "What types of events do you host?",
        a: "We host weddings, receptions, engagements, birthdays, anniversaries, corporate events, conferences and private family celebrations.",
      },
    ],
  },
  {
    title: "Stays",
    items: [
      {
        q: "What are your check-in and check-out times?",
        a: `Check-in is from ${SITE.checkIn} and check-out is by ${SITE.checkOut}.`,
      },
      {
        q: "Can wedding guests stay on-site?",
        a: "Yes, guests attending a wedding or event can stay comfortably at the hotel, close to the banquet space.",
      },
    ],
  },
  {
    title: "Dining",
    items: [
      {
        q: "Do you offer customised wedding menus?",
        a: "Yes, our culinary team works with hosting families to plan menus suited to their celebration and guest preferences.",
      },
    ],
  },
  {
    title: "Location",
    items: [
      {
        q: "Where is Hotel Binwa View & Banquets located?",
        a: `We are located at ${SITE.address.line1}, ${SITE.address.line2}, ${SITE.address.line3} — near Baijnath Public School in Neri.`,
      },
    ],
  },
];

function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-charcoal/10">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 py-5 text-left"
            aria-expanded={open === i}
          >
            <span className="font-display text-lg italic text-charcoal sm:text-xl">{item.q}</span>
            <span
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-charcoal/20 text-charcoal transition-transform",
                open === i && "rotate-45 border-rose-dark text-rose-dark"
              )}
            >
              +
            </span>
          </button>
          <div className={cn("grid transition-all duration-300", open === i ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]")}>
            <div className="overflow-hidden">
              <p className="max-w-2xl text-sm leading-relaxed text-charcoal/65">{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FAQ() {
  return (
    <div>
      <SEO
        title="FAQ | Hotel Binwa View & Banquets, Baijnath"
        description="Answers about weddings, banquets, events, stays and dining at Hotel Binwa View & Banquets."
      />
      <PageHero
        image={WEDDINGS.ringExchange}
        eyebrow="FAQ"
        title="Answers to Your Questions."
        subtitle="Everything you need to know about weddings, banquets, events, stays and dining at Hotel Binwa View & Banquets."
        align="center"
      />

      <section className="bg-ivory py-20 sm:py-28">
        <div className="mx-auto max-w-4xl space-y-14 px-6 sm:px-8">
          {SECTIONS.map((s) => (
            <div key={s.title}>
              <Eyebrow>{s.title}</Eyebrow>
              <div className="mt-4">
                <FaqAccordion items={s.items} />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
