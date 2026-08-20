import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "شرایط استفاده",
  description: "شرایط استفاده از وب‌سایت گویا.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Section className="pt-12 md:pt-16">
      <Container className="max-w-3xl prose-fa">
        <h1 className="text-3xl font-semibold tracking-tight">شرایط استفاده</h1>
        <p className="mt-5 text-muted">
          این صفحه یک پیش‌نویس قابل ویرایش است و جایگزین مشاورهٔ حقوقی نیست.
        </p>
        <h2 className="mt-10 text-xl font-semibold">محتوای سایت</h2>
        <p className="mt-3 text-muted">
          محتوای این وب‌سایت برای معرفی شرکت و محصولات گویا منتشر شده است.
          جزئیات محصولات ممکن است تغییر کند و نسخهٔ نهایی در قرارداد یا مستندات
          رسمی مشخص می‌شود.
        </p>
        <h2 className="mt-8 text-xl font-semibold">مسئولیت</h2>
        <p className="mt-3 text-muted">
          استفاده از اطلاعات عمومی سایت جایگزین گفتگو و توافق رسمی با گویا نیست.
        </p>
      </Container>
    </Section>
  );
}
