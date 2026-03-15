import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CategoryTheme } from "@/components/category-theme"
import { SpasContent } from "./content"

export const metadata: Metadata = {
  title: "Hot Tubs & Spas | Lexington Billiards & Spas",
  description:
    "Lexington's oldest spa dealer. American Whirlpool and Vita Spa hot tubs with free delivery and installation, factory-authorized service, financing available. Serving Central Kentucky since 1975.",
}

export default function SpasPage() {
  return (
    <>
      <CategoryTheme category="spas" />
      <Navbar />
      <main>
        <SpasContent />
      </main>
      <Footer />
    </>
  )
}
