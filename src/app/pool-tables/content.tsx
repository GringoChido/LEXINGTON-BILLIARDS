"use client"

import { PageHeroSlider } from "@/components/page-hero-slider"
import { BrandCard } from "@/components/brand-card"
import { SectionHeading } from "@/components/section-heading"
import { ClothSwatches } from "@/components/cloth-swatches"
import { CTABlock } from "@/components/cta-block"
import Image from "next/image"
import { poolTableBrands } from "@/lib/content/brands"
import { motion } from "framer-motion"
import { Truck, Package, Palette, Wrench, Phone } from "lucide-react"
import { useLanguage, type T } from "@/lib/i18n/context"

const slides = [
  {
    image: "/images/pool-tables.webp",
    headline: { en: "Kentucky\u2019s Best Game Room Starts Here", es: "La Mejor Sala de Juegos de Kentucky Comienza Aqu\u00ed" } as T,
    cta: { label: { en: "See Our Tables", es: "Ver Nuestras Mesas" } as T, href: "#brands" },
  },
  {
    image: "/images/pool-tables-slide-2.webp",
    headline: { en: "50 Years of Putting the Perfect Table in Your Home", es: "50 A\u00f1os Poniendo la Mesa Perfecta en Tu Hogar" } as T,
    cta: { label: { en: "Visit the Showroom", es: "Visita el Showroom" } as T, href: "/contact" },
  },
  {
    image: "/images/pool-tables-slide-3.webp",
    headline: { en: "The Right Table. Delivered. Set Up. Ready to Play.", es: "La Mesa Ideal. Entregada. Instalada. Lista para Jugar." } as T,
    cta: { label: { en: "Call Greg: (859) 255-7639", es: "Llama a Greg: (859) 255-7639" } as T, href: "tel:8592557639" },
  },
]

const proofPoints = [
  { icon: Truck, label: { en: "Free Delivery & Setup", es: "Entrega Gratis e Instalaci\u00f3n" } as T },
  { icon: Package, label: { en: "Full Accessory Kit Included", es: "Kit Completo de Accesorios Incluido" } as T },
  { icon: Palette, label: { en: "29 Cloth Colors", es: "29 Colores de Pa\u00f1o" } as T },
  { icon: Wrench, label: { en: "Expert Installation & Leveling", es: "Instalaci\u00f3n y Nivelaci\u00f3n Profesional" } as T },
  { icon: Phone, label: { en: "Lifetime Service Support", es: "Soporte de Servicio de por Vida" } as T },
]

