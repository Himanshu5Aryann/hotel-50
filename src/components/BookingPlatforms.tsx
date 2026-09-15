import { BOOKING_PLATFORMS } from "../data/site";

interface BookingPlatformsProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

export default function BookingPlatforms({
  title = "Book Your Stay",
  subtitle = "Choose where you’d like to book your stay.",
  compact = false,
}: BookingPlatformsProps) {
  return (
    <div className="w-full">
      <div className="mb-6">
        <p className="eyebrow text-[10px] tracking-[0.22em] text-rose-dark">{title}</p>
        <p className="mt-3 text-base text-charcoal/70">{subtitle}</p>
      </div>

      <div className="space-y-4">
        {BOOKING_PLATFORMS.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className={[
              "group flex items-center justify-between gap-4 border transition-all duration-300",
              compact ? "rounded-sm px-4 py-4 sm:px-5" : "rounded-md px-5 py-5 sm:px-6",
              "border-gold/50 bg-rose text-ivory shadow-[0_12px_28px_rgba(0,63,53,0.2)] hover:-translate-y-0.5"
            ].join(" ")}
          >
            <div className="min-w-0 flex-1">
              <div className="flex h-10 items-center sm:h-11">
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="max-h-8 w-auto max-w-[170px] object-contain object-left sm:max-h-10"
                />
              </div>
              <p
                className={[
                  "mt-3 font-semibold uppercase tracking-[0.18em]",
                  compact ? "text-[10px]" : "text-[11px]",
                  "text-ivory"
                ].join(" ")}
              >
                {platform.name}
              </p>
              <p
                className={[
                  "mt-1",
                  compact ? "text-sm" : "text-base",
                  "text-ivory/80"
                ].join(" ")}
              >
                Book on {platform.name}
              </p>
            </div>

            <span className="inline-flex items-center text-sm font-medium text-gold-light transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
