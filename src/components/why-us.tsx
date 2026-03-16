"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Trophy, Clock, Truck, Wrench } from "lucide-react"
import { whyUs } from "@/lib/content/company"

const icons = [Trophy, Clock, Truck, Wrench]

const cardImages = [
  "/images/why-pool-tables.jpg",
  "/images/why-spas.jpg",
  "/images/why-delivery.jpg",
  "/images/why-service.jpg",
]

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
      style={{ background: "var(--color-dark)" }}
    >
      <div className="max-w-[var(--content-max)] mx-auto">
        {/* Heading */}
        <div className="text-center mx-auto max-w-[48ch] mb-12 lg:mb-16">
          <p className="section-label !text-[var(--color-primary)] mb-4">Why Lexington Billiards</p>
          <h2 className="heading text-[length:var(--text-h2)] text-[var(--color-text-on-dark)]">
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
                className="relative rounded-xl p-5 sm:p-8 border overflow-hidden"
                style={{ background: "var(--color-dark-surface)", borderColor: "var(--color-border-dark)" }}
              >
                {/* Background image — ghosted */}
                <Image
                  src={cardImages[i]}
                  alt=""
                  fill
                  className="object-cover opacity-[0.12]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-surface)] via-[var(--color-dark-surface)]/60 to-transparent" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon circle */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                    style={{ background: "rgba(234,88,12,0.15)" }}
                  >
                    <Icon size={22} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
                  </div>

                  <h3 className="heading text-[length:var(--text-h4)] text-[var(--color-text-on-dark)] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-white/60 text-base sm:text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
