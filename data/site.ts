/**
 * Site-wide settings: domain, SEO and feature switches.
 */
export const site = {
  /** Final production domain — used for canonical URLs, sitemap and schema. */
  url: "https://30nap.github.io/Doctor",
  locale: "fa_IR",

  seo: {
    title: "دکتر امیرمحمد فضل‌اللهی | دندانپزشک در [شهر]",
    titleTemplate: "%s | دکتر امیرمحمد فضل‌اللهی",
    description:
      "وب‌سایت شخصی دکتر امیرمحمد فضل‌اللهی، دندانپزشک در [شهر] — معرفی خدمات، سوابق، ساعات کاری و راه‌های دریافت نوبت در [نام کلینیک].",
    keywords: [
      "دندانپزشک",
      "دندانپزشک در [شهر]",
      "دکتر امیرمحمد فضل‌اللهی",
      "ترمیم دندان",
      "درمان ریشه",
      "جرم‌گیری",
      "طراحی لبخند",
      "سفید کردن دندان",
      "روکش دندان",
    ],
    /** Place a 1200×630 image at /public/og.jpg and set it here. */
    ogImage: null as string | null,
  },

  /** Turn whole sections on or off without touching components. */
  features: {
    credentials: true,
    cases: false,
    mobileCtaBar: true,
  },
} as const;
