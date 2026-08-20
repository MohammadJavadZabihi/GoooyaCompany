import { ArrowLeft } from "lucide-react";
import { ProductBento } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { products } from "@/data/products";

export function ProductsOverviewSection() {
  return (
    <Section>
      <Container>
        <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="text-xs font-medium tracking-wide text-accent">
              محصولات
            </p>
            <h2 className="display-title mt-3 max-w-lg text-3xl font-semibold md:text-4xl">
              اکوسیستمی که مثل یک سیستم واحد کار می‌کند
            </h2>
            <p className="mt-3 max-w-md text-sm leading-7 text-muted">
              یک محصول بزرگ و چند ماژول کنار هم — نه کارت‌های پراکنده.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <Button href="/products" variant="secondary" size="sm">
              همه محصولات
              <ArrowLeft className="h-3.5 w-3.5" />
            </Button>
          </Reveal>
        </div>
        <Reveal>
          <ProductBento products={products} />
        </Reveal>
      </Container>
    </Section>
  );
}
