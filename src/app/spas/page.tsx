import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SpasContent } from "./content"

export const metadata: Metadata = {
  title: "Hot Tubs & Spas | Lexington Billiards & Spas",
  description:
    "Lexington's oldest spa dealer since 1975. Maax, Bullfrog, and Jacuzzi hot tubs with free delivery, professional installation, and factory-authorized service throughout Central Kentucky.",
}

export default function SpasPage() {
  return (
    <>
      <Navbar />
      <main>
        <SpasContent />
      </main>
      <Footer />
    </>
  )
}
