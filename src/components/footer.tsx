import Link from "next/link"
import { MapPin, Phone, Clock } from "lucide-react"

const quickLinks = [
  { href: "/pool-tables", label: "Pool Tables" },
  { href: "/hot-tubs-spas", label: "Hot Tubs & Spas" },
  { href: "/big-green-egg", label: "Big Green Egg" },
  { href: "/arcade-machines", label: "Arcade Machines" },
  { href: "/service-repair", label: "Service & Repair" },
  { href: "/contact", label: "Contact" },
]

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-[var(--content-max)] px-4 sm:px-8 lg:px-16 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <span className="text-3xl">🦆</span>
              <span className="font-heading font-semibold text-xl tracking-tight">
                Lexington Billiards & Spas
              </span>
            </div>
            <p className="mt-3 text-text-secondary text-sm">
              Family-owned since 1975
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left space-y-3">
            <h3 className="font-heading font-bold uppercase text-sm tracking-wider mb-4">
              Contact
            </h3>
            <a
              href="https://maps.google.com/?q=1431+Leestown+Rd+Lexington+KY+40511"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-text-secondary text-sm hover:text-text transition-colors justify-center md:justify-start"
            >
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              1431 Leestown Rd, Lexington, KY 40511
            </a>
            <a
              href="tel:8592557639"
              className="flex items-center gap-2 text-text-secondary text-sm hover:text-text transition-colors justify-center md:justify-start"
            >
              <Phone className="w-4 h-4 shrink-0" />
              (859) 255-7639
            </a>
            <div className="flex items-center gap-2 text-text-secondary text-sm justify-center md:justify-start">
              <Clock className="w-4 h-4 shrink-0" />
              Mon–Sat 10am–6pm
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="font-heading font-bold uppercase text-sm tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-2 text-text-tertiary text-xs">
          <p>&copy; {new Date().getFullYear()} Lexington Billiards and Spas</p>
          <p>
            Built by{" "}
            <a
              href="https://untold.works"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-secondary transition-colors"
            >
              Untold.works
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
