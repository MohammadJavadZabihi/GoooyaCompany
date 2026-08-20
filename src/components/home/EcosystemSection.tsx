import { EcosystemVisual } from "@/components/home/EcosystemVisual";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function EcosystemSection() {
  return (
    <Section className="border-y border-border bg-elevated/30">
      <Container>
        <Reveal>
          <div className="mx-auto mb-12 max-w-xl text-center">
            <p className="text-xs font-medium tracking-wide text-accent">
              اکوسیستم
            </p>
            <h2 className="display-title mt-3 text-3xl font-semibold md:text-4xl">
              از هسته تا کاربر نهایی
            </h2>
            <p className="mt-3 text-sm leading-7 text-muted">
              لایه‌ها جدا نیستند؛ مثل یک control plane به هم وصل‌اند.
            </p>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <EcosystemVisual />
        </Reveal>
      </Container>
    </Section>
  );
}
