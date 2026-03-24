"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Trophy, Truck, Wrench, Users, MapPin, Phone } from "lucide-react"
import { useLanguage, type T } from "@/lib/i18n/context"
import { company } from "@/lib/content/company"
import { CTABlock } from "@/components/cta-block"

const i18n = {
  heroLabel: { en: "Our Story", es: "Nuestra Historia" } as T,
  heroHeadline: { en: "Family-Owned Since 1975", es: "Negocio Familiar Desde 1975" } as T,
  heroSub: {
    en: "Three generations of Central Kentuckians have walked through our showroom on Leestown Road. We\u2019ve been selling, delivering, and servicing pool tables, hot tubs, and game room furniture longer than anyone in the Bluegrass.",
    es: "Tres generaciones de habitantes del centro de Kentucky han pasado por nuestro showroom en Leestown Road. Hemos estado vendiendo, entregando y dando servicio a mesas de billar, jacuzzis y muebles de sala de juegos m\u00e1s tiempo que nadie en Bluegrass.",
  } as T,

  storyLabel: { en: "The Wilson Family", es: "La Familia Wilson" } as T,
  storyHeadline: { en: "50 Years in the Game Room Business", es: "50 A\u00f1os en el Negocio de Salas de Juegos" } as T,
  storyP1: {
    en: "Greg Wilson\u2019s father opened the doors at 1431 Leestown Road in 1975 with a simple idea: sell quality pool tables to families in Central Kentucky, deliver them personally, and stand behind every one. That handshake philosophy hasn\u2019t changed in five decades.",
    es: "El padre de Greg Wilson abri\u00f3 las puertas en 1431 Leestown Road en 1975 con una idea simple: vender mesas de billar de calidad a familias del centro de Kentucky, entregarlas personalmente y respaldar cada una. Esa filosof\u00eda de apret\u00f3n de manos no ha cambiado en cinco d\u00e9cadas.",
  } as T,
  storyP2: {
    en: "What started as a billiards shop has grown into Central Kentucky\u2019s most complete game room and outdoor living destination. Greg expanded into hot tubs in the 1990s \u2014 making us Lexington\u2019s oldest spa dealer \u2014 then added Big Green Egg grills, custom arcade machines, and a full line of game room furniture and accessories.",
    es: "Lo que comenz\u00f3 como una tienda de billar se ha convertido en el destino m\u00e1s completo de salas de juegos y vida al aire libre del centro de Kentucky. Greg se expandi\u00f3 a los jacuzzis en los a\u00f1os 90 \u2014 convirti\u00e9ndonos en el distribuidor de spas m\u00e1s antiguo de Lexington \u2014 luego agreg\u00f3 parrillas Big Green Egg, m\u00e1quinas arcade personalizadas y una l\u00ednea completa de muebles y accesorios para salas de juegos.",
  } as T,
  storyP3: {
    en: "Today, every product we sell is one we\u2019d put in our own home. We keep a stocked showroom so you can see, touch, and try before you buy. And we still deliver, install, and service everything ourselves \u2014 because that\u2019s how it\u2019s always been.",
    es: "Hoy, cada producto que vendemos es uno que pondr\u00edamos en nuestra propia casa. Mantenemos un showroom surtido para que puedas ver, tocar y probar antes de comprar. Y todav\u00eda entregamos, instalamos y damos servicio a todo nosotros mismos \u2014 porque as\u00ed ha sido siempre.",
  } as T,

  carryLabel: { en: "What We Carry", es: "Lo Que Ofrecemos" } as T,
  carryHeadline: { en: "Everything Your Home Needs", es: "Todo Lo Que Tu Hogar Necesita" } as T,

  showroomLabel: { en: "The Showroom", es: "El Showroom" } as T,
  showroomHeadline: { en: "Come See for Yourself", es: "Ven a Verlo T\u00fa Mismo" } as T,
  showroomP1: {
    en: "Our 5,000+ square foot showroom on Leestown Road is stocked with pool tables set up and ready to play, hot tubs plumbed and powered for you to test, Big Green Eggs on display in every size, and arcade cabinets you can actually play before you buy.",
    es: "Nuestro showroom de m\u00e1s de 5,000 pies cuadrados en Leestown Road est\u00e1 equipado con mesas de billar armadas y listas para jugar, jacuzzis conectados y encendidos para que los pruebes, Big Green Eggs en exhibici\u00f3n en todos los tama\u00f1os, y gabinetes arcade que puedes jugar antes de comprar.",
  } as T,
  showroomP2: {
    en: "No pressure, no gimmicks \u2014 just honest advice from people who\u2019ve been doing this for half a century. The coffee\u2019s always on.",
    es: "Sin presi\u00f3n, sin trucos \u2014 solo consejos honestos de personas que llevan medio siglo haciendo esto. El caf\u00e9 siempre est\u00e1 listo.",
  } as T,

  serviceLabel: { en: "Service & Expertise", es: "Servicio y Experiencia" } as T,
  serviceHeadline: { en: "We Don\u2019t Just Sell It. We Stand Behind It.", es: "No Solo Lo Vendemos. Lo Respaldamos." } as T,

  ctaHeadline: { en: "Come Visit the Showroom", es: "Ven a Visitar el Showroom" } as T,
}

