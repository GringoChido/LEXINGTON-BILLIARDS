"use client"

import Link from "next/link"
import { MapPin } from "lucide-react"
import { company } from "@/lib/content/company"

export const ContactCta = () => {
  return (
    <section
      className="py-[var(--section-py)] px-[var(--section-px)] text-white"
      style={{ background: "var(--color-primary)" }}
    >
      <div className="max-w-[var(--content-max)] mx-auto text-center">
        <h2 className="heading text-[length:var(--text-h2)] text-white mb-6">
          Ready to Make Your Home Legendary?
        </h2>

        {/* MASSIVE phone number */}
        <a
          href={company.phone.href}
          className="heading font-800 text-4xl sm:text-5xl lg:text-6xl text-white block mb-2 hover:text-white/80 transition-colors duration-200"
          aria-label={`Call us at ${company.phone.display}`}
        >
          {company.phone.display}
        </a>

        {/* Hours + address */}
        <p className="text-white/70 text-sm sm:text-base mb-2">
          {company.hours.full}
        </p>
        <p className="text-white/70 text-sm sm:text-base mb-10">
          {company.address.full}
        </p>

        {/* Directions CTA */}
        <a
          href={company.address.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-dark inline-flex items-center gap-2"
        >
          <MapPin size={16} aria-hidden="true" />
          Get Directions
        </a>
      </div>
    </section>
  )
}
