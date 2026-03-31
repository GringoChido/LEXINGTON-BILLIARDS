import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTABlock } from "@/components/cta-block"
import { FAQSchema } from "@/components/faq-schema"
import { CreditCard, CheckCircle, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Financing | Flexible Payment Plans for Pool Tables & Hot Tubs",
  alternates: {
    canonical: "https://lexingtonbilliardsandspas.com/financing",
  },
  description:
    "Flexible financing options for pool tables, hot tubs, Big Green Eggs, and game room furniture at Lexington Billiards & Spas. Make your dream game room affordable. Apply in-store.",
  openGraph: {
    title: "Financing | Flexible Payment Plans for Pool Tables & Hot Tubs",
    description:
      "Flexible financing for pool tables, hot tubs, and game room furniture. Apply in-store at Lexington Billiards & Spas.",
  },
}

const benefits = [
  "Flexible monthly payment plans",
  "Competitive interest rates",
  "Quick in-store application process",
  "Apply to pool tables, hot tubs, Big Green Eggs, and arcade machines",
  "Combine with free delivery & installation",
  "No prepayment penalties",
]

const financingFAQs = [
  {
    question: "Do you offer financing on pool tables?",
    answer:
      "Yes. We offer financing on pool tables, hot tubs, Big Green Eggs, arcade machines, and game room furniture. Visit our showroom at 1431 Leestown Rd, Lexington, KY to discuss financing options and apply.",
  },
  {
    question: "How do I apply for financing?",
    answer:
      "Financing applications are handled in-store. Visit our Lexington showroom, pick out your products, and our staff will walk you through the application process. Approval decisions are typically quick.",
  },
  {
    question: "What credit score do I need?",
    answer:
      "Financing eligibility varies by provider and plan. We work with financing partners who offer options for a range of credit profiles. Visit us to discuss your options — we'll find a plan that works for your budget.",
  },
  {
    question: "Can I finance a hot tub and pool table together?",
    answer:
      "Yes. You can finance multiple items on a single plan. Many customers combine a pool table, accessories, and lighting into one financed purchase. The more you bundle, the more value you get with our free delivery and installation.",
  },
]

export default function FinancingPage() {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="pt-[calc(var(--header-height)+3rem)] pb-12 lg:pb-16"
          style={{ background: "var(--color-dark)" }}
        >
          <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
            <p className="section-label mb-4">Make It Affordable</p>
            <h1
              className="heading text-[length:var(--text-h1)] mb-4"
              style={{ color: "var(--color-text-on-dark)" }}
            >
              Financing Options
            </h1>
            <p
              className="text-base lg:text-lg max-w-[52ch] leading-relaxed"
              style={{ color: "rgba(255,247,237,0.6)" }}
            >
              Your dream game room or backyard oasis doesn&apos;t have to wait.
              Flexible financing makes premium pool tables, hot tubs, and more
              affordable.
            </p>
          </div>
        </section>

        <section className="py-[var(--section-py)]">
          <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <CreditCard
                  className="w-10 h-10 mb-6"
                  style={{ color: "var(--color-primary)" }}
                />
                <h2
                  className="heading text-[length:var(--text-h2)] mb-4"
                  style={{ color: "var(--color-text)" }}
                >
                  How It Works
                </h2>
                <p
                  className="mb-6 leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Visit our showroom, choose your products, and apply for
                  financing on the spot. Our staff will help you find the right
                  plan for your budget. Combine financing with our free delivery
                  and professional installation for a complete package.
                </p>
                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle
                        className="w-5 h-5 mt-0.5 shrink-0"
                        style={{ color: "var(--color-primary)" }}
                      />
                      <span style={{ color: "var(--color-text-secondary)" }}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-xl border p-8"
                style={{
                  borderColor: "var(--color-border)",
                  background: "var(--color-surface)",
                }}
              >
                <Phone
                  className="w-8 h-8 mb-4"
                  style={{ color: "var(--color-primary)" }}
                />
                <h3
                  className="heading text-[length:var(--text-h3)] mb-3"
                  style={{ color: "var(--color-text)" }}
                >
                  Ready to Get Started?
                </h3>
                <p
                  className="mb-6 text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Call us or visit our showroom to discuss financing options.
                  We&apos;ll help you find the right plan for your budget.
                </p>
                <a
                  href="tel:8592557639"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Call (859) 255-7639
                </a>
                <p
                  className="mt-4 text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  1431 Leestown Rd, Lexington, KY 40511
                  <br />
                  Mon-Sat 10am-6pm
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="py-[var(--section-py)]"
          style={{ background: "var(--color-surface)" }}
        >
          <div className="mx-auto max-w-[var(--narrow-max)] px-[var(--section-px)]">
            <h2
              className="heading text-[length:var(--text-h2)] mb-8 text-center"
              style={{ color: "var(--color-text)" }}
            >
              Financing FAQ
            </h2>
            <div className="space-y-6">
              {financingFAQs.map((faq) => (
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

        <FAQSchema faqs={financingFAQs} />
        <CTABlock headline="Make Your Home Legendary — Starting Today." />
      </main>
      <Footer />
    </>
  )
}
