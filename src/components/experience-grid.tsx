"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { experienceCategories } from "@/lib/content/categories"
import { ScenePlaceholder } from "@/components/scene-placeholder"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export const ExperienceGrid = () => {
  const cats = experienceCategories

  return (
    <section
      className="py-[var(--section-py)] px-[var(--section-px)]"
      style={{ background: "var(--color-background)" }}
    >
      <div className="max-w-[var(--content-max)] mx-auto">
        {/* Headline — this is a MOMENT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-14 lg:mb-20"
        >
          <h2 className="heading text-[length:var(--text-h1)]" style={{ color: "var(--color-text)" }}>
            What&apos;s Your Saturday?
          </h2>
          <p
            className="heading text-[length:var(--text-h2)] mt-1"
            style={{ color: "var(--color-primary)" }}
          >
            Build Your Perfect Day.
          </p>
        </motion.div>

        {/* Asymmetric grid:
            Row 1: Pool Tables (2 cols wide) + Spas (1 col, tall)
            Row 2: Big Green Egg + Arcade
            Row 3: Accessories (2 cols wide)
            Row 4: Furniture & Decor (full width banner)
        */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Pool Tables — LARGE, 7 cols */}
          <motion.div variants={cardVariants} className="lg:col-span-7">
            <CategoryTile
              cat={cats[0]}
              aspect="aspect-[4/3] lg:aspect-[16/10]"
              headingSize="text-[length:var(--text-h2)]"
            />
          </motion.div>

          {/* Spas — tall right, 5 cols */}
          <motion.div variants={cardVariants} className="lg:col-span-5">
            <CategoryTile
              cat={cats[1]}
              aspect="aspect-[4/3] lg:aspect-[4/5]"
              headingSize="text-[length:var(--text-h3)]"
            />
          </motion.div>

          {/* Big Green Egg — 5 cols */}
          <motion.div variants={cardVariants} className="lg:col-span-5">
            <CategoryTile
              cat={cats[2]}
              aspect="aspect-[4/3]"
              headingSize="text-[length:var(--text-h3)]"
            />
          </motion.div>

          {/* Arcade — 7 cols */}
          <motion.div variants={cardVariants} className="lg:col-span-7">
            <CategoryTile
              cat={cats[3]}
              aspect="aspect-[4/3] lg:aspect-[16/10]"
              headingSize="text-[length:var(--text-h3)]"
            />
          </motion.div>

          {/* Billiard Accessories — 7 cols wide */}
          <motion.div variants={cardVariants} className="lg:col-span-7">
            <CategoryTile
              cat={cats[4]}
              aspect="aspect-[4/3] lg:aspect-[16/10]"
              headingSize="text-[length:var(--text-h3)]"
            />
          </motion.div>

          {/* Game Room Furniture & Decor — 5 cols */}
          <motion.div variants={cardVariants} className="lg:col-span-5">
            <CategoryTile
              cat={cats[5]}
              aspect="aspect-[4/3]"
              headingSize="text-[length:var(--text-h3)]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

const CategoryTile = ({
  cat,
  aspect,
  headingSize,
}: {
  cat: (typeof experienceCategories)[number]
  aspect: string
  headingSize: string
}) => {
  const hasImage = cat.image && !cat.image.includes("placeholder")

  return (
    <Link
      href={cat.href}
      className={`group relative block overflow-hidden rounded-2xl ${aspect} bg-[var(--color-dark)]`}
      aria-label={cat.experienceTitle}
    >
      {hasImage ? (
        <Image
          src={cat.image}
          alt={cat.experienceTitle}
          fill
          className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 60vw"
        />
      ) : (
        <ScenePlaceholder
          label={`${cat.experienceTitle} showroom`}
          className="w-full h-full !rounded-none"
          dark
        />
      )}

      {/* Overlay — deepens on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent transition-opacity duration-500 group-hover:from-black/85" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
        <h3 className={`heading ${headingSize} text-white mb-1.5`}>
          {cat.experienceTitle}
        </h3>
        <p className="text-white/60 text-sm italic leading-relaxed mb-4">
          {cat.tagline}
        </p>

        {/* CTA — slides up on hover */}
        <span className="inline-flex items-center gap-1.5 text-[var(--color-primary)] font-heading font-bold text-sm opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          Explore
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
