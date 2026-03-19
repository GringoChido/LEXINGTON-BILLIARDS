"use client"

import { PageHeroSlider } from "@/components/page-hero-slider"
import { BrandCard } from "@/components/brand-card"
import { SectionHeading } from "@/components/section-heading"
import { CTABlock } from "@/components/cta-block"
import { ScenePlaceholder } from "@/components/scene-placeholder"
import { arcadeBrands } from "@/lib/content/brands"
import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage, type T } from "@/lib/i18n/context"

const slides = [
  {
    image: "/images/gameroom-slide-1.webp",
    headline: { en: "Bring the Arcade Home", es: "Trae el Arcade a Casa" } as T,
    cta: { label: { en: "See Our Machines", es: "Ver Nuestras Máquinas" } as T, href: "#machines" },
  },
  {
    image: "/images/retroarcade.webp",
    headline: { en: "Custom Multicades. Classic Games. Your Design.", es: "Multicades Personalizados. Juegos Clásicos. Tu Diseño." } as T,
    cta: { label: { en: "Visit the Showroom", es: "Visita el Showroom" } as T, href: "/contact" },
  },
  {
    image: "/images/gameroom-slide-3.webp",
    headline: { en: "Hundreds of Games. One Machine.", es: "Cientos de Juegos. Una Máquina." } as T,
    cta: { label: { en: "Call (859) 255-7639", es: "Llama al (859) 255-7639" } as T, href: "tel:8592557639" },
  },
]

const machines = [
  {
    name: { en: "Bourbon Barrel Multicade", es: "Multicade Barril de Bourbon" } as T,
    descriptor: { en: "Kentucky-exclusive. Built from a real bourbon barrel. 60+ classic games in the most unique cabinet you\u2019ve ever seen.", es: "Exclusivo de Kentucky. Construido con un barril de bourbon real. Más de 60 juegos clásicos en el gabinete más único que hayas visto." } as T,
    badge: { en: "Kentucky Exclusive", es: "Exclusivo de Kentucky" } as T,
    specs: [
      { en: "60 Classic Games", es: "60 Juegos Clásicos" } as T,
      { en: "Authentic Barrel", es: "Barril Auténtico" } as T,
      { en: "Custom LED Lighting", es: "Iluminación LED Personalizada" } as T,
      { en: "Free Play or Coin-Op", es: "Juego Libre o con Monedas" } as T,
    ],
    scene: "Bourbon barrel arcade machine, dark wood, warm glow, game room",
  },
  {
    name: { en: "Widescreen Upright", es: "Vertical Pantalla Ancha" } as T,
    descriptor: { en: "Our newest model \u2014 32\" widescreen display with crystal-clear graphics and commercial-grade controls.", es: "Nuestro modelo más nuevo — pantalla panorámica de 32\" con gráficos nítidos y controles de grado comercial." } as T,
    badge: { en: "Newest Model", es: "Modelo Más Nuevo" } as T,
    specs: [
      { en: "60+ Classic Games", es: "60+ Juegos Clásicos" } as T,
      { en: "32\" LED Display", es: "Pantalla LED de 32\"" } as T,
      { en: "Commercial Joysticks", es: "Joysticks Comerciales" } as T,
      { en: "Choice of Colors", es: "Variedad de Colores" } as T,
    ],
    scene: "Widescreen upright arcade cabinet, modern, bright display",
  },
  {
    name: { en: "20\" LCD Upright", es: "Vertical LCD de 20\"" } as T,
    descriptor: { en: "The classic arcade cabinet, perfectly sized for any game room.", es: "El gabinete arcade clásico, del tamaño perfecto para cualquier sala de juegos." } as T,
    specs: [
      { en: "60 Classic Games", es: "60 Juegos Clásicos" } as T,
      { en: "20\" LCD Display", es: "Pantalla LCD de 20\"" } as T,
      { en: "Tempered Glass", es: "Vidrio Templado" } as T,
      { en: "Choice of Colors", es: "Variedad de Colores" } as T,
    ],
    scene: "Classic 20 inch upright arcade cabinet",
  },
  {
    name: { en: "32\" LED Upright", es: "Vertical LED de 32\"" } as T,
    descriptor: { en: "Same classic cabinet, bigger screen. For the player who wants more.", es: "El mismo gabinete clásico, pantalla más grande. Para el jugador que quiere más." } as T,
    specs: [
      { en: "60 Classic Games", es: "60 Juegos Clásicos" } as T,
      { en: "32\" LED Display", es: "Pantalla LED de 32\"" } as T,
      { en: "Tempered Glass", es: "Vidrio Templado" } as T,
      { en: "Choice of Colors", es: "Variedad de Colores" } as T,
    ],
    scene: "Large 32 inch upright arcade, bright screen",
  },
  {
    name: { en: "Cocktail Table", es: "Mesa Cocktail" } as T,
    descriptor: { en: "Sit down, play face-to-face. The original social gaming experience.", es: "Siéntate, juega cara a cara. La experiencia social de juego original." } as T,
    specs: [
      { en: "60 Classic Games", es: "60 Juegos Clásicos" } as T,
      { en: "Two-Player", es: "Dos Jugadores" } as T,
      { en: "Glass Top", es: "Cubierta de Vidrio" } as T,
      { en: "Cup Holders", es: "Portavasos" } as T,
    ],
    scene: "Cocktail table arcade, two players seated",
  },
  {
    name: { en: "3-Sided Cocktail", es: "Cocktail de 3 Lados" } as T,
    descriptor: { en: "Three screens, three sides. The ultimate cocktail cabinet for groups.", es: "Tres pantallas, tres lados. El gabinete cocktail definitivo para grupos." } as T,
    specs: [
      { en: "60 Classic Games", es: "60 Juegos Clásicos" } as T,
      { en: "Three Displays", es: "Tres Pantallas" } as T,
      { en: "6-Player", es: "6 Jugadores" } as T,
      { en: "Commercial Grade", es: "Grado Comercial" } as T,
    ],
    scene: "Three-sided cocktail arcade table",
  },
  {
    name: { en: "Virtual Pinball", es: "Pinball Virtual" } as T,
    descriptor: { en: "863+ classic pinball tables on one machine. Full-size cabinet with force feedback, backglass display, and authentic plunger.", es: "Más de 863 mesas de pinball clásicas en una máquina. Gabinete de tamaño completo con retroalimentación de fuerza, pantalla backglass y émbolo auténtico." } as T,
    badge: { en: "863+ Tables", es: "863+ Mesas" } as T,
    specs: [
      { en: "863+ Pinball Tables", es: "863+ Mesas de Pinball" } as T,
      { en: "Full-Size Cabinet", es: "Gabinete Tamaño Completo" } as T,
      { en: "Force Feedback", es: "Retroalimentación de Fuerza" } as T,
      { en: "Backglass Display", es: "Pantalla Backglass" } as T,
    ],
    scene: "Virtual pinball machine, bright playfield, full cabinet",
  },
]

