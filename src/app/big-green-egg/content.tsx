"use client"

import Image from "next/image"
import { PageHero } from "@/components/page-hero"
import { ContactCta } from "@/components/contact-cta"
import { motion } from "framer-motion"

const features = [
  {
    title: "Grill",
    description: "Sear steaks at 750°F with unmatched heat retention and precision airflow control.",
  },
  {
    title: "Smoke",
    description: "Low-and-slow brisket, ribs, and pulled pork with pure natural lump charcoal flavor.",
  },
  {
    title: "Bake",
    description: "Pizza, artisan bread, and desserts — the ceramic shell creates a perfect convection oven.",
  },
  {
    title: "Roast",
    description: "Whole chickens, turkeys, and prime rib with moisture-locking radiant heat.",
  },
]

export const BigGreenEggContent = () => {
  return (
    <>
      <PageHero
        label="Big Green Egg"
        headline="The Grill That Changes Everything"
        description="One cooker. Infinite possibilities. The Big Green Egg is the world's most versatile outdoor cooker — grill, smoke, bake, and roast with unmatched temperature control."
        image="/images/big-green-egg.jpg"
        imageAlt="Big Green Egg ceramic kamado grills"
      />

      {/* Lifestyle section */}
      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="section-label mb-4">The Ultimate Backyard</p>
              <h2
                className="heading text-[length:var(--text-h2)] mb-6"
                style={{ color: "var(--color-text)" }}
              >
                Not Just a Grill.{" "}
                <span className="text-accent">A Way of Life.</span>
              </h2>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "var(--color-text-secondary)" }}
              >
                The Big Green Egg pairs perfectly with a spa, a patio set, and a cold drink.
                It&apos;s the centerpiece of the ultimate Kentucky backyard — and we&apos;re one of
                Lexington&apos;s authorized dealers.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Come see the full lineup in our showroom, from the portable MiniMax to the
                2XL. We stock a complete line of EGGcessories — plates, grids, pizza stones,
                tables, and more.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] overflow-hidden bg-surface rounded-xl"
            >
              <Image
                src="/images/big-green-egg-2.avif"
                alt="Big Green Egg outdoor cooking setup"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Four ways section */}
      <section className="py-[var(--section-py)] bg-surface border-y border-border">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="text-center mb-12 lg:mb-16">
            <p className="section-label mb-4">One Cooker, Four Ways</p>
            <h2
              className="heading text-[length:var(--text-h2)]"
              style={{ color: "var(--color-text)" }}
            >
              What Can It Do?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-center p-6 border border-border bg-background/50 rounded-xl"
              >
                <h3
                  className="heading text-[length:var(--text-h4)] text-accent mb-2"
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  )
}
