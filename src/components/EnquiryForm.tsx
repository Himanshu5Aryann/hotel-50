import { useState, type FormEvent } from "react";
import { SITE } from "../data/site";

const EVENT_TYPES = [
  "Wedding",
  "Reception",
  "Engagement",
  "Birthday",
  "Anniversary",
  "Corporate Event",
  "Other",
];

interface EnquiryFormProps {
  tone?: "light" | "dark";
  compact?: boolean;
}

export default function EnquiryForm({ tone = "light" }: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const isDark = tone === "dark";

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No backend is configured yet — this captures intent and shows a
    // graceful confirmation. Wire this up to a booking CRM / email service
    // when ready.
    setSubmitted(true);
  };

  const fieldClass = `w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors ${
    isDark
      ? "border-ivory/25 bg-transparent text-ivory placeholder:text-ivory/40 focus:border-champagne"
      : "border-charcoal/15 bg-ivory text-charcoal placeholder:text-charcoal/40 focus:border-rose-dark"
  }`;
  const labelClass = `mb-1.5 block text-[11px] font-semibold uppercase tracking-wider ${
    isDark ? "text-champagne/80" : "text-charcoal/60"
  }`;

  if (submitted) {
    return (
      <div
        className={`rounded-2xl border p-10 text-center ${
          isDark ? "border-champagne/30 bg-ivory/5" : "border-rose-dark/20 bg-blush/30"
        }`}
      >
        <p className={`font-display text-3xl italic ${isDark ? "text-champagne" : "text-rose-dark"}`}>
          Thank You
        </p>
        <p className={`mx-auto mt-3 max-w-md text-sm leading-relaxed ${isDark ? "text-ivory/75" : "text-charcoal/70"}`}>
          Your enquiry has been received. Our team at Hotel Binwa View & Banquets &amp;
          Banquets will reach out to you shortly to begin planning your
          celebration. For an immediate response, call or WhatsApp us.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={SITE.phoneHref}
            className="rounded-full bg-rose-dark px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-ivory"
          >
            Call Us
          </a>
          <a
            href={SITE.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className={`rounded-full border px-6 py-2.5 text-xs font-semibold uppercase tracking-wider ${
              isDark ? "border-ivory/30 text-ivory" : "border-charcoal/20 text-charcoal"
            }`}
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label className={labelClass} htmlFor="ef-name">Name</label>
        <input id="ef-name" required name="name" className={fieldClass} placeholder="Your full name" />
      </div>
      <div>
        <label className={labelClass} htmlFor="ef-phone">Phone</label>
        <input id="ef-phone" required name="phone" type="tel" className={fieldClass} placeholder="+91 00000 00000" />
      </div>
      <div>
        <label className={labelClass} htmlFor="ef-email">Email</label>
        <input id="ef-email" name="email" type="email" className={fieldClass} placeholder="you@email.com" />
      </div>
      <div>
        <label className={labelClass} htmlFor="ef-date">Wedding / Event Date</label>
        <input id="ef-date" name="date" type="date" className={fieldClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="ef-guests">Guest Count</label>
        <input id="ef-guests" name="guests" type="number" min={1} className={fieldClass} placeholder="e.g. 250" />
      </div>
      <div>
        <label className={labelClass} htmlFor="ef-type">Event Type</label>
        <select id="ef-type" name="eventType" className={fieldClass} defaultValue="Wedding">
          {EVENT_TYPES.map((t) => (
            <option key={t} value={t} className="text-charcoal">
              {t}
            </option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="ef-function">Preferred Function</label>
        <input
          id="ef-function"
          name="preferredFunction"
          className={fieldClass}
          placeholder="e.g. Sangeet, Wedding Ceremony, Reception"
        />
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="ef-message">Message</label>
        <textarea id="ef-message" name="message" rows={4} className={fieldClass} placeholder="Tell us about your celebration..." />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="w-full rounded-full bg-rose-dark py-4 text-sm font-semibold uppercase tracking-[0.14em] text-ivory transition-colors hover:bg-burgundy sm:w-auto sm:px-10"
        >
          Plan My Celebration
        </button>
      </div>
    </form>
  );
}
