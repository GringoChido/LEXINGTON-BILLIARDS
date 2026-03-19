"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Clock, Mail } from "lucide-react"
import { company } from "@/lib/content/company"
import { FacebookIcon, InstagramIcon } from "@/components/social-icons"
import { useLanguage, type T } from "@/lib/i18n/context"

const contactInfo = [
  {
    icon: MapPin,
    label: { en: "Address", es: "Direcci\u00f3n" } as T,
    value: company.address.full,
    href: company.address.mapsUrl,
    external: true,
  },
  {
    icon: Phone,
    label: { en: "Phone", es: "Tel\u00e9fono" } as T,
    value: company.phone.display,
    href: company.phone.href,
    external: false,
  },
  {
    icon: Clock,
    label: { en: "Hours", es: "Horario" } as T,
    value: company.hours.full,
    href: undefined,
    external: false,
  },
  {
    icon: Mail,
    label: { en: "Email", es: "Correo" } as T,
    value: "info@lexbilliards.com",
    href: "mailto:info@lexbilliards.com",
    external: false,
  },
]

const inputClasses =
  "w-full bg-white border border-border rounded-lg px-4 py-3 text-sm text-text placeholder:text-text-muted outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-colors"

export const ContactContent = () => {
  const { t } = useLanguage()

  return (
    <>
      <section className="pt-[calc(var(--header-height)+3rem)] pb-[var(--section-py)] bg-background">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label mb-4">{t({ en: "Get in Touch", es: "Cont\u00e1ctanos" })}</p>
            <h1 className="heading text-[length:var(--text-h1)] text-text mb-4">
              {t({ en: "Come See for Yourself", es: "Ven a Verlo T\u00fa Mismo" })}
            </h1>
            <p className="text-text-secondary text-base lg:text-lg leading-relaxed max-w-[52ch] mb-8">
              {t({
                en: "The best way to choose a pool table, spa, or grill is to experience it in person. Our showroom is always open \u2014 and the coffee\u2019s always on.",
                es: "La mejor manera de elegir una mesa de billar, spa o parrilla es experimentarla en persona. Nuestro showroom siempre est\u00e1 abierto \u2014 y el caf\u00e9 siempre est\u00e1 listo.",
              })}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href={company.phone.href}
              className="heading text-4xl sm:text-5xl lg:text-6xl text-primary hover:text-primary-hover transition-colors duration-200 inline-block mb-6"
            >
              {company.phone.display}
            </a>
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-6 text-text-secondary text-sm">
              <span>{company.hours.weekday}</span>
              <span className="hidden sm:inline text-border">|</span>
              <span>{t({ en: company.hours.weekend, es: "Domingos Cerrado" })}</span>
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

      <section className="pb-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative aspect-[4/3] bg-surface mb-8 overflow-hidden rounded-xl border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.5!2d-84.5290!3d38.0618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884259a913571a0b%3A0x5b0de47fb3d9e3f7!2s1431%20Leestown%20Rd%2C%20Lexington%2C%20KY%2040511!5e0!3m2!1sen!2sus!4v1710000000000"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t({ en: "Lexington Billiards & Spas location", es: "Ubicaci\u00f3n de Lexington Billiards & Spas" })}
                />
              </div>

              <div className="space-y-5 mb-8">
                {contactInfo.map((item) => (
                  <div key={t(item.label)} className="flex items-start gap-3">
                    <item.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-accent text-xs font-medium tracking-widest uppercase text-text-muted mb-0.5">
                        {t(item.label)}
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

              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <span className="font-accent text-xs font-medium tracking-widest uppercase text-text-muted">
                  {t({ en: "Follow Us", es: "S\u00edguenos" })}
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

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="heading text-[length:var(--text-h3)] text-text mb-2">
                {t({ en: "Send Us a Message", es: "Env\u00edanos un Mensaje" })}
              </h2>
              <p className="text-text-secondary text-sm mb-6">
                {t({ en: "We\u2019ll get back to you within one business day.", es: "Te responderemos en un d\u00eda h\u00e1bil." })}
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
                    <label htmlFor="name" className="sr-only">{t({ en: "Name", es: "Nombre" })}</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      placeholder={t({ en: "Name", es: "Nombre" })}
                      required
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">{t({ en: "Email", es: "Correo electr\u00f3nico" })}</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder={t({ en: "Email", es: "Correo electr\u00f3nico" })}
                      required
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="sr-only">{t({ en: "Phone", es: "Tel\u00e9fono" })}</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder={t({ en: "Phone (optional)", es: "Tel\u00e9fono (opcional)" })}
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="sr-only">{t({ en: "Interest", es: "Inter\u00e9s" })}</label>
                  <select
                    id="interest"
                    name="interest"
                    className={inputClasses}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {t({ en: "What are you interested in?", es: "\u00bfQu\u00e9 te interesa?" })}
                    </option>
                    <option value="pool-tables">{t({ en: "Pool Tables", es: "Mesas de Billar" })}</option>
                    <option value="hot-tubs">{t({ en: "Hot Tubs & Spas", es: "Jacuzzis y Spas" })}</option>
                    <option value="big-green-egg">Big Green Egg</option>
                    <option value="arcade">Arcade</option>
                    <option value="accessories">{t({ en: "Accessories", es: "Accesorios" })}</option>
                    <option value="service">{t({ en: "Service & Repair", es: "Servicio y Reparaci\u00f3n" })}</option>
                    <option value="other">{t({ en: "Other", es: "Otro" })}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">{t({ en: "Message", es: "Mensaje" })}</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder={t({ en: "Your message", es: "Tu mensaje" })}
                    rows={5}
                    required
                    className={inputClasses}
                  />
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  {t({ en: "Send Message", es: "Enviar Mensaje" })}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
