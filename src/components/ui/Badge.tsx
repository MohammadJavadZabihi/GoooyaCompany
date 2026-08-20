import { cn } from "@/lib/utils/cn";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "neutral" | "accent" | "warning" | "inverse";
};

const tones = {
  neutral: "bg-panel text-muted border-border",
  accent: "bg-[var(--accent-soft)] text-accent border-[var(--accent-line)]",
  warning: "bg-amber-50 text-amber-800 border-amber-200/80",
  inverse: "bg-white/15 text-white/90 border-white/20",
};

export function Badge({
  children,
  className,
  tone = "neutral",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-medium",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
