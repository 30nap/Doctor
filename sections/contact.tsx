import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { contact, whatsappHref } from "@/data/contact";
import { sectionIds } from "@/data/navigation";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons/brand-icons";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { t } from "@/i18n";

const rows = [
  { icon: Phone, label: t.contact.phone, value: contact.phone, href: contact.phoneHref, external: false },
  { icon: WhatsAppIcon, label: t.contact.whatsapp, value: contact.phone, href: whatsappHref, external: true },
  { icon: InstagramIcon, label: t.contact.instagram, value: `@${contact.instagramHandle}`, href: contact.instagramUrl, external: true },
];

export function Contact() {
  return (
    <section id={sectionIds.contact} aria-labelledby="contact-title" className="section">
      <div className="container-page">
        <Reveal>
          <SectionHeading id="contact-title" eyebrow={t.contact.eyebrow} title={t.contact.heading} lead={contact.appointmentNote} />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Clinics */}
          <Reveal className="rounded-4xl bg-surface p-6 ring-1 ring-line md:p-10">
            <h3 className="flex items-center gap-2 font-semibold text-ink">
              <MapPin className="size-5 text-sand" aria-hidden />
              {t.contact.locations} — {contact.city}
            </h3>

            <ul className="mt-5 divide-y divide-line border-y border-line">
              {contact.locations.map((location) => (
                <li key={location.name}>
                  <a
                    href={location.mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-18 items-center justify-between gap-4 py-4"
                  >
                    <span>
                      <span className="block font-semibold text-ink group-hover:text-primary">{location.name}</span>
                      <span className="block text-sm text-muted">
                        {location.area}، {contact.city}
                      </span>
                    </span>
                    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-primary-faint px-4 py-2 text-sm font-medium text-primary ring-1 ring-primary-soft transition-colors group-hover:bg-primary group-hover:text-white">
                      <Navigation className="size-4" aria-hidden />
                      {t.cta.directions}
                      <span className="sr-only"> {location.name}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-sand-soft text-sand">
                <Clock className="size-5" aria-hidden />
              </span>
              <div>
                <h3 className="text-sm text-muted">{t.contact.hours}</h3>
                <p className="mt-0.5 text-ink">{contact.hoursNote}</p>
              </div>
            </div>
          </Reveal>

          {/* Actions */}
          <Reveal delay={0.08} className="relative flex flex-col overflow-hidden rounded-4xl bg-primary p-6 text-white md:p-10">
            <div aria-hidden className="pointer-events-none absolute -top-20 -left-20 size-64 rounded-full bg-white/10 blur-2xl" />
            <h3 className="relative text-2xl font-bold">{t.cta.appointment}</h3>
            <p className="relative mt-2 text-white/80">{t.contact.workLine}</p>

            <ul className="relative mt-8 grid gap-3">
              {rows.map(({ icon: Icon, label, value, href, external }, i) => (
                <li key={label}>
                  <Button asChild size="lg" variant={i === 0 ? "inverse" : "inverse-outline"} className="w-full justify-between">
                    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                      <span className="inline-flex items-center gap-3">
                        <Icon aria-hidden />
                        {label}
                      </span>
                      <span className={`ltr text-sm ${i === 0 ? "text-muted" : "text-white/70"}`}>{value}</span>
                    </a>
                  </Button>
                </li>
              ))}
            </ul>

          </Reveal>
        </div>
      </div>
    </section>
  );
}
