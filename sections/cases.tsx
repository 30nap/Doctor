import { cases } from "@/data/cases";
import { sectionIds, showCases } from "@/data/navigation";
import type { CaseStudy } from "@/data/types";
import { ImageFrame } from "@/components/image-frame";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { t } from "@/i18n";

/** Optional section — controlled by `site.features.cases` in data/site.ts. */
export function Cases() {
  if (!showCases) return null;

  return (
    <section id={sectionIds.cases} aria-labelledby="cases-title" className="section bg-surface">
      <div className="container-page">
        <Reveal>
          <SectionHeading id="cases-title" eyebrow={t.cases.eyebrow} title={t.cases.heading} lead={t.cases.lead} />
        </Reveal>

        <ul className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cases.map((item, i) => (
            <Reveal as="li" key={item.id} delay={i * 0.06}>
              <CaseCard item={item} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CaseCard({ item }: { item: CaseStudy }) {
  return (
    <article>
      <div className="grid grid-cols-2 gap-1.5 overflow-hidden rounded-3xl">
        {(
          [
            [item.before, t.cases.before],
            [item.after, t.cases.after],
          ] as const
        ).map(([image, label]) => (
          <ImageFrame
            key={label}
            image={image}
            placeholderLabel={`${t.cases.imagePlaceholder} ${label}`}
            sizes="(min-width: 1024px) 190px, (min-width: 768px) 25vw, 50vw"
            className="aspect-[3/4]"
          >
            <span className="absolute top-3 right-3 rounded-full bg-surface/90 px-3 py-1 text-xs font-semibold text-ink shadow-soft backdrop-blur">
              {label}
            </span>
          </ImageFrame>
        ))}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-ink">{item.title}</h3>
      <p className="mt-1 text-[0.95rem] text-ink-soft">{item.description}</p>
    </article>
  );
}
