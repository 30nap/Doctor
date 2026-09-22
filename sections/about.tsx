import { Award, GraduationCap, Sparkles } from "lucide-react";
import { doctor } from "@/data/doctor";
import { sectionIds } from "@/data/navigation";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { t } from "@/i18n";
import { toFaDigits } from "@/lib/utils";

export function About() {
  const { about } = doctor;

  return (
    <section id={sectionIds.about} aria-labelledby="about-title" className="section">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* Story */}
          <Reveal>
            <SectionHeading id="about-title" eyebrow={t.about.eyebrow} title={about.heading} />
            <div className="mt-6 space-y-4 text-lg text-ink-soft">
              {about.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-ink">
                <Sparkles className="size-4 text-sand" aria-hidden />
                {t.about.interests}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {about.interests.map((interest) => (
                  <li key={interest} className="rounded-full bg-surface px-4 py-2 text-sm text-ink-soft ring-1 ring-line">
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Facts */}
          <Reveal delay={0.08} className="flex flex-col gap-6">
            <div className="rounded-3xl bg-surface p-6 ring-1 ring-line md:p-8">
              <h3 className="flex items-center gap-2 font-semibold text-ink">
                <GraduationCap className="size-5 text-primary" aria-hidden />
                {t.about.education}
              </h3>
              <dl className="mt-5 grid gap-x-6 gap-y-5 sm:grid-cols-2">
                {about.facts.map((fact) => (
                  <div key={fact.label} className="border-t border-line pt-4">
                    <dt className="text-sm text-muted">{fact.label}</dt>
                    <dd className="mt-1 font-medium text-ink">{fact.value}</dd>
                  </div>
                ))}
              </dl>

              {about.certifications.length > 0 && (
                <div className="mt-6 border-t border-line pt-5">
                  <h4 className="flex items-center gap-2 text-sm text-muted">
                    <Award className="size-4" aria-hidden />
                    {t.about.certifications}
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {about.certifications.map((cert) => (
                      <li key={cert} className="flex items-start gap-3 text-ink">
                        <span aria-hidden className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Reveal>
        </div>

        {/* Philosophy of care */}
        <Reveal className="mt-16 md:mt-24">
          <figure className="relative overflow-hidden rounded-4xl bg-ink px-6 py-10 text-canvas md:px-14 md:py-14">
            <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-primary/40 blur-3xl" />
            <p className="relative text-sm font-semibold text-canvas/60">{about.philosophy.title}</p>
            <blockquote className="relative mt-4 max-w-3xl text-xl leading-[1.9] font-medium md:text-2xl">
              «{about.philosophy.quote}»
            </blockquote>
            <figcaption className="sr-only">{doctor.name}</figcaption>

            <ol className="relative mt-10 grid gap-6 border-t border-canvas/15 pt-8 md:grid-cols-3 md:gap-10">
              {about.philosophy.principles.map((principle, i) => (
                <li key={principle.title}>
                  <span className="text-sm font-semibold text-sand">{toFaDigits(String(i + 1).padStart(2, "0"))}</span>
                  <h3 className="mt-2 text-lg font-semibold">{principle.title}</h3>
                  <p className="mt-1 text-canvas/70">{principle.text}</p>
                </li>
              ))}
            </ol>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
