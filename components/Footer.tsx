import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { siteConfig, footerNav } from "@/lib/site";
import { Logo } from "@/components/Logo";

export function Footer() {
  const year = 2026; // Mettez à jour ou rendez dynamique selon vos besoins.
  const { contact } = siteConfig;

  return (
    <footer className="border-t border-white/10 bg-primary text-primary-foreground">
      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Présentation */}
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              {siteConfig.description}
            </p>
          </div>

          {/* Formation */}
          <nav aria-label="Liens formation">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/90">
              Formation
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerNav.formation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Le CFA + légal */}
          <nav aria-label="Liens CFA">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/90">
              Le CFA
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[...footerNav.cfa, ...footerNav.legal].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Coordonnées */}
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/90">
              Nous trouver
            </h2>
            <address className="mt-4 space-y-3 text-sm not-italic text-white/70">
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  {contact.address.line1}
                  <br />
                  {contact.address.postalCode} {contact.address.city}
                </span>
              </p>
              <p>
                <a
                  href={`tel:${contact.phoneHref}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Phone className="size-4 shrink-0 text-accent" aria-hidden="true" />
                  {contact.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-white"
                >
                  <Mail className="size-4 shrink-0 text-accent" aria-hidden="true" />
                  {contact.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. Tous droits réservés.
          </p>
          <div className="flex gap-5">
            {footerNav.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
