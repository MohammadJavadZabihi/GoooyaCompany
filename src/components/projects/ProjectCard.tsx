import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/utils/cn";

type ProjectCardProps = {
  project: Project;
  className?: string;
  featured?: boolean;
};

export function ProjectCard({
  project,
  className,
  featured = false,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-border bg-elevated shadow-[var(--shadow-sm)] transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-[var(--shadow-md)]",
        className,
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden border-b border-border",
          featured ? "aspect-[21/9] min-h-[12rem]" : "aspect-[16/10]",
        )}
      >
        <div
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.02]"
          style={{
            background: `
              radial-gradient(circle at 20% 20%, ${project.accent}30, transparent 45%),
              linear-gradient(145deg, #e4ebf5, #f4f6f9 55%, #e8eef6)
            `,
          }}
        />
        <div className="absolute inset-0 flex items-end justify-between p-5">
          <span className="rounded-md border border-border bg-elevated/90 px-2.5 py-1 text-[11px] text-muted shadow-[var(--shadow-sm)]">
            {project.category}
          </span>
          <span className="text-[11px] text-subtle">{project.year}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3
          className={cn(
            "font-semibold tracking-tight",
            featured ? "text-xl md:text-2xl" : "text-lg",
          )}
        >
          {project.name}
        </h3>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-7 text-muted">
          {project.shortDescription}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, featured ? 4 : 3).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-panel px-2 py-0.5 text-[10px] text-subtle"
            >
              {tech}
            </span>
          ))}
        </div>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          مطالعه موردی
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
