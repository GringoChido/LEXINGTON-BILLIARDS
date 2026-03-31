import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: {
    canonical: "https://lexingtonbilliardsandspas.com/privacy",
  },
  description:
    "Privacy policy for Lexington Billiards & Spas. How we collect, use, and protect your information.",
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[calc(var(--header-height)+3rem)] pb-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--narrow-max)] px-[var(--section-px)]">
          <h1
            className="heading text-[length:var(--text-h1)] mb-8"
            style={{ color: "var(--color-text)" }}
          >
            Privacy Policy
          </h1>
          <div className="prose">
            <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
              Last updated: March 30, 2026
            </p>

            <h2>Information We Collect</h2>
            <p>
              When you visit Lexington Billiards & Spas or use our website, we
              may collect the following information:
            </p>
            <ul>
              <li>
                <strong>Contact information</strong> you provide through our
                contact form (name, email, phone number, message)
              </li>
              <li>
                <strong>Usage data</strong> collected automatically (pages
                visited, time on site, browser type, device information)
              </li>
              <li>
                <strong>Location data</strong> (general geographic area based on
                IP address)
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and contact form submissions</li>
              <li>Provide quotes and product information you request</li>
              <li>Schedule deliveries and service appointments</li>
              <li>Improve our website and customer experience</li>
              <li>Send occasional updates about products and promotions (only with your consent)</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. We may share information with trusted service providers
              who assist us in operating our website and conducting our business,
              as long as those parties agree to keep this information
              confidential.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your
              personal information. Our website uses SSL encryption for secure
              data transmission. However, no method of transmission over the
              Internet is 100% secure.
            </p>

            <h2>Cookies</h2>
            <p>
              Our website may use cookies to enhance your browsing experience.
              Cookies are small files stored on your device that help us
              understand how you use our site. You can disable cookies in your
              browser settings at any time.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party sites (Google Maps,
              social media platforms). We are not responsible for the privacy
              practices of these external sites.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction or deletion of your personal information</li>
              <li>Opt out of any marketing communications</li>
            </ul>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this privacy policy, contact us at:
            </p>
            <ul>
              <li>Phone: (859) 255-7639</li>
              <li>Address: 1431 Leestown Rd, Lexington, KY 40511</li>
              <li>Email: info@lexbilliards.com</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
