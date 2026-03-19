"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { company } from "@/lib/content/company"
import { useLanguage, type T } from "@/lib/i18n/context"

const slides: { image: string; headline: T; sub: T; ctaLabel: T; ctaHref: string }[] = [
  {
    image: "/images/home-hero-1.webp",
    headline: { en: "Make Your Home the Best on the Block", es: "Haz de Tu Hogar el Mejor de la Cuadra" },
    sub: {
      en: "Get ready for the spring at Lexington Billiards \u2014 pool tables, hot tubs, grills & arcade machines all under one roof.",
      es: "Prep\u00e1rate para la primavera en Lexington Billiards \u2014 mesas de billar, jacuzzis, parrillas y m\u00e1quinas arcade todo bajo un mismo techo.",
    },
    ctaLabel: { en: "Visit the Showroom", es: "Visita el Showroom" },
    ctaHref: "/contact",
  },
  {
    image: "/images/hot-tubs.webp",
    headline: { en: "Your Backyard Deserves Better", es: "Tu Patio Merece Algo Mejor" },
    sub: {
      en: "Lexington\u2019s oldest spa dealer. Free delivery & expert installation.",
      es: "El distribuidor de spas m\u00e1s antiguo de Lexington. Entrega gratis e instalaci\u00f3n profesional.",
    },
    ctaLabel: { en: "Shop Hot Tubs", es: "Ver Jacuzzis" },
    ctaHref: "/spas",
  },
  {
    image: "/images/pool-tables-hero.webp",
    headline: { en: "Check Out Our Pool Tables", es: "Conoce Nuestras Mesas de Billar" },
    sub: {
      en: "Seven premium brands, free delivery & setup, and 29 cloth colors to choose from.",
      es: "Siete marcas premium, entrega e instalaci\u00f3n gratis, y 29 colores de pa\u00f1o para elegir.",
    },
    ctaLabel: { en: "Explore Pool Tables", es: "Explorar Mesas" },
    ctaHref: "/pool-tables",
  },
  {
    image: "/images/big-green-egg.webp",
    headline: { en: "Fire Up Something Legendary", es: "Enciende Algo Legendario" },
    sub: {
      en: "The Big Green Egg \u2014 grill, smoke, bake, and roast with one incredible cooker.",
      es: "El Big Green Egg \u2014 asa, ahuma, hornea y rostiza con un solo cooker incre\u00edble.",
    },
    ctaLabel: { en: "Discover Big Green Egg", es: "Descubre Big Green Egg" },
    ctaHref: "/big-green-egg",
  },
  {
    image: "/images/arcade.webp",
    headline: { en: "Bring the Arcade Home", es: "Trae el Arcade a Casa" },
    sub: {
      en: "Custom multicade cabinets loaded with 60+ classic games.",
      es: "Gabinetes multicade personalizados con m\u00e1s de 60 juegos cl\u00e1sicos.",
    },
    ctaLabel: { en: "See Arcade Machines", es: "Ver M\u00e1quinas Arcade" },
    ctaHref: "/arcade-machines",
  },
]

export const HeroSlider = () => {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const { t } = useLanguage()

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
            alt={t(slides[current].headline)}
            fill
            priority={current === 0}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
        </motion.div>
      </AnimatePresence>

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
              <p className="section-label !text-white/70 mb-5">
                Est. 1975 &middot; Lexington, KY
              </p>

              <h1 className="heading text-[length:var(--text-display)] text-[var(--color-text-on-dark)] mb-5 break-words">
                {t(slides[current].headline)}
              </h1>

              <p className="text-white/75 text-base md:text-lg leading-relaxed mb-8 max-w-[480px]">
                {t(slides[current].sub)}
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href={slides[current].ctaHref} className="btn-primary">
                  {t(slides[current].ctaLabel)}
                </Link>
                <a href={company.phone.href} className="btn-secondary">
                  {t({ en: "Call", es: "Llamar" })} {company.phone.display}
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

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
