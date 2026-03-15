"use client"

import { PageHeroSlider } from "@/components/page-hero-slider"
import { BrandCard } from "@/components/brand-card"
import { SectionHeading } from "@/components/section-heading"
import { BottomCta } from "@/components/bottom-cta"
import { ScenePlaceholder } from "@/components/scene-placeholder"
import { arcadeBrands } from "@/lib/content/brands"
import { motion } from "framer-motion"

const slides = [
  {
    image: "/images/arcade.webp",
    headline: "Bring the Arcade Home",
    cta: { label: "See Our Machines", href: "#machines" },
  },
  {
    sceneLabel: "Custom multicade close-up, Kentucky Wildcats blue theme, neon glow",
    headline: "Custom Multicades. Classic Games. Your Design.",
    cta: { label: "Visit the Showroom", href: "/contact" },
  },
  {
    sceneLabel: "Bourbon barrel arcade machine in home game room, warm lighting",
    headline: "Hundreds of Games. One Machine.",
    cta: { label: "Call (859) 255-7639", href: "tel:8592557639" },
  },
]

const machines = [
  {
    name: "Bourbon Barrel Multicade",
    descriptor: "Kentucky-exclusive. Built from a real bourbon barrel. 60+ classic games in the most unique cabinet you\u2019ve ever seen.",
    badge: "Kentucky Exclusive",
    specs: ["60 Classic Games", "Authentic Barrel", "Custom LED Lighting", "Free Play or Coin-Op"],
    scene: "Bourbon barrel arcade machine, dark wood, warm glow, game room",
  },
  {
    name: "Widescreen Upright",
    descriptor: "Our newest model \u2014 32\" widescreen display with crystal-clear graphics and commercial-grade controls.",
    badge: "Newest Model",
    specs: ["60+ Classic Games", "32\" LED Display", "Commercial Joysticks", "Choice of Colors"],
    scene: "Widescreen upright arcade cabinet, modern, bright display",
  },
  {
    name: "20\" LCD Upright",
    descriptor: "The classic arcade cabinet, perfectly sized for any game room.",
    specs: ["60 Classic Games", "20\" LCD Display", "Tempered Glass", "Choice of Colors"],
    scene: "Classic 20 inch upright arcade cabinet",
  },
  {
    name: "32\" LED Upright",
    descriptor: "Same classic cabinet, bigger screen. For the player who wants more.",
    specs: ["60 Classic Games", "32\" LED Display", "Tempered Glass", "Choice of Colors"],
    scene: "Large 32 inch upright arcade, bright screen",
  },
  {
    name: "Cocktail Table",
    descriptor: "Sit down, play face-to-face. The original social gaming experience.",
    specs: ["60 Classic Games", "Two-Player", "Glass Top", "Cup Holders"],
    scene: "Cocktail table arcade, two players seated",
  },
  {
    name: "3-Sided Cocktail",
    descriptor: "Three screens, three sides. The ultimate cocktail cabinet for groups.",
    specs: ["60 Classic Games", "Three Displays", "6-Player", "Commercial Grade"],
    scene: "Three-sided cocktail arcade table",
  },
  {
    name: "Virtual Pinball",
    descriptor: "863+ classic pinball tables on one machine. Full-size cabinet with force feedback, backglass display, and authentic plunger.",
    badge: "863+ Tables",
    specs: ["863+ Pinball Tables", "Full-Size Cabinet", "Force Feedback", "Backglass Display"],
    scene: "Virtual pinball machine, bright playfield, full cabinet",
  },
]

