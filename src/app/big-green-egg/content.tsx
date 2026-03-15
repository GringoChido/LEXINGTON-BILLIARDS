"use client"

import Image from "next/image"
import { PageHeroSlider } from "@/components/page-hero-slider"
import { SectionHeading } from "@/components/section-heading"
import { BottomCta } from "@/components/bottom-cta"
import { ScenePlaceholder } from "@/components/scene-placeholder"
import { brandLogos } from "@/lib/content/brands"
import { motion } from "framer-motion"

const slides = [
  {
    image: "/images/big-green-egg.jpg",
    headline: "Once You Cook on an Egg, Everything Else Is Just a Grill",
    cta: { label: "See the Lineup", href: "#eggs" },
  },
  {
    sceneLabel: "Family around Big Green Egg, backyard party, golden hour",
    headline: "The Grill That Changes Everything",
    cta: { label: "Visit the Showroom", href: "/contact" },
  },
  {
    sceneLabel: "Close-up of Big Green Egg open, glowing coals, fire",
    headline: "Come Fire One Up in Our Showroom",
    cta: { label: "Call (859) 255-7639", href: "tel:8592557639" },
  },
]

const eggSizes = [
  { name: "2XL", tagline: "The neighborhood centerpiece", h: "h-36 w-28" },
  { name: "XLarge", tagline: "The backyard centerpiece", h: "h-32 w-24" },
  { name: "Large", tagline: "The most popular EGG", h: "h-28 w-20" },
  { name: "Medium", tagline: "Perfect for smaller families", h: "h-24 w-16" },
  { name: "MiniMax", tagline: "The tailgate companion", h: "h-20 w-14" },
  { name: "Mini", tagline: "Portable perfection", h: "h-16 w-12" },
]

const anatomy = [
  { label: "Dual-Function Metal Top", description: "Controls heated air exit and acts as a chimney cap" },
  { label: "Air-Tight Ceramic Chamber", description: "Retains heat for hours with minimal charcoal" },
  { label: "Sealed Fire Box", description: "Burns 100% natural lump charcoal \u2014 no chemicals" },
  { label: "Precision Flow Draft Door", description: "Fine-tune airflow from 200\u00B0F to 750\u00B0F" },
  { label: "Stainless Steel Hardware", description: "Built to withstand years of weather and heat" },
]

const whyFeatures = [
  { title: "SIMPLE TO START", description: "Light natural lump charcoal, open the draft door, and you\u2019re cooking in minutes. No gas lines, no propane tanks, no complicated ignition.", scene: "Lighting Big Green Egg, charcoal, fire starter" },
  { title: "PRECISE TEMPERATURE CONTROL", description: "The patented draft door and dual-function metal top give you exact airflow control. Hold 200\u00B0F for smoking or crank to 750\u00B0F for pizza in 90 seconds.", scene: "Big Green Egg thermometer close-up" },
  { title: "SAFER TO USE", description: "The ceramic shell stays cool to the touch even at extreme temperatures. Sealed design means no flare-ups, no grease fires, no surprises.", scene: "Family around BGE, kids nearby, safe cooking" },
  { title: "PATENTED CERAMICS", description: "NASA-grade ceramic technology retains heat and moisture like nothing else. The juiciest brisket, the crispiest pizza crust, the most tender ribs you\u2019ve ever made.", scene: "Big Green Egg ceramic interior detail" },
  { title: "EASY CLEANUP", description: "Crank the temperature to 600\u00B0F for ten minutes and everything burns clean. Sweep the ash into the built-in catcher. Done.", scene: "Big Green Egg exterior, clean and maintained" },
]

