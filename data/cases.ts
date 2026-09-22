import type { CaseStudy } from "./types";

/**
 * Before / after cases. Put images in /public/images/cases/ and set `src`.
 * To hide the section entirely set `site.features.cases` to false
 * (or leave this array empty).
 *
 * Only publish photos with the patient's written consent.
 */
export const cases: CaseStudy[] = [
  {
    id: "case-1",
    title: "[عنوان درمان — مثلاً کامپوزیت ونیر]",
    description: "[توضیح کوتاه: مشکل اولیه، روش درمان و تعداد جلسات.]",
    before: { src: null, alt: "تصویر پیش از درمان" },
    after: { src: null, alt: "تصویر پس از درمان" },
  },
  {
    id: "case-2",
    title: "[عنوان درمان — مثلاً ترمیم دندان‌های جلو]",
    description: "[توضیح کوتاه درباره درمان.]",
    before: { src: null, alt: "تصویر پیش از درمان" },
    after: { src: null, alt: "تصویر پس از درمان" },
  },
  {
    id: "case-3",
    title: "[عنوان درمان — مثلاً سفید کردن دندان]",
    description: "[توضیح کوتاه درباره درمان.]",
    before: { src: null, alt: "تصویر پیش از درمان" },
    after: { src: null, alt: "تصویر پس از درمان" },
  },
];
