"use client";

import { useEffect, useState } from "react";
import { CalendarCheck, Phone } from "lucide-react";
import { contact, whatsappHref } from "@/data/contact";
import { sectionIds } from "@/data/navigation";
import { WhatsAppIcon } from "@/components/icons/brand-icons";
import { t } from "@/i18n";
import { cn } from "@/lib/utils";

/**
 * Compact contact bar pinned to the bottom on small screens. Appears after
 * the hero and hides while the contact section is on screen.
 */
export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(sectionIds.home);
    const contactSection = document.getElementById(sectionIds.contact);
    let heroVisible = true;
    let contactVisible = false;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === hero) heroVisible = entry.isIntersecting;
        if (entry.target === contactSection) contactVisible = entry.isIntersecting;
      }
      setVisible(!heroVisible && !contactVisible);
    });

    if (hero) observer.observe(hero);
    if (contactSection) observer.observe(contactSection);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-[transform,opacity] duration-300 lg:hidden",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0",
      )}
      aria-hidden={!visible}
    >
      <div className="mx-auto flex max-w-md items-center gap-2 rounded-full bg-surface/95 p-1.5 shadow-lift ring-1 ring-line backdrop-blur">
        <a
          href={contact.appointmentHref}
          tabIndex={visible ? 0 : -1}
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-primary font-medium text-white transition-colors hover:bg-primary-strong"
        >
          <CalendarCheck className="size-5" aria-hidden />
          {t.cta.appointment}
        </a>
        <a
          href={contact.phoneHref}
          tabIndex={visible ? 0 : -1}
          aria-label={t.cta.call}
          className="grid size-12 place-items-center rounded-full text-ink ring-1 ring-line transition-colors hover:bg-primary-faint"
        >
          <Phone className="size-5" aria-hidden />
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? 0 : -1}
          aria-label={t.cta.whatsapp}
          className="grid size-12 place-items-center rounded-full text-ink ring-1 ring-line transition-colors hover:bg-primary-faint"
        >
          <WhatsAppIcon className="size-5" />
        </a>
      </div>
    </div>
  );
}
