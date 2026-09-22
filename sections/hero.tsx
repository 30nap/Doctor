import { CalendarCheck, MapPin, MessageCircle } from "lucide-react";
import { doctor } from "@/data/doctor";
import { contact } from "@/data/contact";
import { sectionIds } from "@/data/navigation";
import { ImageFrame } from "@/components/image-frame";
import { Button } from "@/components/ui/button";
import { t } from "@/i18n";

export function Hero() {
  return (
    <section id={sectionIds.home} aria-labelledby="hero-title" className="relative overflow-hidden">
      {/* Soft background shape — decorative only */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-[-12rem] size-[36rem] rounded-full bg-primary-soft/60 blur-3xl md:left-[-6rem]"
      />

      <div className="container-page relative grid items-center gap-10 pt-6 pb-16 md:pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pt-16 lg:pb-24">
        <div className="order-2 lg:order-1">
          <p className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-1.5 text-sm text-ink-soft ring-1 ring-line">
            <span aria-hidden className="size-1.5 rounded-full bg-primary" />
            {doctor.specialty}
            <span aria-hidden className="text-line">|</span>
            {doctor.city}
          </p>

          <h1 id="hero-title" className="mt-5 text-[2.1rem] leading-[1.35] font-extrabold text-ink sm:text-5xl lg:text-[3.5rem]">
            {doctor.name}
          </h1>
          <p className="mt-3 text-xl font-medium text-primary md:text-2xl">{doctor.title}</p>

          <p className="mt-6 max-w-xl text-lg text-ink-soft md:text-[1.15rem]">{doctor.intro}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={contact.appointmentHref}>
                <CalendarCheck aria-hidden />
                {t.cta.appointment}
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="#contact">
                <MessageCircle aria-hidden />
                {t.cta.contactMe}
              </a>
            </Button>
          </div>
        </div>

        {/* Portrait */}
        <div className="order-1 mx-auto w-full max-w-[11.5rem] sm:max-w-xs lg:order-2 lg:max-w-none">
          <div className="relative">
            <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full rounded-b-4xl border border-primary/25" />
            <ImageFrame
              image={doctor.portrait}
              placeholderLabel={t.hero.portraitPlaceholder}
              priority
              sizes="(min-width: 1024px) 420px, 80vw"
              className="aspect-[4/5] rounded-t-full rounded-b-4xl bg-subtle shadow-soft"
            />
            <div className="absolute -bottom-5 right-1/2 flex translate-x-1/2 items-center gap-3 rounded-2xl bg-surface/95 px-4 py-3 whitespace-nowrap sm:translate-x-0 shadow-soft ring-1 ring-line backdrop-blur sm:right-[-1rem] sm:py-3">
              <span className="grid size-10 place-items-center rounded-full bg-sand-soft text-sand">
                <MapPin className="size-5" aria-hidden />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-semibold text-ink">{contact.clinicName}</span>
                <span className="block text-xs text-muted">{doctor.city}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
