"use client"

import Image from "next/image"
import { PageHeroSlider } from "@/components/page-hero-slider"
import { BrandCard } from "@/components/brand-card"
import { SectionHeading } from "@/components/section-heading"
import { ClothSwatches } from "@/components/cloth-swatches"
import { BottomCta } from "@/components/bottom-cta"
import { ScenePlaceholder } from "@/components/scene-placeholder"
import { poolTableBrands, brandLogos } from "@/lib/content/brands"
import { motion } from "framer-motion"
import { Truck, Package, Palette, Wrench, Phone } from "lucide-react"

const slides = [
  {
    image: "/images/pool-tables.jpg",
    headline: "Kentucky\u2019s Best Game Room Starts Here",
    cta: { label: "See Our Tables", href: "#brands" },
  },
  {
    sceneLabel: "Pool table on covered patio, friends playing, evening light",
    headline: "50 Years of Putting the Perfect Table in Your Home",
    cta: { label: "Visit the Showroom", href: "/contact" },
  },
  {
    sceneLabel: "Close-up of felt, balls racked, chalk on rail",
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

const showroomProducts = [
  {
    name: "C.L. Bailey Addison",
    descriptor: "The table that started a thousand rivalries",
    image: "/images/pool-tables.jpg",
  },
  {
    name: "Brunswick Centurion",
    descriptor: "Tournament precision for your home",
    scene: "Brunswick pool table, modern game room, pendant lighting",
  },
  {
    name: "Olhausen Americana",
    descriptor: "Handcrafted heritage, Tennessee soul",
    scene: "Olhausen table in rustic game room, warm wood tones",
  },
  {
    name: "A.E. Schmidt Tradition",
    descriptor: "Built like they were in 1850",
    scene: "Classic A.E. Schmidt table, traditional styling",
  },
  {
    name: "Connelly Kayenta",
    descriptor: "Arizona precision meets Kentucky game night",
    scene: "Connelly table, sleek contemporary game room",
  },
  {
    name: "Imperial Lincoln",
    descriptor: "Game room furniture that plays as good as it looks",
    scene: "Imperial pool table, family game room setting",
  },
  {
    name: "American Heritage Quest",
    descriptor: "Where furniture design meets serious play",
    scene: "American Heritage table, elegant home setting",
  },
]

export const PoolTablesContent = () => {
  const clBailey = poolTableBrands[0]
  const clBaileyLogo = brandLogos[clBailey.slug]
  const otherBrands = poolTableBrands.slice(1)

  return (
    <>
      <PageHeroSlider slides={slides} />

      {/* ── INTRO — Asymmetric 2-col ── */}
      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <p className="section-label mb-4">Family-Owned Since 1975</p>
              <h2
                className="heading text-[length:var(--text-h1)] mb-6"
                style={{ color: "var(--color-text)" }}
              >
                Built on Billiards
              </h2>
              <div
                className="space-y-4 text-lg leading-relaxed mb-10 max-w-[60ch]"
                style={{ color: "var(--color-text-secondary)" }}
              >
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
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + i * 0.1,
                      ease: [0.16, 1, 0.3, 1] as const,
                    }}
                    className="flex items-baseline gap-2 rounded-xl px-5 py-3 border"
                    style={{
                      borderColor: "var(--color-border)",
                      background: "var(--color-cream)",
                    }}
                  >
                    <span
                      className="heading text-2xl"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {stat.value}
                    </span>
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {stat.unit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className="rounded-2xl p-8 border-l-4"
              style={{
                borderColor: "var(--color-primary)",
                background:
                  "linear-gradient(135deg, var(--color-cream), rgba(250,246,239,0.5))",
              }}
            >
              <p
                className="font-bold text-sm mb-6 uppercase tracking-wider"
                style={{ color: "var(--color-primary)" }}
              >
                Every Table Includes
              </p>
              <div className="space-y-5">
                {proofPoints.map((point, i) => (
                  <motion.div
                    key={point.label}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.4 + i * 0.08,
                      ease: [0.16, 1, 0.3, 1] as const,
                    }}
                    className="flex items-center gap-4"
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(232,98,26,0.1)" }}
                    >
                      <point.icon
                        size={18}
                        style={{ color: "var(--color-primary)" }}
                      />
                    </div>
                    <span
                      className="font-semibold text-sm"
                      style={{ color: "var(--color-text)" }}
                    >
                      {point.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── C.L. BAILEY HERO FEATURE ── */}
      <section style={{ background: "var(--color-dark)" }} className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <span className="pill pill-gold mb-4 inline-block">Our Lead Brand</span>
              <h2
                className="heading text-[length:var(--text-display)] mb-4"
                style={{ color: "var(--color-text-on-dark)" }}
              >
                C.L. Bailey
              </h2>
              <p className="text-lg font-semibold mb-6" style={{ color: "var(--color-gold)" }}>
                {clBailey.tagline}
              </p>
              <p
                className="text-lg leading-relaxed mb-8 max-w-[55ch]"
                style={{ color: "rgba(250,246,239,0.65)" }}
              >
                {clBailey.description}
              </p>
              <div className="border-t pt-6" style={{ borderColor: "var(--color-border-dark)" }}>
                <p className="text-sm italic leading-relaxed" style={{ color: "rgba(250,246,239,0.4)" }}>
                  &ldquo;The pool table we recommend first. The one we stock deepest. The brand our family trusts.&rdquo;
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
              className="flex items-center justify-center py-12"
            >
              {clBaileyLogo ? (
                <div className="relative w-full max-w-[320px] h-[130px]">
                  <Image
                    src={clBaileyLogo}
                    alt="C.L. Bailey logo"
                    fill
                    className="object-contain brightness-0 invert opacity-80"
                    sizes="320px"
                  />
                </div>
              ) : (
                <span className="heading text-[length:var(--text-display)]" style={{ color: "var(--color-gold)" }}>
                  C.L. Bailey
                </span>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BRAND SHOWCASE ── */}
      <section id="brands" className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <SectionHeading
            label="The Brands We Stand Behind"
            headline="Names That Define the Game"
            description="We hand-select every brand we carry. No mass-market imports, no corners cut."
          />

          <div className="space-y-8">
            {/* First brand — wide card */}
            <BrandCard brand={otherBrands[0]} index={0} variant="wide" />

            {/* Brands 2-3 — side-by-side */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8">
              {otherBrands.slice(1, 3).map((brand, i) => (
                <motion.div
                  key={brand.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                  className="rounded-2xl border p-8 lg:p-10"
                  style={{ borderColor: "var(--color-border)", background: "var(--color-cream)" }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    {brandLogos[brand.slug] ? (
                      <div className="relative w-[120px] h-[48px] shrink-0">
                        <Image
                          src={brandLogos[brand.slug]}
                          alt={`${brand.name} logo`}
                          fill
                          className="object-contain object-left"
                          sizes="120px"
                        />
                      </div>
                    ) : (
                      <h3 className="heading text-[length:var(--text-h3)]" style={{ color: "var(--color-text)" }}>
                        {brand.name}
                      </h3>
                    )}
                    {brand.established && <span className="pill pill-dark">Est. {brand.established}</span>}
                  </div>
                  {brandLogos[brand.slug] && (
                    <h3 className="heading text-[length:var(--text-h4)] mb-1" style={{ color: "var(--color-text)" }}>
                      {brand.name}
                    </h3>
                  )}
                  <p className="text-sm font-semibold mb-3" style={{ color: "var(--color-primary)" }}>
                    {brand.tagline}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    {brand.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Remaining brands — editorial alternating */}
            {otherBrands.slice(3).map((brand, i) => (
              <BrandCard key={brand.slug} brand={brand} index={i} reversed={i % 2 !== 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCESSORY KIT + CLOTH COLORS ── */}
      <section
        className="py-[var(--section-py)] border-y"
        style={{ background: "var(--color-cream)", borderColor: "var(--color-border)" }}
      >
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <p className="section-label mb-4">Included Free</p>
              <h3 className="heading text-[length:var(--text-h2)] mb-4" style={{ color: "var(--color-text)" }}>
                Free Premium Accessory Kit
              </h3>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--color-text-secondary)" }}>
                Every table comes with everything you need to play — a complete
                accessory kit with balls, two cues, a rack, brush, chalk, and
                table cover. No surprise add-ons, no extra charges.
              </p>
              <div className="rounded-xl overflow-hidden">
                <ScenePlaceholder label="Accessory kit flat lay — cues, balls, rack, brush, chalk, cover" aspectRatio="16/10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <p className="section-label mb-4">Your Choice</p>
              <h3 className="heading text-[length:var(--text-h2)] mb-4" style={{ color: "var(--color-text)" }}>
                29 Cloth Colors
              </h3>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--color-text-secondary)" }}>
                Championship and Simonis premium felt in every color you can
                imagine. Pick your color in our showroom — we&apos;ll install it
                the day your table is delivered.
              </p>
              <ClothSwatches />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SHOWROOM PRODUCTS ── */}
      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <SectionHeading
            label="In Our Showroom"
            headline="What's on the Floor"
            description="Come in, walk around them, run your hand across the felt. This is how you buy a pool table."
          />

          <div className="space-y-6">
            {/* Featured — full width */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className="group relative overflow-hidden rounded-2xl card-hover"
            >
              <div className="relative aspect-[21/9] overflow-hidden">
                <Image
                  src={showroomProducts[0].image!}
                  alt={showroomProducts[0].name}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/80 via-[#1C1C1C]/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                <span className="pill pill-gold mb-3 inline-block">Most Popular</span>
                <h3 className="heading text-[length:var(--text-h2)] mb-2" style={{ color: "var(--color-text-on-dark)" }}>
                  {showroomProducts[0].name}
                </h3>
                <p className="text-base mb-6" style={{ color: "rgba(250,246,239,0.65)" }}>
                  {showroomProducts[0].descriptor}
                </p>
                <span className="btn-primary">Call for Pricing</span>
              </div>
            </motion.div>

            {/* 2-col pairs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {showroomProducts.slice(1, 5).map((product, i) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                  className="group relative overflow-hidden rounded-xl card-hover"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {product.image ? (
                      <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" sizes="50vw" />
                    ) : (
                      <ScenePlaceholder label={product.scene!} aspectRatio="4/3" className="w-full h-full" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/70 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="heading text-[length:var(--text-h4)] mb-1" style={{ color: "var(--color-text-on-dark)" }}>
                      {product.name}
                    </h4>
                    <p className="text-sm mb-4" style={{ color: "rgba(250,246,239,0.6)" }}>{product.descriptor}</p>
                    <span className="text-sm font-bold" style={{ color: "var(--color-primary)" }}>Call for Pricing &rarr;</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Standard cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {showroomProducts.slice(5).map((product, i) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                  className="rounded-xl border overflow-hidden card-hover"
                  style={{ borderColor: "var(--color-border)", background: "var(--color-cream)" }}
                >
                  <ScenePlaceholder label={product.scene!} aspectRatio="16/9" />
                  <div className="p-6">
                    <h4 className="heading text-[length:var(--text-h4)] mb-1" style={{ color: "var(--color-text)" }}>
                      {product.name}
                    </h4>
                    <p className="text-sm mb-4" style={{ color: "var(--color-text-secondary)" }}>{product.descriptor}</p>
                    <span className="text-sm font-bold" style={{ color: "var(--color-primary)" }}>Call for Pricing &rarr;</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <p className="section-label mb-4">After the Sale</p>
              <h2 className="heading text-[length:var(--text-h2)] mb-4" style={{ color: "var(--color-text)" }}>
                50 Years of Repair Experience
              </h2>
              <p className="text-lg leading-relaxed max-w-[55ch]" style={{ color: "var(--color-text-secondary)" }}>
                Re-cloth, re-cushion, disassemble, move, and reassemble — we do
                it all. Our service team covers all of Central and Eastern
                Kentucky, from Greenup County to Pike County to Bell County.
                When something needs attention, you call the same family that
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
              <ScenePlaceholder label="Service technician re-clothing a pool table on-site" aspectRatio="16/10" />
            </motion.div>
          </div>
        </div>
      </section>

      <BottomCta headline="Come See It In Person" variant="dark" />
    </>
  )
}
