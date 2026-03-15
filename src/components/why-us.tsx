"use client"

import { motion } from "framer-motion"
import { Trophy, Clock, Truck, Wrench } from "lucide-react"
import { whyUs } from "@/lib/content/company"

const icons = [Trophy, Clock, Truck, Wrench]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export const WhyUs = () => {
  return (
    <section
      className="py-[var(--section-py)] px-[var(--section-px)]"
      style={{ background: "var(--color-background)" }}
    >
      <div className="max-w-[var(--content-max)] mx-auto">
        {/* Heading */}
        <div className="text-center mx-auto max-w-[48ch] mb-12 lg:mb-16">
          <p className="section-label mb-4">Why Lexington Billiards</p>
          <h2 className="heading text-[length:var(--text-h2)] text-[var(--color-text)]">
            50 Years of Bragging Rights
          </h2>
        </div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {whyUs.map((item, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="card-hover bg-white border rounded-xl p-8"
                style={{ borderColor: "var(--color-border)" }}
              >
                {/* Icon circle */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                  style={{ background: "rgba(14,116,144,0.10)" }}
                >
                  <Icon size={22} style={{ color: "var(--color-secondary)" }} aria-hidden="true" />
                </div>

                <h3 className="heading text-[length:var(--text-h4)] text-[var(--color-text)] mb-3">
                  {item.title}
                </h3>

                <p className="text-[var(--color-text-secondary)] text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
