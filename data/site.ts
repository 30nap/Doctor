/**
 * Site-wide settings: domain, SEO and feature switches.
 */
export const site = {
  /** Final production domain — used for canonical URLs, sitemap and schema. */
  url: "https://30nap.github.io/Doctor",
  locale: "fa_IR",

  seo: {
    title: "دکتر امیرمحمد فضل‌اللهی | دندانپزشک در تهران",
    titleTemplate: "%s | دکتر امیرمحمد فضل‌اللهی",
    description:
      "دکتر امیرمحمد فضل‌اللهی، دندانپزشک عمومی در تهران (شهر ری، قیطریه، اندرزگو) — درمان ریشه، ترمیم، جراحی دندان عقل، پروتز و دندانپزشکی اطفال.",
    keywords: [
      "دندانپزشک",
      "دندانپزشک در تهران",
      "دندانپزشک شهر ری",
      "دندانپزشک قیطریه",
      "دندانپزشک اندرزگو",
      "دکتر امیرمحمد فضل‌اللهی",
      "ترمیم دندان",
      "درمان ریشه",
      "جراحی دندان عقل",
      "پروتز دندان",
      "دندانپزشکی اطفال",
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
