"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage, type T } from "@/lib/i18n/context"

const tiles: { title: T; hook: T; href: string; image: string }[] = [
  {
    title: { en: "Pool Tables", es: "Mesas de Billar" },
    hook: { en: "The game room starts here", es: "La sala de juegos empieza aqu\u00ed" },
    href: "/pool-tables",
    image: "/images/tile-pool-tables.webp",
  },
  {
    title: { en: "Hot Tubs & Spas", es: "Jacuzzis y Spas" },
    hook: { en: "Your backyard is missing one", es: "A tu patio le falta uno" },
    href: "/spas",
    image: "/images/tile-hot-tubs.webp",
  },
  {
    title: { en: "Big Green Egg", es: "Big Green Egg" },
    hook: { en: "It\u2019s not a grill. It\u2019s an obsession.", es: "No es una parrilla. Es una obsesi\u00f3n." },
    href: "/big-green-egg",
    image: "/images/tile-big-green-egg.webp",
  },
  {
    title: { en: "Arcade Machines", es: "M\u00e1quinas Arcade" },
    hook: { en: "Bring the arcade home", es: "Trae el arcade a casa" },
    href: "/arcade-machines",
    image: "/images/tile-arcade.avif",
  },
  {
    title: { en: "Billiard Accessories", es: "Accesorios de Billar" },
    hook: { en: "Everything your game room needs", es: "Todo lo que tu sala de juegos necesita" },
    href: "/billiard-accessories",
    image: "/images/tile-accessories.webp",
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const tileVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export const ExperienceGrid = () => {
  const { t } = useLanguage()

  return (
    <section className="py-24 md:py-32" style={{ background: "var(--color-cream)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-10 md:mb-16"
        >
          <p
            className="font-accent font-medium tracking-widest uppercase text-sm mb-3"
            style={{ color: "var(--color-primary)" }}
          >
            {t({ en: "Choose Your Adventure", es: "Elige Tu Aventura" })}
          </p>
          <h2
            className="heading"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)", color: "var(--color-text)" }}
          >
            {t({ en: "What\u2019s Your", es: "\u00bfCu\u00e1l Es Tu" })}
            <span className="block" style={{ color: "var(--color-primary)" }}>
              {t({ en: "Saturday?", es: "S\u00e1bado?" })}
            </span>
          </h2>
          <p
            className="heading mt-4"
            style={{
              fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
              color: "rgba(28,28,28,0.55)",
              fontWeight: 400,
            }}
          >
            {t({ en: "Build your perfect day \u2014 everything you need is here.", es: "Construye tu d\u00eda perfecto \u2014 todo lo que necesitas est\u00e1 aqu\u00ed." })}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          <motion.div variants={tileVariants} className="h-[280px] md:h-[380px]">
            <TileCard tile={tiles[0]} />
          </motion.div>
          <motion.div variants={tileVariants} className="h-[280px] md:h-[380px]">
            <TileCard tile={tiles[1]} />
          </motion.div>
          <motion.div variants={tileVariants} className="h-[260px] md:h-[340px]">
            <TileCard tile={tiles[2]} />
          </motion.div>
          <motion.div variants={tileVariants} className="h-[260px] md:h-[340px]">
            <TileCard tile={tiles[3]} />
          </motion.div>
          <motion.div variants={tileVariants} className="md:col-span-2 h-[260px] md:h-[320px]">
            <TileCard tile={tiles[4]} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

const TileCard = ({ tile }: { tile: (typeof tiles)[number] }) => {
  const { t } = useLanguage()

  return (
    <Link href={tile.href} className="block h-full">
      <div className="relative overflow-hidden rounded-2xl h-full group cursor-pointer">
        <Image
          src={tile.image}
          alt={t(tile.title)}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500" />
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
          <h3
            className="heading text-white mb-1.5"
            style={{ fontSize: "clamp(1.25rem, 3vw, 2.25rem)" }}
          >
            {t(tile.title)}
          </h3>
          <p className="text-white/80 font-medium text-sm md:text-base leading-snug md:translate-y-2 md:opacity-80 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {t(tile.hook)}
          </p>
          <div className="mt-3 md:mt-4 md:overflow-hidden md:h-0 group-hover:h-10 md:transition-all md:duration-300">
            <span
              className="inline-flex items-center gap-2 font-display font-bold px-4 py-2 rounded-full text-sm text-white"
              style={{ background: "var(--color-primary)" }}
            >
              {t({ en: "Explore", es: "Explorar" })} &rarr;
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
