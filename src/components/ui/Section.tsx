import { cn } from "@/lib/utils/cn";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "muted" | "inverse";
};

const tones = {
  default: "bg-transparent",
  muted: "bg-panel/80",
  inverse: "bg-navy text-[var(--fg-inverse)]",
};

export function Section({
  children,
  className,
  id,
  tone = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-[var(--section-y)]",
        tones[tone],
        className,
      )}
    >
      {children}
    </section>
  );
}
