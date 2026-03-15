import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BigGreenEggContent } from "./content"

export const metadata: Metadata = {
  title: "Big Green Egg | Lexington Billiards & Spas",
  description:
    "Authorized Big Green Egg dealer in Lexington, Kentucky. The ultimate ceramic kamado grill for smoking, grilling, baking, and roasting. Full line of EGGcessories in stock.",
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
