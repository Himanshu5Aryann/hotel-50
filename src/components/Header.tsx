import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, MOBILE_NAV_LINKS, SITE } from "../data/site";
import { cn } from "../utils/cn";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Pages that don't start with a dark, full-bleed hero should use a solid
  // header from the start so text never disappears on light backgrounds.
  const solidFromStart = location.pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isSolid = scrolled || solidFromStart;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          "bg-rose/95 shadow-[0_2px_24px_rgba(0,0,0,0.18)] backdrop-blur-md"
        )}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-2 px-4 py-3 sm:px-6 xl:px-8 2xl:px-10">
          <Link to="/" className="flex shrink-0 items-center gap-3" aria-label="Hotel Binwa View & Banquets — Home">
            <span className="logo-glow relative flex h-10 w-10 shrink-0 items-center justify-center xl:h-11 xl:w-11">
              <img
                src={SITE.logo}
                alt="Hotel Binwa View & Banquets HBV logo"
                className="relative z-10 h-10 w-10 object-contain shadow-sm xl:h-11 xl:w-11"
              />
            </span>
            <span className={cn(
              "max-w-[220px] truncate font-display text-[1rem] tracking-wide text-ivory xl:max-w-none xl:text-[1.08rem] 2xl:text-[1.2rem]",
            )}>
              Hotel Binwa View & Banquets
            </span>
          </Link>

          <nav className="hidden flex-1 items-center justify-center xl:flex">
            <div className="flex items-center gap-2 2xl:gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "whitespace-nowrap text-[9px] font-medium uppercase tracking-[0.12em] text-ivory/95 transition-colors hover:text-champagne lg:text-[10px] 2xl:text-[11px]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            <a
              href={SITE.primaryPhoneHref || SITE.phoneHref}
              className={cn(
                "whitespace-nowrap text-right text-[11px] font-medium tracking-wide text-ivory transition-colors hover:text-champagne sm:text-[12px]"
              )}
              aria-label="Call Hotel Binwa View & Banquets"
            >
              {SITE.primaryPhone}
            </a>
            <Link
              to="/contact"
              className="rounded-full border border-gold bg-gold px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-charcoal transition-colors hover:bg-rose hover:text-ivory xl:px-5 xl:text-[11px] 2xl:text-[12px]"
            >
              Plan Your Event
            </Link>
          </div>

          <button
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className={cn(
              "flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border xl:hidden",
              "border-heading-gold"
            )}
          >
            <span className="h-px w-5 bg-heading-gold" />
            <span className="h-px w-5 bg-heading-gold" />
            <span className="h-px w-3.5 self-center bg-heading-gold" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-rose"
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="font-display text-xl italic text-ivory">Hotel Binwa View & Banquets</span>
              <button
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/30 text-ivory"
              >
                <span className="relative block h-4 w-4">
                  <span className="absolute inset-0 top-1/2 h-px w-full -translate-y-1/2 rotate-45 bg-ivory" />
                  <span className="absolute inset-0 top-1/2 h-px w-full -translate-y-1/2 -rotate-45 bg-ivory" />
                </span>
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-1 overflow-y-auto px-8 pb-10">
              {MOBILE_NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link
                    to={link.href}
                    className="block border-b border-ivory/10 py-3.5 font-display text-3xl italic text-ivory/95 transition-colors hover:text-champagne"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="grid grid-cols-3 gap-3 border-t border-ivory/10 px-6 py-6">
              <Link
                to="/contact"
                className="rounded-full bg-gold py-3 text-center text-[11px] font-semibold uppercase tracking-wider text-charcoal"
              >
                Plan Event
              </Link>
              <a
                href={SITE.phoneHref}
                className="rounded-full border border-ivory/40 py-3 text-center text-[11px] font-semibold uppercase tracking-wider text-ivory"
              >
                Call Us
              </a>
              <a
                href={SITE.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-ivory/40 py-3 text-center text-[11px] font-semibold uppercase tracking-wider text-ivory"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
