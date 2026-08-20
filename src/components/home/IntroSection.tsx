import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function IntroSection() {
  return (
    <Section className="border-y border-border">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <Reveal>
            <p className="text-xs font-medium tracking-wide text-accent">
              گویا چیست؟
            </p>
            <h2 className="display-title mt-3 max-w-xl text-3xl font-semibold md:text-4xl lg:text-[2.75rem]">
              یک شرکت محصول‌محور برای ساخت سامانه‌هایی که بعد از انتشار هم کار می‌کنند
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex h-full flex-col justify-end border-s border-border ps-0 lg:ps-8">
              <p className="text-sm leading-8 text-muted md:text-base">
                معماری، تجربه و عملیات را جدا نمی‌بینیم. اگر محصول فقط در دمو
                بدرخشد، برای ما تمام نشده. معیار ما استفادهٔ واقعی است.
              </p>
              <Button href="/about" variant="secondary" className="mt-6 w-fit">
                بیشتر درباره گویا
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
