import type { ClinicLocation, SocialLink } from "./types";

/**
 * Contact & clinic information.
 * `phoneHref` / `whatsappNumber` must be in international format without spaces.
 */
export const contact = {
  /** Work line — used for calls and WhatsApp. */
  phone: "۰۹۳۳ ۱۹۰ ۸۱۷۳",
  phoneHref: "tel:+989331908173",
  whatsappNumber: "989331908173",

  instagramHandle: "dr_amir_fazlollahi",
  instagramUrl: "https://instagram.com/dr_amir_fazlollahi",

  city: "تهران",
  region: "تهران",

  /**
   * Clinics where the doctor works. `mapHref` currently opens a Google Maps
   * search — replace it with the clinic's exact pin link when available.
   */
  locations: [
    {
      name: "درمانگاه نبوی",
      area: "شهر ری",
      mapHref: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("درمانگاه نبوی شهر ری تهران"),
    },
    {
      name: "کلینیک نسیم",
      area: "قیطریه",
      mapHref: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("کلینیک نسیم قیطریه تهران"),
    },
    {
      name: "کلینیک تخصصی دنو",
      area: "اندرزگو",
      mapHref: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("کلینیک تخصصی دنو اندرزگو تهران"),
    },
  ] as ClinicLocation[],

  hoursNote: "برای اطلاع از روزها و ساعات حضور، با درمانگاه مربوطه تماس بگیرید.",

  /**
   * Where "دریافت نوبت" points. Use a booking link (e.g. an online booking
   * page) or leave as "#contact" to scroll to the contact section.
   */
  appointmentHref: "#contact",

  appointmentNote: "برای دریافت نوبت با خط کاری تماس بگیرید یا در واتساپ پیام بگذارید.",
};

export const whatsappHref = `https://wa.me/${contact.whatsappNumber}`;

/** Short "area · area · area" line used in compact places (hero card). */
export const locationAreas = contact.locations.map((l) => l.area).join(" · ");

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
    handle: contact.phone,
  },
];
