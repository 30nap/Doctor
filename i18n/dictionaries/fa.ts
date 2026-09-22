/** Interface strings (buttons, labels, headings). Content lives in /data. */
export const fa = {
  skipToContent: "رفتن به محتوای اصلی",
  menu: { open: "باز کردن منو", close: "بستن منو", title: "منوی سایت" },
  cta: {
    appointment: "دریافت نوبت",
    contactMe: "ارتباط با من",
    call: "تماس",
    whatsapp: "واتساپ",
    directions: "مسیریابی",
    details: "جزئیات",
    close: "بستن",
  },
  hero: {
    portraitPlaceholder: "جای تصویر پرتره",
  },
  credentials: { heading: "خلاصه سوابق" },
  about: {
    eyebrow: "درباره من",
    education: "تحصیلات و مدارک",
    certifications: "گواهی‌ها",
    interests: "علایق حرفه‌ای",
  },
  services: {
    eyebrow: "خدمات",
    heading: "آنچه در مطب انجام می‌دهم",
    lead: "از معاینه و پیشگیری تا درمان‌های ترمیمی و زیبایی؛ هر درمان پس از معاینه و با توضیح کامل آغاز می‌شود.",
  },
  resume: {
    eyebrow: "سوابق",
    heading: "تحصیلات و مسیر حرفه‌ای",
    all: "همه",
    filterLabel: "فیلتر سوابق",
  },
  cases: {
    eyebrow: "نمونه درمان‌ها",
    heading: "پیش و پس از درمان",
    lead: "نمونه‌هایی از درمان‌های انجام‌شده؛ تصاویر با رضایت بیماران منتشر می‌شوند.",
    before: "قبل",
    after: "بعد",
    imagePlaceholder: "جای تصویر",
  },
  contact: {
    eyebrow: "ارتباط",
    heading: "برای نوبت یا مشاوره در تماس باشید",
    phone: "تلفن مطب",
    mobile: "موبایل و واتساپ",
    instagram: "اینستاگرام",
    email: "ایمیل",
    address: "آدرس",
    hours: "ساعات کاری",
    mapLinks: "مسیریابی با",
  },
  footer: {
    quickLinks: "دسترسی سریع",
    contact: "اطلاعات تماس",
    social: "شبکه‌های اجتماعی",
    rights: "تمامی حقوق محفوظ است.",
  },
} as const;

export type Dictionary = typeof fa;