export const BigGreenEggContent = () => {
  const eggLogo = brandLogos["big-green-egg"]

  return (
    <>
      <PageHeroSlider slides={slides} />

      {/* ── BRAND FEATURE ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--color-dark)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)] text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            {eggLogo && (
              <div className="relative w-[160px] h-[80px] mx-auto mb-8">
                <Image src={eggLogo} alt="Big Green Egg logo" fill className="object-contain brightness-0 invert opacity-70" sizes="160px" />
              </div>
            )}
            <p className="section-label mb-4" style={{ color: "var(--color-green-egg)" }}>Authorized Dealer</p>
            <h2 className="heading text-[length:var(--text-h1)] mb-6 max-w-[20ch] mx-auto" style={{ color: "var(--color-text-on-dark)" }}>
              It&apos;s Not a Grill.{" "}
              <span style={{ color: "var(--color-green-egg)" }}>It&apos;s an Obsession.</span>
            </h2>
            <p className="text-lg leading-relaxed max-w-[50ch] mx-auto" style={{ color: "rgba(250,246,239,0.6)" }}>
              The Big Green Egg has a cult following for a reason. One cooker that grills, smokes,
              bakes, and roasts \u2014 with temperature control no gas grill can match. We keep several
              models on display, organic charcoal in stock, and a full line of EGGcessories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SIZE GUIDE ── */}
      <section id="eggs" className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <SectionHeading label="Find Your EGG" headline="Six Sizes. One Obsession." description="From the portable Mini to the neighborhood-feeding 2XL." />
          <div className="flex flex-wrap justify-center items-end gap-6 lg:gap-10">
            {eggSizes.map((egg, i) => (
              <motion.div
                key={egg.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                className="group flex flex-col items-center text-center"
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`${egg.h} rounded-[40%] mb-4 flex items-center justify-center relative`}
                  style={{ background: "var(--color-green-egg)" }}
                >
                  <span className="text-white font-bold text-xs">{egg.name}</span>
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    <span className="text-xs font-medium px-3 py-1.5 rounded-full" style={{ background: "var(--color-dark)", color: "var(--color-text-on-dark)" }}>
                      {egg.tagline}
                    </span>
                  </div>
                </motion.div>
                <p className="heading text-sm mt-2" style={{ color: "var(--color-text)" }}>{egg.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANATOMY ── */}
      <section className="py-[var(--section-py)] border-y" style={{ background: "var(--color-cream)", borderColor: "var(--color-border)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
              className="rounded-2xl overflow-hidden"
            >
              <div className="relative aspect-[3/4]">
                <Image src="/images/big-green-egg-2.avif" alt="Big Green Egg" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </motion.div>
            <div>
              <p className="section-label mb-2" style={{ color: "var(--color-green-egg)" }}>How It Works</p>
              <h2 className="heading text-[length:var(--text-h2)] mb-8" style={{ color: "var(--color-text)" }}>Engineered for Perfection</h2>
              <div className="space-y-6">
                {anatomy.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "var(--color-green-egg)" }}>
                      <span className="text-white text-xs font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm mb-1 uppercase tracking-wide" style={{ color: "var(--color-text)" }}>{item.label}</h4>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY THE EGG ── */}
      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <SectionHeading label="Why The EGG" headline="Five Reasons You'll Never Go Back" />
          <div className="space-y-12 lg:space-y-20">
            {whyFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${i % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}
              >
                <div className="rounded-xl overflow-hidden lg:[direction:ltr]">
                  <ScenePlaceholder label={feature.scene} aspectRatio="16/10" />
                </div>
                <div className="lg:[direction:ltr]">
                  <h3 className="heading text-[length:var(--text-h3)] mb-4 uppercase tracking-wide" style={{ color: "var(--color-green-egg)" }}>
                    {feature.title}
                  </h3>
                  <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EGGcessories ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <p className="section-label mb-4" style={{ color: "var(--color-green-egg)" }}>Always In Stock</p>
              <h2 className="heading text-[length:var(--text-h2)] mb-4" style={{ color: "var(--color-text)" }}>EGGcessories & Charcoal</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
                We keep a full line of Big Green Egg EGGcessories in stock \u2014 plates, grids, pizza stones, tables, covers, and more.
                Plus organic Big Green Egg lump charcoal so you can fire it up the same day.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Plates & Grids", "Pizza Stones", "Tables & Nests", "Organic Charcoal", "Covers", "Rubs & Sauces"].map((item) => (
                  <span key={item} className="pill" style={{ background: "rgba(45,106,47,0.1)", color: "var(--color-green-egg)" }}>{item}</span>
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
              <ScenePlaceholder label="EGGcessories display \u2014 plates, pizza stones, charcoal bags" aspectRatio="4/3" />
            </motion.div>
          </div>
        </div>
      </section>

      <BottomCta headline="Come Fire One Up" variant="green" />
    </>
  )
}
