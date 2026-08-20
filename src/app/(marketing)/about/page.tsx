import type { Metadata } from "next";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { timeline, values } from "@/data/capabilities";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "درباره گویا",
  description:
    "داستان، باورها و فلسفهٔ ساخت نرم‌افزار در شرکت گویا.",
  path: "/about",
  keywords: ["درباره گویا", "شرکت نرم‌افزاری", "ماموریت"],
});

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "خانه", path: "/" },
              { name: "درباره گویا", path: "/about" },
            ]),
          ),
        }}
      />

      <PageHero
        eyebrow="درباره گویا"
        title="نرم‌افزار را مثل یک حرفه می‌بینیم، نه یک خروجی سریع"
        description="گویا برای تیم‌هایی است که می‌خواهند محصول‌شان دقیق، قابل اتکا و انسانی باشد — نه فقط مدرن به نظر برسد."
        backgroundImage="/images/about-hero.jpg"
        backgroundAlt="همکاری تیمی در ساخت محصول"
      />

      <Section>
        <Container className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="text-sm font-medium text-accent">داستان ما</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              چرا خیلی از محصولات شکننده‌اند؟
            </h2>
          </Reveal>
          <Reveal delay={80} className="lg:col-span-7">
            <div className="prose-fa max-w-none text-base leading-8 text-muted md:text-lg">
              <p>
                چون معماری، تجربه و عملیات اغلب جدا از هم جلو می‌روند. دمو خوب
                می‌شود؛ استفادهٔ واقعی نه.
              </p>
              <p>
                گویا از این نقطه شروع شد: هر سه را هم‌زمان جدی بگیریم. امروز روی
                محصولاتی کار می‌کنیم که بتوانند در طول زمان رشد کنند — نه فقط در
                روز ارائه بدرخشند.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="muted">
        <Container className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <div className="h-full border-s-2 border-accent ps-6">
              <h2 className="text-xl font-semibold">مأموریت</h2>
              <p className="mt-4 text-sm leading-8 text-muted md:text-base">
                تبدیل مسئله‌های پیچیده به محصولات دیجیتال واضح و پایدار —
                با احترام به کاربر واقعی و محدودیت‌های کسب‌وکار.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="h-full border-s-2 border-navy/30 ps-6">
              <h2 className="text-xl font-semibold">چشم‌انداز</h2>
              <p className="mt-4 text-sm leading-8 text-muted md:text-base">
                ساختن اکوسیستمی از محصولات فارسی‌زبان که استاندارد کیفیت را بالا
                ببرد و کار دیجیتال را ساده‌تر کند.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="باورها"
              title="آنچه برای ما غیرقابل مذاکره است"
              className="mb-12"
            />
          </Reveal>
          <div className="grid gap-10 sm:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 60}>
                <div className="flex gap-5">
                  <span className="text-3xl font-semibold text-accent/30">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{value.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="نحوه ساخت"
              title="فلسفهٔ توسعه"
              description="توسعه یعنی طراحی تصمیم‌ها: چه چیزی ساخته شود، چه چیزی نه، و چه چیزی بعداً قابل تغییر بماند."
            />
            <div className="prose-fa mt-6 text-muted">
              <p>
                تیم خوب تیم شلوغ نیست. تیمی است که مسئولیت را شفاف می‌فهمد،
                بازخورد را جدی می‌گیرد و برای کیفیت زمان می‌گذارد.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ol className="relative space-y-0 border-s border-border-strong ps-8">
              {timeline.map((item, i) => (
                <li key={item.title} className="relative pb-10 last:pb-0">
                  <span className="absolute -start-[2.15rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-elevated" />
                  <p className="text-xs font-medium text-accent">{item.year}</p>
                  <p className="mt-1 font-semibold">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                  {i < timeline.length - 1 ? null : null}
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl text-center">
          <Reveal>
            <p className="text-sm font-medium text-accent">حرف آخر</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              اگر جدی بودن را در جزئیات می‌بینید، هم‌مسیریم.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted">
              گویا جایی برای هیاهوی توخالی نیست. جایی برای ساختن چیزهایی است که
              مردم واقعاً به آن‌ها تکیه می‌کنند.
            </p>
          </Reveal>
        </Container>
      </Section>

      <FinalCtaSection />
    </>
  );
}
