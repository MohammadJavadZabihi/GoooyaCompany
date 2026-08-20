import type { Metadata } from "next";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { projects } from "@/data/projects";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "پروژه‌ها",
  description:
    "مطالعات موردی گویا؛ نمونه‌هایی از طراحی و توسعه سامانه‌ها و محصولات دیجیتال.",
  path: "/projects",
  keywords: ["نمونه کار", "پروژه نرم‌افزاری", "مطالعه موردی"],
});

export default function ProjectsPage() {
  const [featured, ...rest] = projects;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "خانه", path: "/" },
              { name: "پروژه‌ها", path: "/projects" },
            ]),
          ),
        }}
      />

      <PageHero
        eyebrow="پروژه‌ها"
        title="کارهایی که با دقت جلو رفته‌اند"
        description="هر مورد یک داستان مسئله‌حل‌کنی است — نه گالری تصویر. جزئیات کمی ساختگی اضافه نشده؛ محتوای واقعی قابل جایگزینی است."
      />

      <Section className="pt-4 md:pt-6">
        <Container>
          {!featured ? (
            <p className="rounded-[var(--radius-lg)] border border-dashed border-border-strong px-6 py-16 text-center text-muted">
              هنوز پروژه‌ای برای نمایش ثبت نشده است.
            </p>
          ) : (
            <div className="space-y-6">
              <Reveal>
                <ProjectCard project={featured} featured />
              </Reveal>
              {rest.length > 0 ? (
                <div className="grid gap-6 lg:grid-cols-2">
                  {rest.map((project, i) => (
                    <Reveal key={project.slug} delay={i * 80}>
                      <ProjectCard project={project} />
                    </Reveal>
                  ))}
                </div>
              ) : null}
            </div>
          )}
        </Container>
      </Section>

      <Section tone="muted">
        <Container className="max-w-2xl">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight">
              چطور پروژه‌ها را انتخاب می‌کنیم
            </h2>
            <p className="mt-4 text-base leading-8 text-muted">
              اولویت با مسائلی است که معماری، تجربه و عملیات را هم‌زمان درگیر
              می‌کنند. اگر فقط یک صفحهٔ زیبا بخواهید، جای درست نیست؛ اگر محصولی
              می‌خواهید که دوام بیاورد، هستیم.
            </p>
          </Reveal>
        </Container>
      </Section>

      <FinalCtaSection />
    </>
  );
}
