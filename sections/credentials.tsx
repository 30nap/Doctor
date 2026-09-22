import { doctor } from "@/data/doctor";
import { Reveal } from "@/components/motion";
import { t } from "@/i18n";

export function Credentials() {
  if (!doctor.credentials.length) return null;

  return (
    <section aria-label={t.credentials.heading} className="container-page">
      <Reveal>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-line ring-1 ring-line md:grid-cols-4">
          {doctor.credentials.map((item) => (
            <div key={item.label} className="flex flex-col-reverse justify-end gap-1 bg-surface px-5 py-6 md:px-7 md:py-8">
              <dt className="text-sm text-muted">{item.label}</dt>
              <dd className="text-2xl font-bold text-ink md:text-[1.75rem]">{item.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
