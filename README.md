# وب‌سایت شخصی دکتر امیرمحمد فضل‌اللهی

وب‌سایت معرفی و رزومه یک دندانپزشک — فارسی، راست‌به‌چپ، ریسپانسیو و سئو‌شده.

**Stack:** Next.js 16 (App Router, static export-ready) · TypeScript · Tailwind CSS 4 · shadcn/ui-style primitives (Radix) · Lucide · Framer Motion (LazyMotion)

## اجرا

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## ویرایش محتوا

هیچ اطلاعاتی داخل کامپوننت‌ها هاردکد نشده است. همه‌چیز در پوشه `data/` است:

| فایل | محتوا |
| --- | --- |
| `data/doctor.ts` | نام، عنوان، معرفی، پرتره، ردیف اعتبارها، بخش «درباره من» و فلسفه درمان |
| `data/services.ts` | کارت‌های خدمات (آیکون، عنوان، توضیح کوتاه، جزئیات اختیاری) |
| `data/experience.ts` | تایم‌لاین سوابق (تحصیلات، کار، دوره، گواهی، افتخارات) |
| `data/contact.ts` | تلفن، واتساپ، اینستاگرام، ایمیل، آدرس، ساعات کاری، لینک‌های مسیریابی و لینک نوبت‌دهی |
| `data/cases.ts` | نمونه‌کارهای قبل/بعد |
| `data/site.ts` | دامنه، متادیتای سئو و روشن/خاموش کردن بخش‌ها |
| `i18n/dictionaries/fa.ts` | متن‌های رابط کاربری (دکمه‌ها، تیترها) |

### قرارداد placeholder

هر مقداری که داخل `[براکت]` است placeholder است و باید با اطلاعات واقعی و تأییدشده جایگزین شود.
تابع `isPlaceholder()` در `lib/utils.ts` این مقادیر را تشخیص می‌دهد و **مقادیر placeholder وارد schema.org (JSON-LD) نمی‌شوند**؛
بنابراین داده ناقص به گوگل نمی‌رسد. قبل از انتشار: `grep -rn "\[" data/`

### تصاویر

- پرتره: فایل را در `public/images/portrait.jpg` بگذارید و در `data/doctor.ts` مقدار `portrait.src` را `"/images/portrait.jpg"` کنید.
- قبل/بعد: در `public/images/cases/` و مقدار `src` هر مورد در `data/cases.ts`. فقط با رضایت کتبی بیمار منتشر شود.
- تصویر اشتراک‌گذاری (۱۲۰۰×۶۳۰): `public/og.jpg` و `site.seo.ogImage = "/og.jpg"`.

### مخفی کردن بخش‌ها

در `data/site.ts`:

```ts
features: { credentials: true, cases: false, mobileCtaBar: true }
```

## ساختار

```
app/          layout (فونت، متادیتا، JSON-LD)، page، sitemap، robots، manifest
sections/     Hero، Credentials، About، Services، Resume، Cases، Contact
components/   Header، MobileNav، Footer، MobileCtaBar، ImageFrame، Reveal، ui/ (Button، Dialog)
data/         تمام محتوای قابل ویرایش
i18n/         تنظیمات زبان و دیکشنری متن‌های رابط
lib/          utils و سازنده schema.org
hooks/        تشخیص بخش فعال و اسکرول
```

## افزودن زبان انگلیسی (بعداً)

1. `"en"` را به `locales` در `i18n/config.ts` اضافه کنید و `i18n/dictionaries/en.ts` را با همان type `Dictionary` بسازید.
2. محتوای `data/*.ts` را به فایل‌های per-locale منتقل کنید (مثلاً `data/en/services.ts`). فیلد `nameLatin` از قبل موجود است.
3. `app/page.tsx` را به `app/[locale]/page.tsx` ببرید و `dir`/`lang` را از `localeMeta` بخوانید.

## نکات فنی

- فونت Vazirmatn به‌صورت محلی (self-hosted) بارگذاری می‌شود؛ به Google Fonts وابسته نیست (در ایران قابل‌اعتمادتر است).
- صفحه کاملاً static prerender می‌شود و روی هر هاست استاتیک/Node قابل‌استقرار است.
- انیمیشن‌ها فقط fade-up ملایم هستند و تنظیم `prefers-reduced-motion` کاربر رعایت می‌شود.
- اهداف لمسی حداقل ۴۴–۴۸ پیکسل، اندازه پایه متن ۱۷px، لینک «رفتن به محتوای اصلی» و ساختار heading صحیح (یک `h1`).
- قبل از انتشار `site.url` را به دامنه واقعی تغییر دهید (canonical، sitemap و schema به آن وابسته‌اند).
