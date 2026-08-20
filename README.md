# گویا — وب‌سایت شرکتی

وب‌سایت رسمی فرانت‌اند شرکت نرم‌افزاری گویا.

## پشتهٔ فنی

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Motion-ready architecture (IntersectionObserver + CSS)
- SEO: Metadata API, sitemap, robots, JSON-LD

## اجرا

```bash
npm install
npm run dev
```

## ساختار

- `src/app` — مسیرها و SEO
- `src/components` — UI و بخش‌ها
- `src/data` — داده‌های محصولات/پروژه‌ها (آمادهٔ جایگزینی با API/CMS)
- `src/lib` — ثابت‌ها، SEO و ابزارها
- `src/types` — تایپ‌ها

## افزودن محصول

کافی است یک آبجکت به `src/data/products.ts` اضافه کنید. صفحهٔ `/products/[slug]` به‌صورت خودکار ساخته می‌شود.
