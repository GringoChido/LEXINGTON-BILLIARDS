"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"

const brandLogos = [
  { name: "A.E. Schmidt", est: "Est. 1850" },
  { name: "Brunswick", est: "Est. 1845" },
  { name: "Connelly", est: "" },
  { name: "C.L. Bailey", est: "" },
  { name: "American Whirlpool", est: "" },
  { name: "Vita Spa", est: "" },
]

export const BrandsSection = () => {
  return (
    <section className="py-[var(--section-padding-y)] bg-surface border-y border-border">
      <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-padding-x)]">
        <SectionHeading
          label="Our Partners"
          headline="Brands Built to Last Generations"
          description="We carry names that have defined their industries for over a century. Every product we sell, we stand behind."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {brandLogos.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
              className="flex flex-col items-center justify-center py-6 px-4 border border-border bg-background/50 hover:border-gold/40 transition-colors duration-500"
            >
              <span className="font-display text-base text-text text-center leading-tight">
                {brand.name}
              </span>
              {brand.est && (
                <span className="mono-label mt-1.5 !text-[9px]">{brand.est}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
