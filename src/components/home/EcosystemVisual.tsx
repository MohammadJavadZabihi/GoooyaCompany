"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import { cn } from "@/lib/utils/cn";

export function EcosystemVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="product-frame relative mx-auto aspect-[16/10] w-full max-w-4xl bg-[linear-gradient(180deg,#f8fafc,#eef2f7)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08),transparent_60%)]" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <line
          x1="50"
          y1="22"
          x2="50"
          y2="40"
          stroke="rgba(37,99,235,0.35)"
          strokeWidth="0.3"
          className={cn(
            "transition-opacity duration-700",
            active ? "opacity-100" : "opacity-25",
          )}
        />
        <line
          x1="50"
          y1="48"
          x2="22"
          y2="68"
          stroke="rgba(37,99,235,0.28)"
          strokeWidth="0.3"
          className={cn(
            "transition-opacity duration-1000 delay-150",
            active ? "opacity-100" : "opacity-20",
          )}
        />
        <line
          x1="50"
          y1="48"
          x2="78"
          y2="68"
          stroke="rgba(37,99,235,0.28)"
          strokeWidth="0.3"
          className={cn(
            "transition-opacity duration-1000 delay-300",
            active ? "opacity-100" : "opacity-20",
          )}
        />
      </svg>

      {[
        { label: "گویا", x: 50, y: 16, core: true },
        { label: "هسته", x: 50, y: 44, core: false },
        { label: "محصولات", x: 22, y: 72, core: false },
        { label: "کاربران", x: 78, y: 72, core: false },
      ].map((hub, i) => (
        <div
          key={hub.label}
          className={cn(
            "absolute -translate-x-1/2 -translate-y-1/2 rounded-md border px-3 py-1.5 text-xs font-medium shadow-[var(--shadow-sm)] transition-all duration-700",
            active ? "scale-100 opacity-100" : "scale-90 opacity-0",
            hub.core
              ? "border-accent/30 bg-accent text-white"
              : "border-border bg-elevated text-foreground",
          )}
          style={{
            left: `${hub.x}%`,
            top: `${hub.y}%`,
            transitionDelay: `${i * 90}ms`,
          }}
        >
          {hub.label}
        </div>
      ))}

      <div className="absolute inset-x-4 bottom-4 flex flex-wrap justify-center gap-2">
        {products.map((p, i) => (
          <Link
            key={p.slug}
            href={`/products/${p.slug}`}
            className={cn(
              "rounded-md border border-border bg-elevated/95 px-2.5 py-1 text-[11px] text-muted shadow-[var(--shadow-sm)] transition hover:border-accent/30 hover:text-accent",
              active ? "opacity-100" : "opacity-0",
            )}
            style={{ transitionDelay: `${350 + i * 60}ms` }}
          >
            {p.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
