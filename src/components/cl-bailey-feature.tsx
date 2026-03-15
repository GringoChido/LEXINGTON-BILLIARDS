"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { poolTableBrands } from "@/lib/content/brands"

const clBailey = poolTableBrands.find((b) => b.slug === "cl-bailey")!

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
}

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.15 } },
}

export const ClBaileyFeature = () => {
  return (
    <section
      className="py-[var(--section-py)] px-[var(--section-px)] overflow-hidden"
      style={{ background: "var(--color-dark)" }}
    >
      <div className="max-w-[var(--content-max)] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/pool-tables.jpg"
              alt="C.L. Bailey pool table"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Subtle vignette */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />

            {/* Quote badge */}
            <div
              className="absolute bottom-5 left-5 right-5 rounded-xl px-5 py-4"
              style={{ background: "rgba(28,25,23,0.82)", backdropFilter: "blur(12px)", border: "1px solid var(--color-border-dark)" }}
            >
              <p className="font-display font-700 text-white/90 text-sm leading-snug italic">
                &ldquo;Quality meets craftsmanship — at a price that makes sense.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="section-label !text-[var(--color-primary)] mb-4">Our Lead Brand</p>

            <h2 className="heading text-[length:var(--text-h1)] text-[var(--color-text-on-dark)] mb-3">
              {clBailey.name}
            </h2>

            <p
              className="font-display font-700 text-[length:var(--text-h4)] mb-6"
              style={{ color: "var(--color-primary)" }}
            >
              {clBailey.tagline}
            </p>

            <p className="text-white/65 text-base lg:text-lg leading-relaxed mb-8">
              {clBailey.description}
            </p>

            {/* Stat strip */}
            <div
              className="flex gap-8 mb-10 py-6 border-t border-b"
              style={{ borderColor: "var(--color-border-dark)" }}
            >
              {[
                { stat: "50+", label: "Years in Business" },
                { stat: "29", label: "Cloth Colors" },
                { stat: "Free", label: "Delivery & Install" },
              ].map(({ stat, label }) => (
                <div key={label}>
                  <p
                    className="heading text-[length:var(--text-h3)]"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {stat}
                  </p>
                  <p className="text-white/50 text-xs uppercase tracking-widest mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            <Link href="/pool-tables" className="btn-primary">
              See Our Pool Tables
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
