const PETALS = [
  { left: "6%", size: 14, delay: 0, duration: 22, opacity: 0.5 },
  { left: "18%", size: 10, delay: 4, duration: 26, opacity: 0.4 },
  { left: "34%", size: 16, delay: 9, duration: 24, opacity: 0.45 },
  { left: "52%", size: 11, delay: 2, duration: 28, opacity: 0.35 },
  { left: "68%", size: 15, delay: 12, duration: 25, opacity: 0.5 },
  { left: "82%", size: 12, delay: 6, duration: 23, opacity: 0.4 },
  { left: "92%", size: 9, delay: 15, duration: 27, opacity: 0.3 },
];

/**
 * Extremely subtle, slow petal drift used sparingly on romantic / wedding
 * sections. Not for repeated use across the whole site.
 */
export default function PetalField({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="petal"
          style={{
            left: p.left,
            width: p.size,
            height: p.size * 0.8,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
            background:
              "radial-gradient(circle at 30% 30%, #e4ede8, #00483d55)",
            borderRadius: "0 60% 0 60%",
          }}
        />
      ))}
    </div>
  );
}
