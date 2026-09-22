import { Link2, Mail, MapPin, Phone, Send } from "lucide-react";
import { contact, fullAddress, socialLinks } from "@/data/contact";
import { doctor } from "@/data/doctor";
import { mainNav } from "@/data/navigation";
import { InstagramIcon, WhatsAppIcon } from "@/components/icons/brand-icons";
import { Logo } from "@/components/logo";
import { t } from "@/i18n";

const socialIcons = {
  instagram: InstagramIcon,
  whatsapp: WhatsAppIcon,
  telegram: Send,
  email: Mail,
  linkedin: Link2,
};

export function SiteFooter() {
  const year = new Intl.DateTimeFormat("fa-IR-u-ca-persian", { year: "numeric" }).format(new Date());

  return (
    <footer className="bg-ink pb-24 text-canvas lg:pb-0">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-16">
        <div>
          <Logo inverse />
          <p className="mt-5 max-w-sm text-canvas/65">{doctor.intro}</p>
          <ul className="mt-6 flex gap-2" aria-label={t.footer.social}>
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.id];
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    target={link.id === "email" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="grid size-11 place-items-center rounded-full bg-canvas/8 text-canvas/80 ring-1 ring-canvas/10 transition-colors hover:bg-canvas hover:text-ink"
                  >
                    <Icon className="size-5" aria-hidden />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <nav aria-labelledby="footer-nav">
          <h2 id="footer-nav" className="text-sm font-semibold text-canvas/50">
            {t.footer.quickLinks}
          </h2>
          <ul className="mt-4 space-y-1">
            {mainNav.map((item) => (
              <li key={item.id}>
                <a href={item.href} className="inline-flex min-h-10 items-center text-canvas/80 transition-colors hover:text-canvas">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold text-canvas/50">{t.footer.contact}</h2>
          <ul className="mt-4 space-y-4 text-canvas/80">
            <li className="flex items-center gap-3">
              <Phone className="size-4 shrink-0 text-canvas/50" aria-hidden />
              <a href={contact.phoneHref} className="ltr hover:text-canvas">
                {contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-4 shrink-0 text-canvas/50" aria-hidden />
              <span className="ltr">{contact.email}</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-1.5 size-4 shrink-0 text-canvas/50" aria-hidden />
              <span>{fullAddress}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-canvas/10">
        <div className="container-page flex flex-col gap-2 py-6 text-sm text-canvas/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} — {doctor.name}. {t.footer.rights}
          </p>
          <p>
            {t.contact.eyebrow}: <span className="ltr">{contact.phone}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