const i18n = {
  introStat: { en: "7", es: "7" } as T,
  introLabel: { en: "Machine Types In Our Showroom", es: "Tipos de Máquinas en Nuestro Showroom" } as T,
  introDesc: {
    en: "Uprights, cocktail tables, bourbon barrels, and virtual pinball — every machine is hand-built with commercial-grade components. Come play a few rounds before you decide.",
    es: "Verticales, mesas cocktail, barriles de bourbon y pinball virtual — cada máquina está hecha a mano con componentes de grado comercial. Ven a jugar unas rondas antes de decidir.",
  } as T,
  tags: [
    { en: "Hand-Built Cabinets", es: "Gabinetes Hechos a Mano" } as T,
    { en: "60+ Classic Games", es: "60+ Juegos Clásicos" } as T,
    { en: "Commercial Grade", es: "Grado Comercial" } as T,
    { en: "Custom Designs", es: "Diseños Personalizados" } as T,
  ],
  showroomLabel: { en: "What\u2019s In Our Showroom", es: "Qué Hay en Nuestro Showroom" } as T,
  lineupHeadline: { en: "The Machine Lineup", es: "La Línea de Máquinas" } as T,
  visitShowroom: { en: "Visit the Showroom", es: "Visita el Showroom" } as T,
  classicUprightsLabel: { en: "Classic Uprights — Pick Your Size", es: "Verticales Clásicos — Elige Tu Tamaño" } as T,
  cocktailLabel: { en: "Classic Cocktail Style", es: "Estilo Cocktail Clásico" } as T,
  pinballTablesLabel: { en: "Classic Pinball Tables", es: "Mesas de Pinball Clásicas" } as T,
  brandsLabel: { en: "Our Arcade Brands", es: "Nuestras Marcas de Arcade" } as T,
  brandsHeadline: { en: "Built for Serious Game Rooms", es: "Hechas para Salas de Juegos de Verdad" } as T,
  ctaHeadline: { en: "Come Play One", es: "Ven a Jugar" } as T,
}

