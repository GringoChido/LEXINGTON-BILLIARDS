"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { experienceCategories } from "@/lib/content/categories"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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
  return (
    <section
      className="py-[var(--section-py)] px-[var(--section-px)]"
      style={{ background: "var(--color-background)" }}
    >
      <div className="max-w-[var(--content-max)] mx-auto">
        {/* Heading */}
        <div className="text-center mx-auto max-w-[48ch] mb-12 lg:mb-16">
          <p className="section-label mb-4">What&apos;s Your Saturday?</p>
          <h2 className="heading text-[length:var(--text-h2)] text-[var(--color-text)]">
            Build Your Perfect Day
          </h2>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {experienceCategories.map((cat) => (
            <motion.div key={cat.href} variants={cardVariants}>
              <Link
                href={cat.href}
                className="group relative block overflow-hidden rounded-2xl aspect-[4/5] sm:aspect-[3/4] bg-[var(--color-dark)]"
                aria-label={cat.experienceTitle}
              >
                {/* Image */}
                <Image
                  src={cat.image}
                  alt={cat.experienceTitle}
                  fill
                  className="object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.05]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <h3 className="heading text-[length:var(--text-h3)] text-white mb-1.5">
                    {cat.experienceTitle}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed mb-4">
                    {cat.tagline}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[var(--color-primary)] font-heading font-700 text-sm transition-gap duration-300 group-hover:gap-2.5">
                    Explore
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
