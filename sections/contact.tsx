import { Clock, Mail, MapPin, Navigation, Phone, Smartphone, type LucideIcon } from "lucide-react";
import { contact, emailHref, fullAddress, whatsappHref } from "@/data/contact";
import { doctor } from "@/data/doctor";
import { sectionIds } from "@/data/navigation";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons/brand-icons";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { t } from "@/i18n";
import { cn } from "@/lib/utils";

type InfoRow = {
  icon: LucideIcon | typeof InstagramIcon;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  ltr?: boolean;
};

const rows: InfoRow[] = [
  { icon: Phone, label: t.contact.phone, value: contact.phone, href: contact.phoneHref, ltr: true },
  { icon: Smartphone, label: t.contact.mobile, value: contact.mobile, href: whatsappHref, external: true, ltr: true },
  { icon: InstagramIcon, label: t.contact.instagram, value: contact.instagramHandle, href: contact.instagramUrl, external: true, ltr: true },
  { icon: Mail, label: t.contact.email, value: contact.email, href: emailHref, ltr: true },
];

export function Contact() {
  const [primaryMap, ...otherMaps] = contact.mapLinks;

  return (
    <section id={sectionIds.contact} aria-labelledby="contact-title" className="section">
      <div className="container-page">
        <Reveal>
          <SectionHeading id="contact-title" eyebrow={t.contact.eyebrow} title={t.contact.heading} lead={contact.appointmentNote} />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Details */}
          <Reveal className="rounded-4xl bg-surface p-6 ring-1 ring-line md:p-10">
            <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {rows.map(({ icon: Icon, label, value, href, external, ltr }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-start gap-4 rounded-2xl"
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary-faint text-primary ring-1 ring-primary-soft transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-muted">{label}</span>
                      <span className={cn("block truncate font-medium text-ink group-hover:text-primary", ltr && "ltr text-right")}>
                        {value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-8 border-t border-line pt-8">
              <div className="flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-sand-soft text-sand">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-sm text-muted">{t.contact.address}</h3>
                  <address className="mt-0.5 not-italic text-ink">
                    <span className="block font-medium">{contact.clinicName}</span>
                    {fullAddress}
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-sand-soft text-sand">
                  <Clock className="size-5" aria-hidden />
                </span>
                <div className="flex-1">
                  <h3 className="text-sm text-muted">{t.contact.hours}</h3>
                  <dl className="mt-1 space-y-1.5">
                    {contact.workingHours.map((row) => (
                      <div key={row.days} className="grid gap-x-4 sm:grid-cols-[9rem_1fr]">
                        <dt className="text-ink">{row.days}</dt>
                        <dd className={row.closed ? "text-muted" : "font-medium text-ink"}>{row.hours}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Actions */}
          <Reveal delay={0.08} className="relative flex flex-col overflow-hidden rounded-4xl bg-primary p-6 text-white md:p-10">
            <div aria-hidden className="pointer-events-none absolute -top-20 -left-20 size-64 rounded-full bg-white/10 blur-2xl" />
            <h3 className="relative text-2xl font-bold">{t.cta.appointment}</h3>
            <p className="relative mt-2 text-white/80">
              {doctor.shortName} — {contact.clinicName}
            </p>

            <div className="relative mt-8 grid gap-3">
              <Button asChild size="lg" variant="inverse" className="justify-between">
                <a href={contact.phoneHref}>
                  <span className="inline-flex items-center gap-3">
                    <Phone aria-hidden />
                    {t.cta.call}
                  </span>
                  <span className="ltr text-sm text-muted">{contact.phone}</span>
                </a>
              </Button>
              <Button asChild size="lg" variant="inverse-outline" className="justify-start">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon />
                  {t.cta.whatsapp}
                </a>
              </Button>
              {primaryMap && (
                <Button asChild size="lg" variant="inverse-outline" className="justify-start">
                  <a href={primaryMap.href} target="_blank" rel="noopener noreferrer">
                    <Navigation aria-hidden />
                    {t.cta.directions}
                  </a>
                </Button>
              )}
            </div>

            {otherMaps.length > 0 && (
              <div className="relative mt-auto pt-8">
                <p className="text-sm text-white/70">{t.contact.mapLinks}</p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {otherMaps.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center rounded-full bg-white/10 px-4 text-sm transition-colors hover:bg-white/20"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
