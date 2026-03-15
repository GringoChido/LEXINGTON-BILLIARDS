"use client"

import { PageHero } from "@/components/page-hero"
import { BrandCard } from "@/components/brand-card"
import { SectionHeading } from "@/components/section-heading"
import { ContactCta } from "@/components/contact-cta"
import { spaBrands } from "@/lib/content/brands"
import { motion } from "framer-motion"
import { ShieldCheck, Droplets, Truck, Wrench } from "lucide-react"

const serviceFeatures = [
  {
    icon: ShieldCheck,
    title: "Factory-Authorized Service",
    description: "Warranty repairs done right, by certified technicians who know these spas inside and out.",
  },
  {
    icon: Droplets,
    title: "Chemicals & Supplies",
    description: "Full line of spa chemicals, filters, covers, and replacement parts — always in stock.",
  },
  {
    icon: Truck,
    title: "Free Delivery & Install",
    description: "Within 50 miles of Lexington. Affordable fees beyond. We handle the electrical coordination too.",
  },
  {
    icon: Wrench,
    title: "Spa Moving Service",
    description: "Relocating? We'll disconnect, transport, and reinstall your spa at your new home.",
  },
]

export const SpasContent = () => {
  return (
    <>
      <PageHero
        label="Hot Tubs & Spas"
        headline="Your Backyard Retreat, Delivered"
        description="Lexington's oldest spa dealer — over 40 years of expertise. From intimate two-person models to full-size swim spas, with factory-authorized service you can count on."
        image="/images/hot-tubs.jpg"
        imageAlt="Hot tubs and spas at Lexington Billiards"
      />

      {/* Brands */}
      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <SectionHeading
            label="Our Spa Brands"
            headline="Hydrotherapy You Can Trust"
            description="Three of the most respected names in the hot tub industry — all backed by our in-house service team."
          />
          <div className="space-y-16 lg:space-y-24">
            {spaBrands.map((brand, i) => (
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

      {/* Service features */}
      <section className="py-[var(--section-py)] bg-surface border-y border-border">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <SectionHeading
            label="Full-Service Spa Dealer"
            headline="We Don't Just Sell — We Service"
            description="Unlike online retailers, we're here for the long haul. Factory-authorized warranty service, parts in stock, and a local team you can call."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {serviceFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="border border-border p-8 bg-background/50 rounded-xl"
              >
                <feature.icon className="w-6 h-6 text-primary mb-4" />
                <h3
                  className="font-semibold text-base mb-2"
                  style={{ color: "var(--color-text)" }}
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
