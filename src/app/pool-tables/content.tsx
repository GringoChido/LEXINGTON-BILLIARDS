"use client"

import { PageHero } from "@/components/page-hero"
import { BrandCard } from "@/components/brand-card"
import { SectionHeading } from "@/components/section-heading"
import { ContactCta } from "@/components/contact-cta"
import { poolTableBrands } from "@/lib/content/brands"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

const packageIncludes = [
  "Free delivery within 50 miles",
  "Professional installation & leveling",
  "29 cloth color choices",
  "Full accessory kit included",
  "Lifetime service support",
]

export const PoolTablesContent = () => {
  return (
    <>
      <PageHero
        label="Pool Tables"
        headline="Tables Built for Generations"
        description="C.L. Bailey leads our lineup — joined by Brunswick, Olhausen, Imperial, and American Heritage. Every table ships with free delivery, expert installation, and your choice of 29 premium cloth colors."
        image="/images/pool-tables.jpg"
        imageAlt="Premium pool tables at Lexington Billiards"
      />

      {/* Brands */}
      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <SectionHeading
            label="Our Brands"
            headline="Names That Define the Game"
            description="We partner exclusively with manufacturers who share our commitment to quality and craftsmanship."
          />
          <div className="space-y-16 lg:space-y-24">
            {poolTableBrands.map((brand, i) => (
              <BrandCard
                key={brand.slug}
                brand={brand}
                index={i}
                reversed={i % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Every Table Includes */}
      <section className="py-[var(--section-py)] bg-surface border-y border-border">
        <div className="mx-auto max-w-[var(--narrow-max)] px-[var(--section-px)] text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label mb-4">Every Table Includes</p>
            <h2
              className="heading text-[length:var(--text-h2)] mb-8"
              style={{ color: "var(--color-text)" }}
            >
              The Complete Package
            </h2>
            <div className="space-y-3">
              {packageIncludes.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3 justify-center"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-base">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service pitch */}
      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--narrow-max)] px-[var(--section-px)] text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label mb-4">After the Sale</p>
            <h2
              className="heading text-[length:var(--text-h3)] mb-4"
              style={{ color: "var(--color-text)" }}
            >
              40+ Years of Repair Experience
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Re-cloth, re-cushion, disassemble, move, and reassemble — we do it all.
              Our service team covers all of Central and Eastern Kentucky.
              When something needs attention, you call the same people who sold you the table.
            </p>
          </motion.div>
        </div>
      </section>

      <ContactCta />
    </>
  )
}
