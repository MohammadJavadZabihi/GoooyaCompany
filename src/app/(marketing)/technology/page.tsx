import type { Metadata } from "next";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { capabilities } from "@/data/capabilities";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "فناوری",
  description:
    "قابلیت‌های فنی گویا در معماری، وب، موبایل، ابر، داده و اتوماسیون.",
  path: "/technology",
  keywords: ["فناوری", "معماری نرم‌افزار", "توسعه وب", "ابر"],
});

export default function TechnologyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "خانه", path: "/" },
              { name: "فناوری", path: "/technology" },
            ]),
          ),
        }}
      />

      <PageHero
        eyebrow="فناوری"
        title="اعتبار فنی از نتیجه می‌آید، نه از فهرست ابزار"
        description="هر قابلیت با خروجی تعریف شده: چه چیزی برای محصول و تیم شما بهتر می‌شود. لوگوها فرع‌اند."
      />

      {capabilities.map((cap, index) => {
        const reverse = index % 2 === 1;
        return (
          <Section
            key={cap.id}
            tone={index % 2 === 0 ? "default" : "muted"}
            className={index === 0 ? "pt-8 md:pt-10" : undefined}
          >
            <Container>
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal>
                  <p className="text-sm font-medium text-accent">
                    {String(index + 1).padStart(2, "0")} — {cap.title}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                    {cap.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-muted">
                    {cap.description}
                  </p>
                  <div className="mt-8 grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-subtle">
                        نتیجه
                      </p>
                      <ul className="mt-3 space-y-2 text-sm text-muted">
                        {cap.outcomes.map((o) => (
                          <li key={o} className="flex gap-2">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-subtle">
                        کاربرد
                      </p>
                      <ul className="mt-3 space-y-2 text-sm text-muted">
                        {cap.useCases.map((u) => (
                          <li key={u} className="flex gap-2">
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-navy/40" />
                            {u}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {cap.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border bg-elevated px-3 py-1 text-xs text-muted"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={100}>
                  <div
                    className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-xl)] border border-border bg-elevated shadow-[var(--shadow-md)]"
                    style={{
                      background: `
                        radial-gradient(circle at ${reverse ? "80%" : "20%"} 25%, rgba(37,99,235,0.14), transparent 45%),
                        linear-gradient(145deg, #e8eef8, #f4f6f9 60%, #eef2f7)
                      `,
                    }}
                  >
                    <div className="absolute inset-6 rounded-xl border border-border bg-elevated/95 p-4 shadow-[var(--shadow-sm)]">
                      <div className="h-2 w-1/4 rounded-full bg-accent/30" />
                      <div className="mt-4 space-y-2">
                        <div className="h-2 w-full rounded-full bg-muted" />
                        <div className="h-2 w-5/6 rounded-full bg-muted" />
                        <div className="h-2 w-2/3 rounded-full bg-muted" />
                      </div>
                      <div className="mt-6 grid grid-cols-2 gap-2">
                        <div className="h-20 rounded-lg bg-panel" />
                        <div className="h-20 rounded-lg bg-panel" />
                      </div>
                      <p className="absolute bottom-4 start-4 text-xs text-subtle">
                        {cap.title}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </Container>
          </Section>
        );
      })}

      <Section>
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="ذهنیت فنی"
              title="ابزار را برای مسئله انتخاب می‌کنیم"
              description="وقتی بین جلوه و پایداری تعارض باشد، پایداری برنده است — بدون اینکه زیبایی را کنار بگذاریم."
            />
          </Reveal>
        </Container>
      </Section>

      <FinalCtaSection />
    </>
  );
}
