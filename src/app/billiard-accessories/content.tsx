"use client"

import { PageHeroSlider } from "@/components/page-hero-slider"
import { BrandCard } from "@/components/brand-card"
import { SectionHeading } from "@/components/section-heading"
import { CTABlock } from "@/components/cta-block"
import { ScenePlaceholder } from "@/components/scene-placeholder"
import { accessoryBrands } from "@/lib/content/brands"
import { motion } from "framer-motion"
import { Lamp, Armchair, Palette, Shield } from "lucide-react"

const slides = [
  {
    image: "/images/accessories.jpg",
    headline: "Everything for the Serious Game Room",
    cta: { label: "See What We Carry", href: "#brands" },
  },
  {
    sceneLabel: "Game room with billiard lighting, bar stools, and wall decor",
    headline: "Cues. Lights. Furniture. All Under One Roof.",
    cta: { label: "Visit the Showroom", href: "/contact" },
  },
  {
    sceneLabel: "Close-up of pool cue tips and exotic wood wraps",
    headline: "The Details Make the Game Room",
    cta: { label: "Call (859) 255-7639", href: "tel:8592557639" },
  },
]


const accessoryCategories = [
  { name: "Cue Sticks & Repair", icon: Palette, scene: "Pool cues lined up on rack, exotic wood, leather wraps" },
  { name: "Table Lights & Fixtures", icon: Lamp, scene: "Billiard table pendant light, art glass shade, warm glow" },
  { name: "Bar Stools & Seating", icon: Armchair, scene: "Spectator bar stools, leather, hardwood, game room" },
  { name: "Cloth & Re-Cloth Service", icon: Shield, scene: "Pool table cloth being installed, green felt, precision" },
]

export const BilliardAccessoriesContent = () => {
  return (
    <>
      <PageHeroSlider slides={slides} />

      {/* ── INTRO ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--cat-surface, #FBF7F0)" }}>
        <div className="mx-auto max-w-[var(--narrow-max)] px-[var(--section-px)] text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <p className="section-label mb-4" style={{ color: "var(--cat-accent, #D4AF37)" }}>Since 1975</p>
            <h2 className="heading text-[length:var(--text-h2)] mb-6" style={{ color: "var(--color-text)" }}>
              The Showroom Has Everything
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--color-text-secondary)" }}>
              Walk in, see it in person, and take it home the same day. Cue sticks from the industry&apos;s
              greatest makers, cue repair, table lights, artwork, bar stools, cloth, and re-cloth service.
              No online guesswork, no shipping damage, no assembly headaches.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Cue Sticks", "Cue Repair", "Table Lights", "Bar Stools", "Cloth & Re-Cloth", "Wall Art", "Supplies"].map((tag) => (
                <span key={tag} className="pill" style={{ background: "rgba(45,90,39,0.1)", color: "var(--cat-felt, #2D5A27)" }}>{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CATEGORY GRID ── */}
      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <SectionHeading label="Shop by Category" headline="Built for the Game Room" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {accessoryCategories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                className="rounded-xl overflow-hidden border card-hover"
                style={{ borderColor: "var(--color-border)", background: "var(--color-background)" }}
              >
                <ScenePlaceholder label={cat.scene} aspectRatio="16/9" />
                <div className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(212,175,55,0.12)" }}>
                    <cat.icon className="w-5 h-5" style={{ color: "var(--cat-accent, #D4AF37)" }} />
                  </div>
                  <h4 className="heading text-[length:var(--text-h4)]" style={{ color: "var(--color-text)" }}>{cat.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRAND SHOWCASE ── */}
      <section id="brands" className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <SectionHeading label="The Brands We Carry" headline="Names You Can Trust" description="From game room furniture to professional cues and billiard lighting — every brand we carry is one we stand behind." />
          <div className="space-y-16 lg:space-y-24">
            {accessoryBrands.map((brand, i) => (
              <BrandCard key={brand.slug} brand={brand} index={i} reversed={i % 2 !== 0} variant={i === 0 ? "wide" : "default"} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SUPPLIES ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--cat-surface, #FBF7F0)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <p className="section-label mb-4" style={{ color: "var(--cat-accent, #D4AF37)" }}>Always In Stock</p>
              <h2 className="heading text-[length:var(--text-h2)] mb-4" style={{ color: "var(--color-text)" }}>Supplies & Service</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
                Aramith balls, Simonis cloth, chalk, brushes, ball cleaners, racks, covers, and everything
                else to keep your table and game in top shape. Plus professional re-cloth and cue repair service.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Aramith Balls", "Simonis Cloth", "Chalk & Tips", "Brushes", "Table Covers", "Racks"].map((item) => (
                  <span key={item} className="pill" style={{ background: "rgba(45,90,39,0.1)", color: "var(--cat-felt, #2D5A27)" }}>{item}</span>
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
              <ScenePlaceholder label="Billiard supplies display — Aramith balls, chalk, brushes, cloth samples" aspectRatio="4/3" />
            </motion.div>
          </div>
        </div>
      </section>

      <CTABlock headline="Come See It All" />
    </>
  )
}
