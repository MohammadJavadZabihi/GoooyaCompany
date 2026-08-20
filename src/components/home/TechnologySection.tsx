import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { capabilities } from "@/data/capabilities";

export function TechnologySection() {
  return (
    <Section>
      <Container>
        <div className="mb-10 flex items-end justify-between gap-6">
          <Reveal>
            <p className="text-xs font-medium tracking-wide text-accent">
              توانایی‌ها
            </p>
            <h2 className="display-title mt-3 text-3xl font-semibold md:text-4xl">
              مهندسی با خروجی مشخص
            </h2>
          </Reveal>
          <Reveal delay={60}>
            <Link
              href="/technology"
              className="hidden items-center gap-1.5 text-sm text-accent sm:inline-flex"
            >
              جزئیات
              <ArrowLeft className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.id} delay={(i % 3) * 50}>
              <article className="group h-full bg-background p-6 transition-colors hover:bg-elevated md:p-7">
                <div className="mb-4 h-px w-8 bg-accent/60 transition-all group-hover:w-12" />
                <h3 className="text-[15px] font-semibold">{cap.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {cap.description}
                </p>
                <p className="mt-4 text-[11px] text-subtle">
                  {cap.stack.slice(0, 3).join(" · ")}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
