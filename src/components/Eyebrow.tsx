import { cn } from "../utils/cn";

export default function Eyebrow({
  children,
  className,
  tone = "dark",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "dark" | "light" | "gold";
}) {
  const toneClass =
    tone === "light"
      ? "text-champagne"
      : tone === "gold"
      ? "text-gold"
      : "text-rose-dark";
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className={cn("h-px w-8", tone === "light" ? "bg-champagne/70" : "bg-gold/65")} />
      <span className={cn("eyebrow text-xs", toneClass)}>{children}</span>
    </div>
  );
}