export const PoolTablesContent = () => {
  const { t } = useLanguage()

  const localSlides = slides.map(s => ({
    ...s,
    headline: t(s.headline),
    cta: { ...s.cta, label: t(s.cta.label) },
  }))

  return (
    <>
      <PageHeroSlider slides={localSlides} />

      {/* ── INTRO ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--cat-surface, #F5F0E8)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <p className="section-label mb-4" style={{ color: "var(--cat-primary, #1B4332)" }}>{t({ en: "Family-Owned Since 1975", es: "Negocio Familiar Desde 1975" })}</p>
              <h2 className="heading text-[length:var(--text-h1)] mb-6" style={{ color: "var(--color-text)" }}>
                {t({ en: "Built on Billiards", es: "Fundados en el Billar" })}
              </h2>
              <div className="space-y-4 text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-[60ch]" style={{ color: "var(--color-text-secondary)" }}>
                <p>
                  {t({
                    en: "The Wilson family has been selling, delivering, and servicing pool tables in Central Kentucky for fifty years. Three generations of players have walked through our showroom on Leestown Road \u2014 and most of them are still customers.",
                    es: "La familia Wilson ha vendido, entregado y dado servicio a mesas de billar en el centro de Kentucky durante cincuenta a\u00f1os. Tres generaciones de jugadores han visitado nuestro showroom en Leestown Road \u2014 y la mayor\u00eda siguen siendo clientes.",
                  })}
                </p>
                <p>
                  {t({
                    en: "Every table we sell comes with free delivery, professional installation, your choice of 29 premium cloth colors, and a complete accessory kit. We don\u2019t ship boxes \u2014 we set up game rooms.",
                    es: "Cada mesa que vendemos incluye entrega gratis, instalaci\u00f3n profesional, tu elecci\u00f3n de 29 colores de pa\u00f1o premium y un kit completo de accesorios. No enviamos cajas \u2014 armamos salas de juegos.",
                  })}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {[
                  { value: "50", unit: t({ en: "Years", es: "A\u00f1os" }) },
                  { value: "29", unit: t({ en: "Cloth Colors", es: "Colores de Pa\u00f1o" }) },
                  { value: t({ en: "Free", es: "Gratis" }), unit: t({ en: "Install", es: "Instalaci\u00f3n" }) },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.unit}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                    className="flex items-baseline gap-2 rounded-xl px-5 py-3 border"
                    style={{ borderColor: "var(--color-border)", background: "var(--color-background)" }}
                  >
                    <span className="heading text-2xl" style={{ color: "var(--cat-accent, #C9952A)" }}>{stat.value}</span>
                    <span className="text-sm font-semibold" style={{ color: "var(--color-text-secondary)" }}>{stat.unit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
              className="rounded-2xl p-5 md:p-8 border-l-4"
              style={{ borderColor: "var(--cat-primary, #1B4332)", background: "var(--color-background)" }}
            >
              <p className="font-accent font-medium text-sm mb-6 uppercase tracking-wider" style={{ color: "var(--cat-primary, #1B4332)" }}>
                {t({ en: "Every Table Includes", es: "Cada Mesa Incluye" })}
              </p>
              <div className="space-y-5">
                {proofPoints.map((point, i) => (
                  <motion.div
                    key={t(point.label)}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(27,67,50,0.1)" }}>
                      <point.icon size={18} style={{ color: "var(--cat-primary, #1B4332)" }} />
                    </div>
                    <span className="font-semibold text-sm" style={{ color: "var(--color-text)" }}>{t(point.label)}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BRAND SHOWCASE ── */}
      <section id="brands" className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <SectionHeading
            label={t({ en: "The Brands We Stand Behind", es: "Las Marcas que Respaldamos" })}
            headline={t({ en: "Names That Define the Game", es: "Nombres que Definen el Juego" })}
            description={t({ en: "We hand-select every brand we carry. No mass-market imports, no corners cut.", es: "Seleccionamos cuidadosamente cada marca que ofrecemos. Sin importaciones masivas, sin atajos." })}
          />
          <div className="space-y-16 lg:space-y-24">
            {poolTableBrands.map((brand, i) => (
              <BrandCard key={brand.slug} brand={brand} index={i} reversed={i % 2 === 0} variant={i === 0 ? "wide" : "default"} href={`/pool-tables/${brand.slug}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCESSORY KIT + CLOTH COLORS ── */}
      <section className="py-[var(--section-py)] border-y" style={{ background: "var(--cat-surface, var(--color-cream))", borderColor: "var(--color-border)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <p className="section-label mb-4" style={{ color: "var(--cat-primary, #1B4332)" }}>{t({ en: "Included Free", es: "Incluido Gratis" })}</p>
              <h3 className="heading text-[length:var(--text-h2)] mb-4" style={{ color: "var(--color-text)" }}>{t({ en: "Free Premium Accessory Kit", es: "Kit Premium de Accesorios Gratis" })}</h3>
              <p className="text-base md:text-lg leading-relaxed mb-6 md:mb-8" style={{ color: "var(--color-text-secondary)" }}>
                {t({
                  en: "Every table comes with everything you need to play \u2014 a complete accessory kit with balls, two cues, a rack, brush, chalk, and table cover. No surprise add-ons, no extra charges.",
                  es: "Cada mesa viene con todo lo que necesitas para jugar \u2014 un kit completo de accesorios con bolas, dos tacos, un tri\u00e1ngulo, cepillo, tiza y funda para la mesa. Sin cargos adicionales ni sorpresas.",
                })}
              </p>
              <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: "16/10" }}>
                <Image
                  src="/images/accessory-kit.webp"
                  alt="Free premium accessory kit — cues, balls, rack, brush, chalk, cover"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <p className="section-label mb-4" style={{ color: "var(--cat-primary, #1B4332)" }}>{t({ en: "Your Choice", es: "T\u00fa Eliges" })}</p>
              <h3 className="heading text-[length:var(--text-h2)] mb-4" style={{ color: "var(--color-text)" }}>{t({ en: "29 Cloth Colors", es: "29 Colores de Pa\u00f1o" })}</h3>
              <p className="text-base md:text-lg leading-relaxed mb-6 md:mb-8" style={{ color: "var(--color-text-secondary)" }}>
                {t({
                  en: "Championship and Simonis premium felt in every color you can imagine. Pick your color in our showroom \u2014 we\u2019ll install it the day your table is delivered.",
                  es: "Fieltro premium Championship y Simonis en todos los colores que puedas imaginar. Elige tu color en nuestro showroom \u2014 lo instalamos el d\u00eda que se entrega tu mesa.",
                })}
              </p>
              <ClothSwatches />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICE ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--cat-dark, #0D2B1F)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <p className="section-label mb-4" style={{ color: "var(--cat-highlight, #4A7C59)" }}>{t({ en: "After the Sale", es: "Despu\u00e9s de la Venta" })}</p>
              <h2 className="heading text-[length:var(--text-h2)] mb-4" style={{ color: "var(--color-text-on-dark)" }}>
                {t({ en: "50 Years of Repair Experience", es: "50 A\u00f1os de Experiencia en Reparaci\u00f3n" })}
              </h2>
              <p className="text-base md:text-lg leading-relaxed max-w-[55ch]" style={{ color: "rgba(250,246,239,0.65)" }}>
                {t({
                  en: "Re-cloth, re-cushion, disassemble, move, and reassemble \u2014 we do it all. Our service team covers all of Central and Eastern Kentucky. When something needs attention, you call the same family that sold you the table.",
                  es: "Cambio de pa\u00f1o, cambio de bandas, desarmar, mover y rearmar \u2014 lo hacemos todo. Nuestro equipo de servicio cubre todo el centro y este de Kentucky. Cuando algo necesita atenci\u00f3n, llamas a la misma familia que te vendi\u00f3 la mesa.",
                })}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
              className="rounded-xl overflow-hidden"
            >
              <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
                <Image
                  src="/images/repair-service.webp"
                  alt="50 years of pool table repair and service experience"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 700px"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTABlock headline={t({ en: "Come See the Tables In Person", es: "Ven a Ver las Mesas en Persona" })} />
    </>
  )
}
