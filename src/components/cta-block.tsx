"use client"

import Image from "next/image"
import { company } from "@/lib/content/company"
import { useLanguage } from "@/lib/i18n/context"

interface CTABlockProps {
  headline: string
}

export const CTABlock = ({ headline }: CTABlockProps) => {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-charcoal py-24 md:py-32">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] md:w-[520px] md:h-[520px] opacity-[0.12] pointer-events-none select-none">
        <Image
          src="/images/logo.png"
          alt=""
          fill
          className="object-contain"
          sizes="520px"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-[var(--section-px)] text-center">
        <p className="font-accent text-sm font-medium tracking-widest uppercase text-primary mb-4">
          {t({ en: `In Business Since ${company.established}`, es: `En el negocio desde ${company.established}` })} &middot; {company.address.city}, {company.address.state}
        </p>

        <h2
          className="heading text-text-on-dark mb-6"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          {headline}
        </h2>

        <a
          href={company.phone.href}
          className="block heading text-primary mb-6 hover:text-primary/80 transition-colors"
          style={{ fontSize: "clamp(2.75rem, 6vw, 5rem)" }}
        >
          {company.phone.display}
        </a>

        <p className="font-body text-white/60 text-base mb-10 leading-relaxed">
          {company.hours.weekday} &nbsp;|&nbsp; {t({ en: company.hours.weekend, es: "Domingos Cerrado" })}
          <br />
          {company.address.full}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={company.phone.href}
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-display font-bold text-lg px-10 py-4 rounded-full transition-all duration-200 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            {t({ en: "Call Now", es: "Llama Ahora" })}
          </a>
          <a
            href={company.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-display font-bold text-lg px-10 py-4 rounded-full transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {t({ en: "Get Directions", es: "C\u00f3mo Llegar" })}
          </a>
        </div>
      </div>
    </section>
  )
}
