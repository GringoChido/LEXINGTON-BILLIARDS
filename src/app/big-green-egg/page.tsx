import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CategoryTheme } from "@/components/category-theme"
import { BigGreenEggContent } from "./content"

export const metadata: Metadata = {
  title: "Big Green Egg | Lexington Billiards & Spas",
  description:
    "Authorized Big Green Egg dealer in Lexington, KY. All sizes in stock — 2XL to Mini. EGGcessories, organic lump charcoal, and expert advice. Serving Central Kentucky since 1975.",
}

export default function BigGreenEggPage() {
  return (
    <>
      <CategoryTheme category="big-green-egg" />
      <Navbar />
      <main>
        <BigGreenEggContent />
      </main>
      <Footer />
    </>
  )
}
