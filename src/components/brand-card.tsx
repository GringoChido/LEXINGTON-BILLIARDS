"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import type { Brand } from "@/lib/content/brands"

interface BrandCardProps {
  brand: Brand
  index?: number
  reversed?: boolean
}

export const BrandCard = ({ brand, index = 0, reversed = false }: BrandCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] as const }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
        reversed ? "lg:[direction:rtl]" : ""
      }`}
    >
      {/* Image placeholder */}
      <div className="aspect-[4/3] bg-surface-alt rounded-xl overflow-hidden lg:[direction:ltr]">
        <div className="w-full h-full flex items-center justify-center">
          <span
            className="heading text-[length:var(--text-h3)] text-center px-6"
            style={{ color: "var(--color-text-muted)" }}
          >
            {brand.name}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="lg:[direction:ltr]">
        {brand.featured && (
          <span className="inline-block bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-semibold mb-3">
            Featured Brand
          </span>
        )}
        <h3
          className="heading text-[length:var(--text-h3)] mb-2"
          style={{ color: "var(--color-text)" }}
        >
          {brand.name}
        </h3>
        <p className="text-primary font-semibold text-sm mb-4">{brand.tagline}</p>
        <p
          className="text-base leading-relaxed mb-6"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {brand.description}
        </p>
        <button className="btn-outline inline-flex items-center gap-2">
          Learn More <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  )
}
