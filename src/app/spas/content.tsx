"use client"

import { PageHeroSlider } from "@/components/page-hero-slider"
import { BrandCard } from "@/components/brand-card"
import { SectionHeading } from "@/components/section-heading"
import { CTABlock } from "@/components/cta-block"
import { ScenePlaceholder } from "@/components/scene-placeholder"
import { spaBrands } from "@/lib/content/brands"
import { useLanguage, type T } from "@/lib/i18n/context"
import { motion } from "framer-motion"
import { ShieldCheck, Droplets, Truck, Wrench, CreditCard } from "lucide-react"

const slides = [
  {
    image: "/images/hot-tubs.webp",
    headline: { en: "Your Backyard Is Missing a Hot Tub", es: "A Tu Patio Le Falta un Jacuzzi" } as T,
    cta: { label: { en: "See Our Spas", es: "Ver Nuestros Spas" } as T, href: "#brands" },
  },
  {
    image: "/images/spa-slide-2.webp",
    headline: { en: "Lexington\u2019s Oldest Spa Dealer \u2014 Still the Best", es: "El Distribuidor de Spas Más Antiguo de Lexington \u2014 Y Sigue Siendo el Mejor" } as T,
    cta: { label: { en: "Visit the Showroom", es: "Visita el Showroom" } as T, href: "/contact" },
  },
  {
    image: "/images/spa-slide-3.webp",
    headline: { en: "Free Delivery & Installation. Just Add Water.", es: "Entrega e Instalación Gratis. Solo Agrega Agua." } as T,
    cta: { label: { en: "Call (859) 255-7639", es: "Llama al (859) 255-7639" } as T, href: "tel:8592557639" },
  },
]

const serviceFeatures = [
  {
    icon: ShieldCheck,
    title: { en: "Factory-Authorized Service", es: "Servicio Autorizado de Fábrica" } as T,
    description: { en: "Warranty repairs done right, by certified technicians who know these spas inside and out.", es: "Reparaciones de garantía hechas correctamente, por técnicos certificados que conocen estos spas a fondo." } as T,
  },
  {
    icon: Droplets,
    title: { en: "Chemicals & Supplies", es: "Químicos y Suministros" } as T,
    description: { en: "Full line of spa chemicals, filters, covers, and replacement parts — always in stock.", es: "Línea completa de químicos para spa, filtros, cubiertas y refacciones — siempre en stock." } as T,
  },
  {
    icon: Truck,
    title: { en: "Free Delivery & Install", es: "Entrega e Instalación Gratis" } as T,
    description: { en: "Delivery and installation included within Lexington. We handle placement, electrical, and first fill.", es: "Entrega e instalación incluidas en Lexington. Nos encargamos de la ubicación, la conexión eléctrica y el primer llenado." } as T,
  },
  {
    icon: Wrench,
    title: { en: "Spa Moving Service", es: "Servicio de Mudanza de Spas" } as T,
    description: { en: "Relocating? We\u2019ll disconnect, transport, and reinstall your spa at your new home.", es: "¿Te mudas? Desconectamos, transportamos y reinstalamos tu spa en tu nuevo hogar." } as T,
  },
  {
    icon: CreditCard,
    title: { en: "Financing Available", es: "Financiamiento Disponible" } as T,
    description: { en: "Flexible financing options to fit your budget. Ask about current promotions.", es: "Opciones de financiamiento flexibles para tu presupuesto. Pregunta por las promociones actuales." } as T,
  },
]

const pills = [
  { en: "Free Delivery", es: "Entrega Gratis" } as T,
  { en: "Factory Warranty Service", es: "Servicio de Garantía de Fábrica" } as T,
  { en: "Financing Available", es: "Financiamiento Disponible" } as T,
  { en: "Chemicals In Stock", es: "Químicos en Stock" } as T,
]

const showroomProducts = [
  { name: { en: "2-Person Intimate", es: "2 Personas Íntimo" } as T, scene: "Small two-person spa, cozy patio" },
  { name: { en: "4-Person Family", es: "4 Personas Familiar" } as T, scene: "Medium family spa, deck setting" },
  { name: { en: "6-Person Party", es: "6 Personas para Fiestas" } as T, scene: "Large spa, outdoor entertaining" },
  { name: { en: "8-Person Premium", es: "8 Personas Premium" } as T, scene: "Luxury large spa, evening glow" },
  { name: { en: "Swim Spa", es: "Swim Spa" } as T, scene: "Swim spa, long pool shape, covered patio" },
  { name: { en: "Spa + Gazebo Package", es: "Paquete Spa + Gazebo" } as T, scene: "Spa under gazebo, string lights" },
]

