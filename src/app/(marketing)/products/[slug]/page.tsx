import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { ProductMockup } from "@/components/products/ProductMockup";
import { ProductCard } from "@/components/products/ProductCard";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getProductBySlug,
  getProductSlugs,
  productStatusLabel,
  products,
} from "@/data/products";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
  productJsonLd,
} from "@/lib/seo/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return buildMetadata({
      title: "محصول یافت نشد",
      description: "محصول مورد نظر در کاتالوگ گویا وجود ندارد.",
      path: `/products/${slug}`,
      noIndex: true,
    });
  }
  return buildMetadata({
    title: product.seo.title,
    description: product.seo.description,
    path: `/products/${product.slug}`,
    keywords: product.seo.keywords,
  });
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productJsonLd(product)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "خانه", path: "/" },
              { name: "محصولات", path: "/products" },
              { name: product.name, path: `/products/${product.slug}` },
            ]),
          ),
        }}
      />
      {product.faqs.length > 0 ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd(product.faqs)),
          }}
        />
      ) : null}

      {/* Product Hero */}
      <section className="relative overflow-hidden gradient-mesh">
        <div className="pointer-events-none absolute inset-0 surface-grain opacity-60" />
        <Container className="relative grid items-center gap-12 py-16 md:py-20 lg:grid-cols-2 lg:gap-14 lg:py-24">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <Badge tone="accent">{product.category}</Badge>
              <Badge
                tone={
                  product.status === "live"
                    ? "accent"
                    : product.status === "beta"
                      ? "warning"
                      : "neutral"
                }
              >
                {productStatusLabel[product.status]}
              </Badge>
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl lg:text-[3.25rem]">
              {product.name}
            </h1>
            <p className="mt-2 text-lg text-accent">{product.title}</p>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted md:text-lg">
              {product.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" size="lg">
                درخواست معرفی
              </Button>
              <Button href="/products" variant="secondary" size="lg">
                همه محصولات
              </Button>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ProductMockup product={product} large />
          </Reveal>
        </Container>
      </section>

      {/* Problem / Solution */}
      <Section>
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-sm font-medium text-accent">مسئله</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              چه چیزی را حل می‌کند؟
            </h2>
            <p className="mt-4 text-base leading-8 text-muted">
              {product.problem}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-sm font-medium text-accent">راه‌حل</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              رویکرد {product.name}
            </h2>
            <p className="mt-4 text-base leading-8 text-muted">
              {product.solution}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Experience */}
      <Section tone="muted">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="تجربه محصول"
              title="نمای مفهومی رابط"
              description="تصاویر واقعی محصول پس از آماده‌سازی دارایی‌ها جایگزین می‌شوند. فعلاً ترکیب بصری برند برای انتقال حس محصول است."
              className="mb-10"
            />
          </Reveal>
          <Reveal delay={80}>
            <ProductMockup product={product} large className="mx-auto max-w-4xl" />
          </Reveal>
        </Container>
      </Section>

      {/* Features */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="قابلیت‌ها"
              title="ویژگی‌هایی که در کار روزمره دیده می‌شوند"
              className="mb-12"
            />
          </Reveal>
          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
            {product.features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 50}>
                <article className="relative">
                  <span className="text-xs font-medium text-subtle">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {feature.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Architecture strip */}
      <Section tone="muted">
        <Container className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="معماری"
              title="چه چیزی زیر پوست محصول است"
              description="توانایی‌های فنی و پشتهٔ تکنولوژی — قابل جایگزینی با جزئیات رسمی‌تر."
            />
            <div className="mt-6 flex flex-wrap gap-2">
              {product.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-elevated px-3 py-1 text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={80}>
            <ul className="space-y-3">
              {product.capabilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-border py-3 text-sm text-muted last:border-0"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      {/* Benefits */}
      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="نتیجه"
              title="چه چیزی برای تیم شما بهتر می‌شود"
              className="mb-10"
            />
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            {product.benefits.map((b, i) => (
              <Reveal key={b} delay={i * 50}>
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent-soft)] text-sm font-semibold text-accent">
                    {i + 1}
                  </span>
                  <p className="pt-1 text-base font-medium leading-7">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 grid gap-8 border-t border-border pt-10 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold">مخاطبان</p>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {product.audience.map((a) => (
                  <li key={a}>• {a}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold">موارد استفاده</p>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {product.useCases.map((u) => (
                  <li key={u}>• {u}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {product.faqs.length > 0 ? (
        <Section tone="muted">
          <Container className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight">
              پرسش‌های متداول
            </h2>
            <div className="mt-8 space-y-3">
              {product.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-[var(--radius-md)] border border-border bg-elevated px-5 py-4 open:shadow-[var(--shadow-sm)]"
                >
                  <summary className="cursor-pointer list-none font-medium marker:content-none">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <Section>
        <Container>
          <h2 className="mb-8 text-xl font-semibold">محصولات مرتبط</h2>
          <div className="grid auto-rows-fr gap-5 sm:grid-cols-2">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Container>
      </Section>

      <FinalCtaSection />
    </>
  );
}
