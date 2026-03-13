"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"

const slides = [
  {
    src: "/images/pool-tables.jpg",
    alt: "Premium pool tables at Lexington Billiards",
    label: "Pool Tables",
  },
  {
    src: "/images/hot-tubs.jpg",
    alt: "Hot tubs and spas at Lexington Billiards",
    label: "Hot Tubs & Spas",
  },
  {
    src: "/images/big-green-egg.jpg",
    alt: "Big Green Egg grills at Lexington Billiards",
    label: "Big Green Egg",
  },
  {
    src: "/images/arcade.webp",
    alt: "Arcade machines at Lexington Billiards",
    label: "Arcade",
  },
  {
    src: "/images/bar-stools.webp",
    alt: "Bar stools at Lexington Billiards",
    label: "Bar Stools",
  },
  {
    src: "/images/accessories.jpg",
    alt: "Billiard accessories at Lexington Billiards",
    label: "Accessories",
  },
]

const INTERVAL = 5000

export const Hero = () => {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, INTERVAL)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative min-h-[80vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Rotating background images */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].src}
            alt={slides[current].alt}
            fill
            priority={current === 0}
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-background/60 z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent z-[1]" />

      {/* Warm spotlight glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,197,24,0.06)_0%,transparent_60%)] z-[1]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[var(--content-max)] px-4 sm:px-8 lg:px-16 text-center">
        <p className="section-label mb-6 animate-[fadeUp_0.5s_ease-out_both]">
          Since 1975 &middot; Lexington, Kentucky
        </p>

        <h1 className="heading-display text-[length:var(--text-display)] mb-6 animate-[fadeUp_0.5s_ease-out_0.1s_both]">
          Your Game Room
          <br />
          Starts Here
        </h1>

        <p className="text-lg text-text-secondary max-w-[40ch] mx-auto leading-relaxed mb-10 animate-[fadeUp_0.5s_ease-out_0.2s_both]">
          Pool tables, hot tubs, Big Green Egg grills, and arcade machines — all
          under one roof in Lexington since 1975.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fadeUp_0.5s_ease-out_0.3s_both]">
          <Link
            href="/contact"
            className="bg-accent text-background font-medium text-base px-8 h-12 rounded-xl flex items-center justify-center hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(245,197,24,0.3)] transition-all"
          >
            Visit Our Showroom
          </Link>
          <a
            href="tel:8592557639"
            className="border border-white/20 text-text font-medium text-base px-8 h-12 rounded-xl flex items-center justify-center hover:bg-surface transition-colors backdrop-blur-sm"
          >
            Call (859) 255-7639
          </a>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.label}
            onClick={() => setCurrent(i)}
            aria-label={`Show ${slide.label}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 bg-accent"
                : "w-3 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
