import type { MapLink, SocialLink, WorkingHour } from "./types";

/**
 * Contact & clinic information. Replace all [bracketed] values.
 * `phoneHref` / `whatsappNumber` must be in international format without spaces.
 */
export const contact = {
  clinicName: "[نام کلینیک یا مطب]",

  phone: "[۰۲۱ ۰۰۰۰ ۰۰۰۰]",
  phoneHref: "tel:+982100000000",

  mobile: "[۰۹۱۲ ۰۰۰ ۰۰۰۰]",
  whatsappNumber: "989120000000",

  email: "[email@example.com]",
  instagramHandle: "[instagram_handle]",
  instagramUrl: "https://instagram.com/",

  address: {
    city: "[شهر]",
    region: "[استان]",
    street: "[خیابان، کوچه، پلاک، طبقه، واحد]",
    postalCode: "[کد پستی]",
  },

  /** Coordinates for schema.org; leave null until known. */
  geo: null as { lat: number; lng: number } | null,

  workingHours: [
    { days: "شنبه تا چهارشنبه", hours: "[۱۰:۰۰ تا ۱۳:۰۰ و ۱۶:۰۰ تا ۲۰:۰۰]" },
    { days: "پنجشنبه", hours: "[۱۰:۰۰ تا ۱۳:۰۰]" },
    { days: "جمعه", hours: "تعطیل", closed: true },
  ] as WorkingHour[],

  /** First item powers the main "مسیریابی" button. */
  mapLinks: [
    { label: "گوگل مپ", href: "https://maps.google.com/?q=[آدرس]" },
    { label: "نشان", href: "https://nshn.ir/" },
    { label: "بلد", href: "https://balad.ir/" },
  ] as MapLink[],

  /**
   * Where "دریافت نوبت" points. Use a booking link (e.g. an online booking
   * page) or leave as "#contact" to scroll to the contact section.
   */
  appointmentHref: "#contact",

  appointmentNote:
    "برای دریافت نوبت در ساعات کاری تماس بگیرید یا در واتساپ پیام بگذارید.",
};

export const whatsappHref = `https://wa.me/${contact.whatsappNumber}`;
export const emailHref = `mailto:${contact.email.replace(/[[\]]/g, "")}`;

export const fullAddress = [
  contact.address.city,
  contact.address.street,
].join("، ");

export const socialLinks: SocialLink[] = [
  {
    id: "instagram",
    label: "اینستاگرام",
    href: contact.instagramUrl,
    handle: contact.instagramHandle,
  },
  {
    id: "whatsapp",
    label: "واتساپ",
    href: whatsappHref,
    handle: contact.mobile,
  },
  {
    id: "email",
    label: "ایمیل",
    href: emailHref,
    handle: contact.email,
  },
];
