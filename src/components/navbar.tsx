"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, MapPin, Clock } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { navLinks, company } from "@/lib/content/company"
import { FacebookIcon, InstagramIcon } from "@/components/social-icons"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/lib/i18n/context"

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      {/* ── TOP UTILITY BAR ── desktop only */}
      <div className="hidden lg:block" style={{ background: "rgba(20,18,16,0.95)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)] h-12 flex items-center justify-between">
          <Link
            href="/contact"
            className="flex items-center gap-2 text-text-on-dark/70 hover:text-white transition-colors group"
          >
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span className="text-[13px] font-medium group-hover:underline underline-offset-2">
              {company.address.full}
            </span>
          </Link>

          <div className="flex items-center gap-2 text-text-on-dark/60">
            <Clock className="w-3.5 h-3.5" />
            <span className="text-[13px] font-medium">{company.hours.weekday}</span>
          </div>

          <div className="flex items-center gap-5">
            <LanguageToggle />
            <div className="w-px h-4 bg-text-on-dark/20" />
            <a
              href={company.phone.href}
              className="flex items-center gap-2 text-primary font-display font-bold text-sm hover:text-primary/80 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {company.phone.display}
            </a>
            <div className="w-px h-4 bg-text-on-dark/20" />
            <div className="flex items-center gap-3">
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-on-dark/50 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-on-dark/50 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN NAV BAR ── */}
      <div
        className="border-b transition-colors duration-500"
        style={{ borderColor: scrolled ? "var(--color-border-dark)" : "rgba(255,255,255,0.08)" }}
      >
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="flex items-center h-[var(--header-height-mobile)] lg:h-[var(--header-height)]">
            <Link href="/" className="flex items-center gap-3 shrink-0 lg:w-[220px]">
              <Image
                src="/images/logo.webp"
                alt={company.name}
                width={48}
                height={48}
                className="w-12 h-12"
              />
              <span className="hidden sm:block font-display font-bold text-text-on-dark text-[15px] leading-tight tracking-tight">
                Lexington<br />
                Billiards
              </span>
            </Link>

            <nav className="hidden lg:flex items-center justify-center flex-1 gap-9">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-display font-semibold text-[12px] uppercase tracking-[0.08em] text-text-on-dark/65 hover:text-white transition-colors duration-300 whitespace-nowrap"
                >
                  {t(link.label)}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block w-[220px]" />

            {/* Mobile: language toggle + hamburger */}
            <div className="lg:hidden ml-auto flex items-center gap-1">
              <LanguageToggle />
              <button
                onClick={() => setOpen(!open)}
                className="w-11 h-11 flex items-center justify-center text-text-on-dark"
                aria-label={open ? "Close menu" : "Open menu"}
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:hidden bg-dark/98 backdrop-blur-xl border-t border-border-dark overflow-hidden"
          >
            <nav className="px-5 py-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3.5 font-display font-semibold text-[13px] uppercase tracking-wide text-text-on-dark/70 border-b border-border-dark hover:text-white transition-colors"
                  >
                    {t(link.label)}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                className="pt-5 space-y-4"
              >
                <a
                  href={company.phone.href}
                  className="btn-primary w-full text-center flex items-center justify-center gap-2"
                  onClick={() => setOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  {t({ en: "Call", es: "Llamar" })} {company.phone.display}
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 text-text-on-dark/60 text-sm hover:text-white transition-colors py-2"
                  onClick={() => setOpen(false)}
                >
                  <MapPin className="w-4 h-4" />
                  {company.address.full}
                </Link>
                <div className="flex items-center gap-2 justify-center pt-1">
                  <a
                    href={company.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center text-text-on-dark/60 hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={company.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center text-text-on-dark/60 hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
