"use client"

import { PageHeroSlider } from "@/components/page-hero-slider"
import { BrandCard } from "@/components/brand-card"
import { SectionHeading } from "@/components/section-heading"
import { CTABlock } from "@/components/cta-block"
import { ScenePlaceholder } from "@/components/scene-placeholder"
import { spaBrands } from "@/lib/content/brands"
import { motion } from "framer-motion"
import { ShieldCheck, Droplets, Truck, Wrench, CreditCard } from "lucide-react"

const slides = [
  {
    image: "/images/hot-tubs.jpg",
    headline: "Your Backyard Is Missing a Hot Tub",
    cta: { label: "See Our Spas", href: "#brands" },
  },
  {
    sceneLabel: "Couple relaxing in spa, candles on deck, evening patio",
    headline: "Lexington\u2019s Oldest Spa Dealer \u2014 Still the Best",
    cta: { label: "Visit the Showroom", href: "/contact" },
  },
  {
    sceneLabel: "Aerial view of glowing spa in landscaped garden, night",
    headline: "Free Delivery & Installation. Just Add Water.",
    cta: { label: "Call (859) 255-7639", href: "tel:8592557639" },
  },
]

const serviceFeatures = [
  { icon: ShieldCheck, title: "Factory-Authorized Service", description: "Warranty repairs done right, by certified technicians who know these spas inside and out." },
  { icon: Droplets, title: "Chemicals & Supplies", description: "Full line of spa chemicals, filters, covers, and replacement parts — always in stock." },
  { icon: Truck, title: "Free Delivery & Install", description: "Delivery and installation included within Lexington. We handle placement, electrical, and first fill." },
  { icon: Wrench, title: "Spa Moving Service", description: "Relocating? We\u2019ll disconnect, transport, and reinstall your spa at your new home." },
  { icon: CreditCard, title: "Financing Available", description: "Flexible financing options to fit your budget. Ask about current promotions." },
]

export const SpasContent = () => {
  return (
    <>
      <PageHeroSlider slides={slides} />

      {/* ── INTRO ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--cat-surface, #F0F7F9)" }}>
        <div className="mx-auto max-w-[var(--narrow-max)] px-[var(--section-px)] text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <p className="heading text-[length:var(--text-stat)] mb-4" style={{ color: "var(--cat-secondary, #1A8FA0)" }}>50+</p>
            <p className="section-label mb-4" style={{ color: "var(--cat-primary, #0A4A5C)" }}>Years as Lexington&apos;s Spa Dealer</p>
            <p className="text-lg leading-relaxed mb-10 max-w-[55ch] mx-auto" style={{ color: "var(--color-text-secondary)" }}>
              Nobody in Central Kentucky has been selling and servicing hot tubs
              longer than us. Big-box stores sell you a spa and wish you luck.
              We deliver it, install it, teach you how to maintain it, and
              service it for years to come.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Free Delivery", "Factory Warranty Service", "Financing Available", "Chemicals In Stock"].map((tag) => (
                <span key={tag} className="pill" style={{ background: "rgba(10,74,92,0.1)", color: "var(--cat-primary, #0A4A5C)" }}>{tag}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BRAND SHOWCASE ── */}
      <section id="brands" className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <SectionHeading label="Our Spa Brands" headline="Hydrotherapy You Can Trust" description="Every spa in our showroom is plumbed, powered, and ready for you to test before you buy." />
          <div className="space-y-16 lg:space-y-24">
            {spaBrands.map((brand, i) => (
              <BrandCard key={brand.slug} brand={brand} index={i} reversed={i % 2 !== 0} variant={i === 0 ? "wide" : "default"} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SHOWROOM / PRODUCT GRID ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--cat-surface, #F0F7F9)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <SectionHeading label="In Our Showroom" headline="See Them Running. Feel the Jets." description="Our spas are plumbed and powered — test the jets, feel the seats, find your perfect fit." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "2-Person Intimate", scene: "Small two-person spa, cozy patio" },
              { name: "4-Person Family", scene: "Medium family spa, deck setting" },
              { name: "6-Person Party", scene: "Large spa, outdoor entertaining" },
              { name: "8-Person Premium", scene: "Luxury large spa, evening glow" },
              { name: "Swim Spa", scene: "Swim spa, long pool shape, covered patio" },
              { name: "Spa + Gazebo Package", scene: "Spa under gazebo, string lights" },
            ].map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                className="rounded-xl overflow-hidden card-hover border"
                style={{ borderColor: "var(--color-border)", background: "var(--color-background)" }}
              >
                <ScenePlaceholder label={product.scene} aspectRatio="4/3" />
                <div className="p-5">
                  <h4 className="heading text-[length:var(--text-h4)] mb-2" style={{ color: "var(--color-text)" }}>{product.name}</h4>
                  <span className="text-sm font-bold" style={{ color: "var(--cat-secondary, #1A8FA0)" }}>See in Showroom &rarr;</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE STRIP ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--cat-dark, #062838)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <p className="font-accent text-sm font-medium uppercase tracking-wider mb-4" style={{ color: "var(--cat-accent, #7DD4E0)" }}>Full-Service Spa Dealer</p>
              <h2 className="heading text-[length:var(--text-h2)] mb-6" style={{ color: "#FFFFFF" }}>We Don&apos;t Just Sell — We Service</h2>
              <p className="text-lg leading-relaxed max-w-[55ch]" style={{ color: "rgba(255,255,255,0.7)" }}>
                When you buy a spa from us, you get a relationship — not a receipt. Our technicians
                are factory-trained, our parts are always in stock, and our phone number never changes.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {serviceFeatures.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                  className="rounded-xl p-5"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <feature.icon className="w-5 h-5 mb-3" style={{ color: "var(--cat-accent, #7DD4E0)" }} />
                  <h3 className="font-display font-bold text-base mb-1" style={{ color: "#FFFFFF" }}>{feature.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABlock headline="Your Backyard Is Waiting" />
    </>
  )
}
