"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface HeroSlide {
  image?: string
  sceneLabel?: string
  headline: string
  cta: { label: string; href: string }
}

interface PageHeroSliderProps {
  slides: HeroSlide[]
  autoplayInterval?: number
}

export const PageHeroSlider = ({
  slides,
  autoplayInterval = 5000,
}: PageHeroSliderProps) => {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(
    () => setCurrent((i) => (i + 1) % slides.length),
    [slides.length]
  )
  const prev = useCallback(
    () => setCurrent((i) => (i - 1 + slides.length) % slides.length),
    [slides.length]
  )

  useEffect(() => {
    if (isPaused) return
    const id = setInterval(next, autoplayInterval)
    return () => clearInterval(id)
  }, [isPaused, next, autoplayInterval])

  return (
    <section
      className="relative min-h-[70vh] lg:min-h-[85vh] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background images — crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="absolute inset-0"
        >
          {slides[current].image ? (
            <Image
              src={slides[current].image}
              alt=""
              fill
              priority={current === 0}
              className="object-cover"
              sizes="100vw"
            />
          ) : (
            <div
              className="w-full h-full"
              style={{
                background:
                  "linear-gradient(135deg, #2A2520 0%, #1C1C1C 50%, #2A2520 100%)",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  opacity: 0.04,
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, #FAF6EF 1px, transparent 0)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-[#FAF6EF]/25 text-sm italic max-w-[36ch] text-center px-8">
                  {slides[current].sceneLabel}
                </p>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/80 via-[#1C1C1C]/30 to-[#1C1C1C]/20 z-[1]" />

      {/* Content */}
      <div className="relative z-10 min-h-[70vh] lg:min-h-[85vh] flex items-end pb-16 lg:pb-24 pt-[var(--header-height)]">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <h1
                className="heading text-[length:var(--text-display)] mb-6 max-w-[18ch]"
                style={{ color: "var(--color-text-on-dark)" }}
              >
                {slides[current].headline}
              </h1>
              {slides[current].cta.href.startsWith("tel:") ? (
                <a href={slides[current].cta.href} className="btn-primary">
                  {slides[current].cta.label}
                </a>
              ) : (
                <a href={slides[current].cta.href} className="btn-primary">
                  {slides[current].cta.label}
                </a>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-1">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="w-11 h-11 flex items-center justify-center"
            aria-label={`Go to slide ${i + 1}`}
          >
            <span
              className={`block h-2 rounded-full transition-all duration-500 ${
                i === current
                  ? "w-8 bg-white"
                  : "w-2 bg-white/40"
              }`}
            />
          </button>
        ))}
      </div>

    </section>
  )
}
