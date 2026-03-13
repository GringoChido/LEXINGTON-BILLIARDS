"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { href: "/pool-tables", label: "Pool Tables" },
  { href: "/hot-tubs-spas", label: "Hot Tubs" },
  { href: "/big-green-egg", label: "Big Green Egg" },
  { href: "/arcade-machines", label: "Arcade" },
  { href: "/bar-stools", label: "Bar Stools" },
  { href: "/service-repair", label: "Service" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export const SiteHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[var(--header-height-mobile)] lg:h-[var(--header-height)] bg-background/95 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-[var(--container-max)] h-full flex items-center justify-between px-4 sm:px-8 lg:px-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Lexington Billiards and Spas"
            width={44}
            height={44}
            className="w-11 h-11 object-contain"
          />
          <span className="font-heading font-semibold text-lg tracking-tight text-text hidden sm:block">
            LEXINGTON BILLIARDS
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body font-medium text-sm uppercase tracking-wide text-text-secondary hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:8592557639"
            className="flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors"
          >
            <Phone className="w-4 h-4" />
            (859) 255-7639
          </a>
          <Link
            href="/contact"
            className="bg-accent text-background font-medium text-sm px-6 h-10 rounded-xl flex items-center hover:bg-accent-hover transition-colors"
          >
            Visit Showroom
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="tel:8592557639"
            className="w-11 h-11 flex items-center justify-center text-text-secondary hover:text-accent transition-colors"
            aria-label="Call us"
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-11 h-11 flex items-center justify-center text-text"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[var(--header-height-mobile)] bg-background/98 backdrop-blur-sm lg:hidden"
          >
            <nav className="flex flex-col items-center justify-center gap-2 pt-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 px-8 font-heading font-bold text-2xl uppercase text-text hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-6"
              >
                <a
                  href="tel:8592557639"
                  className="bg-accent text-background font-medium text-lg px-8 h-12 rounded-xl flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  (859) 255-7639
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
