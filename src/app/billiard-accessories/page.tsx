import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CategoryTheme } from "@/components/category-theme"
import { BilliardAccessoriesContent } from "./content"

export const metadata: Metadata = {
  title: "Billiard Accessories | Lexington Billiards & Spas",
  description:
    "Pool cues, billiard lighting, bar stools, cloth, and game room furniture. Falcon Cues, Imperial, Toltec Lighting, and RAM. Visit our Lexington showroom.",
}

export default function BilliardAccessoriesPage() {
  return (
    <>
      <CategoryTheme category="billiard-accessories" />
      <Navbar />
      <main>
        <BilliardAccessoriesContent />
      </main>
      <Footer />
    </>
  )
}
