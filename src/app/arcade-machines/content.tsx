"use client"

import Image from "next/image"
import Link from "next/link"
import { PageHero } from "@/components/page-hero"
import { BrandCard } from "@/components/brand-card"
import { SectionHeading } from "@/components/section-heading"
import { ContactCta } from "@/components/contact-cta"
import { arcadeBrands } from "@/lib/content/brands"
import { motion } from "framer-motion"

export const ArcadeContent = () => {
  return (
    <>
      <PageHero
        label="Arcade Machines"
        headline="Bring the Arcade Home"
        description="Custom multicade cabinets loaded with 60+ classic games, plus Raw Thrills premium machines. The perfect complement to your game room."
        image="/images/arcade.webp"
        imageAlt="Arcade machines at Lexington Billiards"
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
              className="relative aspect-[4/5] overflow-hidden bg-surface rounded-xl"
            >
              <Image
                src="/images/arcade-2.avif"
                alt="Multi-game arcade machine"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="section-label mb-4">Game Room Completionist</p>
              <h2
                className="heading text-[length:var(--text-h2)] mb-6"
                style={{ color: "var(--color-text)" }}
              >
                No Game Room Is Complete Without an Arcade
              </h2>
              <div
                className="space-y-4 text-base leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                <p>
                  You&apos;ve got the pool table. Maybe a bar with stools. But the corner?
                  That corner is calling for a multicade loaded with Pac-Man, Galaga,
                  Street Fighter, and 57 other classics.
                </p>
                <p>
                  Our arcade machines — from custom multicades to Raw Thrills premium cabinets —
                  are built with commercial-grade components: real joysticks, real buttons, real
                  coin doors (or free play, your call). They look incredible, play like the
                  originals, and they&apos;re built to last.
                </p>
                <p>
                  Stop by the showroom to play a few rounds before you decide. We won&apos;t
                  judge your high score.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Visit the Showroom
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand cards */}
      <section className="py-[var(--section-py)] bg-surface border-y border-border">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <SectionHeading
            label="Our Arcade Brands"
            headline="Built for Serious Game Rooms"
            description="Every machine we carry is commercial-grade — the same hardware you'd find in an actual arcade."
          />
          <div className="space-y-16 lg:space-y-24">
            {arcadeBrands.map((brand, i) => (
              <BrandCard
                key={brand.slug}
                brand={brand}
                index={i}
                reversed={i % 2 !== 0}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  )
}
