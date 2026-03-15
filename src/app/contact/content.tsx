"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Clock, Mail } from "lucide-react"
import { company } from "@/lib/content/company"
import { FacebookIcon, InstagramIcon } from "@/components/social-icons"

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: company.address.full,
    href: company.address.mapsUrl,
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: company.phone.display,
    href: company.phone.href,
    external: false,
  },
  {
    icon: Clock,
    label: "Hours",
    value: company.hours.full,
    href: undefined,
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@lexbilliards.com",
    href: "mailto:info@lexbilliards.com",
    external: false,
  },
]

const inputClasses =
  "w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-text-muted outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-colors"

export const ContactContent = () => {
  return (
    <>
      {/* Hero — phone as the star */}
      <section className="pt-[calc(var(--header-height)+3rem)] pb-[var(--section-py)] bg-background">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label mb-4">Get in Touch</p>
            <h1
              className="heading text-[length:var(--text-h1)] text-text mb-4"
            >
              Come See for Yourself
            </h1>
            <p className="text-text-secondary text-base lg:text-lg leading-relaxed max-w-[52ch] mb-8">
              The best way to choose a pool table, spa, or grill is to experience it in person.
              Our showroom is always open — and the coffee&apos;s always on.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href={company.phone.href}
              className="font-heading font-[800] text-4xl sm:text-5xl lg:text-6xl text-primary tracking-tight hover:text-primary-hover transition-colors duration-200 inline-block mb-6"
            >
              {company.phone.display}
            </a>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-6 text-text-secondary text-sm">
              <span>{company.hours.weekday}</span>
              <span className="hidden sm:inline text-border">|</span>
              <span>{company.hours.weekend}</span>
              <span className="hidden sm:inline text-border">|</span>
              <a
                href={company.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                {company.address.full}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map + Info + Form */}
      <section className="pb-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left — map + contact info + social */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Map embed */}
              <div className="relative aspect-[4/3] bg-surface mb-8 overflow-hidden rounded-xl border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.5!2d-84.5290!3d38.0618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884259a913571a0b%3A0x5b0de47fb3d9e3f7!2s1431%20Leestown%20Rd%2C%20Lexington%2C%20KY%2040511!5e0!3m2!1sen!2sus!4v1710000000000"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lexington Billiards & Spas location"
                />
              </div>

              {/* Contact info list */}
              <div className="space-y-5 mb-8">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <item.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          className="text-text text-sm hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-text text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <span className="text-xs font-semibold tracking-widest uppercase text-text-muted">
                  Follow Us
                </span>
                <a
                  href={company.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a
                  href={company.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Right — contact form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="heading text-[length:var(--text-h3)] text-text mb-2">
                Send Us a Message
              </h2>
              <p className="text-text-secondary text-sm mb-6">
                We&apos;ll get back to you within one business day.
              </p>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="sr-only">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Phone (optional)"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="sr-only">Interest</label>
                  <select
                    id="interest"
                    name="interest"
                    className={inputClasses}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      What are you interested in?
                    </option>
                    <option value="pool-tables">Pool Tables</option>
                    <option value="hot-tubs">Hot Tubs & Spas</option>
                    <option value="big-green-egg">Big Green Egg</option>
                    <option value="arcade">Arcade</option>
                    <option value="accessories">Accessories</option>
                    <option value="service">Service & Repair</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    required
                    className={inputClasses}
                  />
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