const categories = [
  {
    title: { en: "Pool Tables", es: "Mesas de Billar" } as T,
    desc: { en: "Six premium brands including Brunswick, Connelly, and C.L. Bailey. 29 cloth colors.", es: "Seis marcas premium incluyendo Brunswick, Connelly y C.L. Bailey. 29 colores de pa\u00f1o." } as T,
    href: "/pool-tables",
    image: "/images/tile-pool-tables.webp",
  },
  {
    title: { en: "Hot Tubs & Spas", es: "Jacuzzis y Spas" } as T,
    desc: { en: "American Whirlpool & Vita Spa. Lexington\u2019s oldest spa dealer with factory-authorized service.", es: "American Whirlpool y Vita Spa. El distribuidor de spas m\u00e1s antiguo de Lexington con servicio autorizado de f\u00e1brica." } as T,
    href: "/spas",
    image: "/images/tile-hot-tubs.webp",
  },
  {
    title: { en: "Big Green Egg", es: "Big Green Egg" } as T,
    desc: { en: "Authorized dealer. All seven sizes on display plus EGGcessories and organic charcoal.", es: "Distribuidor autorizado. Los siete tama\u00f1os en exhibici\u00f3n m\u00e1s EGGcesorios y carb\u00f3n org\u00e1nico." } as T,
    href: "/big-green-egg",
    image: "/images/tile-big-green-egg.webp",
  },
  {
    title: { en: "Arcade Machines", es: "M\u00e1quinas Arcade" } as T,
    desc: { en: "Custom multicade cabinets, bourbon barrel arcades, virtual pinball. Hand-built, not kits.", es: "Gabinetes multicade personalizados, arcades de barril de bourbon, pinball virtual. Hechos a mano." } as T,
    href: "/arcade-machines",
    image: "/images/tile-arcade.avif",
  },
  {
    title: { en: "Game Room Accessories", es: "Accesorios de Sala de Juegos" } as T,
    desc: { en: "Cues, lights, bar stools, pub tables, dartboards, and officially licensed sports gear.", es: "Tacos, luces, bancos de bar, mesas de pub, dianas y equipo deportivo con licencia oficial." } as T,
    href: "/billiard-accessories",
    image: "/images/tile-accessories.webp",
  },
  {
    title: { en: "Services & Repair", es: "Servicios y Reparación" } as T,
    desc: { en: "Re-cloth, re-cushion, cue repair, spa maintenance, and professional delivery within 50 miles.", es: "Cambio de paño, cambio de bandas, reparación de tacos, mantenimiento de spas y entrega profesional dentro de 50 millas." } as T,
    href: "/contact",
    image: "/images/repair-service.webp",
  },
]

const serviceItems = [
  {
    icon: Truck,
    title: { en: "Free Delivery & Setup", es: "Entrega e Instalaci\u00f3n Gratis" } as T,
    desc: { en: "Within 50 miles of Lexington. Pool tables delivered, assembled, and leveled. Spas installed and ready to soak.", es: "Dentro de 50 millas de Lexington. Mesas entregadas, ensambladas y niveladas. Spas instalados y listos." } as T,
  },
  {
    icon: Wrench,
    title: { en: "Re-Cloth & Repair", es: "Cambio de Pa\u00f1o y Reparaci\u00f3n" } as T,
    desc: { en: "Championship and Simonis premium felt in 29 colors. Re-cushion, cue repair, and full table restoration.", es: "Fieltro premium Championship y Simonis en 29 colores. Cambio de bandas, reparaci\u00f3n de tacos y restauraci\u00f3n completa." } as T,
  },
  {
    icon: Users,
    title: { en: "Spa Maintenance", es: "Mantenimiento de Spas" } as T,
    desc: { en: "Factory-authorized service on every brand we carry. Our master mechanics cover Central and Eastern Kentucky.", es: "Servicio autorizado de f\u00e1brica en cada marca que manejamos. Nuestros mec\u00e1nicos cubren el centro y este de Kentucky." } as T,
  },
  {
    icon: Trophy,
    title: { en: "Expert Advice", es: "Asesor\u00eda Experta" } as T,
    desc: { en: "50 years of knowledge. We help you pick the right table, spa, or grill for your space and budget.", es: "50 a\u00f1os de conocimiento. Te ayudamos a elegir la mesa, spa o parrilla correcta para tu espacio y presupuesto." } as T,
  },
]

