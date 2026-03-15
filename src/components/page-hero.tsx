"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface PageHeroProps {
  label: string
  headline: string
  description: string
  image: string
  imageAlt: string
}

export const PageHero = ({ label, headline, description, image, imageAlt }: PageHeroProps) => {
  return (
    <section className="relative min-h-[50vh] lg:min-h-[60vh] flex items-end overflow-hidden pt-[var(--header-height)]">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-dark/60 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent z-[1]" />

      <div className="relative z-10 mx-auto max-w-[var(--content-max)] px-[var(--section-px)] pb-12 lg:pb-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <p className="section-label mb-4">{label}</p>
          <h1
            className="heading text-[length:var(--text-h1)] mb-4"
            style={{ color: "var(--color-text-on-dark)" }}
          >
            {headline}
          </h1>
          <p
            className="text-base lg:text-lg max-w-[52ch] leading-relaxed"
            style={{ color: "rgba(255,247,237,0.6)" }}
          >
            {description}
          </p>
        </motion.div>
      </div>

    </section>
  )
}
