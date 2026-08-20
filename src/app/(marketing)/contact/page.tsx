import type { Metadata } from "next";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/constants/site";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "تماس با گویا",
  description:
    "برای شروع پروژه، معرفی محصول یا همکاری با تیم گویا در ارتباط باشید.",
  path: "/contact",
  keywords: ["تماس", "همکاری", "پروژه نرم‌افزاری"],
});

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "خانه", path: "/" },
              { name: "تماس", path: "/contact" },
            ]),
          ),
        }}
      />

      <PageHero
        align="center"
        eyebrow="تماس"
        title="بیایید چیزی بسازیم که دوام بیاورد"
        description="اول گوش می‌دهیم، بعد مسیر را روشن می‌کنیم."
      />

      <Section className="pt-8 md:pt-10">
        <Container className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-4 lg:col-span-5">
            <Reveal>
              <div className="rounded-[var(--radius-lg)] border border-border bg-elevated p-6">
                <div className="space-y-6">
                  <div className="flex gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-panel text-accent">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-medium">ایمیل</p>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="mt-1 block text-sm text-accent"
                        dir="ltr"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-panel text-accent">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-medium">موقعیت</p>
                      <p className="mt-1 text-sm text-muted">
                        {siteConfig.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-panel text-accent">
                      <MessageSquare className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-medium">موضوع‌ها</p>
                      <ul className="mt-2 space-y-1 text-sm text-muted">
                        <li>• شروع یا بازطراحی محصول</li>
                        <li>• استقرار محصولات گویا</li>
                        <li>• مشاوره معماری</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={60}>
              <div className="flex flex-wrap gap-2">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-border px-3 py-1.5 text-xs text-muted transition hover:text-foreground"
                >
                  LinkedIn
                </a>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-border px-3 py-1.5 text-xs text-muted transition hover:text-foreground"
                >
                  GitHub
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={80} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
