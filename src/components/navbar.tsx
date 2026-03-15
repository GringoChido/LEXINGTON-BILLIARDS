"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { navLinks, company } from "@/lib/content/company"
import { FacebookIcon, InstagramIcon } from "@/components/social-icons"

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/95 backdrop-blur-md border-b border-border-dark"
          : "bg-transparent"
      }`}
    >
      {/* Announcement bar — desktop only */}
      <div className="hidden lg:flex items-center justify-between bg-dark border-b border-border-dark px-[var(--section-px)] h-9">
        <p className="text-[11px] text-text-on-dark/60 font-body tracking-wide">
          Est. {company.established}&nbsp;&nbsp;|&nbsp;&nbsp;{company.hours.weekday}&nbsp;&nbsp;|&nbsp;&nbsp;{company.phone.display}
        </p>
        <div className="flex items-center gap-3">
          <a
            href={company.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-on-dark/50 hover:text-text-on-dark transition-colors"
            aria-label="Facebook"
          >
            <FacebookIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href={company.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-on-dark/50 hover:text-text-on-dark transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Main nav bar */}
      <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
        <div className="flex items-center justify-between h-[var(--header-height-mobile)] lg:h-[var(--header-height)]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo.png"
              alt={company.name}
              width={36}
              height={36}
              className="w-9 h-9"
            />
            <span className="hidden sm:block font-heading font-semibold text-text-on-dark text-sm tracking-tight">
              {company.shortName}
            </span>
          </Link>

          {/* Desktop center nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-heading font-semibold text-[13px] uppercase tracking-wide text-text-on-dark/70 hover:text-white transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop right: social + phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-on-dark/60 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href={company.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-on-dark/60 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href={company.phone.href}
              className="flex items-center gap-1.5 text-primary text-sm font-heading font-semibold hover:text-primary/80 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {company.phone.display}
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-text-on-dark"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
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
                    className="block py-3 font-heading font-semibold text-[13px] uppercase tracking-wide text-text-on-dark/70 border-b border-border-dark hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.3 }}
                className="pt-5 flex flex-col gap-4"
              >
                <a
                  href={company.phone.href}
                  className="btn-primary w-full text-center"
                  onClick={() => setOpen(false)}
                >
                  <Phone className="w-4 h-4 inline mr-2" />
                  Call {company.phone.display}
                </a>
                <div className="flex items-center gap-4 justify-center pt-1">
                  <a
                    href={company.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-on-dark/60 hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={company.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-on-dark/60 hover:text-white transition-colors"
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
