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

  about: {
    heading: "دندانپزشکی با دقت، آرامش و توضیح شفاف",
    bio: [
      "[متن کوتاه بیوگرافی — دو یا سه جمله درباره مسیر حرفه‌ای، محل فعالیت فعلی و حوزه‌هایی که بیشتر روی آن‌ها تمرکز دارید.]",
      "[یک جمله درباره اینکه چرا دندانپزشکی را انتخاب کردید یا چه چیزی در این کار برایتان معنادار است.]",
    ],
    facts: [
      { label: "دانشگاه", value: "[نام دانشگاه]" },
      { label: "مدرک", value: "[دکترای حرفه‌ای دندانپزشکی (DDS)]" },
      { label: "سال فارغ‌التحصیلی", value: "[سال]" },
      { label: "نظام پزشکی", value: "[شماره نظام پزشکی]" },
    ],
    certifications: ["[گواهی یا دوره تخصصی اول]", "[گواهی یا دوره تخصصی دوم]"],
    interests: [
      "[زمینه مورد علاقه — مثلاً دندانپزشکی زیبایی]",
      "[درمان‌های محافظه‌کارانه]",
      "[دندانپزشکی دیجیتال]",
    ],
    philosophy: {
      title: "نگاه من به درمان",
      quote:
        "[جمله‌ای کوتاه درباره فلسفه مراقبت از بیمار — مثلاً: هر درمان با شنیدن شروع می‌شود و با اطمینان بیمار به پایان می‌رسد.]",
      principles: [
        { title: "شنیدن پیش از درمان", text: "هر طرح درمان با شناخت نیاز و نگرانی شما آغاز می‌شود." },
        { title: "توضیح شفاف", text: "گزینه‌ها، هزینه‌ها و مراحل پیش از شروع روشن گفته می‌شوند." },
        { title: "حفظ بافت طبیعی", text: "تا جای ممکن، کم‌تهاجمی‌ترین راه انتخاب می‌شود." },
      ],
    },
  },
};
