"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { experienceCategories } from "@/lib/content/categories"

const tiles = experienceCategories.map((cat) => ({
  title: cat.experienceTitle,
  hook: cat.tagline,
  href: cat.href,
  image: cat.image,
}))

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
  return (
    <section className="py-24 md:py-32" style={{ background: "var(--color-cream)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* ── HEADLINE ── */}
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
            Choose Your Adventure
          </p>
          <h2
            className="heading"
            style={{ fontSize: "clamp(3rem, 7vw, 6rem)", color: "var(--color-text)" }}
          >
            What&apos;s Your
            <span className="block" style={{ color: "var(--color-primary)" }}>
              Saturday?
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
            Build your perfect day — everything you need is here.
          </p>
        </motion.div>

        {/* ── GRID ── */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {/* Row 1: Pool Tables | Spas */}
          <motion.div variants={tileVariants} className="h-[280px] md:h-[380px]">
            <TileCard tile={tiles[0]} />
          </motion.div>
          <motion.div variants={tileVariants} className="h-[280px] md:h-[380px]">
            <TileCard tile={tiles[1]} />
          </motion.div>

          {/* Row 2: Big Green Egg | Arcade */}
          <motion.div variants={tileVariants} className="h-[260px] md:h-[340px]">
            <TileCard tile={tiles[2]} />
          </motion.div>
          <motion.div variants={tileVariants} className="h-[260px] md:h-[340px]">
            <TileCard tile={tiles[3]} />
          </motion.div>

          {/* Row 3: Accessories — full width */}
          <motion.div variants={tileVariants} className="md:col-span-2 h-[260px] md:h-[320px]">
            <TileCard tile={tiles[4]} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

const TileCard = ({ tile }: { tile: (typeof tiles)[number] }) => {
  const hasImage = tile.image && !tile.image.includes("placeholder")

  return (
    <Link href={tile.href} className="block h-full">
      <div className="relative overflow-hidden rounded-2xl h-full group cursor-pointer">
        {hasImage ? (
          <Image
            src={tile.image}
            alt={tile.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(145deg, var(--color-dark) 0%, #3a3530 100%)",
            }}
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-500" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
          <h3
            className="heading text-white mb-1.5"
            style={{ fontSize: "clamp(1.25rem, 3vw, 2.25rem)" }}
          >
            {tile.title}
          </h3>
          <p className="text-white/80 font-medium text-sm md:text-base leading-snug md:translate-y-2 md:opacity-80 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            {tile.hook}
          </p>
          <div className="mt-3 md:mt-4 md:overflow-hidden md:h-0 group-hover:h-10 md:transition-all md:duration-300">
            <span
              className="inline-flex items-center gap-2 font-display font-bold px-4 py-2 rounded-full text-sm text-white"
              style={{ background: "var(--color-primary)" }}
            >
              Explore →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
