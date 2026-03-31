import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service",
  alternates: {
    canonical: "https://lexingtonbilliardsandspas.com/terms",
  },
  description:
    "Terms of service for Lexington Billiards & Spas. Delivery, installation, returns, and service policies.",
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[calc(var(--header-height)+3rem)] pb-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--narrow-max)] px-[var(--section-px)]">
          <h1
            className="heading text-[length:var(--text-h1)] mb-8"
            style={{ color: "var(--color-text)" }}
          >
            Terms of Service
          </h1>
          <div className="prose">
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              Last updated: March 30, 2026
            </p>

            <h2>Delivery & Installation</h2>
            <p>
              All pool tables and hot tubs include free delivery and
              professional installation within 50 miles of our Lexington, KY
              showroom. Deliveries beyond 50 miles may incur additional charges.
              We will schedule delivery at a mutually convenient time and
              provide advance notice of the delivery window.
            </p>

            <h2>Product Availability</h2>
            <p>
              Many items are available for immediate delivery from our
              showroom. Custom orders, special finishes, and certain models may
              require additional lead time. We will provide an estimated
              delivery timeline at the time of purchase.
            </p>

            <h2>Pricing</h2>
            <p>
              All prices are subject to change without notice. Prices listed on
              our website and in our showroom are current at the time of
              display. A signed purchase agreement locks in your price at the
              time of sale.
            </p>

            <h2>Returns & Exchanges</h2>
            <p>
              Due to the nature of our products (large, installed items), all
              sales are generally final. If you experience a manufacturing
              defect or issue with your product, contact us immediately at
              (859) 255-7639 and we will work with the manufacturer to resolve
              the issue under warranty.
            </p>

            <h2>Warranties</h2>
            <p>
              Products sold by Lexington Billiards & Spas are covered by their
              respective manufacturer warranties. As a factory-authorized dealer
              for all brands we carry, we handle warranty claims and service
              locally. Warranty terms vary by product and manufacturer.
            </p>

            <h2>Service & Repair</h2>
            <p>
              We offer professional service and repair for pool tables (re-cloth,
              re-cushion, leveling, moving) and hot tubs (maintenance, repair,
              water chemistry). Service appointments can be scheduled by
              calling (859) 255-7639. Service rates vary by type of work.
            </p>

            <h2>Financing</h2>
            <p>
              Financing is available on qualifying purchases. Terms, rates, and
              approval are subject to the financing provider&apos;s requirements.
              Ask our showroom staff for current financing options and
              eligibility.
            </p>

            <h2>Website Use</h2>
            <p>
              The content on this website is provided for general informational
              purposes. While we strive to keep information accurate and
              up-to-date, we make no warranties about the completeness or
              accuracy of information on this site.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these terms? Contact us at (859) 255-7639 or
              visit our showroom at 1431 Leestown Rd, Lexington, KY 40511.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
