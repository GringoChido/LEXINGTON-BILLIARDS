import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AccessoriesContent } from "./content"

export const metadata: Metadata = {
  title: "Accessories | Lexington Billiards & Spas",
  description:
    "Bar stools, cues, cue racks, billiard balls, chalk, cloth, and re-cloth service. Everything you need to complete your game room — all available in our Lexington showroom.",
}

export default function AccessoriesPage() {
  return (
    <>
      <Navbar />
      <main>
        <AccessoriesContent />
      </main>
      <Footer />
    </>
  )
}
