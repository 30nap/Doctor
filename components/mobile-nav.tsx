"use client";

import { useRef, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ChevronLeft, Menu, Phone, X } from "lucide-react";
import { contact, whatsappHref } from "@/data/contact";
import { mainNav } from "@/data/navigation";
import { WhatsAppIcon } from "@/components/icons/brand-icons";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { t } from "@/i18n";
import { cn } from "@/lib/utils";

export function MobileNav({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  // The dialog locks page scroll while open, so in-page links are resolved
  // after it has fully closed instead of by the browser's default jump.
  const pendingHash = useRef<string | null>(null);

  const navigate = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const href = event.currentTarget.getAttribute("href");
    if (!href?.startsWith("#")) return;
    event.preventDefault();
    pendingHash.current = href;
    setOpen(false);
  };

  const scrollToPending = (event: Event) => {
    const hash = pendingHash.current;
    if (!hash) return;
    event.preventDefault();
    pendingHash.current = null;
    const target = document.getElementById(hash.slice(1));
    if (!target) return;
    history.pushState(null, "", hash);
    target.scrollIntoView({ block: "start" });
    target.focus?.({ preventScroll: true });
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Trigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label={t.menu.open}>
          <Menu aria-hidden />
        </Button>
      </DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-ink/30 backdrop-blur-[2px] data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out lg:hidden" />
        <DialogPrimitive.Content
          className="fixed inset-x-3 top-3 z-50 max-h-[calc(100dvh-1.5rem)] overflow-y-auto rounded-4xl bg-canvas p-5 shadow-lift outline-none data-[state=open]:animate-sheet-in data-[state=closed]:animate-fade-out lg:hidden"
          aria-describedby={undefined}
          onCloseAutoFocus={scrollToPending}
        >
          <div className="flex items-center justify-between">
            <DialogPrimitive.Title className="sr-only">{t.menu.title}</DialogPrimitive.Title>
            <Logo />
            <DialogPrimitive.Close asChild>
              <Button variant="ghost" size="icon" aria-label={t.menu.close}>
                <X aria-hidden />
              </Button>
            </DialogPrimitive.Close>
          </div>

          <nav aria-label="منوی موبایل" className="mt-6">
            <ul className="divide-y divide-line border-y border-line">
              {mainNav.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={navigate}
                    aria-current={active === item.id ? "true" : undefined}
                    className={cn(
                      "flex min-h-14 items-center justify-between px-1 text-lg transition-colors",
                      active === item.id ? "font-semibold text-primary" : "text-ink hover:text-primary",
                    )}
                  >
                    {item.label}
                    <ChevronLeft className="size-5 text-muted" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <Button asChild variant="secondary" size="lg">
              <a href={contact.phoneHref}>
                <Phone aria-hidden />
                {t.cta.call}
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                {t.cta.whatsapp}
              </a>
            </Button>
            <Button asChild size="lg" className="col-span-2">
              <a href={contact.appointmentHref} onClick={navigate}>
                {t.cta.appointment}
              </a>
            </Button>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
