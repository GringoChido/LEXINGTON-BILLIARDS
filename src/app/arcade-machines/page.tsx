import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArcadeContent } from "./content"

export const metadata: Metadata = {
  title: "Arcade Machines | Lexington Billiards & Spas",
  description:
    "Custom built arcade cabinets — handcrafted one at a time, not kits. Full-size stand-up units and cocktail tables with 60+ classic games. Custom team colors available. Visit our Lexington showroom.",
}

export default function ArcadePage() {
  return (
    <>
      <Navbar />
      <main>
        <ArcadeContent />
      </main>
      <Footer />
    </>
  )
}
