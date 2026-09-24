import type { TimelineCategory, TimelineItem } from "./types";

/** Labels for the timeline filter. Order here = order of the filter chips. */
export const timelineCategories: Record<TimelineCategory, string> = {
  education: "تحصیلات",
  work: "سوابق کاری",
  course: "دوره‌ها",
  certification: "گواهینامه‌ها",
  achievement: "افتخارات",
};

/**
 * Resume timeline — newest first. `place` and `period` are optional.
 * A category with no items gets no filter chip.
 */
export const timeline: TimelineItem[] = [
  {
    id: "work-current",
    category: "work",
    title: "دندانپزشک عمومی",
    place: "درمانگاه نبوی (شهر ری)، کلینیک نسیم (قیطریه)، کلینیک تخصصی دنو (اندرزگو) — تهران",
    description: "۶ سال سابقه فعالیت در دندانپزشکی عمومی.",
  },
  {
    id: "course-wisdom-teeth",
    category: "course",
    title: "جراحی تخصصی دندان عقل نهفته",
  },
  {
    id: "course-prosthesis",
    category: "course",
    title: "انواع پروتزهای ثابت و متحرک",
  },
  {
    id: "course-complex-endo",
    category: "course",
    title: "درمان ریشه پیچیده",
  },
  {
    id: "course-retreatment",
    category: "course",
    title: "درمان ریشه مجدد تخصصی",
  },
  {
    id: "edu-dds",
    category: "education",
    title: "دکترای عمومی دندانپزشکی",
  },
];
