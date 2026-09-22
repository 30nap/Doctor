"use client";

import { CalendarCheck } from "lucide-react";
import { contact } from "@/data/contact";
import { mainNav } from "@/data/navigation";
import { useActiveSection, useScrolledPast } from "@/hooks/use-active-section";
import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";
import { Button } from "@/components/ui/button";
import { t } from "@/i18n";
import { cn } from "@/lib/utils";

const navIds = mainNav.map((item) => item.id);

export function SiteHeader() {
  const scrolled = useScrolledPast(12);
  const active = useActiveSection(navIds);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-300",
        scrolled
          ? "bg-canvas/85 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md supports-[backdrop-filter]:bg-canvas/75"
          : "bg-transparent",
      )}
    >
      <div className="container-page flex h-[4.5rem] items-center justify-between gap-6">
        <Logo />

        <nav aria-label="منوی اصلی" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "relative inline-flex h-11 items-center rounded-full px-4 text-[0.95rem] transition-colors",
                      isActive ? "font-semibold text-ink" : "text-ink-soft hover:text-ink",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-x-4 bottom-1.5 h-0.5 origin-center rounded-full bg-primary transition-transform duration-300",
                        isActive ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={contact.appointmentHref}>
              <CalendarCheck aria-hidden />
              {t.cta.appointment}
            </a>
          </Button>
          <MobileNav active={active} />
        </div>
      </div>
    </header>
  );
}
