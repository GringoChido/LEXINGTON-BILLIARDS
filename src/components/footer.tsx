"use client"

import Link from "next/link"
import { MapPin, Phone, Clock } from "lucide-react"
import { company, navLinks } from "@/lib/content/company"
import { FacebookIcon, InstagramIcon } from "@/components/social-icons"
import { useLanguage, type T } from "@/lib/i18n/context"

const companyLinks: { href: string; label: T }[] = [
  { href: "/about", label: { en: "About Us", es: "Nosotros" } },
  { href: "/contact", label: { en: "Contact", es: "Contacto" } },
  { href: "/contact", label: { en: "Service & Repair", es: "Servicio y Reparaci\u00f3n" } },
  { href: "/contact", label: { en: "Financing", es: "Financiamiento" } },
]

export const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="bg-dark border-t border-border-dark">
      <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)] pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="font-display font-bold text-base text-text-on-dark block mb-2">
              {company.name}
            </span>
            <p className="font-body text-text-on-dark/60 text-sm leading-relaxed mb-6">
              {t({ en: `${company.tagline}. Family-owned since ${company.established}.`, es: `Haz de tu hogar el mejor de la cuadra. Negocio familiar desde ${company.established}.` })}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-on-dark/60 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-on-dark/60 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="section-label mb-5">{t({ en: "Contact", es: "Contacto" })}</p>
            <ul className="space-y-3.5">
              <li>
                <a
                  href={company.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-text-on-dark/60 text-base font-body hover:text-primary transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-1 shrink-0 text-primary/50" />
                  {company.address.full}
                </a>
              </li>
              <li>
                <a
                  href={company.phone.href}
                  className="flex items-center gap-2.5 text-text-on-dark text-xl font-display font-bold hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 shrink-0 text-primary" />
                  {company.phone.display}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-text-on-dark/60 text-base font-body">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0 text-primary/50" />
                  <div>
                    <p>{company.hours.weekday}</p>
                    <p>{t({ en: company.hours.weekend, es: "Domingos Cerrado" })}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <p className="section-label mb-5">{t({ en: "Shop", es: "Tienda" })}</p>
            <ul className="space-y-3">
              {navLinks.filter((l) => l.href !== "/contact" && l.href !== "/about").map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-on-dark/60 text-sm font-body hover:text-primary transition-colors inline-block py-1"
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="section-label mb-5">{t({ en: "Company", es: "Empresa" })}</p>
            <ul className="space-y-3">
              {companyLinks.map((link, i) => (
                <li key={`${link.href}-${i}`}>
                  <Link
                    href={link.href}
                    className="text-text-on-dark/60 text-sm font-body hover:text-primary transition-colors inline-block py-1"
                  >
                    {t(link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-border-dark flex flex-col sm:flex-row justify-between items-center gap-2 text-text-on-dark/40 text-xs font-body">
          <p>&copy; {new Date().getFullYear()} {company.name}. {t({ en: "All rights reserved.", es: "Todos los derechos reservados." })}</p>
          <p>
            Built by{" "}
            <a
              href="https://untold.works"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Untold.works
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
