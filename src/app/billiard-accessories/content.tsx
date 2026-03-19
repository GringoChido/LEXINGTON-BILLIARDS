"use client"

import { PageHeroSlider } from "@/components/page-hero-slider"
import { BrandCard } from "@/components/brand-card"
import { SectionHeading } from "@/components/section-heading"
import { CTABlock } from "@/components/cta-block"
import { accessoryBrands } from "@/lib/content/brands"
import Image from "next/image"
import { motion } from "framer-motion"
import { Lamp, Armchair, Palette, Shield } from "lucide-react"
import { useLanguage, type T } from "@/lib/i18n/context"

const slides = [
  {
    image: "/images/accessories.webp",
    headline: { en: "Everything for the Serious Game Room", es: "Todo para la Sala de Juegos Seria" } as T,
    cta: { label: { en: "See What We Carry", es: "Mira Lo Que Ofrecemos" } as T, href: "#brands" },
  },
  {
    image: "/images/table-lights-fixtures.webp",
    headline: { en: "Cues. Lights. Furniture. All Under One Roof.", es: "Tacos. Luces. Muebles. Todo Bajo Un Mismo Techo." } as T,
    cta: { label: { en: "Visit the Showroom", es: "Visita el Showroom" } as T, href: "/contact" },
  },
  {
    image: "/images/cue-sticks-repair.webp",
    headline: { en: "The Details Make the Game Room", es: "Los Detalles Hacen la Sala de Juegos" } as T,
    cta: { label: { en: "Call (859) 255-7639", es: "Llama al (859) 255-7639" } as T, href: "tel:8592557639" },
  },
]

const accessoryCategories = [
  { name: { en: "Cue Sticks & Repair", es: "Tacos y Reparación" } as T, icon: Palette, image: "/images/cue-sticks-repair.webp" },
  { name: { en: "Table Lights & Fixtures", es: "Luces de Mesa y Accesorios" } as T, icon: Lamp, image: "/images/table-lights-fixtures.webp" },
  { name: { en: "Bar Stools & Seating", es: "Bancos de Bar y Asientos" } as T, icon: Armchair, image: "/images/bar-stools-seating.webp" },
  { name: { en: "Cloth & Re-Cloth Service", es: "Paño y Servicio de Cambio de Paño" } as T, icon: Shield, image: "/images/cloth-recloth-service.webp" },
]

const i18n = {
  introLabel: { en: "Since 1975", es: "Desde 1975" } as T,
  introHeadline: { en: "The Showroom Has Everything", es: "El Showroom Lo Tiene Todo" } as T,
  introDesc: {
    en: "Walk in, see it in person, and take it home the same day. Cue sticks from the industry\u2019s greatest makers, cue repair, table lights, artwork, bar stools, cloth, and re-cloth service. No online guesswork, no shipping damage, no assembly headaches.",
    es: "Entra, míralo en persona y llévatelo el mismo día. Tacos de los mejores fabricantes, reparación de tacos, luces de mesa, arte, bancos de bar, paño y servicio de cambio de paño. Sin adivinar en línea, sin daños de envío, sin dolores de cabeza de ensamblaje.",
  } as T,

  categoryLabel: { en: "Shop by Category", es: "Compra por Categoría" } as T,
  categoryHeadline: { en: "Built for the Game Room", es: "Hecho para la Sala de Juegos" } as T,

  brandsLabel: { en: "The Brands We Carry", es: "Las Marcas Que Ofrecemos" } as T,
  brandsHeadline: { en: "Names You Can Trust", es: "Nombres en los Que Puedes Confiar" } as T,
  brandsDesc: {
    en: "From game room furniture to professional cues and billiard lighting \u2014 every brand we carry is one we stand behind.",
    es: "Desde muebles de sala de juegos hasta tacos profesionales e iluminación de billar \u2014 cada marca que ofrecemos es una que respaldamos.",
  } as T,

  suppliesLabel: { en: "Always In Stock", es: "Siempre en Existencia" } as T,
  suppliesHeadline: { en: "Supplies & Service", es: "Suministros y Servicio" } as T,
  suppliesDesc: {
    en: "Aramith balls, Simonis cloth, chalk, brushes, ball cleaners, racks, covers, and everything else to keep your table and game in top shape. Plus professional re-cloth and cue repair service.",
    es: "Bolas Aramith, paño Simonis, gis, cepillos, limpiadores de bolas, triángulos, cubiertas y todo lo demás para mantener tu mesa y tu juego en óptimas condiciones. Además, servicio profesional de cambio de paño y reparación de tacos.",
  } as T,

  ctaHeadline: { en: "Come See It All", es: "Ven a Verlo Todo" } as T,
}

