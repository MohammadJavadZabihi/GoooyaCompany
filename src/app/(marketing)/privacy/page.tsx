import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "حریم خصوصی",
  description: "سیاست حریم خصوصی وب‌سایت گویا.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Section className="pt-12 md:pt-16">
      <Container className="max-w-3xl prose-fa">
        <h1 className="text-3xl font-semibold tracking-tight">حریم خصوصی</h1>
        <p className="mt-5 text-muted">
          این صفحه یک پیش‌نویس قابل ویرایش است. سیاست نهایی حریم خصوصی باید توسط
          تیم حقوقی گویا تکمیل و منتشر شود.
        </p>
        <h2 className="mt-10 text-xl font-semibold">چه اطلاعاتی جمع می‌شود؟</h2>
        <p className="mt-3 text-muted">
          در نسخهٔ فعلی وب‌سایت، فرم تماس از طریق ایمیل کار می‌کند و داده‌ها روی
          سرور گویا ذخیره نمی‌شوند. پس از اتصال به بک‌اند، جزئیات جمع‌آوری داده
          در همین صفحه به‌روزرسانی خواهد شد.
        </p>
        <h2 className="mt-8 text-xl font-semibold">کوکی‌ها</h2>
        <p className="mt-3 text-muted">
          در صورت استفاده از ابزارهای تحلیلی یا کوکی‌های ضروری، فهرست آن‌ها و
          اهداف‌شان اینجا اعلام می‌شود.
        </p>
      </Container>
    </Section>
  );
}
