"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Trophy, Clock, Truck, Wrench } from "lucide-react"
import { useLanguage, type T } from "@/lib/i18n/context"

const icons = [Trophy, Clock, Truck, Wrench]

const cardImages = [
  "/images/why-pool-tables.webp",
  "/images/why-spas.webp",
  "/images/why-delivery.webp",
  "/images/why-service.webp",
]

const whyUsItems: { title: T; description: T }[] = [
  {
    title: { en: "Built on Pool Tables Since 1975", es: "Construido Sobre Mesas de Billar Desde 1975" },
    description: {
      en: "The Wilson family has sold, delivered, and serviced pool tables in Central Kentucky for 50 years. C.L. Bailey, Brunswick, Connelly, Imperial, American Heritage.",
      es: "La familia Wilson ha vendido, entregado y dado servicio a mesas de billar en el centro de Kentucky durante 50 a\u00f1os. C.L. Bailey, Brunswick, Connelly, Imperial, American Heritage.",
    },
  },
  {
    title: { en: "Lexington\u2019s Oldest Spa Dealer", es: "El Distribuidor de Spas M\u00e1s Antiguo de Lexington" },
    description: {
      en: "Nobody in Central Kentucky has been selling and servicing hot tubs longer than us. Factory-authorized service on every brand we carry.",
      es: "Nadie en el centro de Kentucky ha vendido y dado servicio a jacuzzis m\u00e1s tiempo que nosotros. Servicio autorizado de f\u00e1brica en cada marca que manejamos.",
    },
  },
  {
    title: { en: "Free Delivery & Professional Setup", es: "Entrega Gratis e Instalaci\u00f3n Profesional" },
    description: {
      en: "Within 50 miles of Lexington. Tables delivered, assembled, and leveled. Spas installed and ready to soak.",
      es: "Dentro de 50 millas de Lexington. Mesas entregadas, ensambladas y niveladas. Spas instalados y listos para usar.",
    },
  },
  {
    title: { en: "50 Years of Service & Repair", es: "50 A\u00f1os de Servicio y Reparaci\u00f3n" },
    description: {
      en: "Re-cloth, re-cushion, cue repair, spa maintenance \u2014 we do it all. Our service team covers all of Central and Eastern Kentucky.",
      es: "Cambio de pa\u00f1o, cambio de bandas, reparaci\u00f3n de tacos, mantenimiento de spas \u2014 hacemos de todo. Nuestro equipo de servicio cubre todo el centro y este de Kentucky.",
    },
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export const WhyUs = () => {
  const { t } = useLanguage()

  return (
    <section
      className="py-[var(--section-py)] px-[var(--section-px)]"
      style={{ background: "var(--color-dark)" }}
    >
      <div className="max-w-[var(--content-max)] mx-auto">
        <div className="text-center mx-auto max-w-[48ch] mb-12 lg:mb-16">
          <p className="section-label !text-[var(--color-primary)] mb-4">
            {t({ en: "Why Lexington Billiards", es: "Por Qu\u00e9 Lexington Billiards" })}
          </p>
          <h2 className="heading text-[length:var(--text-h2)] text-[var(--color-text-on-dark)]">
            {t({ en: "50 Years of Bragging Rights", es: "50 A\u00f1os de Excelencia" })}
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {whyUsItems.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                className="relative rounded-xl p-5 sm:p-8 border overflow-hidden"
                style={{ background: "var(--color-dark-surface)", borderColor: "var(--color-border-dark)" }}
              >
                <Image
                  src={cardImages[i]}
                  alt=""
                  fill
                  className="object-cover opacity-[0.12]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-surface)] via-[var(--color-dark-surface)]/60 to-transparent" />

                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                    style={{ background: "rgba(234,88,12,0.15)" }}
                  >
                    <Icon size={22} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
                  </div>

                  <h3 className="heading text-[length:var(--text-h4)] text-[var(--color-text-on-dark)] mb-3">
                    {t(item.title)}
                  </h3>

                  <p className="text-white/60 text-base sm:text-lg leading-relaxed">
                    {t(item.description)}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
