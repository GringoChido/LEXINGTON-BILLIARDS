"use client"

import Image from "next/image"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { ContactCta } from "@/components/contact-cta"
import { motion } from "framer-motion"

const accessoryCategories = [
  {
    title: "Spectator Bar Stools",
    description:
      "Leather upholstery, hardwood frames, and game-height seating. Built for the long session — comfortable enough for overtime.",
    image: "/images/bar-stools.webp",
  },
  {
    title: "Cues & Cue Racks",
    description:
      "From house cues to tournament-grade shafts. Wall racks, floor racks, and custom displays that make your cues part of the room.",
    image: "/images/accessories.jpg",
  },
  {
    title: "Billiard Balls & Supplies",
    description:
      "Aramith premium balls, chalk, brushes, ball cleaners, triangle racks, and table covers. Everything to keep your game sharp.",
    image: "/images/pool-tables.jpg",
  },
  {
    title: "Cloth & Re-cloth Service",
    description:
      "29 colors of premium Simonis and Championship cloth. Professional installation by our in-house service team — done right the first time.",
    image: "/images/pool-tables.jpg",
  },
]

export const AccessoriesContent = () => {
  return (
    <>
      <PageHero
        label="Accessories"
        headline="Complete Your Game Room in One Visit"
        description="Bar stools, cues, balls, racks, cloth, chalk — everything you need to play, display, and enjoy. All available in our showroom."
        image="/images/accessories.jpg"
        imageAlt="Billiard accessories and bar stools"
      />

      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <SectionHeading
            label="Shop by Category"
            headline="Everything You Need Under One Roof"
            description="No online ordering, no shipping damage, no assembly confusion. Come in, pick what you want, and leave with it."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {accessoryCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden bg-surface border border-border card-hover rounded-xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h3
                    className="heading text-[length:var(--text-h4)] mb-2"
                    style={{ color: "var(--color-text)" }}
                  >
                    {cat.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {cat.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  )
}
