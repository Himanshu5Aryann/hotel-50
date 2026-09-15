import { SITE } from "../data/site";
import Reveal from "./Reveal";

export default function StatStrip({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <div
      className={`grid grid-cols-2 gap-8 sm:grid-cols-4 ${
        tone === "dark" ? "text-ivory" : "text-charcoal"
      }`}
    >
      {SITE.stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.08}>
          <p className="font-display text-3xl italic sm:text-4xl">{s.value}</p>
          <p
            className={`eyebrow mt-2 text-[10px] ${
              tone === "dark" ? "text-champagne/70" : "text-rose-dark/80"
            }`}
          >
            {s.label}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
