import type { Credential, ImageAsset } from "./types";

/**
 * Personal & professional profile. Replace every [bracketed] value with
 * real, verified information before publishing.
 */
export const doctor = {
  name: "دکتر امیرمحمد فضل‌اللهی",
  shortName: "دکتر فضل‌اللهی",
  /** Latin spelling — used for schema.org and a future English version. */
  nameLatin: "Dr. Amir Mohammad Fazlollahi",
  initials: "ا ف",
  title: "دندانپزشک",
  specialty: "دندانپزشکی عمومی",
  city: "[شهر]",
  /** Medical council number (شماره نظام پزشکی). */
  licenseNumber: "[شماره نظام پزشکی]",

  intro:
    "باور دارم درمان خوب از گفت‌وگوی روشن شروع می‌شود؛ با حوصله توضیح می‌دهم، دقیق درمان می‌کنم و کنار شما می‌مانم تا لبخندی سالم و ماندگار داشته باشید.",

  portrait: {
    src: null,
    alt: "تصویر پرتره دکتر امیرمحمد فضل‌اللهی",
  } as ImageAsset,

  /** Compact trust row under the hero. Keep 3–4 items. */
  credentials: [
    { value: "[—] سال", label: "سابقه فعالیت" },
    { value: "[مدرک]", label: "دکترای حرفه‌ای دندانپزشکی" },
    { value: "[—]", label: "عضو نظام پزشکی" },
    { value: "[—]+", label: "بیمار راضی" },
  ] as Credential[],
};
