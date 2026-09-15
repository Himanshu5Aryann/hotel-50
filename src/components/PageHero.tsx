import { cn } from "../utils/cn";
import Eyebrow from "./Eyebrow";

interface PageHeroProps {
  image: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  height?: "full" | "tall";
  align?: "left" | "center";
  titleClassName?: string;
}

export default function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
  height = "tall",
  align = "left",
  titleClassName,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex items-end overflow-hidden",
        height === "full" ? "min-h-[100svh]" : "min-h-[62vh] sm:min-h-[70vh]"
      )}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/20" />
      <div
        className={cn(
          "relative mx-auto w-full max-w-7xl px-6 pb-16 pt-40 sm:px-8 lg:px-10",
          align === "center" && "text-center"
        )}
      >
        <Eyebrow tone="light" className={align === "center" ? "justify-center" : ""}>
          {eyebrow}
        </Eyebrow>
        <h1 className={cn(
          "mt-5 max-w-3xl font-display text-4xl italic leading-[1.1] sm:text-5xl lg:text-6xl",
          titleClassName ?? "text-ivory"
        )}>
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
