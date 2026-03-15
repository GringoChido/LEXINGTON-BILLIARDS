"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ClothSwatches } from "@/components/cloth-swatches"

export const ClothTeaser = () => {
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
            <p className="section-label mb-4" style={{ color: "var(--color-primary)" }}>Your Table, Your Color</p>
            <h2 className="heading text-[length:var(--text-h2)] mb-4" style={{ color: "var(--color-text)" }}>
              29 Cloth Colors. Pick Yours.
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
              Every pool table we sell comes with your choice of premium cloth colors.
              Tournament green, classic burgundy, UK blue — see them all in person and feel the difference.
            </p>
            <Link href="/pool-tables" className="btn-primary">
              See Pool Tables
            </Link>
          </div>
          <ClothSwatches compact />
        </motion.div>
      </div>
    </section>
  )
}
