"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { testimonials } from "@/lib/content/categories"
import { SectionHeading } from "./section-heading"

export const Testimonials = () => {
  return (
    <section className="py-[var(--section-py)]" style={{ background: "var(--color-surface)" }}>
      <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
        <SectionHeading
          label="From Our Customers"
          headline="50 Years of Happy Homes"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <motion.blockquote
              key={item.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const }}
              className="relative bg-white rounded-xl p-8 border"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div className="flex gap-1.5 mb-4">
                {[...Array(5)].map((_, j) => (
                  <div key={j} className="relative w-5 h-5">
                    <Image src="/images/logo.png" alt="" fill className="object-contain" sizes="20px" />
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer>
                <p className="text-sm font-semibold font-display" style={{ color: "var(--color-text)" }}>{item.author}</p>
                <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>{item.location}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
