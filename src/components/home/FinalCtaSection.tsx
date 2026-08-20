import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-border py-[var(--section-y)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08),transparent_55%)]" />
      <Container className="relative">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium tracking-wide text-accent">
              گام بعدی
            </p>
            <h2 className="display-title mt-4 text-3xl font-semibold md:text-5xl">
              آمادهٔ ساخت چیزی جدی هستید؟
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-muted md:text-base">
              مسئله را بگویید. مسیر را با هم طراحی می‌کنیم — بدون وعدهٔ توخالی.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href="/contact" size="lg">
                شروع گفتگو
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button href="/products" variant="secondary" size="lg">
                محصولات
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
