"use client"

import { MapPin, Phone } from "lucide-react"

export const CtaBand = () => {
  return (
    <section className="bg-accent py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[var(--content-max)] px-4 sm:px-8 lg:px-16 text-center">
        <h2 className="heading-display text-[length:var(--text-h2)] text-background mb-4 animate-[fadeUp_0.5s_ease-out_both]">
          Come See for Yourself
        </h2>

        <p className="text-background/70 text-lg mb-8 flex items-center justify-center gap-2 animate-[fadeUp_0.5s_ease-out_0.1s_both]">
          <MapPin className="w-5 h-5" />
          1431 Leestown Rd, Lexington, KY 40511 &middot; Mon–Sat 10am–6pm
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fadeUp_0.5s_ease-out_0.2s_both]">
          <a
            href="https://maps.google.com/?q=1431+Leestown+Rd+Lexington+KY+40511"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background text-text font-medium px-8 h-12 rounded-xl flex items-center justify-center hover:bg-surface transition-colors"
          >
            Get Directions
          </a>
          <a
            href="tel:8592557639"
            className="bg-transparent border-2 border-background text-background font-medium px-8 h-12 rounded-xl flex items-center justify-center gap-2 hover:bg-background/10 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}
