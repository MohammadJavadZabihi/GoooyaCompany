import Image from "next/image";
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
        "group inline-flex items-center gap-2.5 focus-visible:outline-offset-4",
        className,
      )}
      aria-label="گویا — صفحه اصلی"
    >
      <Image
        src="/brand/gooya-logo.png"
        alt="لوگوی گویا"
        width={36}
        height={36}
        className="h-9 w-9 rounded-md object-cover shadow-[var(--shadow-sm)] ring-1 ring-border"
        priority
      />
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
