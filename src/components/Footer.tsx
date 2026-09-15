import { Link } from "react-router-dom";
import { FOOTER_LINKS, POLICY_LINKS, SITE } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-ink pb-16 text-ivory/90 sm:pb-0">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={SITE.logo} alt="Hotel Binwa View & Banquets HBV logo" className="h-12 w-12 object-contain" />
              <div className="leading-tight">
                <p className="font-display text-2xl italic text-ivory">Hotel Binwa View & Banquets</p>
                <p className="eyebrow text-[10px] text-champagne/80">Luxury Banquet &amp; Celebrations</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/60">
              A destination for weddings, grand banquets and celebrations, set
              against the Himalayan foothills of Baijnath, Himachal Pradesh —
              with comfortable stays and fine dining to complete the experience.
            </p>
          </div>

          <div>
            <p className="eyebrow text-xs text-champagne/70">Explore</p>
            <ul className="mt-5 space-y-3">
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-ivory/70 transition-colors hover:text-champagne">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-xs text-champagne/70">Policies</p>
            <ul className="mt-5 space-y-3">
              {POLICY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-ivory/70 transition-colors hover:text-champagne">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/faq" className="text-sm text-ivory/70 transition-colors hover:text-champagne">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-xs text-champagne/70">Reach Us</p>
            <ul className="mt-5 space-y-3 text-sm text-ivory/70">
              <li>
                <a href={SITE.phoneHref} className="transition-colors hover:text-champagne">{SITE.phone}</a>
                <br />
                <a href={SITE.landlineHref} className="transition-colors hover:text-champagne">Landline: {SITE.landline}</a>
              </li>
              <li className="leading-relaxed">
                {SITE.address.line1}
                <br />
                {SITE.address.line2}
                <br />
                {SITE.address.line3}
                <br />
                {SITE.address.landmark}
              </li>
              <li className="flex flex-wrap gap-2">
                <a
                  href={SITE.facebookHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ivory/25 px-4 py-2 text-xs uppercase tracking-wider transition-colors hover:border-champagne hover:text-champagne"
                >
                  Facebook
                </a>
                <a
                  href={SITE.instagramHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ivory/25 px-4 py-2 text-xs uppercase tracking-wider transition-colors hover:border-champagne hover:text-champagne"
                >
                  Instagram
                </a>
                <a
                  href={SITE.youtubeHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ivory/25 px-4 py-2 text-xs uppercase tracking-wider transition-colors hover:border-champagne hover:text-champagne"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href={SITE.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ivory/25 px-4 py-2 text-xs uppercase tracking-wider transition-colors hover:border-champagne hover:text-champagne"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-3 border-t border-ivory/10 pt-8 text-center text-xs text-ivory/50 sm:flex-row sm:justify-between sm:text-left">
          <p>© 2026 Hotel Binwa View & Banquets. All Rights Reserved.</p>
          <p>Built and designed by Himanshu Aryann</p>
        </div>
      </div>
    </footer>
  );
}
