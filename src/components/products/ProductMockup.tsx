import type { Product } from "@/types";
import { cn } from "@/lib/utils/cn";

export function ProductMockup({
  product,
  className,
  large = false,
}: {
  product: Product;
  className?: string;
  large?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-xl)] border border-border bg-elevated shadow-[var(--shadow-lg)]",
        large ? "aspect-[16/10]" : "aspect-[4/3]",
        className,
      )}
      style={{
        background: `
          radial-gradient(circle at 18% 20%, ${product.accent}22, transparent 42%),
          linear-gradient(150deg, #e8eef8 0%, #f4f6f9 48%, #eef2f7 100%)
        `,
      }}
    >
      <div
        className={cn(
          "absolute rounded-xl border border-border bg-elevated shadow-[var(--shadow-md)]",
          large ? "inset-6 md:inset-10" : "inset-4 md:inset-6",
        )}
      >
        <div className="flex items-center gap-2 border-b border-border bg-panel/60 px-4 py-3">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]/70" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]/70" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]/70" />
          <span className="ms-2 text-xs text-subtle">{product.name}</span>
        </div>
        <div className="grid h-[calc(100%-2.75rem)] grid-cols-12 gap-3 p-4">
          <div className="col-span-3 hidden space-y-2 rounded-lg bg-panel p-2 sm:block">
            <div className="h-2 w-3/4 rounded-full bg-accent/20" />
            <div className="h-2 w-full rounded-full bg-muted" />
            <div className="h-2 w-5/6 rounded-full bg-muted" />
            <div className="mt-4 h-16 rounded-md bg-muted/80" />
          </div>
          <div className="col-span-12 space-y-3 sm:col-span-9">
            <div className="h-3 w-1/3 rounded-full bg-accent/25" />
            <div className="grid grid-cols-3 gap-2">
              <div className="h-16 rounded-lg bg-panel md:h-20" />
              <div className="h-16 rounded-lg bg-panel md:h-20" />
              <div className="h-16 rounded-lg bg-panel md:h-20" />
            </div>
            <div className="h-24 rounded-lg bg-panel md:h-28" />
          </div>
        </div>
      </div>
    </div>
  );
}
