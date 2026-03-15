"use client"

import Image from "next/image"
import { PageHeroSlider } from "@/components/page-hero-slider"
import { SectionHeading } from "@/components/section-heading"
import { BottomCta } from "@/components/bottom-cta"
import { ScenePlaceholder } from "@/components/scene-placeholder"
import { accessoryBrands, brandLogos } from "@/lib/content/brands"
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

const ramSubBrands = accessoryBrands.filter((b) => b.slug.startsWith("ram-"))
const falconCues = accessoryBrands.find((b) => b.slug === "falcon-cues")!
const imperialBrand = accessoryBrands.find((b) => b.slug === "imperial")!
const toltecBrand = accessoryBrands.find((b) => b.slug === "toltec")!

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

      {/* -- INTRO -- */}
      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--narrow-max)] px-[var(--section-px)] text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <p className="section-label mb-4">Since 1975</p>
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
                <span key={tag} className="pill pill-dark">{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* -- CATEGORY GRID -- */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--color-cream)" }}>
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
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(234,88,12,0.1)" }}>
                    <cat.icon className="w-5 h-5" style={{ color: "var(--color-primary)" }} />
                  </div>
                  <h4 className="heading text-[length:var(--text-h4)]" style={{ color: "var(--color-text)" }}>{cat.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -- RAM FAMILY -- */}
      <section id="brands" className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <SectionHeading
            label="The RAM Family"
            headline="Three Brands. One Complete Game Room."
            description="RAM covers everything from indoor game room furniture to outdoor entertaining — bar stools, pub tables, dartboards, wall decor, and patio pieces."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {ramSubBrands.map((brand, i) => {
              const logo = brandLogos[brand.slug]
              return (
                <motion.div
                  key={brand.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                  className="rounded-xl overflow-hidden border card-hover"
                  style={{ borderColor: "var(--color-border)", background: "var(--color-cream)" }}
                >
                  <ScenePlaceholder
                    label={
                      i === 0 ? "Game room furniture, bar stools, dartboard, warm lighting" :
                      i === 1 ? "Spectator chairs and pub table, rustic hardwood game room" :
                      "Outdoor patio bar and deck furniture, Kentucky backyard"
                    }
                    aspectRatio="4/3"
                  />
                  <div className="p-6">
                    {logo && (
                      <div className="relative w-[100px] h-[40px] mb-3">
                        <Image src={logo} alt={`${brand.name} logo`} fill className="object-contain object-left" sizes="100px" />
                      </div>
                    )}
                    <h4 className="heading text-[length:var(--text-h4)] mb-2" style={{ color: "var(--color-text)" }}>{brand.name}</h4>
                    <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--color-primary)" }}>{brand.tagline}</p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{brand.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* -- FALCON CUES -- */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            <div className="rounded-xl overflow-hidden">
              <ScenePlaceholder label="Falcon pool cues, exotic wood inlays, leather wraps, close-up detail" aspectRatio="3/4" />
            </div>
            <div>
              {brandLogos[falconCues.slug] && (
                <div className="relative w-[120px] h-[50px] mb-4">
                  <Image src={brandLogos[falconCues.slug]} alt="Falcon Cues logo" fill className="object-contain object-left" sizes="120px" />
                </div>
              )}
              <p className="section-label mb-2" style={{ color: "var(--color-primary)" }}>Since 1987</p>
              <h3 className="heading text-[length:var(--text-h2)] mb-4" style={{ color: "var(--color-text)" }}>{falconCues.name}</h3>
              <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "var(--color-primary)" }}>{falconCues.tagline}</p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>{falconCues.description}</p>
              <div className="flex flex-wrap gap-2">
                {["Premium Shafts", "Exotic Wraps", "Pro Tips", "Custom Orders"].map((spec) => (
                  <span key={spec} className="pill pill-dark">{spec}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -- IMPERIAL -- */}
      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center lg:[direction:rtl]"
          >
            <div className="rounded-xl overflow-hidden lg:[direction:ltr]">
              <ScenePlaceholder label="NFL, NBA, NCAA team-branded pool table felt and dart cabinet display" aspectRatio="4/3" />
            </div>
            <div className="lg:[direction:ltr]">
              {brandLogos[imperialBrand.slug] && (
                <div className="relative w-[120px] h-[50px] mb-4">
                  <Image src={brandLogos[imperialBrand.slug]} alt="Imperial logo" fill className="object-contain object-left" sizes="120px" />
                </div>
              )}
              <h3 className="heading text-[length:var(--text-h2)] mb-4" style={{ color: "var(--color-text)" }}>{imperialBrand.name}</h3>
              <p className="text-xs font-bold uppercase tracking-wider mb-4" style={{ color: "var(--color-primary)" }}>{imperialBrand.tagline}</p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>{imperialBrand.description}</p>
              <div className="flex flex-wrap gap-2">
                {["NFL", "NBA", "MLB", "NHL", "NCAA"].map((league) => (
                  <span key={league} className="pill pill-gold">{league}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -- TOLTEC LIGHTING -- Full-width dark feature */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--color-dark)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 items-center">
              <div className="rounded-xl overflow-hidden">
                <ScenePlaceholder label="Toltec billiard pendant light, hand-blown art glass, warm amber glow over pool table" aspectRatio="16/10" dark />
              </div>
              <div>
                {brandLogos[toltecBrand.slug] && (
                  <div className="relative w-[120px] h-[50px] mb-4">
                    <Image src={brandLogos[toltecBrand.slug]} alt="Toltec Lighting logo" fill className="object-contain object-left brightness-0 invert opacity-70" sizes="120px" />
                  </div>
                )}
                <p className="section-label mb-2" style={{ color: "var(--color-gold)" }}>The Light That Changes the Room</p>
                <h3 className="heading text-[length:var(--text-h2)] mb-4" style={{ color: "var(--color-text-on-dark)" }}>{toltecBrand.name}</h3>
                <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(250,246,239,0.65)" }}>{toltecBrand.description}</p>
                <div className="flex flex-wrap gap-2">
                  {["Pendant Lights", "Billiard Fixtures", "Art Glass Shades", "Custom Lengths"].map((spec) => (
                    <span key={spec} className="pill" style={{ background: "rgba(250,246,239,0.1)", color: "var(--color-text-on-dark)" }}>{spec}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -- SUPPLIES BAND -- */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--color-cream)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <p className="section-label mb-4" style={{ color: "var(--color-primary)" }}>Always In Stock</p>
              <h2 className="heading text-[length:var(--text-h2)] mb-4" style={{ color: "var(--color-text)" }}>Supplies & Service</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
                Aramith balls, Simonis cloth, chalk, brushes, ball cleaners, racks, covers, and everything
                else to keep your table and game in top shape. Plus professional re-cloth and cue repair service.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Aramith Balls", "Simonis Cloth", "Chalk & Tips", "Brushes", "Table Covers", "Racks"].map((item) => (
                  <span key={item} className="pill" style={{ background: "rgba(234,88,12,0.1)", color: "var(--color-primary)" }}>{item}</span>
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

      <BottomCta headline="Come See It All" variant="dark" />
    </>
  )
}
