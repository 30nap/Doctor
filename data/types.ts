import type { ServiceIconName } from "@/components/icons/service-icons";

/**
 * Shared content types. Every editable piece of text on the site lives in
 * the files next to this one — components only read from them.
 *
 * Convention: anything wrapped in [brackets] is a placeholder that still
 * needs real information. `isPlaceholder()` in lib/utils.ts detects it, and
 * placeholder values are kept out of structured data (JSON-LD).
 */

export type ImageAsset = {
  /** Path under /public (e.g. "/images/portrait.jpg") or null to show a placeholder. */
  src: string | null;
  alt: string;
};

export type Credential = {
  value: string;
  label: string;
};

export type Service = {
  id: string;
  icon: ServiceIconName;
  title: string;
  summary: string;
  /** Optional longer text shown in the "details" dialog. Omit to hide the button. */
  details?: {
    description: string;
    points?: string[];
  };
};

export type TimelineCategory =
  | "education"
  | "work"
  | "course"
  | "certification"
  | "achievement";

export type TimelineItem = {
  id: string;
  category: TimelineCategory;
  title: string;
  place: string;
  period: string;
  description?: string;
};

export type CaseStudy = {
  id: string;
  title: string;
  description: string;
  before: ImageAsset;
  after: ImageAsset;
};

export type WorkingHour = {
  days: string;
  hours: string;
  closed?: boolean;
};

export type MapLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  id: "instagram" | "whatsapp" | "telegram" | "email" | "linkedin";
  label: string;
  href: string;
  handle: string;
};
