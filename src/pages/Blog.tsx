import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import { RevealItem, RevealStagger } from "../components/Reveal";
import { BLOG_POSTS } from "../data/blog";
import { WEDDINGS } from "../data/media";
import { cn } from "../utils/cn";

const CATEGORIES = ["All", "Weddings", "Events", "Himachal", "Dining", "Celebrations", "Hospitality"];

export default function Blog() {
  const [active, setActive] = useState("All");
  const posts = active === "All" ? BLOG_POSTS : BLOG_POSTS.filter((p) => p.category === active);

  return (
    <div>
      <SEO
        title="Journal | Hotel Binwa View & Banquets"
        description="Editorial stories on weddings, celebrations, dining and Himachal Pradesh from Hotel Binwa View & Banquets."
      />
      <PageHero
        image={WEDDINGS.outdoor}
        eyebrow="Journal"
        title="Stories From Hotel Binwa View & Banquets."
        subtitle="Editorial notes on weddings, celebrations, dining and life in the Himalayan foothills."
        align="center"
      />

      <section className="bg-ivory py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "shrink-0 rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors",
                  active === c
                    ? "border-rose-dark bg-rose-dark text-ivory"
                    : "border-charcoal/15 text-charcoal/70 hover:border-rose-dark hover:text-rose-dark"
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <RevealStagger className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <RevealItem key={p.slug}>
                <Link to={`/blog/${p.slug}`} className="group block">
                  <div className="h-56 overflow-hidden rounded-sm">
                    <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  </div>
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-rose-dark">{p.category}</p>
                  <p className="mt-2 font-display text-2xl italic leading-snug text-charcoal">{p.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/60">{p.excerpt}</p>
                  <span className="mt-3 inline-block text-[11px] font-semibold uppercase tracking-wider text-charcoal/70 underline underline-offset-4">
                    Read More →
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>
    </div>
  );
}
