import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";

export function AchievementsSection() {
  const items = [
    { label: "رویکرد", value: "محصول‌محور" },
    { label: "استاندارد", value: "مهندسی دقیق" },
    { label: "تمرکز", value: "اکوسیستم" },
    { label: "ارتباط", value: "شفاف" },
  ];

  return (
    <Section>
      <Container>
        <div className="grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 50}>
              <div className="bg-background px-6 py-8">
                <p className="text-[11px] text-subtle">{item.label}</p>
                <p className="mt-2 text-xl font-semibold tracking-tight">
                  {item.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
