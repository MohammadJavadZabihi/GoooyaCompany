import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { values } from "@/data/capabilities";

const reasons = [
  {
    num: "01",
    title: "اول مسئله",
    description:
      "تکنولوژی را برای مسئله انتخاب می‌کنیم، نه برعکس. هر تصمیم باید به یک نتیجهٔ قابل لمس وصل شود.",
  },
  {
    num: "02",
    title: "کد برای فردا",
    description:
      "مرزهای روشن و وابستگی کنترل‌شده یعنی تغییر بعدی ارزان‌تر و کم‌ریسک‌تر است.",
  },
  {
    num: "03",
    title: "شفافیت کار",
    description:
      "وضعیت، محدودیت و تصمیم را واضح نگه می‌داریم تا همکاری واقعی شکل بگیرد.",
  },
];

export function WhyGooyaSection() {
  return (
    <Section className="border-y border-border bg-elevated/40">
      <Container>
        <Reveal>
          <p className="text-xs font-medium tracking-wide text-accent">
            چرا گویا
          </p>
          <h2 className="display-title mt-3 max-w-xl text-3xl font-semibold md:text-4xl">
            کیفیت را در جزئیات می‌بینید، نه در شعار
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-border bg-border md:grid-cols-3">
          {reasons.map((item, i) => (
            <Reveal key={item.num} delay={i * 70}>
              <div className="h-full bg-background p-6 md:p-8">
                <span className="font-mono text-xs text-accent">{item.num}</span>
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-6 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 40}>
              <p className="text-sm font-medium">{v.title}</p>
              <p className="mt-2 text-xs leading-6 text-muted">{v.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
