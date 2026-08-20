import Image from "next/image";
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
    >
      <Image
        src={product.image}
        alt={product.name}
        fill
        sizes="(max-width: 768px) 100vw, 640px"
        className="object-cover"
        priority={large}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <p className="text-sm font-medium text-white">{product.name}</p>
        <p className="mt-1 text-xs text-white/75">{product.title}</p>
      </div>
    </div>
  );
}
