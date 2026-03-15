"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { testimonials } from "@/lib/content/categories"
import { SectionHeading } from "./section-heading"

export const Testimonials = () => {
  return (
    <section className="py-[var(--section-py)] bg-surface">
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
              className="relative bg-white rounded-xl p-8 border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer>
                <p className="text-text text-sm font-semibold font-heading">{item.author}</p>
                <p className="text-text-muted text-xs mt-0.5">{item.location}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
