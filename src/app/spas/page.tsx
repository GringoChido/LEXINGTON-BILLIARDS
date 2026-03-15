import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SpasContent } from "./content"

export const metadata: Metadata = {
  title: "Hot Tubs & Spas | Lexington Billiards & Spas",
  description:
    "Lexington's oldest spa dealer. Maax, Bullfrog, and Jacuzzi hot tubs with free delivery and installation, factory-authorized service, financing available. Serving Central Kentucky since 1975.",
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
