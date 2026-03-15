import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CategoryTheme } from "@/components/category-theme"
import { ArcadeContent } from "./content"

export const metadata: Metadata = {
  title: "Arcade Machines | Lexington Billiards & Spas",
  description:
    "Custom multicade arcade machines with 60+ classic games. Bourbon barrel cabinets, virtual pinball, cocktail tables. Built by hand in Kentucky. Visit our Lexington showroom.",
}

export default function ArcadePage() {
  return (
    <>
      <CategoryTheme category="arcade-machines" />
      <Navbar />
      <main>
        <ArcadeContent />
      </main>
      <Footer />
    </>
  )
}
