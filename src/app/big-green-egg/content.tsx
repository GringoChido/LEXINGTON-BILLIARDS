"use client"

import Image from "next/image"
import { PageHeroSlider } from "@/components/page-hero-slider"
import { CTABlock } from "@/components/cta-block"
import { brandLogos } from "@/lib/content/brands"
import { motion } from "framer-motion"
import { useLanguage, type T } from "@/lib/i18n/context"

const slides = [
  {
    image: "/images/bge-slide-1.webp",
    headline: { en: "Once You Cook on an Egg, Everything Else Is Just a Grill", es: "Una Vez Que Cocinas en un Egg, Todo lo Demás Es Solo una Parrilla" } as T,
    cta: { label: { en: "See the Lineup", es: "Ver la Línea" } as T, href: "#eggs" },
  },
  {
    image: "/images/bge-slide-2.webp",
    headline: { en: "The Grill That Changes Everything", es: "La Parrilla Que lo Cambia Todo" } as T,
    cta: { label: { en: "Visit the Showroom", es: "Visita la Sala de Exhibición" } as T, href: "/contact" },
  },
  {
    image: "/images/bge-slide-3.webp",
    headline: { en: "Come Fire One Up in Our Showroom", es: "Ven a Encender Uno en Nuestra Sala de Exhibición" } as T,
    cta: { label: { en: "Call (859) 255-7639", es: "Llama al (859) 255-7639" } as T, href: "tel:8592557639" },
  },
]

const eggSizes: { name: string; tagline: T; feeds: T; diameter: string }[] = [
  { name: "2XL", tagline: { en: "The neighborhood centerpiece", es: "La pieza central del vecindario" }, feeds: { en: "10+", es: "10+" }, diameter: '29"' },
  { name: "XLarge", tagline: { en: "The backyard centerpiece", es: "La pieza central del patio" }, feeds: { en: "6–10", es: "6–10" }, diameter: '24"' },
  { name: "Large", tagline: { en: "The most popular EGG", es: "El EGG más popular" }, feeds: { en: "4–6", es: "4–6" }, diameter: '18.25"' },
  { name: "Medium", tagline: { en: "Perfect for smaller families", es: "Perfecto para familias pequeñas" }, feeds: { en: "2–4", es: "2–4" }, diameter: '15"' },
  { name: "Small", tagline: { en: "Compact & capable", es: "Compacto y capaz" }, feeds: { en: "1–2", es: "1–2" }, diameter: '13"' },
  { name: "MiniMax", tagline: { en: "The tailgate companion", es: "El compañero para eventos" }, feeds: { en: "2–4", es: "2–4" }, diameter: '13"' },
  { name: "Mini", tagline: { en: "Portable perfection", es: "Perfección portátil" }, feeds: { en: "1–2", es: "1–2" }, diameter: '10"' },
]

const whyFeatures: { title: T; description: T }[] = [
  {
    title: { en: "SIMPLE TO START", es: "FÁCIL DE ENCENDER" },
    description: {
      en: "The Big Green Egg reaches perfect cooking temperature and is ready to use in just minutes. Our 100% lump charcoal is made in the USA from only the best cuts of natural oak and hickory for superb performance and results.",
      es: "El Big Green Egg alcanza la temperatura perfecta de cocción y está listo para usar en solo minutos. Nuestro carbón 100% natural está hecho en EE.UU. con los mejores cortes de roble y nogal para un rendimiento y resultados superiores.",
    },
  },
  {
    title: { en: "PRECISE TEMPERATURE CONTROL", es: "CONTROL DE TEMPERATURA PRECISO" },
    description: {
      en: "Grill, smoke and bake on your EGG at exact temperatures by easily adjusting the patented air flow systems. You have total control over temperature at your fingertips, maintaining accuracy within a few degrees!",
      es: "Asa, ahúma y hornea en tu EGG a temperaturas exactas ajustando fácilmente los sistemas patentados de flujo de aire. ¡Tienes control total de la temperatura al alcance de tu mano, manteniendo precisión de unos pocos grados!",
    },
  },
  {
    title: { en: "SAFER TO USE", es: "MÁS SEGURO DE USAR" },
    description: {
      en: "The Big Green Egg is extremely safe to use as the ceramic surface doesn\u2019t get as hot as a metal grill, and the heat source is protected within a ceramic fire box inside the base.",
      es: "El Big Green Egg es extremadamente seguro de usar ya que la superficie cerámica no se calienta tanto como una parrilla de metal, y la fuente de calor está protegida dentro de una caja de fuego cerámica en la base.",
    },
  },
  {
    title: { en: "EASY CLEAN UP", es: "FÁCIL DE LIMPIAR" },
    description: {
      en: "The Big Green Egg features a professional grade stainless steel cooking grid and an elegant green exterior with a lifetime glaze that maintains its good looks and wipes clean easily without chemical cleaners.",
      es: "El Big Green Egg cuenta con una rejilla de cocción de acero inoxidable de grado profesional y un elegante exterior verde con un esmalte de por vida que mantiene su apariencia y se limpia fácilmente sin productos químicos.",
    },
  },
  {
    title: { en: "PATENTED TECHNOLOGY", es: "TECNOLOGÍA PATENTADA" },
    description: {
      en: "Among many features that make the Big Green Egg by far the best cooking device of its kind are the patented components and state-of-the-art ceramic technologies that provide unrivaled thermal properties, material quality and cooking performance!",
      es: "Entre las muchas características que hacen del Big Green Egg el mejor dispositivo de cocción de su tipo están los componentes patentados y las tecnologías cerámicas de última generación que proporcionan propiedades térmicas, calidad de materiales y rendimiento de cocción inigualables.",
    },
  },
]