export const ArcadeContent = () => {
  const { t } = useLanguage()

  const localSlides = slides.map(s => ({
    image: s.image,
    headline: t(s.headline),
    cta: { label: t(s.cta.label), href: s.cta.href },
  }))

  return (
    <div style={{ background: "var(--cat-primary, #1A1A2E)" }}>
      <PageHeroSlider slides={localSlides} />

      {/* ── CATEGORY INTRO ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--cat-primary, #1A1A2E)" }}>
        <div className="mx-auto max-w-[var(--narrow-max)] px-[var(--section-px)] text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <p className="heading text-[length:var(--text-stat)] mb-4" style={{ color: "var(--cat-accent, #FFD60A)" }}>{t(i18n.introStat)}</p>
            <p className="section-label mb-4" style={{ color: "var(--cat-neon-green, #06D6A0)" }}>{t(i18n.introLabel)}</p>
            <p className="text-lg leading-relaxed mb-10 max-w-[55ch] mx-auto" style={{ color: "rgba(248,249,250,0.6)" }}>
              {t(i18n.introDesc)}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {i18n.tags.map((tag) => (
                <span key={t(tag)} className="pill" style={{ background: "rgba(6,214,160,0.12)", color: "var(--cat-neon-green, #06D6A0)" }}>{t(tag)}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MACHINE LINEUP / PRODUCT GRID ── */}
      <section id="machines" className="py-[var(--section-py)]" style={{ background: "var(--cat-primary, #1A1A2E)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="mb-14 lg:mb-20">
            <p className="section-label mb-4" style={{ color: "var(--cat-accent, #FFD60A)" }}>{t(i18n.showroomLabel)}</p>
            <h2 className="heading text-[length:var(--text-h1)] mb-4" style={{ color: "var(--cat-light, #F8F9FA)" }}>{t(i18n.lineupHeadline)}</h2>
          </div>

          <div className="space-y-8">
            {/* Bourbon Barrel — Hero card with red badge */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className="relative rounded-2xl overflow-hidden scanlines"
              style={{ background: "var(--cat-surface, #16213E)" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative aspect-[4/3] lg:aspect-auto min-h-[300px]">
                  <Image src="/images/bourbon-barrel-arcade.webp" alt="Bourbon Barrel Multicade" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center relative z-10">
                  <span className="pill mb-4 inline-block w-fit" style={{ background: "rgba(230,57,70,0.2)", color: "var(--cat-secondary, #E63946)" }}>{machines[0].badge ? t(machines[0].badge) : ""}</span>
                  <h3 className="heading text-[length:var(--text-h2)] mb-3" style={{ color: "var(--cat-accent, #FFD60A)" }}>{t(machines[0].name)}</h3>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(248,249,250,0.65)" }}>{t(machines[0].descriptor)}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {machines[0].specs.map((s) => (
                      <span key={t(s)} className="pill" style={{ background: "rgba(6,214,160,0.15)", color: "var(--cat-neon-green, #06D6A0)" }}>{t(s)}</span>
                    ))}
                  </div>
                  <a href="/contact" className="inline-flex items-center justify-center gap-2 font-display font-bold text-sm px-8 py-4 rounded-lg w-fit" style={{ background: "var(--cat-accent, #FFD60A)", color: "var(--cat-primary, #1A1A2E)" }}>
                    {t(i18n.visitShowroom)}
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Widescreen — Feature */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
              className="lg:w-[66%] rounded-2xl overflow-hidden border"
              style={{ borderColor: "rgba(0,180,216,0.2)", background: "var(--cat-surface, #16213E)" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                <div className="relative" style={{ aspectRatio: "4/5" }}>
                  <Image src="/images/widescreen-upright-arcade.webp" alt="Widescreen Upright Arcade" fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="pill mb-3 inline-block w-fit" style={{ background: "rgba(0,180,216,0.15)", color: "var(--cat-neon-blue, #00B4D8)" }}>{machines[1].badge ? t(machines[1].badge) : ""}</span>
                  <h3 className="heading text-[length:var(--text-h3)] mb-2" style={{ color: "var(--cat-light, #F8F9FA)" }}>{t(machines[1].name)}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(248,249,250,0.6)" }}>{t(machines[1].descriptor)}</p>
                  <div className="flex flex-wrap gap-2">
                    {machines[1].specs.map((s) => <span key={t(s)} className="pill" style={{ background: "rgba(248,249,250,0.08)", color: "rgba(248,249,250,0.7)" }}>{t(s)}</span>)}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Uprights pair */}
            <div>
              <p className="font-accent text-sm font-medium uppercase tracking-wider mb-6" style={{ color: "var(--cat-neon-blue, #00B4D8)" }}>{t(i18n.classicUprightsLabel)}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {machines.slice(2, 4).map((m, i) => (
                  <motion.div key={t(m.name)} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                    className="rounded-xl overflow-hidden border" style={{ borderColor: "rgba(248,249,250,0.08)", background: "var(--cat-surface, #16213E)" }}
                  >
                    <ScenePlaceholder label={m.scene} aspectRatio="4/3" dark />
                    <div className="p-6">
                      <h4 className="heading text-[length:var(--text-h4)] mb-2" style={{ color: "var(--cat-light, #F8F9FA)" }}>{t(m.name)}</h4>
                      <p className="text-sm mb-4" style={{ color: "rgba(248,249,250,0.6)" }}>{t(m.descriptor)}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {m.specs.map((s) => <span key={t(s)} className="pill text-[11px]" style={{ background: "rgba(6,214,160,0.1)", color: "var(--cat-neon-green, #06D6A0)" }}>{t(s)}</span>)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Cocktail pair */}
            <div>
              <p className="font-accent text-sm font-medium uppercase tracking-wider mb-6" style={{ color: "var(--cat-neon-green, #06D6A0)" }}>{t(i18n.cocktailLabel)}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {machines.slice(4, 6).map((m, i) => (
                  <motion.div key={t(m.name)} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                    className="rounded-xl overflow-hidden border" style={{ borderColor: "rgba(248,249,250,0.08)", background: "var(--cat-surface, #16213E)" }}
                  >
                    <ScenePlaceholder label={m.scene} aspectRatio="4/3" dark />
                    <div className="p-6">
                      <h4 className="heading text-[length:var(--text-h4)] mb-2" style={{ color: "var(--cat-light, #F8F9FA)" }}>{t(m.name)}</h4>
                      <p className="text-sm mb-4" style={{ color: "rgba(248,249,250,0.6)" }}>{t(m.descriptor)}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {m.specs.map((s) => <span key={t(s)} className="pill text-[11px]" style={{ background: "rgba(6,214,160,0.1)", color: "var(--cat-neon-green, #06D6A0)" }}>{t(s)}</span>)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Virtual Pinball — Hero with neon blue */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className="rounded-2xl overflow-hidden scanlines"
              style={{ background: "var(--cat-surface, #16213E)", border: "1px solid rgba(0,180,216,0.2)" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-0">
                <div className="relative aspect-[3/4] lg:aspect-auto min-h-[300px]">
                  <ScenePlaceholder label={machines[6].scene} className="w-full h-full !rounded-none" dark />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center relative z-10">
                  <p className="heading text-[length:var(--text-stat)] mb-2" style={{ color: "var(--cat-neon-blue, #00B4D8)" }}>863+</p>
                  <p className="font-accent text-sm font-medium uppercase tracking-wider mb-4" style={{ color: "rgba(248,249,250,0.5)" }}>{t(i18n.pinballTablesLabel)}</p>
                  <h3 className="heading text-[length:var(--text-h2)] mb-3" style={{ color: "var(--cat-light, #F8F9FA)" }}>{t(machines[6].name)}</h3>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(248,249,250,0.65)" }}>{t(machines[6].descriptor)}</p>
                  <div className="flex flex-wrap gap-2">
                    {machines[6].specs.map((s) => (
                      <span key={t(s)} className="pill" style={{ background: "rgba(0,180,216,0.12)", color: "var(--cat-neon-blue, #00B4D8)" }}>{t(s)}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--cat-surface, #16213E)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <SectionHeading label={t(i18n.brandsLabel)} headline={t(i18n.brandsHeadline)} />
          <div className="space-y-16 lg:space-y-24">
            {arcadeBrands.map((brand, i) => (
              <BrandCard key={brand.slug} brand={brand} index={i} reversed={i % 2 !== 0} variant={i === 0 ? "wide" : "default"} />
            ))}
          </div>
        </div>
      </section>

      <CTABlock headline={t(i18n.ctaHeadline)} />
    </div>
  )
}
