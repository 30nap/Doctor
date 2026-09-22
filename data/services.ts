import type { Service } from "./types";

/**
 * Services shown in the "خدمات" section.
 * - `icon`: one of the names in components/icons/service-icons.tsx
 * - `details`: optional — remove it to hide the "جزئیات" button for that card.
 * Descriptions are general placeholders; adjust them to the treatments you actually offer.
 */
export const services: Service[] = [
  {
    id: "consultation",
    icon: "consultation",
    title: "معاینه و مشاوره",
    summary: "بررسی کامل دهان و دندان و ارائه طرح درمان شفاف.",
    details: {
      description:
        "در جلسه نخست وضعیت دندان‌ها و لثه بررسی می‌شود و در صورت نیاز تصویربرداری انجام می‌گیرد. سپس گزینه‌های درمانی، ترتیب مراحل و هزینه تقریبی توضیح داده می‌شود.",
      points: ["معاینه کامل", "بررسی تصاویر رادیوگرافی", "طرح درمان مرحله‌به‌مرحله"],
    },
  },
  {
    id: "restoration",
    icon: "restoration",
    title: "ترمیم دندان",
    summary: "درمان پوسیدگی و شکستگی با مواد همرنگ دندان.",
    details: {
      description:
        "پوسیدگی برداشته می‌شود و دندان با کامپوزیت همرنگ بازسازی می‌شود تا هم عملکرد و هم ظاهر طبیعی آن حفظ شود.",
    },
  },
  {
    id: "scaling",
    icon: "cleaning",
    title: "جرم‌گیری و بروساژ",
    summary: "پاک‌سازی جرم و رنگ‌دانه‌ها برای لثه‌ای سالم‌تر.",
    details: {
      description:
        "جرم و پلاک سطح دندان و زیر لثه برداشته می‌شود و سطح دندان‌ها پولیش می‌شود. برای بیشتر افراد انجام آن هر شش ماه توصیه می‌شود.",
    },
  },
  {
    id: "root-canal",
    icon: "rootCanal",
    title: "درمان ریشه",
    summary: "حفظ دندان طبیعی و رفع درد با درمان عصب.",
    details: {
      description:
        "بافت عفونی یا آسیب‌دیده داخل ریشه پاک‌سازی و مسدود می‌شود تا دندان طبیعی حفظ شود و درد برطرف گردد.",
    },
  },
  {
    id: "smile-design",
    icon: "smile",
    title: "زیبایی و اصلاح طرح لبخند",
    summary: "هماهنگی فرم، رنگ و تناسب دندان‌ها با چهره شما.",
    details: {
      description:
        "با بررسی چهره، لب‌ها و دندان‌ها، طرحی متناسب برای بهبود ظاهر لبخند پیشنهاد می‌شود؛ از ترمیم‌های زیبایی تا لمینت و کامپوزیت ونیر.",
    },
  },
  {
    id: "whitening",
    icon: "whitening",
    title: "سفید کردن دندان",
    summary: "روشن‌تر شدن رنگ دندان‌ها به‌صورت کنترل‌شده و ایمن.",
    details: {
      description:
        "پس از معاینه و اطمینان از سلامت دندان و لثه، رنگ دندان‌ها در مطب یا با کیت خانگی زیر نظر دندانپزشک روشن‌تر می‌شود.",
    },
  },
  {
    id: "crown-prosthesis",
    icon: "crown",
    title: "روکش و پروتز",
    summary: "بازسازی دندان‌های آسیب‌دیده یا ازدست‌رفته.",
    details: {
      description:
        "برای دندان‌هایی که ساختار زیادی از دست داده‌اند روکش، و برای جایگزینی دندان‌های ازدست‌رفته انواع بریج و پروتز در نظر گرفته می‌شود.",
    },
  },
  {
    id: "prevention",
    icon: "prevention",
    title: "خدمات پیشگیرانه",
    summary: "فلوراید تراپی، فیشورسیلانت و آموزش بهداشت دهان.",
    details: {
      description:
        "پیشگیری ساده‌ترین و کم‌هزینه‌ترین درمان است. معاینه‌های دوره‌ای، فلوراید، سیلانت و آموزش مسواک و نخ دندان در این بخش قرار می‌گیرند.",
    },
  },
];
