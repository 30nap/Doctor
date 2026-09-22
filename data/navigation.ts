import { site } from "./site";
import { cases } from "./cases";

export type NavItem = { id: string; label: string; href: `#${string}` };

/** Section ids — shared by the navbar, footer and the sections themselves. */
export const sectionIds = {
  home: "home",
  about: "about",
  services: "services",
  resume: "resume",
  cases: "cases",
  contact: "contact",
} as const;

export const showCases = site.features.cases && cases.length > 0;

export const mainNav: NavItem[] = [
  { id: sectionIds.home, label: "خانه", href: "#home" },
  { id: sectionIds.about, label: "درباره من", href: "#about" },
  { id: sectionIds.services, label: "خدمات", href: "#services" },
  { id: sectionIds.resume, label: "سوابق", href: "#resume" },
  { id: sectionIds.contact, label: "ارتباط", href: "#contact" },
];
