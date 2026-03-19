"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { company } from "@/lib/content/company"

const slides = [
  {
    image: "/images/pool-tables.webp",
    headline: "Make Your Home the Best on the Block",
    sub: "Get ready for the spring at Lexington Billiards — pool tables, hot tubs, grills & arcade machines all under one roof.",
    ctaLabel: "Visit the Showroom",
    ctaHref: "/contact",
  },
  {
    image: "/images/hot-tubs.webp",
    headline: "Your Backyard Deserves Better",
    sub: "Lexington's oldest spa dealer. Free delivery & expert installation.",
    ctaLabel: "Shop Hot Tubs",
    ctaHref: "/spas",
  },
  {
    image: "/images/pool-tables-hero.webp",
    headline: "Check Out Our Pool Tables",
    sub: "Seven premium brands, free delivery & setup, and 29 cloth colors to choose from.",
    ctaLabel: "Explore Pool Tables",
    ctaHref: "/pool-tables",
  },
  {
    image: "/images/big-green-egg.webp",
    headline: "Fire Up Something Legendary",
    sub: "The Big Green Egg — grill, smoke, bake, and roast with one incredible cooker.",
    ctaLabel: "Discover Big Green Egg",
    ctaHref: "/big-green-egg",
  },
  {
    image: "/images/arcade.jpg",
    headline: "Bring the Arcade Home",
    sub: "Custom multicade cabinets loaded with 60+ classic games.",
    ctaLabel: "See Arcade Machines",
    ctaHref: "/arcade-machines",
  },
]

export const HeroSlider = () => {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
  }

  useEffect(() => {
    if (!paused) {
      startInterval()
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [paused])

  const goTo = (index: number) => {
    setCurrent(index)
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (!paused) startInterval()
  }

  return (
    <section
      className="relative h-dvh min-h-[600px] max-h-[1000px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Homepage hero slider"
    >
      {/* Slides */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].headline}
            fill
            priority={current === 0}
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Hard bottom edge — wave divider handles the transition */}

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-[var(--section-px)]">
        <div className="max-w-[var(--content-max)] mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay: 0.15 }}
              className="max-w-[640px]"
            >
              {/* Badge */}
              <p className="section-label !text-white/70 mb-5">
                Est. 1975 · Lexington, KY
              </p>

              <h1 className="heading text-[length:var(--text-display)] text-[var(--color-text-on-dark)] mb-5 break-words">
                {slides[current].headline}
              </h1>

              <p className="text-white/75 text-base md:text-lg leading-relaxed mb-8 max-w-[480px]">
                {slides[current].sub}
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href={slides[current].ctaHref} className="btn-primary">
                  {slides[current].ctaLabel}
                </Link>
                <a href={company.phone.href} className="btn-secondary">
                  Call {company.phone.display}
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-1">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`relative flex items-center justify-center w-11 h-11 ${
              i === current ? "" : "opacity-70 hover:opacity-100"
            }`}
          >
            <span
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-2 bg-[var(--color-primary)]"
                  : "w-2 h-2 bg-white/40"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  )
}
