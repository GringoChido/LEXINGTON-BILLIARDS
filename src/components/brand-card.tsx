"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import type { Brand } from "@/lib/content/brands"
import { brandLogos } from "@/lib/content/brands"

interface BrandCardProps {
  brand: Brand
  index?: number
  reversed?: boolean
  variant?: "default" | "wide" | "compact"
}

export const BrandCard = ({
  brand,
  index = 0,
  reversed = false,
  variant = "default",
}: BrandCardProps) => {
  const logo = brandLogos[brand.slug]

  if (variant === "wide") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.8,
          delay: index * 0.1,
          ease: [0.16, 1, 0.3, 1] as const,
        }}
        className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16 items-center rounded-2xl border overflow-hidden"
        style={{ borderColor: "var(--color-border)", background: "var(--color-cream)" }}
      >
        <div className="flex items-center justify-center py-12 px-8">
          {logo ? (
            <div className="relative w-full max-w-[280px] h-[110px]">
              <Image
                src={logo}
                alt={`${brand.name} logo`}
                fill
                className="object-contain"
                sizes="280px"
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
        <div className="px-8 pb-10 lg:py-12 lg:pr-12">
          {brand.featured && (
            <span className="pill pill-gold mb-3 inline-block">Featured Brand</span>
          )}
          {brand.established && (
            <span className="pill pill-dark mb-3 inline-block">Est. {brand.established}</span>
          )}
          <h3
            className="heading text-[length:var(--text-h3)] mb-2"
            style={{ color: "var(--color-text)" }}
          >
            {brand.name}
          </h3>
          <p
            className="font-semibold text-sm mb-4"
            style={{ color: "var(--color-primary)" }}
          >
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
        reversed ? "lg:[direction:rtl]" : ""
      }`}
    >
      {/* Brand logo — floating, no background */}
      <div className="flex items-center justify-center py-8 lg:py-12 lg:[direction:ltr]">
        {logo ? (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-full max-w-[260px] h-[100px]"
          >
            <Image
              src={logo}
              alt={`${brand.name} logo`}
              fill
              className="object-contain"
              sizes="260px"
            />
          </motion.div>
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
          <span className="pill pill-gold mb-3 inline-block">Featured Brand</span>
        )}
        {brand.established && (
          <span className="pill pill-dark mb-3 inline-block">
            Est. {brand.established}
          </span>
        )}
        <h3
          className="heading text-[length:var(--text-h3)] mb-2"
          style={{ color: "var(--color-text)" }}
        >
          {brand.name}
        </h3>
        <p
          className="font-semibold text-sm mb-4"
          style={{ color: "var(--color-primary)" }}
        >
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
