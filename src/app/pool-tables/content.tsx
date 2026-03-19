"use client"

import { PageHeroSlider } from "@/components/page-hero-slider"
import { BrandCard } from "@/components/brand-card"
import { SectionHeading } from "@/components/section-heading"
import { ClothSwatches } from "@/components/cloth-swatches"
import { CTABlock } from "@/components/cta-block"
import Image from "next/image"
import { poolTableBrands } from "@/lib/content/brands"
import { motion } from "framer-motion"
import { Truck, Package, Palette, Wrench, Phone } from "lucide-react"

const slides = [
  {
    image: "/images/pool-tables.webp",
    headline: "Kentucky\u2019s Best Game Room Starts Here",
    cta: { label: "See Our Tables", href: "#brands" },
  },
  {
    image: "/images/pool-tables-slide-2.webp",
    headline: "50 Years of Putting the Perfect Table in Your Home",
    cta: { label: "Visit the Showroom", href: "/contact" },
  },
  {
    image: "/images/pool-tables-slide-3.webp",
    headline: "The Right Table. Delivered. Set Up. Ready to Play.",
    cta: { label: "Call Greg: (859) 255-7639", href: "tel:8592557639" },
  },
]

const proofPoints = [
  { icon: Truck, label: "Free Delivery & Setup" },
  { icon: Package, label: "Full Accessory Kit Included" },
  { icon: Palette, label: "29 Cloth Colors" },
  { icon: Wrench, label: "Expert Installation & Leveling" },
  { icon: Phone, label: "Lifetime Service Support" },
]

export const PoolTablesContent = () => {
  return (
    <>
      <PageHeroSlider slides={slides} />

      {/* ── INTRO ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--cat-surface, #F5F0E8)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <p className="section-label mb-4" style={{ color: "var(--cat-primary, #1B4332)" }}>Family-Owned Since 1975</p>
              <h2 className="heading text-[length:var(--text-h1)] mb-6" style={{ color: "var(--color-text)" }}>
                Built on Billiards
              </h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-[60ch]" style={{ color: "var(--color-text-secondary)" }}>
                <p>
                  The Wilson family has been selling, delivering, and servicing
                  pool tables in Central Kentucky for fifty years. Three
                  generations of players have walked through our showroom on
                  Leestown Road — and most of them are still customers.
                </p>
                <p>
                  Every table we sell comes with free delivery, professional
                  installation, your choice of 29 premium cloth colors, and a
                  complete accessory kit. We don&apos;t ship boxes — we set up
                  game rooms.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {[
                  { value: "50", unit: "Years" },
                  { value: "29", unit: "Cloth Colors" },
                  { value: "Free", unit: "Install" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.unit}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                    className="flex items-baseline gap-2 rounded-xl px-5 py-3 border"
                    style={{ borderColor: "var(--color-border)", background: "var(--color-background)" }}
                  >
                    <span className="heading text-2xl" style={{ color: "var(--cat-accent, #C9952A)" }}>{stat.value}</span>
                    <span className="text-sm font-semibold" style={{ color: "var(--color-text-secondary)" }}>{stat.unit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
              className="rounded-2xl p-5 md:p-8 border-l-4"
              style={{ borderColor: "var(--cat-primary, #1B4332)", background: "var(--color-background)" }}
            >
              <p className="font-accent font-medium text-sm mb-6 uppercase tracking-wider" style={{ color: "var(--cat-primary, #1B4332)" }}>
                Every Table Includes
              </p>
              <div className="space-y-5">
                {proofPoints.map((point, i) => (
                  <motion.div
                    key={point.label}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(27,67,50,0.1)" }}>
                      <point.icon size={18} style={{ color: "var(--cat-primary, #1B4332)" }} />
                    </div>
                    <span className="font-semibold text-sm" style={{ color: "var(--color-text)" }}>{point.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BRAND SHOWCASE ── */}
      <section id="brands" className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <SectionHeading label="The Brands We Stand Behind" headline="Names That Define the Game" description="We hand-select every brand we carry. No mass-market imports, no corners cut." />
          <div className="space-y-16 lg:space-y-24">
            {poolTableBrands.map((brand, i) => (
              <BrandCard key={brand.slug} brand={brand} index={i} reversed={i % 2 !== 0} variant={i === 0 ? "wide" : "default"} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCESSORY KIT + CLOTH COLORS ── */}
      <section className="py-[var(--section-py)] border-y" style={{ background: "var(--cat-surface, var(--color-cream))", borderColor: "var(--color-border)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <p className="section-label mb-4" style={{ color: "var(--cat-primary, #1B4332)" }}>Included Free</p>
              <h3 className="heading text-[length:var(--text-h2)] mb-4" style={{ color: "var(--color-text)" }}>Free Premium Accessory Kit</h3>
              <p className="text-base md:text-lg leading-relaxed mb-6 md:mb-8" style={{ color: "var(--color-text-secondary)" }}>
                Every table comes with everything you need to play — a complete accessory kit with balls, two cues, a rack, brush, chalk, and table cover. No surprise add-ons, no extra charges.
              </p>
              <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "16/10" }}>
                <Image
                  src="/images/accessory-kit.webp"
                  alt="Free premium accessory kit — cues, balls, rack, brush, chalk, cover"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <p className="section-label mb-4" style={{ color: "var(--cat-primary, #1B4332)" }}>Your Choice</p>
              <h3 className="heading text-[length:var(--text-h2)] mb-4" style={{ color: "var(--color-text)" }}>29 Cloth Colors</h3>
              <p className="text-base md:text-lg leading-relaxed mb-6 md:mb-8" style={{ color: "var(--color-text-secondary)" }}>
                Championship and Simonis premium felt in every color you can imagine. Pick your color in our showroom — we&apos;ll install it the day your table is delivered.
              </p>
              <ClothSwatches />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICE ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--cat-dark, #0D2B1F)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <p className="section-label mb-4" style={{ color: "var(--cat-highlight, #4A7C59)" }}>After the Sale</p>
              <h2 className="heading text-[length:var(--text-h2)] mb-4" style={{ color: "var(--color-text-on-dark)" }}>
                50 Years of Repair Experience
              </h2>
              <p className="text-base md:text-lg leading-relaxed max-w-[55ch]" style={{ color: "rgba(250,246,239,0.65)" }}>
                Re-cloth, re-cushion, disassemble, move, and reassemble — we do
                it all. Our service team covers all of Central and Eastern
                Kentucky. When something needs attention, you call the same family that
                sold you the table.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
              className="rounded-xl overflow-hidden"
            >
              <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
                <Image
                  src="/images/repair-service.webp"
                  alt="50 years of pool table repair and service experience"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 700px"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABlock headline="Come See the Tables In Person" />
    </>
  )
}
