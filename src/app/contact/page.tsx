import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactContent } from "./content"

export const metadata: Metadata = {
  title: "Visit Our Showroom | 1431 Leestown Rd, Lexington, KY",
  description:
    "Visit Lexington Billiards & Spas at 1431 Leestown Rd, Lexington, KY 40511. Open Mon\u2013Sat 10am\u20136pm. Call (859) 255-7639 or send us a message \u2014 we\u2019d love to help you find the perfect pool table, spa, or grill.",
  openGraph: {
    title: "Visit Our Showroom | 1431 Leestown Rd, Lexington, KY",
    description:
      "Visit Lexington Billiards & Spas at 1431 Leestown Rd, Lexington, KY 40511. Open Mon\u2013Sat 10am\u20136pm. Call (859) 255-7639 or send us a message.",
    images: [
      {
        url: "https://lexingtonbilliardsandspas.com/images/pool-tables.webp",
      },
    ],
  },
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </>
  )
}
