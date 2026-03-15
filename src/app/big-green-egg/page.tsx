import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BigGreenEggContent } from "./content"

export const metadata: Metadata = {
  title: "Big Green Egg | Lexington Billiards & Spas",
  description:
    "Authorized Big Green Egg distributor in Lexington, Kentucky. Several models on display, organic lump charcoal in stock, free delivery within 50 miles. Full line of EGGcessories available.",
}

export default function BigGreenEggPage() {
  return (
    <>
      <Navbar />
      <main>
        <BigGreenEggContent />
      </main>
      <Footer />
    </>
  )
}
