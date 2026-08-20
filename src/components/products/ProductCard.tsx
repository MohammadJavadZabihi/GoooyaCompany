import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { productStatusLabel } from "@/data/products";
import type { Product } from "@/types";
import { cn } from "@/lib/utils/cn";

type ProductCardProps = {
  product: Product;
  className?: string;
  size?: "default" | "large" | "wide";
};

export function ProductCard({
  product,
  className,
  size = "default",
}: ProductCardProps) {
  const large = size === "large";
  const wide = size === "wide";

  return (
    <Link
      href={`/products/${product.slug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-border bg-elevated shadow-[var(--shadow-sm)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[var(--shadow-md)]",
        large && "md:flex-row",
        className,
      )}
    >
      <div
        className={cn(
          "relative shrink-0 overflow-hidden border-b border-border",
          large
            ? "aspect-[16/11] md:aspect-auto md:h-auto md:w-[48%] md:border-b-0 md:border-e"
            : wide
              ? "aspect-[21/9] md:aspect-[2.4/1]"
              : "aspect-[16/10]",
        )}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 18% 10%, ${product.accent}28, transparent 48%),
              linear-gradient(165deg, #e8eef8 0%, #f4f6f9 55%, #eef2f7 100%)
            `,
          }}
        />
        <div
          className={cn(
            "absolute rounded-md border border-border bg-elevated/90 p-3 shadow-[var(--shadow-sm)] backdrop-blur-sm",
            large ? "inset-5 md:inset-6" : "inset-x-4 bottom-4 top-8",
          )}
        >
          <div className="mb-2 flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
            <span className="h-1.5 w-1.5 rounded-full bg-subtle/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-subtle/35" />
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 w-1/3 rounded-full bg-accent/25" />
            <div className="h-1.5 w-full rounded-full bg-muted" />
            <div className="h-1.5 w-4/5 rounded-full bg-muted" />
          </div>
          {(large || wide) && (
            <div className="mt-3 grid grid-cols-3 gap-1.5">
              <div className="h-8 rounded bg-panel" />
              <div className="h-8 rounded bg-panel" />
              <div className="h-8 rounded bg-panel" />
            </div>
          )}
        </div>
        <span className="absolute start-3 top-3 rounded-md border border-border bg-elevated/90 px-2 py-0.5 text-[10px] text-muted shadow-[var(--shadow-sm)]">
          {productStatusLabel[product.status]}
        </span>
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col p-5",
          large && "md:justify-center md:p-8",
        )}
      >
        <p className="text-[11px] font-medium uppercase tracking-wide text-accent">
          {product.category}
        </p>
        <h3
          className={cn(
            "mt-2 font-semibold tracking-tight",
            large ? "text-2xl md:text-3xl" : "line-clamp-2 text-lg",
          )}
        >
          {product.name}
        </h3>
        <p
          className={cn(
            "mt-2 text-sm leading-7 text-muted",
            large ? "max-w-md" : "line-clamp-3 min-h-[5.25rem]",
          )}
        >
          {product.shortDescription}
        </p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-accent">
          جزئیات
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export function ProductBento({ products }: { products: Product[] }) {
  const [first, ...rest] = products;
  if (!first) return null;

  return (
    <div className="grid gap-3 md:gap-4">
      <ProductCard product={first} size="large" />
      <div className="grid auto-rows-fr gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
        {rest.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}

export function ProductGrid({
  products,
  className,
}: {
  products: Product[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid auto-rows-fr gap-3 sm:grid-cols-2 xl:grid-cols-4 md:gap-4",
        className,
      )}
    >
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
