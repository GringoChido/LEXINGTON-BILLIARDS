"use client"

import Image from "next/image"
import { PageHeroSlider } from "@/components/page-hero-slider"
import { CTABlock } from "@/components/cta-block"
import { brandLogos } from "@/lib/content/brands"
import { motion } from "framer-motion"

const slides = [
  {
    image: "/images/bge-slide-1.jpg",
    headline: "Once You Cook on an Egg, Everything Else Is Just a Grill",
    cta: { label: "See the Lineup", href: "#eggs" },
  },
  {
    image: "/images/bge-slide-2.webp",
    headline: "The Grill That Changes Everything",
    cta: { label: "Visit the Showroom", href: "/contact" },
  },
  {
    image: "/images/bge-slide-3.webp",
    headline: "Come Fire One Up in Our Showroom",
    cta: { label: "Call (859) 255-7639", href: "tel:8592557639" },
  },
]

const eggSizes = [
  { name: "2XL", tagline: "The neighborhood centerpiece", feeds: "10+", diameter: '29"' },
  { name: "XLarge", tagline: "The backyard centerpiece", feeds: "6\u201310", diameter: '24"' },
  { name: "Large", tagline: "The most popular EGG", feeds: "4\u20136", diameter: '18.25"' },
  { name: "Medium", tagline: "Perfect for smaller families", feeds: "2\u20134", diameter: '15"' },
  { name: "Small", tagline: "Compact & capable", feeds: "1\u20132", diameter: '13"' },
  { name: "MiniMax", tagline: "The tailgate companion", feeds: "2\u20134", diameter: '13"' },
  { name: "Mini", tagline: "Portable perfection", feeds: "1\u20132", diameter: '10"' },
]

const whyFeatures = [
  {
    title: "SIMPLE TO START",
    description: "The Big Green Egg reaches perfect cooking temperature and is ready to use in just minutes. Our 100% lump charcoal is made in the USA from only the best cuts of natural oak and hickory for superb performance and results.",
  },
  {
    title: "PRECISE TEMPERATURE CONTROL",
    description: "Grill, smoke and bake on your EGG at exact temperatures by easily adjusting the patented air flow systems. You have total control over temperature at your fingertips, maintaining accuracy within a few degrees!",
  },
  {
    title: "SAFER TO USE",
    description: "The Big Green Egg is extremely safe to use as the ceramic surface doesn\u2019t get as hot as a metal grill, and the heat source is protected within a ceramic fire box inside the base.",
  },
  {
    title: "EASY CLEAN UP",
    description: "The Big Green Egg features a professional grade stainless steel cooking grid and an elegant green exterior with a lifetime glaze that maintains its good looks and wipes clean easily without chemical cleaners.",
  },
  {
    title: "PATENTED TECHNOLOGY",
    description: "Among many features that make the Big Green Egg by far the best cooking device of its kind are the patented components and state-of-the-art ceramic technologies that provide unrivaled thermal properties, material quality and cooking performance!",
  },
]

const anatomyFeatures = [
  { label: "Heated Air Exits", desc: "Dual-Function Metal Top controls airflow" },
  { label: "Ceramic Chamber", desc: "Retains heat and keeps food moist" },
  { label: "Sealed Fire Box", desc: "100% Natural Lump Charcoal" },
  { label: "Draft Door", desc: "Precision airflow control" },
]

