import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type LogoProps = {
  className?: string;
  compact?: boolean;
  inverse?: boolean;
};

export function Logo({ className, compact = false, inverse = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2 focus-visible:outline-offset-4",
        className,
      )}
      aria-label="گویا — صفحه اصلی"
    >
      <span
        className={cn(
          "relative grid h-7 w-7 place-items-center overflow-hidden rounded-md border",
          inverse
            ? "border-white/20 bg-white/10"
            : "border-border bg-navy text-white",
        )}
        aria-hidden
      >
        <svg
          viewBox="0 0 32 32"
          className={cn("h-4 w-4", inverse ? "text-white" : "text-white")}
          fill="none"
        >
          <path
            d="M8 22V10l8-4 8 4v12l-8 4-8-4Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M16 14v8M12 16.5 16 14l4 2.5"
            stroke="#93C5FD"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {!compact ? (
        <span
          className={cn(
            "text-[15px] font-semibold tracking-tight",
            inverse ? "text-white" : "text-foreground",
          )}
        >
          گویا
        </span>
      ) : null}
    </Link>
  );
}
