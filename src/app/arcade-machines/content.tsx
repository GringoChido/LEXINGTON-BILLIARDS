"use client"

import { PageHeroSlider } from "@/components/page-hero-slider"
import { BrandCard } from "@/components/brand-card"
import { SectionHeading } from "@/components/section-heading"
import { CTABlock } from "@/components/cta-block"
import { ScenePlaceholder } from "@/components/scene-placeholder"
import { arcadeBrands } from "@/lib/content/brands"
import { motion } from "framer-motion"

const slides = [
  {
    image: "/images/arcade.jpg",
    headline: "Bring the Arcade Home",
    cta: { label: "See Our Machines", href: "#machines" },
  },
  {
    sceneLabel: "Custom multicade close-up, neon glow, dark room",
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
    <div style={{ background: "var(--cat-primary, #1A1A2E)" }}>
      <PageHeroSlider slides={slides} />

      {/* ── CATEGORY INTRO ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--cat-primary, #1A1A2E)" }}>
        <div className="mx-auto max-w-[var(--narrow-max)] px-[var(--section-px)] text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <p className="heading text-[length:var(--text-stat)] mb-4" style={{ color: "var(--cat-accent, #FFD60A)" }}>7</p>
            <p className="section-label mb-4" style={{ color: "var(--cat-neon-green, #06D6A0)" }}>Machine Types In Our Showroom</p>
            <p className="text-lg leading-relaxed mb-10 max-w-[55ch] mx-auto" style={{ color: "rgba(248,249,250,0.6)" }}>
              Uprights, cocktail tables, bourbon barrels, and virtual pinball — every machine is
              hand-built with commercial-grade components. Come play a few rounds before you decide.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Hand-Built Cabinets", "60+ Classic Games", "Commercial Grade", "Custom Designs"].map((tag) => (
                <span key={tag} className="pill" style={{ background: "rgba(6,214,160,0.12)", color: "var(--cat-neon-green, #06D6A0)" }}>{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MACHINE LINEUP / PRODUCT GRID ── */}
      <section id="machines" className="py-[var(--section-py)]" style={{ background: "var(--cat-primary, #1A1A2E)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="mb-14 lg:mb-20">
            <p className="section-label mb-4" style={{ color: "var(--cat-accent, #FFD60A)" }}>What&apos;s In Our Showroom</p>
            <h2 className="heading text-[length:var(--text-h1)] mb-4" style={{ color: "var(--cat-light, #F8F9FA)" }}>The Machine Lineup</h2>
          </div>

          <div className="space-y-8">
            {/* Bourbon Barrel — Hero card with red badge */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className="relative rounded-2xl overflow-hidden scanlines"
              style={{ background: "var(--cat-surface, #16213E)" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative aspect-[4/3] lg:aspect-auto min-h-[300px]">
                  <ScenePlaceholder label={machines[0].scene} className="w-full h-full !rounded-none" dark />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center relative z-10">
                  <span className="pill mb-4 inline-block w-fit" style={{ background: "rgba(230,57,70,0.2)", color: "var(--cat-secondary, #E63946)" }}>{machines[0].badge}</span>
                  <h3 className="heading text-[length:var(--text-h2)] mb-3" style={{ color: "var(--cat-accent, #FFD60A)" }}>{machines[0].name}</h3>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(248,249,250,0.65)" }}>{machines[0].descriptor}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {machines[0].specs.map((s) => (
                      <span key={s} className="pill" style={{ background: "rgba(6,214,160,0.15)", color: "var(--cat-neon-green, #06D6A0)" }}>{s}</span>
                    ))}
                  </div>
                  <a href="/contact" className="inline-flex items-center justify-center gap-2 font-display font-bold text-sm px-8 py-4 rounded-lg w-fit" style={{ background: "var(--cat-accent, #FFD60A)", color: "var(--cat-primary, #1A1A2E)" }}>
                    Visit the Showroom
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Widescreen — Feature */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
              className="lg:w-[66%] rounded-2xl overflow-hidden border"
              style={{ borderColor: "rgba(0,180,216,0.2)", background: "var(--cat-surface, #16213E)" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                <ScenePlaceholder label={machines[1].scene} aspectRatio="4/5" dark />
                <div className="p-8 flex flex-col justify-center">
                  <span className="pill mb-3 inline-block w-fit" style={{ background: "rgba(0,180,216,0.15)", color: "var(--cat-neon-blue, #00B4D8)" }}>{machines[1].badge}</span>
                  <h3 className="heading text-[length:var(--text-h3)] mb-2" style={{ color: "var(--cat-light, #F8F9FA)" }}>{machines[1].name}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(248,249,250,0.6)" }}>{machines[1].descriptor}</p>
                  <div className="flex flex-wrap gap-2">
                    {machines[1].specs.map((s) => <span key={s} className="pill" style={{ background: "rgba(248,249,250,0.08)", color: "rgba(248,249,250,0.7)" }}>{s}</span>)}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Uprights pair */}
            <div>
              <p className="font-accent text-sm font-medium uppercase tracking-wider mb-6" style={{ color: "var(--cat-neon-blue, #00B4D8)" }}>Classic Uprights — Pick Your Size</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {machines.slice(2, 4).map((m, i) => (
                  <motion.div key={m.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                    className="rounded-xl overflow-hidden border" style={{ borderColor: "rgba(248,249,250,0.08)", background: "var(--cat-surface, #16213E)" }}
                  >
                    <ScenePlaceholder label={m.scene} aspectRatio="4/3" dark />
                    <div className="p-6">
                      <h4 className="heading text-[length:var(--text-h4)] mb-2" style={{ color: "var(--cat-light, #F8F9FA)" }}>{m.name}</h4>
                      <p className="text-sm mb-4" style={{ color: "rgba(248,249,250,0.6)" }}>{m.descriptor}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {m.specs.map((s) => <span key={s} className="pill text-[11px]" style={{ background: "rgba(6,214,160,0.1)", color: "var(--cat-neon-green, #06D6A0)" }}>{s}</span>)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Cocktail pair */}
            <div>
              <p className="font-accent text-sm font-medium uppercase tracking-wider mb-6" style={{ color: "var(--cat-neon-green, #06D6A0)" }}>Classic Cocktail Style</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {machines.slice(4, 6).map((m, i) => (
                  <motion.div key={m.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                    className="rounded-xl overflow-hidden border" style={{ borderColor: "rgba(248,249,250,0.08)", background: "var(--cat-surface, #16213E)" }}
                  >
                    <ScenePlaceholder label={m.scene} aspectRatio="4/3" dark />
                    <div className="p-6">
                      <h4 className="heading text-[length:var(--text-h4)] mb-2" style={{ color: "var(--cat-light, #F8F9FA)" }}>{m.name}</h4>
                      <p className="text-sm mb-4" style={{ color: "rgba(248,249,250,0.6)" }}>{m.descriptor}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {m.specs.map((s) => <span key={s} className="pill text-[11px]" style={{ background: "rgba(6,214,160,0.1)", color: "var(--cat-neon-green, #06D6A0)" }}>{s}</span>)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Virtual Pinball — Hero with neon blue */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className="rounded-2xl overflow-hidden scanlines"
              style={{ background: "var(--cat-surface, #16213E)", border: "1px solid rgba(0,180,216,0.2)" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-0">
                <div className="relative aspect-[3/4] lg:aspect-auto min-h-[300px]">
                  <ScenePlaceholder label={machines[6].scene} className="w-full h-full !rounded-none" dark />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center relative z-10">
                  <p className="heading text-[length:var(--text-stat)] mb-2" style={{ color: "var(--cat-neon-blue, #00B4D8)" }}>863+</p>
                  <p className="font-accent text-sm font-medium uppercase tracking-wider mb-4" style={{ color: "rgba(248,249,250,0.5)" }}>Classic Pinball Tables</p>
                  <h3 className="heading text-[length:var(--text-h2)] mb-3" style={{ color: "var(--cat-light, #F8F9FA)" }}>{machines[6].name}</h3>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(248,249,250,0.65)" }}>{machines[6].descriptor}</p>
                  <div className="flex flex-wrap gap-2">
                    {machines[6].specs.map((s) => (
                      <span key={s} className="pill" style={{ background: "rgba(0,180,216,0.12)", color: "var(--cat-neon-blue, #00B4D8)" }}>{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--cat-surface, #16213E)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <SectionHeading label="Our Arcade Brands" headline="Built for Serious Game Rooms" />
          <div className="space-y-16 lg:space-y-24">
            {arcadeBrands.map((brand, i) => (
              <BrandCard key={brand.slug} brand={brand} index={i} reversed={i % 2 !== 0} variant={i === 0 ? "wide" : "default"} />
            ))}
          </div>
        </div>
      </section>

      <CTABlock headline="Come Play One" />
    </div>
  )
}
