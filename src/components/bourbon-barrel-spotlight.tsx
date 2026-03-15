"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ScenePlaceholder } from "@/components/scene-placeholder"

export const BourbonBarrelSpotlight = () => {
  return (
    <section className="py-[var(--section-py)]" style={{ background: "var(--color-dark)" }}>
      <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          <div className="rounded-2xl overflow-hidden">
            <ScenePlaceholder
              label="Bourbon barrel arcade machine, dark wood, warm glow, Kentucky game room"
              aspectRatio="4/5"
              dark
            />
          </div>
          <div>
            <span className="pill pill-gold mb-4 inline-block">Kentucky Exclusive</span>
            <h2 className="heading text-[length:var(--text-h2)] mb-4" style={{ color: "var(--color-text-on-dark)" }}>
              The Bourbon Barrel Multicade
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(250,246,239,0.65)" }}>
              Built from a real bourbon barrel. Loaded with 60+ classic arcade games. Hand-built
              one at a time in Kentucky — the most unique cabinet you&apos;ve ever seen. Only available
              in our showroom.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["60 Classic Games", "Authentic Barrel", "Custom LED Lighting", "Free Play or Coin-Op"].map((spec) => (
                <span key={spec} className="pill" style={{ background: "rgba(250,246,239,0.1)", color: "var(--color-text-on-dark)" }}>
                  {spec}
                </span>
              ))}
            </div>
            <Link href="/arcade-machines" className="btn-primary">
              See the Full Lineup
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