export const AboutContent = () => {
  const { t } = useLanguage()

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-[calc(var(--header-height)+4rem)] pb-20 lg:pb-28 overflow-hidden" style={{ background: "var(--color-dark)" }}>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.06] pointer-events-none select-none">
          <Image src="/images/logo.webp" alt="" fill className="object-contain" sizes="500px" />
        </div>
        <div className="relative z-10 mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[640px]"
          >
            <p className="section-label !text-primary mb-4">{t(i18n.heroLabel)}</p>
            <h1 className="heading text-[length:var(--text-display)] text-text-on-dark mb-6">
              {t(i18n.heroHeadline)}
            </h1>
            <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-[52ch]">
              {t(i18n.heroSub)}
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <div className="text-center">
                <p className="heading text-[length:var(--text-stat)] text-primary">{company.yearsInBusiness}+</p>
                <p className="text-white/50 text-xs font-accent uppercase tracking-wider">{t({ en: "Years", es: "A\u00f1os" })}</p>
              </div>
              <div className="w-px h-12 bg-white/15" />
              <div className="text-center">
                <p className="heading text-[length:var(--text-stat)] text-primary">15+</p>
                <p className="text-white/50 text-xs font-accent uppercase tracking-wider">{t({ en: "Brands", es: "Marcas" })}</p>
              </div>
              <div className="w-px h-12 bg-white/15" />
              <div className="text-center">
                <p className="heading text-[length:var(--text-stat)] text-primary">50</p>
                <p className="text-white/50 text-xs font-accent uppercase tracking-wider">{t({ en: "Mile Delivery", es: "Millas Entrega" })}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--color-cream)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="section-label mb-4">{t(i18n.storyLabel)}</p>
              <h2 className="heading text-[length:var(--text-h2)] text-text mb-6">{t(i18n.storyHeadline)}</h2>
              <div className="space-y-4 text-text-secondary text-base leading-relaxed">
                <p>{t(i18n.storyP1)}</p>
                <p>{t(i18n.storyP2)}</p>
                <p>{t(i18n.storyP3)}</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/images/why-pool-tables.webp"
                  alt={t({ en: "Lexington Billiards showroom", es: "Showroom de Lexington Billiards" })}
                  width={800}
                  height={533}
                  className="w-full h-auto"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/why-spas.webp"
                    alt={t({ en: "Hot tub installation", es: "Instalaci\u00f3n de jacuzzi" })}
                    width={400}
                    height={300}
                    className="w-full h-auto"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="/images/why-delivery.webp"
                    alt={t({ en: "Professional delivery", es: "Entrega profesional" })}
                    width={400}
                    height={300}
                    className="w-full h-auto"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE CARRY ── */}
      <section className="py-[var(--section-py)]" style={{ background: "#fff" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <p className="section-label mb-4">{t(i18n.carryLabel)}</p>
            <h2 className="heading text-[length:var(--text-h2)] text-text">{t(i18n.carryHeadline)}</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link href={cat.href} className="group block">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
                    <Image
                      src={cat.image}
                      alt={t(cat.title)}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <p className="absolute bottom-3 left-4 font-display font-bold text-white text-lg">{t(cat.title)}</p>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{t(cat.desc)}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHOWROOM ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--color-dark)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="section-label !text-primary mb-4">{t(i18n.showroomLabel)}</p>
              <h2 className="heading text-[length:var(--text-h2)] text-text-on-dark mb-6">{t(i18n.showroomHeadline)}</h2>
              <div className="space-y-4 text-white/60 text-base leading-relaxed mb-8">
                <p>{t(i18n.showroomP1)}</p>
                <p>{t(i18n.showroomP2)}</p>
              </div>
              <div className="space-y-3 mb-8">
                <a
                  href={company.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors"
                >
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium">{company.address.full}</span>
                </a>
                <a
                  href={company.phone.href}
                  className="flex items-center gap-3 text-white/80 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium">{company.phone.display}</span>
                </a>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">{t({ en: "Visit Us", es: "Vis\u00edtanos" })}</Link>
                <a href={company.phone.href} className="btn-secondary">{t({ en: "Call Now", es: "Llama Ahora" })}</a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="rounded-xl overflow-hidden border border-border-dark"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.5!2d-84.5290!3d38.0618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884259a913571a0b%3A0x5b0de47fb3d9e3f7!2s1431%20Leestown%20Rd%2C%20Lexington%2C%20KY%2040511!5e0!3m2!1sen!2sus!4v1710000000000"
                className="w-full aspect-[4/3] border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t({ en: "Lexington Billiards & Spas location", es: "Ubicaci\u00f3n de Lexington Billiards & Spas" })}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICE & EXPERTISE ── */}
      <section className="py-[var(--section-py)]" style={{ background: "var(--color-cream)" }}>
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <p className="section-label mb-4">{t(i18n.serviceLabel)}</p>
            <h2 className="heading text-[length:var(--text-h2)] text-text">{t(i18n.serviceHeadline)}</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {serviceItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-xl p-6 lg:p-8 border"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                  style={{ background: "rgba(234,88,12,0.12)" }}
                >
                  <item.icon size={22} style={{ color: "var(--color-primary)" }} />
                </div>
                <h3 className="heading text-[length:var(--text-h4)] text-text mb-2">{t(item.title)}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{t(item.desc)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock headline={t(i18n.ctaHeadline)} />
    </>
  )
}
