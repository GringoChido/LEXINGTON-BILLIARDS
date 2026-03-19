"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { useLanguage, type T } from "@/lib/i18n/context"

const testimonialItems: { quote: T; author: string; location: string }[] = [
  {
    quote: {
      en: "We bought our first pool table from Greg\u2019s dad in 1982. Just bought our third from Greg. That tells you everything about this family.",
      es: "Compramos nuestra primera mesa de billar del pap\u00e1 de Greg en 1982. Acabamos de comprar la tercera con Greg. Eso te dice todo sobre esta familia.",
    },
    author: "Mike R.",
    location: "Georgetown, KY",
  },
  {
    quote: {
      en: "They delivered and installed our hot tub in a single afternoon. Two years later, it still runs perfectly. Best purchase we\u2019ve ever made for our home.",
      es: "Entregaron e instalaron nuestro jacuzzi en una sola tarde. Dos a\u00f1os despu\u00e9s, sigue funcionando perfectamente. La mejor compra que hemos hecho para nuestro hogar.",
    },
    author: "Sarah & Tom L.",
    location: "Lexington, KY",
  },
  {
    quote: {
      en: "I priced tables online for months. Lexington Billiards matched the price and gave me free delivery, free installation, and 29 cloth color choices. No contest.",
      es: "Busqu\u00e9 precios de mesas en l\u00ednea por meses. Lexington Billiards igualó el precio y me dieron entrega gratis, instalaci\u00f3n gratis y 29 opciones de color de pa\u00f1o. Sin competencia.",
    },
    author: "James K.",
    location: "Richmond, KY",
  },
]

export const Testimonials = () => {
  const { t } = useLanguage()

  return (
    <section className="py-[var(--section-py)]" style={{ background: "var(--color-surface)" }}>
      <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
        <SectionHeading
          label={t({ en: "From Our Customers", es: "De Nuestros Clientes" })}
          headline={t({ en: "50 Years of Happy Homes", es: "50 A\u00f1os de Hogares Felices" })}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialItems.map((item, i) => (
            <motion.blockquote
              key={item.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const }}
              className="relative bg-white rounded-xl p-8 border"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div className="flex gap-1.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <div key={j} className="relative w-5 h-5">
                    <Image src="/images/logo.webp" alt="" fill className="object-contain" sizes="20px" />
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
                &ldquo;{t(item.quote)}&rdquo;
              </p>
              <footer>
                <p className="text-sm font-semibold font-display" style={{ color: "var(--color-text)" }}>{item.author}</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>{item.location}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