export const ArcadeContent = () => {
  return (
    <>
      <PageHeroSlider slides={slides} />

      {/* ── MACHINE LINEUP ── */}
      <section id="machines" className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <SectionHeading
            label="What's In Our Showroom"
            headline="The Machine Lineup"
            description="Every machine is hand-built with commercial-grade components. Come play a few rounds before you decide."
          />

          <div className="space-y-8">
            {/* Bourbon Barrel \u2014 Hero card */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className="relative rounded-2xl overflow-hidden scanlines"
              style={{ background: "var(--color-dark)" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative aspect-[4/3] lg:aspect-auto min-h-[300px]">
                  <ScenePlaceholder label={machines[0].scene} className="w-full h-full !rounded-none" dark />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center relative z-10">
                  <span className="pill pill-gold mb-4 inline-block w-fit">{machines[0].badge}</span>
                  <h3 className="heading text-[length:var(--text-h2)] mb-3" style={{ color: "var(--color-text-on-dark)" }}>{machines[0].name}</h3>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(250,246,239,0.65)" }}>{machines[0].descriptor}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {machines[0].specs.map((s) => (
                      <span key={s} className="pill" style={{ background: "rgba(250,246,239,0.1)", color: "var(--color-text-on-dark)" }}>{s}</span>
                    ))}
                  </div>
                  <a href="/contact" className="btn-primary w-fit">Visit the Showroom</a>
                </div>
              </div>
            </motion.div>

            {/* Widescreen \u2014 Feature */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
              className="lg:w-[66%] rounded-2xl overflow-hidden border card-hover"
              style={{ borderColor: "var(--color-border)", background: "var(--color-cream)" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                <ScenePlaceholder label={machines[1].scene} aspectRatio="4/5" />
                <div className="p-8 flex flex-col justify-center">
                  <span className="pill pill-orange mb-3 inline-block w-fit">{machines[1].badge}</span>
                  <h3 className="heading text-[length:var(--text-h3)] mb-2" style={{ color: "var(--color-text)" }}>{machines[1].name}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--color-text-secondary)" }}>{machines[1].descriptor}</p>
                  <div className="flex flex-wrap gap-2">
                    {machines[1].specs.map((s) => <span key={s} className="pill pill-dark">{s}</span>)}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Uprights pair */}
            <div>
              <p className="section-label mb-6">Classic Uprights \u2014 Pick Your Size</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {machines.slice(2, 4).map((m, i) => (
                  <motion.div key={m.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                    className="rounded-xl overflow-hidden border card-hover" style={{ borderColor: "var(--color-border)", background: "var(--color-cream)" }}
                  >
                    <ScenePlaceholder label={m.scene} aspectRatio="4/3" />
                    <div className="p-6">
                      <h4 className="heading text-[length:var(--text-h4)] mb-2" style={{ color: "var(--color-text)" }}>{m.name}</h4>
                      <p className="text-sm mb-4" style={{ color: "var(--color-text-secondary)" }}>{m.descriptor}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {m.specs.map((s) => <span key={s} className="pill pill-dark text-[11px]">{s}</span>)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Cocktail pair */}
            <div>
              <p className="section-label mb-6">Classic Cocktail Style</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {machines.slice(4, 6).map((m, i) => (
                  <motion.div key={m.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                    className="rounded-xl overflow-hidden border card-hover" style={{ borderColor: "var(--color-border)", background: "var(--color-cream)" }}
                  >
                    <ScenePlaceholder label={m.scene} aspectRatio="4/3" />
                    <div className="p-6">
                      <h4 className="heading text-[length:var(--text-h4)] mb-2" style={{ color: "var(--color-text)" }}>{m.name}</h4>
                      <p className="text-sm mb-4" style={{ color: "var(--color-text-secondary)" }}>{m.descriptor}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {m.specs.map((s) => <span key={s} className="pill pill-dark text-[11px]">{s}</span>)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Virtual Pinball \u2014 Hero */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className="rounded-2xl overflow-hidden scanlines"
              style={{ background: "var(--color-dark)" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-0">
                <div className="relative aspect-[3/4] lg:aspect-auto min-h-[300px]">
                  <ScenePlaceholder label={machines[6].scene} className="w-full h-full !rounded-none" dark />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center relative z-10">
                  <p className="heading text-[length:var(--text-stat)] mb-2" style={{ color: "var(--color-primary)" }}>863+</p>
                  <p className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: "rgba(250,246,239,0.5)" }}>Classic Pinball Tables</p>
                  <h3 className="heading text-[length:var(--text-h2)] mb-3" style={{ color: "var(--color-text-on-dark)" }}>{machines[6].name}</h3>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(250,246,239,0.65)" }}>{machines[6].descriptor}</p>
                  <div className="flex flex-wrap gap-2">
                    {machines[6].specs.map((s) => (
                      <span key={s} className="pill" style={{ background: "rgba(250,246,239,0.1)", color: "var(--color-text-on-dark)" }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--color-cream)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <SectionHeading label="Our Arcade Brands" headline="Built for Serious Game Rooms" />
          <div className="space-y-16 lg:space-y-24">
            {arcadeBrands.map((brand, i) => (
              <BrandCard key={brand.slug} brand={brand} index={i} reversed={i % 2 !== 0} />
            ))}
          </div>
        </div>
      </section>

      <BottomCta headline="Come Play One" variant="dark" />
    </>
  )
}
