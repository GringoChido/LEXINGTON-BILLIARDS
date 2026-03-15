"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import type { Brand } from "@/lib/content/brands"
import { brandLogos } from "@/lib/content/brands"
import { ScenePlaceholder } from "./scene-placeholder"

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
        className="rounded-2xl border overflow-hidden"
        style={{ borderColor: "var(--color-border)", background: "var(--color-cream)" }}
      >
        {/* Large lifestyle image — full width */}
        <ScenePlaceholder label={brand.scene} aspectRatio="21/9" />

        {/* Content row: logo + details */}
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-10 p-8 lg:p-10 items-center">
          {/* Logo */}
          <div className="flex items-center justify-center lg:justify-start">
            {logo ? (
              <div className="relative w-[200px] h-[80px] lg:w-[240px] lg:h-[90px]">
                <Image
                  src={logo}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain"
                  sizes="240px"
                />
              </div>
            ) : (
              <span
                className="heading text-[length:var(--text-h3)]"
                style={{ color: "var(--color-text-muted)" }}
              >
                {brand.name}
              </span>
            )}
          </div>

          {/* Details */}
          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              {brand.featured && (
                <span className="pill pill-gold">Featured Brand</span>
              )}
              {brand.established && (
                <span className="pill pill-dark">Est. {brand.established}</span>
              )}
            </div>
            <h3
              className="heading text-[length:var(--text-h3)] mb-2"
              style={{ color: "var(--color-text)" }}
            >
              {brand.name}
            </h3>
            <p
              className="font-semibold text-sm mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              {brand.tagline}
            </p>
            <p
              className="text-base leading-relaxed mb-5 max-w-[65ch]"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {brand.description}
            </p>
            <button className="btn-outline inline-flex items-center gap-2">
              Learn More <ArrowRight className="w-4 h-4" />
            </button>
          </div>
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
      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 rounded-2xl border overflow-hidden ${
        reversed ? "lg:[direction:rtl]" : ""
      }`}
      style={{ borderColor: "var(--color-border)", background: "var(--color-cream)" }}
    >
      {/* Lifestyle image — takes full half */}
      <div className="lg:[direction:ltr]">
        <ScenePlaceholder label={brand.scene} aspectRatio="4/3" />
      </div>

      {/* Content half: logo + text + CTA */}
      <div className="p-8 lg:p-10 flex flex-col justify-center lg:[direction:ltr]">
        {/* Logo */}
        {logo ? (
          <div className="relative w-[180px] h-[70px] mb-5">
            <Image
              src={logo}
              alt={`${brand.name} logo`}
              fill
              className="object-contain object-left"
              sizes="180px"
            />
          </div>
        ) : (
          <span
            className="heading text-[length:var(--text-h3)] mb-4 block"
            style={{ color: "var(--color-text-muted)" }}
          >
            {brand.name}
          </span>
        )}

        {/* Pills */}
        <div className="flex flex-wrap gap-2 mb-3">
          {brand.featured && (
            <span className="pill pill-gold">Featured Brand</span>
          )}
          {brand.established && (
            <span className="pill pill-dark">Est. {brand.established}</span>
          )}
        </div>

        {/* Brand name + tagline */}
        <h3
          className="heading text-[length:var(--text-h3)] mb-2"
          style={{ color: "var(--color-text)" }}
        >
          {brand.name}
        </h3>
        <p
          className="font-semibold text-sm mb-3"
          style={{ color: "var(--color-primary)" }}
        >
          {brand.tagline}
        </p>

        {/* Description */}
        <p
          className="text-base leading-relaxed mb-6"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {brand.description}
        </p>

        {/* CTA */}
        <div>
          <button className="btn-outline inline-flex items-center gap-2">
            Learn More <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
