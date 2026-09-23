"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { Award, BookOpen, Briefcase, GraduationCap, Trophy, type LucideIcon } from "lucide-react";
import { timeline, timelineCategories } from "@/data/experience";
import { sectionIds } from "@/data/navigation";
import type { TimelineCategory } from "@/data/types";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { t } from "@/i18n";
import { cn } from "@/lib/utils";

const categoryIcons: Record<TimelineCategory, LucideIcon> = {
  education: GraduationCap,
  work: Briefcase,
  course: BookOpen,
  certification: Award,
  achievement: Trophy,
};

type Filter = TimelineCategory | "all";

// Only offer chips for categories that actually have entries.
const categories = (Object.keys(timelineCategories) as TimelineCategory[]).filter((c) =>
  timeline.some((item) => item.category === c),
);

export function Resume() {
  const [filter, setFilter] = useState<Filter>("all");

  const items = filter === "all" ? timeline : timeline.filter((i) => i.category === filter);

  return (
    <section id={sectionIds.resume} aria-labelledby="resume-title" className="section">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading id="resume-title" eyebrow={t.resume.eyebrow} title={t.resume.heading} />

          <div role="group" aria-label={t.resume.filterLabel} className="mt-8 flex flex-wrap gap-2">
            {(["all", ...categories] as Filter[]).map((key) => {
              const selected = filter === key;
              return (
                <button
                  key={key}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setFilter(key)}
                  className={cn(
                    "min-h-11 rounded-full px-4 text-sm transition-colors",
                    selected
                      ? "bg-ink text-canvas"
                      : "bg-surface text-ink-soft ring-1 ring-line hover:text-ink hover:ring-ink/25",
                  )}
                >
                  {key === "all" ? t.resume.all : timelineCategories[key]}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Re-keyed on filter change so entries fade in again. */}
        <ol key={filter} className="relative border-r border-line pr-8 md:pr-10">
            {items.map((item, index) => {
              const Icon = categoryIcons[item.category];
              return (
                <m.li
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: Math.min(index, 4) * 0.05 }}
                  className="relative pb-10 last:pb-0"
                >
                  <span
                    aria-hidden
                    className="absolute top-0.5 -right-[3.125rem] grid size-9 place-items-center rounded-full bg-canvas text-primary ring-1 ring-line md:-right-[3.625rem]"
                  >
                    <Icon className="size-4" />
                  </span>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    {item.period && <span className="text-sm text-muted">{item.period}</span>}
                    <span className="rounded-full bg-primary-soft px-2.5 py-0.5 text-xs font-medium text-primary">
                      {timelineCategories[item.category]}
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-ink">{item.title}</h3>
                  {item.place && <p className="text-ink-soft">{item.place}</p>}
                  {item.description && <p className="mt-2 text-[0.95rem] text-muted">{item.description}</p>}
                </m.li>
              );
            })}
        </ol>
      </div>
    </section>
  );
}