const introPills = [
  { en: "Cue Sticks", es: "Tacos" } as T,
  { en: "Cue Repair", es: "Reparación de Tacos" } as T,
  { en: "Table Lights", es: "Luces de Mesa" } as T,
  { en: "Bar Stools", es: "Bancos de Bar" } as T,
  { en: "Cloth & Re-Cloth", es: "Paño y Cambio de Paño" } as T,
  { en: "Wall Art", es: "Arte de Pared" } as T,
  { en: "Supplies", es: "Suministros" } as T,
]

const supplyPills = [
  { en: "Aramith Balls", es: "Bolas Aramith" } as T,
  { en: "Simonis Cloth", es: "Paño Simonis" } as T,
  { en: "Chalk & Tips", es: "Gis y Casquillos" } as T,
  { en: "Brushes", es: "Cepillos" } as T,
  { en: "Table Covers", es: "Cubiertas de Mesa" } as T,
  { en: "Racks", es: "Triángulos" } as T,
]

export const BilliardAccessoriesContent = () => {
  const { t } = useLanguage()

  const localSlides = slides.map(s => ({
    image: s.image,
    headline: t(s.headline),
    cta: { label: t(s.cta.label), href: s.cta.href },
  }))

  return (
    <>
      <PageHeroSlider slides={localSlides} />

      {/* ── INTRO ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--cat-surface, #FBF7F0)" }}>
        <div className="mx-auto max-w-[var(--narrow-max)] px-[var(--section-px)] text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <p className="section-label mb-4" style={{ color: "var(--cat-accent, #D4AF37)" }}>{t(i18n.introLabel)}</p>
            <h2 className="heading text-[length:var(--text-h2)] mb-6" style={{ color: "var(--color-text)" }}>
              {t(i18n.introHeadline)}
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--color-text-secondary)" }}>
              {t(i18n.introDesc)}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {introPills.map((tag) => (
                <span key={t(tag)} className="pill" style={{ background: "rgba(45,90,39,0.1)", color: "var(--cat-felt, #2D5A27)" }}>{t(tag)}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CATEGORY GRID ── */}
      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <SectionHeading label={t(i18n.categoryLabel)} headline={t(i18n.categoryHeadline)} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {accessoryCategories.map((cat, i) => (
              <motion.div
                key={cat.name.en}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                className="rounded-xl overflow-hidden border card-hover"
                style={{ borderColor: "var(--color-border)", background: "var(--color-background)" }}
              >
                <div className="relative" style={{ aspectRatio: "16/9" }}>
                  <Image src={cat.image} alt={t(cat.name)} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
                </div>
                <div className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(212,175,55,0.12)" }}>
                    <cat.icon className="w-5 h-5" style={{ color: "var(--cat-accent, #D4AF37)" }} />
                  </div>
                  <h4 className="heading text-[length:var(--text-h4)]" style={{ color: "var(--color-text)" }}>{t(cat.name)}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRAND SHOWCASE ── */}
      <section id="brands" className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <SectionHeading label={t(i18n.brandsLabel)} headline={t(i18n.brandsHeadline)} description={t(i18n.brandsDesc)} />
          <div className="space-y-16 lg:space-y-24">
            {accessoryBrands.map((brand, i) => (
              <BrandCard key={brand.slug} brand={brand} index={i} reversed={i % 2 !== 0} variant={i === 0 ? "wide" : "default"} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SUPPLIES ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--cat-surface, #FBF7F0)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <p className="section-label mb-4" style={{ color: "var(--cat-accent, #D4AF37)" }}>{t(i18n.suppliesLabel)}</p>
              <h2 className="heading text-[length:var(--text-h2)] mb-4" style={{ color: "var(--color-text)" }}>{t(i18n.suppliesHeadline)}</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
                {t(i18n.suppliesDesc)}
              </p>
              <div className="flex flex-wrap gap-2">
                {supplyPills.map((item) => (
                  <span key={t(item)} className="pill" style={{ background: "rgba(45,90,39,0.1)", color: "var(--cat-felt, #2D5A27)" }}>{t(item)}</span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
              className="rounded-xl overflow-hidden"
            >
              <div className="relative" style={{ aspectRatio: "4/3" }}>
                <Image src="/images/supplies-service.webp" alt={t({ en: "Billiard supplies and service", es: "Suministros y servicio de billar" })} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABlock headline={t(i18n.ctaHeadline)} />
    </>
  )
}
