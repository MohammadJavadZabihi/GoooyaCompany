import type { Metadata } from "next";
import { ProductBento } from "@/components/products/ProductCard";
import { EcosystemVisual } from "@/components/home/EcosystemVisual";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { productCategories, products } from "@/data/products";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "محصولات",
  description:
    "اکوسیستم محصولات گویا؛ پلتفرم، اتوماسیون، زیرساخت و تحلیل داده.",
  path: "/products",
  keywords: ["محصولات گویا", "نرم‌افزار", "پلتفرم"],
});

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "خانه", path: "/" },
              { name: "محصولات", path: "/products" },
            ]),
          ),
        }}
      />

      <PageHero
        align="center"
        eyebrow="محصولات گویا"
        title="محصولاتی که مثل یک سیستم واحد کنار هم می‌نشینند"
        description="هر محصول یک مسئله را حل می‌کند. با هم، مسیر کار تیم را کوتاه‌تر می‌کنند."
      >
        <Button href="/contact" size="sm">
          گفتگو درباره استقرار
        </Button>
      </PageHero>

      <Section>
        <Container>
          <Reveal>
            <div className="mb-10 text-center">
              <p className="text-xs text-accent">اکوسیستم</p>
              <h2 className="display-title mt-2 text-2xl font-semibold md:text-3xl">
                نقشه اتصال محصولات
              </h2>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <EcosystemVisual />
          </Reveal>
        </Container>
      </Section>

      <Section className="border-y border-border bg-elevated/30">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((cat, i) => (
              <Reveal key={cat.id} delay={i * 40}>
                <div className="bg-background p-5 md:p-6">
                  <h3 className="text-sm font-semibold">{cat.title}</h3>
                  <p className="mt-2 text-xs leading-6 text-muted">
                    {cat.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <div className="mb-10">
              <p className="text-xs text-accent">کاتالوگ</p>
              <h2 className="display-title mt-2 text-3xl font-semibold">
                همه محصولات
              </h2>
            </div>
          </Reveal>
          <Reveal>
            <ProductBento products={products} />
          </Reveal>
        </Container>
      </Section>

      <Section className="border-t border-border">
        <Container className="grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs text-accent">فلسفه</p>
            <h2 className="display-title mt-3 text-3xl font-semibold">
              کمتر ابزار، بیشتر وضوح
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <ul className="space-y-4 text-sm leading-7 text-muted">
              <li className="border-b border-border pb-4">
                هر محصول باید یک مسئله را بهتر از وضعیت فعلی حل کند.
              </li>
              <li className="border-b border-border pb-4">
                اتصال به بقیه اکوسیستم باید طبیعی باشد.
              </li>
              <li>
                رابط برای کاربر روزمره فهمیدنی باشد — نه فقط برای دمو.
              </li>
            </ul>
          </Reveal>
        </Container>
      </Section>

      <FinalCtaSection />
    </>
  );
}
