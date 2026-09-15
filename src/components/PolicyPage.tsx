import type { ReactNode } from "react";
import SEO from "./SEO";
import PageHero from "./PageHero";
import { HOTEL } from "../data/media";

export default function PolicyPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <SEO title={`${title} | Hotel Binwa View & Banquets`} description={`${title} for Hotel Binwa View & Banquets, Baijnath, Himachal Pradesh.`} />
      <PageHero image={HOTEL.exteriorMist} eyebrow="Policies" title={title} height="tall" align="center" />
      <section className="bg-ivory py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          {updated && <p className="mb-8 text-xs uppercase tracking-wider text-charcoal/50">Last updated: {updated}</p>}
          <div className="space-y-6 text-sm leading-relaxed text-charcoal/70 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:italic [&_h2]:text-charcoal [&_p]:leading-relaxed">
            {children}
          </div>
        </div>
      </section>
    </div>
  );
}
