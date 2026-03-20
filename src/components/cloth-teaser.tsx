"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ClothSwatches } from "@/components/cloth-swatches"
import { useLanguage } from "@/lib/i18n/context"

export const ClothTeaser = () => {
  const { t } = useLanguage()

  return (
    <section className="py-[var(--section-py)]" style={{ background: "var(--color-cream)" }}>
      <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          <div>
            <p className="section-label mb-4" style={{ color: "var(--color-primary)" }}>{t({ en: "Your Choice", es: "Tu Elección" })}</p>
            <h2 className="heading text-[length:var(--text-h2)] mb-4" style={{ color: "var(--color-text)" }}>
              {t({ en: "29 Cloth Colors", es: "29 Colores de Paño" })}
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
              {t({
                en: "Every pool table we sell comes with your choice of premium cloth colors. Tournament green, classic burgundy, UK blue \u2014 see them all in person and feel the difference.",
                es: "Cada mesa de billar que vendemos viene con tu elecci\u00f3n de colores de pa\u00f1o premium. Verde torneo, borgo\u00f1a cl\u00e1sico, azul UK \u2014 v\u00e9los todos en persona y siente la diferencia.",
              })}
            </p>
            <Link href="/pool-tables" className="btn-primary">
              {t({ en: "See Pool Tables", es: "Ver Mesas de Billar" })}
            </Link>
          </div>
          <ClothSwatches compact />
        </motion.div>
      </div>
    </section>
  )
}
