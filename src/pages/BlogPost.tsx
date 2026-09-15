import { Link, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import { BLOG_POSTS } from "../data/blog";
import FinalCTA from "../components/FinalCTA";
import { WEDDINGS } from "../data/media";

export default function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-40 text-center">
        <h1 className="font-display text-4xl italic text-charcoal">Article Not Found</h1>
        <p className="mt-4 text-charcoal/60">This journal entry may have moved.</p>
        <Link to="/blog" className="mt-8 inline-block rounded-full bg-burgundy px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-ivory">
          Back to Journal
        </Link>
      </div>
    );
  }

  return (
    <div>
      <SEO title={`${post.title} | Hotel Binwa View & Banquets Journal`} description={post.excerpt} />
      <PageHero image={post.image} eyebrow={post.category} title={post.title} />
      <section className="bg-ivory py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-6 sm:px-8">
          <Reveal>
            <Link to="/blog" className="text-xs font-semibold uppercase tracking-wider text-rose-dark underline underline-offset-4">
              ← Back to Journal
            </Link>
            <div className="prose prose-lg mt-8 max-w-none">
              {post.content.map((para, i) => (
                <p key={i} className="mb-6 text-base leading-relaxed text-charcoal/75">
                  {para}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <FinalCTA image={WEDDINGS.embrace} />
    </div>
  );
}
