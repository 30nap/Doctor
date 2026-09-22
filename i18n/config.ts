/**
 * Locale setup. Only Persian ships today. To add English later:
 *  1. add "en" to `locales` and a dictionary in i18n/dictionaries/en.ts
 *  2. move content from data/*.ts into per-locale files (e.g. data/en/services.ts)
 *  3. move app/page.tsx under app/[locale]/ and pass the locale down.
 */
export const locales = ["fa"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fa";

export const localeMeta: Record<Locale, { dir: "rtl" | "ltr"; htmlLang: string; ogLocale: string }> = {
  fa: { dir: "rtl", htmlLang: "fa-IR", ogLocale: "fa_IR" },
};
