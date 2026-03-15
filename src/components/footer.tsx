"use client"

import Link from "next/link"
import { MapPin, Phone, Clock } from "lucide-react"
import { company, navLinks } from "@/lib/content/company"
import { FacebookIcon, InstagramIcon } from "@/components/social-icons"

const companyLinks = [
  { href: "/contact", label: "Contact" },
  { href: "/contact", label: "Service & Repair" },
  { href: "/contact", label: "Financing" },
]

export const Footer = () => {
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
              {company.tagline}. Family-owned since {company.established}.
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
            <p className="section-label mb-5">Contact</p>
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
                    <p>{company.hours.weekend}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <p className="section-label mb-5">Shop</p>
            <ul className="space-y-3">
              {navLinks.filter((l) => l.href !== "/contact").map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-on-dark/60 text-sm font-body hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="section-label mb-5">Company</p>
            <ul className="space-y-3">
              {companyLinks.map((link, i) => (
                <li key={`${link.href}-${i}`}>
                  <Link
                    href={link.href}
                    className="text-text-on-dark/60 text-sm font-body hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-border-dark flex flex-col sm:flex-row justify-between items-center gap-2 text-text-on-dark/40 text-xs font-body">
          <p>&copy; {new Date().getFullYear()} {company.name}. All rights reserved.</p>
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