const anatomyFeatures: { label: T; desc: T }[] = [
  { label: { en: "Heated Air Exits", es: "Salida de Aire Caliente" }, desc: { en: "Dual-Function Metal Top controls airflow", es: "Tapa metálica de doble función controla el flujo de aire" } },
  { label: { en: "Ceramic Chamber", es: "Cámara Cerámica" }, desc: { en: "Retains heat and keeps food moist", es: "Retiene el calor y mantiene la comida húmeda" } },
  { label: { en: "Sealed Fire Box", es: "Caja de Fuego Sellada" }, desc: { en: "100% Natural Lump Charcoal", es: "Carbón Natural 100%" } },
  { label: { en: "Draft Door", es: "Puerta de Tiro" }, desc: { en: "Precision airflow control", es: "Control de flujo de aire de precisión" } },
]

export const BigGreenEggContent = () => {
  const eggLogo = brandLogos["big-green-egg"]
  const { t } = useLanguage()

  const localSlides = slides.map(s => ({
    image: s.image,
    headline: t(s.headline),
    cta: { label: t(s.cta.label), href: s.cta.href },
  }))

  return (
    <>
      <PageHeroSlider slides={localSlides} />

      {/* ── BRAND FEATURE ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--cat-primary, #1E5C1E)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-center lg:text-left"
            >
              {eggLogo && (
                <div className="relative w-[140px] h-[70px] mx-auto lg:mx-0 mb-6">
                  <Image src={eggLogo} alt="Big Green Egg logo" fill className="object-contain brightness-0 invert opacity-70" sizes="140px" />
                </div>
              )}
              <p className="section-label mb-4" style={{ color: "var(--cat-accent, #F5A623)" }}>{t({ en: "Authorized Dealer", es: "Distribuidor Autorizado" })}</p>
              <h2 className="heading text-[length:var(--text-h1)] mb-6 max-w-[20ch]" style={{ color: "var(--color-text-on-dark)" }}>
                {t({ en: "It's Not a Grill.", es: "No Es una Parrilla." })}{" "}
                <span style={{ color: "var(--cat-accent, #F5A623)" }}>{t({ en: "It's an Obsession.", es: "Es una Obsesión." })}</span>
              </h2>
              <p className="text-lg leading-relaxed max-w-[50ch]" style={{ color: "rgba(250,246,239,0.7)" }}>
                {t({
                  en: "The Big Green Egg has a cult following for a reason. One cooker that grills, smokes, bakes, and roasts \u2014 with temperature control no gas grill can match. We keep several models on display, organic charcoal in stock, and a full line of EGGcessories.",
                  es: "El Big Green Egg tiene seguidores de culto por una razón. Un solo asador que asa, ahúma, hornea y rostiza \u2014 con un control de temperatura que ninguna parrilla de gas puede igualar. Tenemos varios modelos en exhibición, carbón orgánico en inventario y una línea completa de EGGcessories.",
                })}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] as const }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/bge-easy-recipes.webp"
                alt="Friends gathered around a Big Green Egg, sharing food and conversation"
                width={800}
                height={533}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SIZE GUIDE — family image with overlaid heading + inline size strip ── */}
      <section id="eggs" className="relative">
        {/* Family photo as hero background */}
        <div className="relative w-full">
          {/* Heading overlaid on top of image */}
          <div className="absolute inset-x-0 top-0 z-10 pt-8 sm:pt-12 lg:pt-16 text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-label mb-3" style={{ color: "var(--cat-accent, #F5A623)" }}>{t({ en: "Find Your EGG", es: "Encuentra Tu EGG" })}</p>
              <h2 className="heading text-[length:var(--text-h1)] drop-shadow-lg" style={{ color: "#fff" }}>
                {t({ en: "Seven Sizes. One Obsession.", es: "Siete Tamaños. Una Obsesión." })}
              </h2>
              <p className="text-sm lg:text-base mt-2 drop-shadow-md" style={{ color: "rgba(255,255,255,0.85)" }}>
                {t({ en: "From the portable Mini to the neighborhood-feeding 2XL.", es: "Desde el portátil Mini hasta el 2XL para todo el vecindario." })}
              </p>
            </motion.div>
          </div>

          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to bottom, rgba(15,46,15,0.7) 0%, rgba(15,46,15,0.1) 40%, transparent 60%)" }} />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/images/bge-family-lineup.webp"
              alt="Big Green Egg complete family lineup — all seven sizes"
              width={1800}
              height={900}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>

        {/* Size strip — overlapping the bottom of the image */}
        <div className="relative z-10 mt-4 sm:-mt-8 lg:-mt-12 mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 lg:gap-3">
            {eggSizes.map((egg, i) => (
              <motion.div
                key={egg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] as const }}
                className="text-center py-4 px-2 rounded-xl backdrop-blur-sm shadow-lg"
                style={{ background: "rgba(255,255,255,0.92)", border: "1px solid rgba(30,92,30,0.08)" }}
              >
                <p className="font-accent font-bold text-base mb-0.5" style={{ color: "var(--cat-primary, #1E5C1E)" }}>{egg.diameter}</p>
                <h4 className="heading text-sm mb-0.5" style={{ color: "var(--color-text)" }}>{egg.name}</h4>
                <p className="text-[11px]" style={{ color: "var(--color-text-secondary)" }}>{t(egg.tagline)}</p>
                <p className="text-[11px] font-semibold mt-0.5" style={{ color: "var(--cat-secondary, #B85C00)" }}>
                  {t({ en: `Feeds ${t(egg.feeds)}`, es: `Alimenta a ${t(egg.feeds)} personas` })}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BGE DIAGRAM + FEATURES — big egg left, features right, anatomy below ── */}
      <section className="pt-20 lg:pt-28 pb-[var(--section-py)]" style={{ background: "#fff" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">

          {/* 2-column: big egg | features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left: HUGE egg image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
              className="flex justify-center lg:justify-end"
            >
              <Image
                src="/images/bge-large-diagram.webp"
                alt="Big Green Egg Large"
                width={840}
                height={1000}
                className="w-full max-w-[520px] lg:max-w-none lg:w-[110%] h-auto"
                priority
              />
            </motion.div>

            {/* Right: Feature text blocks */}
            <div className="space-y-8 lg:space-y-10">
              {whyFeatures.map((feature, i) => (
                <motion.div
                  key={t(feature.title)}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                >
                  <h3 className="heading text-xl lg:text-2xl mb-2 uppercase tracking-wider" style={{ color: "#1C1C1C" }}>
                    {t(feature.title)}
                  </h3>
                  <p className="text-[15px] leading-relaxed" style={{ color: "#555" }}>
                    {t(feature.description)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Anatomy — Egg centered with 2 features on each side */}
          <div className="mt-16 lg:mt-24">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="section-label text-center mb-10 lg:mb-14"
              style={{ color: "var(--cat-accent, #F5A623)" }}
            >
              {t({ en: "How It Works", es: "Cómo Funciona" })}
            </motion.p>

            {/* Mobile: stack cards, then egg */}
            <div className="lg:hidden space-y-4">
              <div className="flex justify-center">
                <Image
                  src="/images/bge-2xlarge.webp"
                  alt="Big Green Egg 2XL"
                  width={500}
                  height={600}
                  className="w-full max-w-[320px] h-auto"
                  sizes="320px"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {anatomyFeatures.map((item, i) => (
                  <motion.div
                    key={t(item.label)}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="text-center p-5 rounded-2xl"
                    style={{ background: "var(--cat-surface, #F7F3EE)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center"
                      style={{ background: "var(--cat-primary, #1E5C1E)" }}
                    >
                      <span className="text-white font-bold text-sm">{i + 1}</span>
                    </div>
                    <h4 className="font-accent font-bold text-xs uppercase tracking-wider mb-1.5" style={{ color: "var(--color-text)" }}>
                      {t(item.label)}
                    </h4>
                    <p className="text-[11px] leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                      {t(item.desc)}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desktop: 3-column — left cards | egg | right cards */}
            <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-8 xl:gap-12 items-center">
              {/* Left 2 cards */}
              <div className="space-y-6">
                {anatomyFeatures.slice(0, 2).map((item, i) => (
                  <motion.div
                    key={t(item.label)}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="text-right p-7 rounded-2xl"
                    style={{ background: "var(--cat-surface, #F7F3EE)" }}
                  >
                    <div className="flex items-center justify-end gap-3 mb-2">
                      <h4 className="font-accent font-bold text-sm uppercase tracking-wider" style={{ color: "var(--color-text)" }}>
                        {t(item.label)}
                      </h4>
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: "var(--cat-primary, #1E5C1E)" }}
                      >
                        <span className="text-white font-bold text-sm">{i + 1}</span>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                      {t(item.desc)}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Center egg */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex justify-center"
              >
                <Image
                  src="/images/bge-2xlarge.webp"
                  alt="Big Green Egg 2XL"
                  width={500}
                  height={600}
                  className="w-[340px] xl:w-[400px] h-auto"
                  sizes="400px"
                />
              </motion.div>

              {/* Right 2 cards */}
              <div className="space-y-6">
                {anatomyFeatures.slice(2, 4).map((item, i) => (
                  <motion.div
                    key={t(item.label)}
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="text-left p-7 rounded-2xl"
                    style={{ background: "var(--cat-surface, #F7F3EE)" }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: "var(--cat-primary, #1E5C1E)" }}
                      >
                        <span className="text-white font-bold text-sm">{i + 3}</span>
                      </div>
                      <h4 className="font-accent font-bold text-sm uppercase tracking-wider" style={{ color: "var(--color-text)" }}>
                        {t(item.label)}
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                      {t(item.desc)}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── EGGcessories ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--cat-primary, #1E5C1E)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            >
              <p className="section-label mb-4" style={{ color: "var(--cat-accent, #F5A623)" }}>{t({ en: "Always In Stock", es: "Siempre en Inventario" })}</p>
              <h2 className="heading text-[length:var(--text-h2)] mb-4" style={{ color: "var(--color-text-on-dark)" }}>{t({ en: "EGGcessories & Charcoal", es: "EGGcessories y Carbón" })}</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(250,246,239,0.7)" }}>
                {t({
                  en: "We keep a full line of Big Green Egg EGGcessories in stock \u2014 plates, grids, pizza stones, tables, covers, and more. Plus organic Big Green Egg lump charcoal so you can fire it up the same day.",
                  es: "Tenemos una línea completa de EGGcessories de Big Green Egg en inventario \u2014 platos, rejillas, piedras para pizza, mesas, fundas y más. Además de carbón orgánico Big Green Egg para que lo enciendas el mismo día.",
                })}
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { en: "Plates & Grids", es: "Platos y Rejillas" },
                  { en: "Pizza Stones", es: "Piedras para Pizza" },
                  { en: "Tables & Nests", es: "Mesas y Bases" },
                  { en: "Organic Charcoal", es: "Carbón Orgánico" },
                  { en: "Covers", es: "Fundas" },
                  { en: "Rubs & Sauces", es: "Especias y Salsas" },
                ].map((item) => (
                  <span key={item.en} className="pill" style={{ background: "rgba(245,166,35,0.15)", color: "var(--cat-accent, #F5A623)" }}>{t(item)}</span>
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
              <Image
                src="/images/bge-charcoal.webp"
                alt="Big Green Egg 100% Natural Oak & Hickory Lump Charcoal"
                width={800}
                height={1000}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <CTABlock headline={t({ en: "Come Fire One Up", es: "Ven a Encender Uno" })} />
    </>
  )
}
