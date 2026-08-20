"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";

type FormState = {
  name: string;
  email: string;
  company: string;
  topic: string;
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  company: "",
  topic: "project",
  message: "",
};

const fieldClass =
  "w-full rounded-[var(--radius-md)] border border-border bg-background px-4 py-3 text-sm text-foreground transition-[border-color,box-shadow,background-color] placeholder:text-subtle focus:border-accent/50 focus:bg-elevated focus:outline-none focus:ring-[3px] focus:ring-[var(--accent-soft)]";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [submitted, setSubmitted] = useState(false);

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`پیام از وب‌سایت گویا — ${form.topic}`);
    const body = encodeURIComponent(
      `نام: ${form.name}\nایمیل: ${form.email}\nسازمان: ${form.company}\nموضوع: ${form.topic}\n\n${form.message}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-[var(--radius-xl)] border border-border bg-elevated p-10 text-center shadow-[var(--shadow-md)]">
        <p className="text-lg font-semibold">پیام آمادهٔ ارسال است</p>
        <p className="mt-3 text-sm leading-7 text-muted">
          کلاینت ایمیل باز می‌شود. پس از اتصال به بک‌اند، همین مسیر مستقیم ثبت
          خواهد شد.
        </p>
        <Button
          type="button"
          variant="secondary"
          className="mt-6"
          onClick={() => {
            setSubmitted(false);
            setForm(initial);
          }}
        >
          پیام دیگر
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative overflow-hidden rounded-[var(--radius-xl)] border border-border bg-elevated p-6 shadow-[var(--shadow-md)] md:p-8"
      noValidate
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-accent to-accent-bright"
        aria-hidden
      />
      <div className="mb-6">
        <h2 className="text-xl font-semibold tracking-tight">درخواست همکاری</h2>
        <p className="mt-2 text-sm text-muted">
          کوتاه بنویسید کافی است — جزئیات را در گفتگو روشن می‌کنیم.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="نام" htmlFor="name">
          <input
            id="name"
            name="name"
            required
            value={form.name}
            onChange={onChange}
            className={fieldClass}
            autoComplete="name"
            placeholder="نام شما"
          />
        </Field>
        <Field label="ایمیل" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={onChange}
            className={cn(fieldClass, "text-left")}
            autoComplete="email"
            dir="ltr"
            placeholder="you@company.com"
          />
        </Field>
        <Field label="سازمان" htmlFor="company">
          <input
            id="company"
            name="company"
            value={form.company}
            onChange={onChange}
            className={fieldClass}
            autoComplete="organization"
            placeholder="اختیاری"
          />
        </Field>
        <Field label="موضوع" htmlFor="topic">
          <select
            id="topic"
            name="topic"
            value={form.topic}
            onChange={onChange}
            className={fieldClass}
          >
            <option value="project">شروع پروژه</option>
            <option value="product">معرفی محصول</option>
            <option value="partnership">همکاری</option>
            <option value="other">سایر</option>
          </select>
        </Field>
      </div>
      <Field label="پیام" htmlFor="message" className="mt-5">
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={onChange}
          className={cn(fieldClass, "resize-y")}
          placeholder="مسئله یا ایده‌تان را در چند جمله بگویید..."
        />
      </Field>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" size="lg">
          ارسال پیام
        </Button>
        <p className="text-xs leading-6 text-subtle">
          فعلاً از طریق ایمیل — بدون ذخیره روی سرور.
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={className} htmlFor={htmlFor}>
      <span className="mb-2 block text-sm font-medium">{label}</span>
      {children}
    </label>
  );
}
