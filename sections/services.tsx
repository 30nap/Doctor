import { ArrowLeft, Check } from "lucide-react";
import { services } from "@/data/services";
import { contact } from "@/data/contact";
import { sectionIds } from "@/data/navigation";
import type { Service } from "@/data/types";
import { serviceIcons } from "@/components/icons/service-icons";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { t } from "@/i18n";

export function Services() {
  return (
    <section id={sectionIds.services} aria-labelledby="services-title" className="section bg-surface">
      <div className="container-page">
        <Reveal>
          <SectionHeading id="services-title" eyebrow={t.services.eyebrow} title={t.services.heading} lead={t.services.lead} />
        </Reveal>

        <Reveal delay={0.05}>
          <ul className="mt-12 grid gap-px overflow-hidden rounded-4xl bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceItem key={service.id} service={service} />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceItem({ service }: { service: Service }) {
  const Icon = serviceIcons[service.icon];

  return (
    <li className="group grid grid-cols-[auto_1fr] gap-x-4 bg-surface p-5 transition-colors duration-300 hover:bg-primary-faint sm:flex sm:flex-col sm:p-6 md:p-7">
      <span className="row-span-3 grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
        <Icon className="size-[1.4rem]" aria-hidden />
      </span>
      <h3 className="text-lg font-semibold text-ink sm:mt-5">{service.title}</h3>
      <p className="mt-1.5 flex-1 text-[0.95rem] text-ink-soft">{service.summary}</p>

      {service.details && (
        <Dialog>
          <DialogTrigger asChild>
            <button
              type="button"
              className="mt-2 inline-flex min-h-11 sm:mt-4 items-center gap-1.5 self-start rounded-full text-sm font-medium text-primary transition-[gap] hover:gap-2.5"
            >
              {t.cta.details}
              <span className="sr-only"> {service.title}</span>
              <ArrowLeft className="size-4" aria-hidden />
            </button>
          </DialogTrigger>
          <DialogContent>
            <span className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary">
              <Icon className="size-[1.4rem]" aria-hidden />
            </span>
            <DialogTitle className="mt-5 text-xl font-bold text-ink">{service.title}</DialogTitle>
            <DialogDescription className="mt-3 text-ink-soft">{service.details.description}</DialogDescription>
            {service.details.points && (
              <ul className="mt-5 space-y-2.5">
                {service.details.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-ink">
                    <span className="grid size-6 place-items-center rounded-full bg-primary-soft text-primary">
                      <Check className="size-3.5" aria-hidden />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            )}
            <div className="mt-8">
              <DialogClose asChild>
                <Button asChild className="w-full sm:w-auto">
                  <a href={contact.appointmentHref}>{t.cta.appointment}</a>
                </Button>
              </DialogClose>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </li>
  );
}
