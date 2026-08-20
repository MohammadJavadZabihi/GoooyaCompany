import { ArrowLeft } from "lucide-react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const [featured, ...rest] = projects;

  return (
    <Section tone="muted">
      <Container>
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="پروژه‌ها"
              title="نمونه‌هایی از کار جدی"
              description="هر مورد یک مطالعهٔ کوتاه است. جزئیات کمی ساختگی اضافه نشده."
            />
          </Reveal>
          <Reveal delay={80}>
            <Button href="/projects" variant="secondary">
              همه پروژه‌ها
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Reveal>
        </div>
        <div className="space-y-5">
          {featured ? (
            <Reveal>
              <ProjectCard project={featured} featured />
            </Reveal>
          ) : null}
          {rest.length > 0 ? (
            <div className="grid gap-5 lg:grid-cols-2">
              {rest.map((project, i) => (
                <Reveal key={project.slug} delay={80 + i * 60}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