export const SpasContent = () => {
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
      <section className="py-[var(--section-py)]" style={{ background: "var(--cat-surface, #F0F7F9)" }}>
        <div className="mx-auto max-w-[var(--narrow-max)] px-[var(--section-px)] text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <p className="heading text-[length:var(--text-stat)] mb-4" style={{ color: "var(--cat-secondary, #1A8FA0)" }}>50+</p>
            <p className="section-label mb-4" style={{ color: "var(--cat-primary, #0A4A5C)" }}>{t({ en: "Years as Lexington\u2019s Spa Dealer", es: "Años como Distribuidor de Spas en Lexington" })}</p>
            <p className="text-lg leading-relaxed mb-10 max-w-[55ch] mx-auto" style={{ color: "var(--color-text-secondary)" }}>
              {t({
                en: "Nobody in Central Kentucky has been selling and servicing hot tubs longer than us. Big-box stores sell you a spa and wish you luck. We deliver it, install it, teach you how to maintain it, and service it for years to come.",
                es: "Nadie en el centro de Kentucky ha vendido y dado servicio a jacuzzis por más tiempo que nosotros. Las tiendas grandes te venden un spa y te desean suerte. Nosotros lo entregamos, lo instalamos, te enseñamos a mantenerlo y le damos servicio por años.",
              })}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {pills.map((tag, i) => (
                <span key={i} className="pill" style={{ background: "rgba(10,74,92,0.1)", color: "var(--cat-primary, #0A4A5C)" }}>{t(tag)}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BRAND SHOWCASE ── */}
      <section id="brands" className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <SectionHeading
            label={t({ en: "Our Spa Brands", es: "Nuestras Marcas de Spas" })}
            headline={t({ en: "Hydrotherapy You Can Trust", es: "Hidroterapia en la que Puedes Confiar" })}
            description={t({ en: "Every spa in our showroom is plumbed, powered, and ready for you to test before you buy.", es: "Cada spa en nuestro showroom está conectado, encendido y listo para que lo pruebes antes de comprar." })}
          />
          <div className="space-y-16 lg:space-y-24">
            {spaBrands.map((brand, i) => (
              <BrandCard key={brand.slug} brand={brand} index={i} reversed={i % 2 !== 0} variant={i === 0 ? "wide" : "default"} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SHOWROOM / PRODUCT GRID ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--cat-surface, #F0F7F9)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <SectionHeading
            label={t({ en: "In Our Showroom", es: "En Nuestro Showroom" })}
            headline={t({ en: "See Them Running. Feel the Jets.", es: "Vélos Funcionando. Siente los Jets." })}
            description={t({ en: "Our spas are plumbed and powered — test the jets, feel the seats, find your perfect fit.", es: "Nuestros spas están conectados y encendidos — prueba los jets, siente los asientos, encuentra tu spa ideal." })}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {showroomProducts.map((product, i) => (
              <motion.div
                key={t(product.name)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                className="rounded-xl overflow-hidden card-hover border"
                style={{ borderColor: "var(--color-border)", background: "var(--color-background)" }}
              >
                <ScenePlaceholder label={product.scene} aspectRatio="4/3" />
                <div className="p-5">
                  <h4 className="heading text-[length:var(--text-h4)] mb-2" style={{ color: "var(--color-text)" }}>{t(product.name)}</h4>
                  <span className="text-sm font-bold" style={{ color: "var(--cat-secondary, #1A8FA0)" }}>{t({ en: "See in Showroom", es: "Ver en Showroom" })} &rarr;</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE STRIP ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--cat-dark, #062838)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <p className="font-accent text-sm font-medium uppercase tracking-wider mb-4" style={{ color: "var(--cat-accent, #7DD4E0)" }}>{t({ en: "Full-Service Spa Dealer", es: "Distribuidor de Spas con Servicio Completo" })}</p>
              <h2 className="heading text-[length:var(--text-h2)] mb-6" style={{ color: "#FFFFFF" }}>{t({ en: "We Don\u2019t Just Sell \u2014 We Service", es: "No Solo Vendemos \u2014 Damos Servicio" })}</h2>
              <p className="text-lg leading-relaxed max-w-[55ch]" style={{ color: "rgba(255,255,255,0.7)" }}>
                {t({
                  en: "When you buy a spa from us, you get a relationship \u2014 not a receipt. Our technicians are factory-trained, our parts are always in stock, and our phone number never changes.",
                  es: "Cuando compras un spa con nosotros, obtienes una relación \u2014 no un recibo. Nuestros técnicos están capacitados de fábrica, nuestras refacciones siempre están en stock y nuestro número de teléfono nunca cambia.",
                })}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {serviceFeatures.map((feature, i) => (
                <motion.div
                  key={t(feature.title)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const }}
                  className="rounded-xl p-5"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <feature.icon className="w-5 h-5 mb-3" style={{ color: "var(--cat-accent, #7DD4E0)" }} />
                  <h3 className="font-display font-bold text-base mb-1" style={{ color: "#FFFFFF" }}>{t(feature.title)}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{t(feature.description)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABlock headline={t({ en: "Your Backyard Is Waiting", es: "Tu Patio Te Está Esperando" })} />
    </>
  )
}
