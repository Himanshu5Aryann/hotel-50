import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { WEDDINGS } from "../data/media";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      <SEO title="Page Not Found | Hotel Binwa View & Banquets" description="The page you are looking for could not be found." />
      <img src={WEDDINGS.hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-ink/75" />
      <div className="relative px-6 text-center">
        <p className="eyebrow text-xs text-champagne">404</p>
        <h1 className="mt-4 font-display text-5xl italic text-ivory">Page Not Found</h1>
        <p className="mx-auto mt-4 max-w-md text-ivory/70">
          The page you're looking for may have moved. Let's get you back to
          celebrating.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block rounded-full bg-rose-dark px-8 py-4 text-xs font-semibold uppercase tracking-wider text-ivory transition-colors hover:bg-champagne hover:text-charcoal"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
