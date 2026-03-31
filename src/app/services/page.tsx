import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTABlock } from "@/components/cta-block"
import { FAQSchema } from "@/components/faq-schema"
import { Wrench, Truck, Droplets, Target } from "lucide-react"

export const metadata: Metadata = {
  title:
    "Service & Repair | Pool Table Re-Cloth, Hot Tub Maintenance, Delivery",
  alternates: {
    canonical: "https://lexingtonbilliardsandspas.com/services",
  },
  description:
    "Professional pool table service (re-cloth, re-cushion, leveling, moving), factory-authorized hot tub repair, and free delivery within 50 miles of Lexington, KY. Serving Central Kentucky since 1975.",
  openGraph: {
    title:
      "Service & Repair | Pool Table Re-Cloth, Hot Tub Maintenance, Delivery",
    description:
      "Professional pool table service, factory-authorized hot tub repair, and free delivery within 50 miles. Serving Central Kentucky since 1975.",
  },
}

const services = [
  {
    icon: Wrench,
    title: "Pool Table Service",
    items: [
      "Re-cloth (29 Championship & Simonis colors)",
      "Re-cushion with K-66 rubber",
      "Professional leveling",
      "Pool table moving & relocation",
      "Cue repair & re-tipping",
      "Rail and pocket replacement",
    ],
  },
  {
    icon: Droplets,
    title: "Hot Tub Service",
    items: [
      "Factory-authorized warranty repair",
      "Pump, heater, and jet replacement",
      "Water chemistry balancing",
      "Cover replacement",
      "Spa moving & relocation",
      "Annual maintenance checkups",
    ],
  },
  {
    icon: Truck,
    title: "Delivery & Installation",
    items: [
      "Free delivery within 50 miles of Lexington",
      "Professional pool table assembly & leveling",
      "Hot tub placement & electrical coordination",
      "Big Green Egg setup",
      "Arcade machine delivery & setup",
      "Old equipment removal available",
    ],
  },
  {
    icon: Target,
    title: "Game Room Accessories",
    items: [
      "Billiard light installation",
      "Dart board mounting",
      "Game room layout consultation",
      "Cloth color consultation",
      "Replacement parts & supplies",
      "Chemical and filter delivery for spas",
    ],
  },
]

const serviceFAQs = [
  {
    question: "How much does it cost to re-cloth a pool table?",
    answer:
      "Re-cloth pricing depends on table size and cloth choice. Championship cloth is more affordable, while Simonis is the premium option. Contact us at (859) 255-7639 for a quote — we offer 29 color options and can usually schedule within a week.",
  },
  {
    question: "Do you service hot tubs you didn't sell?",
    answer:
      "Yes. While we're factory-authorized for the brands we sell (American Whirlpool, Vita Spa), our technicians can service most hot tub brands. Call us to discuss your spa's needs.",
  },
  {
    question: "How far do you deliver?",
    answer:
      "We offer free delivery within 50 miles of our Lexington showroom. That covers Georgetown, Frankfort, Nicholasville, Versailles, Winchester, Richmond, Paris, and most of Central Kentucky. Deliveries beyond 50 miles are available for an additional fee.",
  },
  {
    question: "Can you move my pool table to a new house?",
    answer:
      "Yes. We professionally disassemble, transport, reassemble, and re-level pool tables. This is not a DIY job — slate tables weigh 700-1,000 lbs and require experienced movers to avoid damage. Call us to schedule.",
  },
  {
    question: "How often should I re-cloth my pool table?",
    answer:
      "Most home tables need new cloth every 3-7 years depending on usage. Signs it's time: worn spots, pilling, tears, or the ball doesn't roll true. Cushions typically last 15-25 years. We'll inspect your table and give you an honest assessment.",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="pt-[calc(var(--header-height)+3rem)] pb-12 lg:pb-16"
          style={{ background: "var(--color-dark)" }}
        >
          <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
            <p className="section-label mb-4">Since 1975</p>
            <h1
              className="heading text-[length:var(--text-h1)] mb-4"
              style={{ color: "var(--color-text-on-dark)" }}
            >
              Service, Repair & Delivery
            </h1>
            <p
              className="text-base lg:text-lg max-w-[52ch] leading-relaxed"
              style={{ color: "rgba(255,247,237,0.6)" }}
            >
              50 years of expert service. We don&apos;t just sell — we deliver,
              install, maintain, and repair everything we carry.
            </p>
          </div>
        </section>

        <section className="py-[var(--section-py)]">
          <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-xl border p-8"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <service.icon
                    className="w-8 h-8 mb-4"
                    style={{ color: "var(--color-primary)" }}
                  />
                  <h2
                    className="heading text-[length:var(--text-h3)] mb-4"
                    style={{ color: "var(--color-text)" }}
                  >
                    {service.title}
                  </h2>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm flex items-start gap-2"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: "var(--color-primary)" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="py-[var(--section-py)]"
          style={{ background: "var(--color-surface)" }}
        >
          <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
            <h2
              className="heading text-[length:var(--text-h2)] mb-4 text-center"
              style={{ color: "var(--color-text)" }}
            >
              Service Area
            </h2>
            <p
              className="text-center max-w-[52ch] mx-auto mb-8"
              style={{ color: "var(--color-text-secondary)" }}
            >
              We serve all of Central Kentucky within a 50-mile radius of
              Lexington, including:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Lexington",
                "Georgetown",
                "Frankfort",
                "Nicholasville",
                "Versailles",
                "Winchester",
                "Richmond",
                "Paris",
                "Danville",
                "Mount Sterling",
                "Berea",
                "Harrodsburg",
              ].map((town) => (
                <span
                  key={town}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    background: "var(--color-cream)",
                    color: "var(--color-text)",
                  }}
                >
                  {town}, KY
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-[var(--section-py)]">
          <div className="mx-auto max-w-[var(--narrow-max)] px-[var(--section-px)]">
            <h2
              className="heading text-[length:var(--text-h2)] mb-8 text-center"
              style={{ color: "var(--color-text)" }}
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {serviceFAQs.map((faq) => (
                <div key={faq.question}>
                  <h3
                    className="font-display font-bold text-base mb-2"
                    style={{ color: "var(--color-text)" }}
                  >
                    {faq.question}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQSchema faqs={serviceFAQs} />
        <CTABlock headline="Need Service? Call Us Today." />
      </main>
      <Footer />
    </>
  )
}