export const BigGreenEggContent = () => {
  const eggLogo = brandLogos["big-green-egg"]

  return (
    <>
      <PageHeroSlider slides={slides} />

      {/* ── BRAND FEATURE ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--cat-primary, #1E5C1E)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-center lg:text-left"
            >
              {eggLogo && (
                <div className="relative w-[140px] h-[70px] mx-auto lg:mx-0 mb-6">
                  <Image src={eggLogo} alt="Big Green Egg logo" fill className="object-contain brightness-0 invert opacity-70" sizes="140px" />
                </div>
              )}
              <p className="section-label mb-4" style={{ color: "var(--cat-accent, #F5A623)" }}>Authorized Dealer</p>
              <h2 className="heading text-[length:var(--text-h1)] mb-6 max-w-[20ch]" style={{ color: "var(--color-text-on-dark)" }}>
                It&apos;s Not a Grill.{" "}
                <span style={{ color: "var(--cat-accent, #F5A623)" }}>It&apos;s an Obsession.</span>
              </h2>
              <p className="text-lg leading-relaxed max-w-[50ch]" style={{ color: "rgba(250,246,239,0.7)" }}>
                The Big Green Egg has a cult following for a reason. One cooker that grills, smokes,
                bakes, and roasts &mdash; with temperature control no gas grill can match. We keep several
                models on display, organic charcoal in stock, and a full line of EGGcessories.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/bge-easy-recipes.jpg"
                alt="Friends gathered around a Big Green Egg, sharing food and conversation"
                width={800}
                height={533}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SIZE GUIDE — family image with overlaid heading + inline size strip ── */}
      <section id="eggs" className="relative">
        {/* Family photo as hero background */}
        <div className="relative w-full">
          {/* Heading overlaid on top of image */}
          <div className="absolute inset-x-0 top-0 z-10 pt-12 lg:pt-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label mb-3" style={{ color: "var(--cat-accent, #F5A623)" }}>Find Your EGG</p>
              <h2 className="heading text-[length:var(--text-h1)] drop-shadow-lg" style={{ color: "#fff" }}>
                Seven Sizes. One Obsession.
              </h2>
              <p className="text-sm lg:text-base mt-2 drop-shadow-md" style={{ color: "rgba(255,255,255,0.85)" }}>
                From the portable Mini to the neighborhood-feeding 2XL.
              </p>
            </motion.div>
          </div>

          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to bottom, rgba(15,46,15,0.7) 0%, rgba(15,46,15,0.1) 40%, transparent 60%)" }} />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/images/bge-family-lineup.jpg"
              alt="Big Green Egg complete family lineup — all seven sizes"
              width={1800}
              height={900}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>

        {/* Size strip — overlapping the bottom of the image */}
        <div className="relative z-10 -mt-8 lg:-mt-12 mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 lg:gap-3">
            {eggSizes.map((egg, i) => (
              <motion.div
                key={egg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] as const }}
                className="text-center py-4 px-2 rounded-xl backdrop-blur-sm shadow-lg"
                style={{ background: "rgba(255,255,255,0.92)", border: "1px solid rgba(30,92,30,0.08)" }}
              >
                <p className="font-accent font-bold text-base mb-0.5" style={{ color: "var(--cat-primary, #1E5C1E)" }}>{egg.diameter}</p>
                <h4 className="heading text-sm mb-0.5" style={{ color: "var(--color-text)" }}>{egg.name}</h4>
                <p className="text-[11px]" style={{ color: "var(--color-text-secondary)" }}>{egg.tagline}</p>
                <p className="text-[11px] font-semibold mt-0.5" style={{ color: "var(--cat-secondary, #B85C00)" }}>
                  Feeds {egg.feeds}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BGE DIAGRAM + FEATURES — big egg left, features right, anatomy below ── */}
      <section className="pt-20 lg:pt-28 pb-[var(--section-py)]" style={{ background: "#fff" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">

          {/* 2-column: big egg | features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left: HUGE egg image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
              className="flex justify-center lg:justify-end"
            >
              <Image
                src="/images/bge-large-diagram.webp"
                alt="Big Green Egg Large"
                width={840}
                height={1000}
                className="w-full max-w-[520px] lg:max-w-none lg:w-[110%] h-auto"
                priority
              />
            </motion.div>

            {/* Right: Feature text blocks */}
            <div className="space-y-8 lg:space-y-10">
              {whyFeatures.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                >
                  <h3 className="heading text-xl lg:text-2xl mb-2 uppercase tracking-wider" style={{ color: "#1C1C1C" }}>
                    {feature.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed" style={{ color: "#555" }}>
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Anatomy strip below — horizontal cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 lg:mt-24"
          >
            <p className="section-label text-center mb-8" style={{ color: "var(--cat-accent, #F5A623)" }}>How It Works</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {anatomyFeatures.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="text-center p-6 rounded-2xl"
                  style={{ background: "var(--cat-surface, #F7F3EE)" }}
                >
                  <div
                    className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                    style={{ background: "var(--cat-primary, #1E5C1E)" }}
                  >
                    <span className="text-white font-bold text-sm">{i + 1}</span>
                  </div>
                  <h4 className="font-accent font-bold text-sm uppercase tracking-wider mb-2" style={{ color: "var(--color-text)" }}>
                    {item.label}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── EGGcessories ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--cat-dark, #0F2E0F)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <p className="section-label mb-4" style={{ color: "var(--cat-accent, #F5A623)" }}>Always In Stock</p>
              <h2 className="heading text-[length:var(--text-h2)] mb-4" style={{ color: "var(--color-text-on-dark)" }}>EGGcessories &amp; Charcoal</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(250,246,239,0.7)" }}>
                We keep a full line of Big Green Egg EGGcessories in stock &mdash; plates, grids, pizza stones, tables, covers, and more.
                Plus organic Big Green Egg lump charcoal so you can fire it up the same day.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Plates & Grids", "Pizza Stones", "Tables & Nests", "Organic Charcoal", "Covers", "Rubs & Sauces"].map((item) => (
                  <span key={item} className="pill" style={{ background: "rgba(245,166,35,0.15)", color: "var(--cat-accent, #F5A623)" }}>{item}</span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
              className="rounded-xl overflow-hidden"
            >
              <Image
                src="/images/bge-charcoal.webp"
                alt="Big Green Egg 100% Natural Oak & Hickory Lump Charcoal"
                width={800}
                height={1000}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <CTABlock headline="Come Fire One Up" />
    </>
  )
}
