import { Link } from "react-router-dom";
import { SITE } from "../data/site";

export default function FloatingActions() {
  return (
    <>
      <a
        href={SITE.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Hotel Binwa View & Banquets on WhatsApp"
        className="fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold shadow-[0_12px_24px_rgba(0,88,79,0.25)] transition-all duration-200 hover:scale-105 hover:bg-rose hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ivory sm:bottom-6 sm:right-6"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7" fill="none">
          <path d="M20 11.5a8 8 0 0 1-11.7 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
          <path d="M9.2 8.2c.2-.4.5-.4.8-.3l.7.3c.2.1.3.2.3.4l-.2.9c0 .2 0 .3.2.5.4.7 1 1.2 1.7 1.6.2.1.4.1.5-.1l.5-.6c.1-.2.3-.2.5-.1l.8.4c.2.1.3.2.2.5-.1.5-.5 1-1 1.2-.5.2-1.1.1-1.7-.1-1-.4-2.1-1.2-2.8-2.1-.5-.7-.9-1.5-.9-2.1 0-.2.1-.4.4-.5Z" fill="currentColor"/>
        </svg>
      </a>

      <div className="fixed inset-x-0 bottom-0 z-30 flex border-t border-champagne/40 bg-ivory/97 backdrop-blur sm:hidden">
        <a
          href={SITE.phoneHref}
          className="flex flex-1 flex-col items-center gap-1 py-3 text-charcoal"
          aria-label="Call Hotel Binwa View & Banquets"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <path d="M4 5c0 8.3 6.7 15 15 15l1-3.6-4.2-1.6-1.4 1.7A11.7 11.7 0 018 11.6l1.7-1.4L8 6 4.4 5H4z" />
          </svg>
          <span className="text-[10px] font-semibold uppercase tracking-wide">Call</span>
        </a>
        <a
          href={SITE.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex flex-1 flex-col items-center gap-1 border-x border-champagne/40 py-3 text-charcoal"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M20 11.5a8 8 0 0 1-11.7 7.1L4 20l1.4-4.1A8 8 0 1 1 20 11.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/>
            <path d="M9.2 8.2c.2-.4.5-.4.8-.3l.7.3c.2.1.3.2.3.4l-.2.9c0 .2 0 .3.2.5.4.7 1 1.2 1.7 1.6.2.1.4.1.5-.1l.5-.6c.1-.2.3-.2.5-.1l.8.4c.2.1.3.2.2.5-.1.5-.5 1-1 1.2-.5.2-1.1.1-1.7-.1-1-.4-2.1-1.2-2.8-2.1-.5-.7-.9-1.5-.9-2.1 0-.2.1-.4.4-.5Z" fill="currentColor"/>
          </svg>
          <span className="text-[10px] font-semibold uppercase tracking-wide">WhatsApp</span>
        </a>
        <Link
          to="/contact"
          className="flex flex-1 flex-col items-center gap-1 bg-rose py-3 text-ivory"
          aria-label="Contact Hotel Binwa View & Banquets"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
            <path d="M4 4h16v12H8l-4 4V4z" />
          </svg>
          <span className="text-[10px] font-semibold uppercase tracking-wide">Enquire</span>
        </Link>
      </div>
    </>
  );
}
