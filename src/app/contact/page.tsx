import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactContent } from "./content"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit Lexington Billiards & Spas at 1431 Leestown Rd, Lexington, KY 40511. Open Mon–Sat 10am–6pm. Call (859) 255-7639 or send us a message — we'd love to help you find the perfect pool table, spa, or grill.",
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
