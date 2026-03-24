"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Star, CheckCircle, ArrowRight } from "lucide-react"
import { brandLogos } from "@/lib/content/brands"
import { useLanguage } from "@/lib/i18n/context"
import { CTABlock } from "./cta-block"

interface Collection {
  name: string
  description: string
  image?: string
}

interface FAQ {
  question: string
  answer: string
}

export interface BrandDetailContent {
  heroImage: string
  story: string
  highlights: string[]
  collections: Collection[]
  craftsmanship: string
  whyBuyFromUs: string
  faqs: FAQ[]
}

interface BrandDetailPageProps {
  brandName: string
  brandSlug: string
  brandTagline: string
  established?: string
  category: "pool-tables" | "spas" | "billiard-accessories"
  categoryName: string
  content: BrandDetailContent
}

const anim = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
}

export const BrandDetailPage = ({
  brandName,
  brandSlug,
  brandTagline,
  established,
  category,
  categoryName,
  content,
}: BrandDetailPageProps) => {
  const { t } = useLanguage()
  const logo = brandLogos[brandSlug]

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-[calc(var(--header-height)+2rem)] pb-16 lg:pb-24 overflow-hidden" style={{ background: "var(--cat-dark, #0D2B1F)" }}>
        <div className="absolute inset-0">
          <Image
            src={content.heroImage}
            alt={`${brandName} ${categoryName}`}
            fill
            className="object-cover opacity-30"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--cat-dark,#0D2B1F)] via-[var(--cat-dark,#0D2B1F)]/70 to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <motion.div {...anim}>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-sm mb-8" aria-label="Breadcrumb">
              <Link href="/" className="text-white/50 hover:text-white transition-colors">
                {t({ en: "Home", es: "Inicio" })}
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/30" />
              <Link href={`/${category}`} className="text-white/50 hover:text-white transition-colors">
                {categoryName}
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/30" />
              <span className="text-white font-medium">{brandName}</span>
            </nav>

            {established && (
              <span className="pill pill-dark mb-4 inline-block">Est. {established}</span>
            )}
            <h1 className="heading text-[length:var(--text-display)] text-white mb-3">
              {brandName}
            </h1>
            <p className="text-lg font-semibold mb-4" style={{ color: "var(--cat-accent, #C9952A)" }}>
              {brandTagline}
            </p>
            <p className="text-white/60 text-lg leading-relaxed max-w-[55ch]">
              {t({ en: `${categoryName} in Lexington, KY`, es: `${categoryName} en Lexington, KY` })}
              {" \u2014 "}
              {t({ en: "free delivery & setup since 1975.", es: "entrega e instalaci\u00f3n gratis desde 1975." })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── BRAND STORY ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--cat-surface, #F5F0E8)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-start">
            <motion.div {...anim} className="flex flex-col items-center lg:items-start gap-4">
              {logo && (
                <div className="relative w-[200px] h-[80px]">
                  <Image src={logo} alt={`${brandName} logo`} fill className="object-contain" sizes="200px" />
                </div>
              )}
              {established && (
                <span className="pill" style={{ background: "rgba(0,0,0,0.06)", color: "var(--color-text-secondary)" }}>
                  {t({ en: `Crafting excellence since ${established}`, es: `Excelencia desde ${established}` })}
                </span>
              )}
            </motion.div>
            <motion.div {...anim} transition={{ ...anim.transition, delay: 0.1 }}>
              <p className="section-label mb-4" style={{ color: "var(--cat-primary, #1B4332)" }}>
                {t({ en: "The Brand", es: "La Marca" })}
              </p>
              <h2 className="heading text-[length:var(--text-h2)] mb-6" style={{ color: "var(--color-text)" }}>
                {t({ en: `The ${brandName} Story`, es: `La Historia de ${brandName}` })}
              </h2>
              <p className="text-lg leading-relaxed max-w-[60ch]" style={{ color: "var(--color-text-secondary)" }}>
                {content.story}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── KEY HIGHLIGHTS ── */}
      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <motion.div {...anim} className="text-center mb-12 lg:mb-16">
            <p className="section-label mb-4" style={{ color: "var(--cat-primary, #1B4332)" }}>
              {t({ en: "Why Choose", es: "Por Qu\u00e9 Elegir" })} {brandName}
            </p>
            <h2 className="heading text-[length:var(--text-h2)]" style={{ color: "var(--color-text)" }}>
              {t({ en: "Key Highlights", es: "Puntos Clave" })}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {content.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                className="rounded-xl p-5 border flex items-start gap-4"
                style={{ borderColor: "var(--color-border)", background: "var(--color-cream)" }}
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(var(--cat-primary-rgb, 27,67,50), 0.1)" }}>
                  <Star className="w-4 h-4" style={{ color: "var(--cat-accent, #C9952A)" }} />
                </div>
                <p className="font-semibold text-sm" style={{ color: "var(--color-text)" }}>{highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLLECTIONS ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--cat-surface, #F5F0E8)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <motion.div {...anim} className="text-center mb-12 lg:mb-16">
            <p className="section-label mb-4" style={{ color: "var(--cat-primary, #1B4332)" }}>
              {t({ en: "Product Lines", es: "L\u00edneas de Producto" })}
            </p>
            <h2 className="heading text-[length:var(--text-h2)]" style={{ color: "var(--color-text)" }}>
              {t({ en: `${brandName} Collections`, es: `Colecciones ${brandName}` })}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {content.collections.map((collection, i) => (
              <motion.div
                key={collection.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                className="rounded-xl border overflow-hidden"
                style={{ borderColor: "var(--color-border)", background: "var(--color-background)" }}
              >
                <div className="p-6">
                  <h3 className="heading text-[length:var(--text-h4)] mb-2" style={{ color: "var(--color-text)" }}>
                    {collection.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    {collection.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CRAFTSMANSHIP ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--cat-dark, #0D2B1F)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...anim}>
              <p className="font-accent text-sm font-medium uppercase tracking-wider mb-4" style={{ color: "var(--cat-accent, #C9952A)" }}>
                {t({ en: "Craftsmanship", es: "Artesan\u00eda" })}
              </p>
              <h2 className="heading text-[length:var(--text-h2)] mb-6" style={{ color: "var(--color-text-on-dark)" }}>
                {t({ en: `Built to Last`, es: `Construido para Durar` })}
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: "rgba(250,246,239,0.65)" }}>
                {content.craftsmanship}
              </p>
            </motion.div>
            <motion.div {...anim} transition={{ ...anim.transition, delay: 0.15 }}>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={content.heroImage}
                  alt={`${brandName} craftsmanship`}
                  width={700}
                  height={467}
                  className="w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHY BUY FROM US ── */}
      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...anim}>
              <p className="section-label mb-4" style={{ color: "var(--cat-primary, #1B4332)" }}>
                {t({ en: "The Lexington Billiards Difference", es: "La Diferencia de Lexington Billiards" })}
              </p>
              <h2 className="heading text-[length:var(--text-h2)] mb-6" style={{ color: "var(--color-text)" }}>
                {t({ en: `Why Buy ${brandName} From Us`, es: `Por Qu\u00e9 Comprar ${brandName} Con Nosotros` })}
              </h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--color-text-secondary)" }}>
                {content.whyBuyFromUs}
              </p>
              <div className="space-y-3">
                {[
                  t({ en: "Free delivery & professional setup", es: "Entrega gratis e instalaci\u00f3n profesional" }),
                  t({ en: "50 years of service experience", es: "50 a\u00f1os de experiencia en servicio" }),
                  t({ en: "See it in our Lexington showroom", es: "V\u00e9alo en nuestro showroom de Lexington" }),
                  t({ en: "Lifetime service & repair support", es: "Soporte de servicio y reparaci\u00f3n de por vida" }),
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 shrink-0" style={{ color: "var(--cat-primary, #1B4332)" }} />
                    <span className="text-sm font-medium" style={{ color: "var(--color-text)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...anim} transition={{ ...anim.transition, delay: 0.15 }} className="flex flex-col gap-4">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center gap-2">
                {t({ en: "Visit Our Showroom", es: "Visita Nuestro Showroom" })} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href={`/${category}`} className="btn-outline inline-flex items-center justify-center gap-2">
                {t({ en: `See All ${categoryName}`, es: `Ver Todos los ${categoryName}` })} <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--cat-surface, #F5F0E8)" }}>
        <div className="mx-auto max-w-[var(--narrow-max, 48rem)] px-[var(--section-px)]">
          <motion.div {...anim} className="text-center mb-12">
            <p className="section-label mb-4" style={{ color: "var(--cat-primary, #1B4332)" }}>
              {t({ en: "Common Questions", es: "Preguntas Frecuentes" })}
            </p>
            <h2 className="heading text-[length:var(--text-h2)]" style={{ color: "var(--color-text)" }}>
              {t({ en: `${brandName} FAQ`, es: `Preguntas sobre ${brandName}` })}
            </h2>
          </motion.div>
          <div className="space-y-4">
            {content.faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] as const }}
                className="rounded-xl p-6 border"
                style={{ borderColor: "var(--color-border)", background: "var(--color-background)" }}
              >
                <h3 className="heading text-[length:var(--text-h4)] mb-3" style={{ color: "var(--color-text)" }}>
                  {faq.question}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock headline={t({ en: `See ${brandName} in Our Showroom`, es: `Vea ${brandName} en Nuestro Showroom` })} />
    </>
  )
}
