import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import {
  getProjectBySlug,
  getProjectSlugs,
  projects,
} from "@/data/projects";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo/metadata";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return buildMetadata({
      title: "پروژه یافت نشد",
      description: "پروژه مورد نظر یافت نشد.",
      path: `/projects/${slug}`,
      noIndex: true,
    });
  }
  return buildMetadata({
    title: project.seo.title,
    description: project.seo.description,
    path: `/projects/${project.slug}`,
    keywords: project.seo.keywords,
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "خانه", path: "/" },
              { name: "پروژه‌ها", path: "/projects" },
              { name: project.name, path: `/projects/${project.slug}` },
            ]),
          ),
        }}
      />

      <section className="relative overflow-hidden gradient-mesh">
        <div className="pointer-events-none absolute inset-0 surface-grain opacity-60" />
        <Container className="relative py-16 md:py-20 lg:py-24">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <Badge tone="accent">{project.category}</Badge>
              <span className="text-sm text-subtle">{project.year}</span>
            </div>
            <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-5xl md:leading-[1.2]">
              {project.name}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
              {project.description}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div
              className="mt-12 aspect-[21/9] overflow-hidden rounded-[var(--radius-xl)] border border-border shadow-[var(--shadow-md)]"
              style={{
                background: `
                  radial-gradient(circle at 15% 30%, ${project.accent}28, transparent 40%),
                  linear-gradient(135deg, #e4ebf5, #f4f6f9)
                `,
              }}
            />
          </Reveal>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            {[
              { title: "چالش", body: project.challenge },
              { title: "راه‌حل", body: project.solution },
              { title: "نتیجه", body: project.impact },
            ].map((block, i) => (
              <Reveal key={block.title} delay={i * 70}>
                <div>
                  <p className="text-sm font-medium text-accent">{block.title}</p>
                  <p className="mt-4 text-sm leading-8 text-muted">{block.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl font-semibold">فناوری‌ها</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-elevated px-3 py-1 text-sm text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <Button href="/contact">پروژه مشابه دارید؟</Button>
        </Container>
      </Section>

      {related.length > 0 ? (
        <Section>
          <Container>
            <h2 className="mb-8 text-xl font-semibold">پروژه‌های مرتبط</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      <FinalCtaSection />
    </>
  );
}
