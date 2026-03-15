"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import type { Brand } from "@/lib/content/brands"

const brandLogos: Record<string, string> = {
  "cl-bailey": "/images/brands/cl-bailey.png",
  "brunswick": "/images/brands/brunswick.svg",
  "olhausen": "/images/brands/olhausen.svg",
  "imperial": "/images/brands/imperial.png",
  "american-heritage": "/images/brands/american-heritage.png",
  "maax": "/images/brands/maax.svg",
  "bullfrog": "/images/brands/bullfrog.svg",
  "jacuzzi": "/images/brands/jacuzzi.jpg",
  "big-green-egg": "/images/brands/big-green-egg.svg",
  "raw-thrills": "/images/brands/raw-thrills.png",
}

interface BrandCardProps {
  brand: Brand
  index?: number
  reversed?: boolean
}

export const BrandCard = ({ brand, index = 0, reversed = false }: BrandCardProps) => {
  const logo = brandLogos[brand.slug]

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
      {/* Brand logo — floating, no background */}
      <div className="flex items-center justify-center py-8 lg:py-12 lg:[direction:ltr]">
        {logo ? (
          <div className="relative w-full max-w-[260px] h-[100px]">
            <Image
              src={logo}
              alt={`${brand.name} logo`}
              fill
              className="object-contain"
              sizes="260px"
            />
          </div>
        ) : (
          <span
            className="heading text-[length:var(--text-h2)] text-center"
            style={{ color: "var(--color-text-muted)" }}
          >
            {brand.name}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="lg:[direction:ltr]">
        {brand.featured && (
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-semibold mb-3"
            style={{ background: "rgba(234,88,12,0.1)", color: "var(--color-primary)" }}
          >
            Featured Brand
          </span>
        )}
        <h3
          className="heading text-[length:var(--text-h3)] mb-2"
          style={{ color: "var(--color-text)" }}
        >
          {brand.name}
        </h3>
        <p className="font-semibold text-sm mb-4" style={{ color: "var(--color-primary)" }}>
          {brand.tagline}
        </p>
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
