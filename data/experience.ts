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
 * Resume timeline — newest first. All entries below are placeholders.
 * Remove a category's items entirely and its filter chip disappears.
 */
export const timeline: TimelineItem[] = [
  {
    id: "work-current",
    category: "work",
    title: "دندانپزشک",
    place: "[نام کلینیک یا مطب]، [شهر]",
    period: "[سال شروع] — اکنون",
    description: "[شرح کوتاه مسئولیت‌ها و حوزه‌های اصلی درمان.]",
  },
  {
    id: "work-previous",
    category: "work",
    title: "[عنوان سمت]",
    place: "[نام مرکز درمانی]",
    period: "[سال] — [سال]",
    description: "[شرح کوتاه.]",
  },
  {
    id: "edu-dds",
    category: "education",
    title: "دکترای حرفه‌ای دندانپزشکی",
    place: "[نام دانشگاه]",
    period: "[سال] — [سال]",
    description: "[عنوان پایان‌نامه یا نکته قابل‌ذکر — اختیاری.]",
  },
  {
    id: "course-1",
    category: "course",
    title: "[عنوان دوره تخصصی]",
    place: "[برگزارکننده]",
    period: "[سال]",
  },
  {
    id: "course-2",
    category: "course",
    title: "[عنوان دوره تخصصی]",
    place: "[برگزارکننده]",
    period: "[سال]",
  },
  {
    id: "cert-1",
    category: "certification",
    title: "[عنوان گواهینامه]",
    place: "[مرجع صادرکننده]",
    period: "[سال]",
  },
  {
    id: "achievement-1",
    category: "achievement",
    title: "[عنوان دستاورد، مقاله یا ارائه علمی]",
    place: "[محل یا مجله]",
    period: "[سال]",
  },
];
