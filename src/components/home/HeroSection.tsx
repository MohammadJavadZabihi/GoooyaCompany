import { ArrowLeft } from "lucide-react";
import { ProductConsole } from "@/components/hero/ProductConsole";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-mesh pb-16 pt-10 md:pb-24 md:pt-14">
      <div className="pointer-events-none absolute inset-0 surface-grain opacity-50" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-elevated/90 px-3 py-1 text-xs text-muted shadow-[var(--shadow-sm)]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
            شرکت نرم‌افزاری گویا
          </div>
          <h1 className="display-title text-balance text-4xl font-semibold text-foreground md:text-6xl lg:text-[4.25rem]">
            نرم‌افزاری که سیستم‌ها را
            <span className="mt-1 block text-accent">به هم وصل می‌کند</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted md:text-lg">
            گویا محصولات و زیرساخت می‌سازد تا تیم‌ها کمتر بین ابزارها گیر کنند —
            و بیشتر روی کار واقعی تمرکز کنند.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/products" size="lg">
              مشاهده محصولات
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              شروع همکاری
            </Button>
          </div>
        </div>

        <div className="relative mt-12 md:mt-16">
          <div
            className="pointer-events-none absolute -inset-x-8 -top-8 h-32 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.12),transparent_70%)] blur-2xl"
            aria-hidden
          />
          <ProductConsole className="relative" />
        </div>
      </Container>
    </section>
  );
}
