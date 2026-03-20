import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutContent } from "./content"

export const metadata: Metadata = {
  title: "About Us | Family-Owned Since 1975 | Lexington Billiards & Spas",
  description:
    "Family-owned since 1975. The Wilson family has been selling, delivering, and servicing pool tables, hot tubs, and game room furniture in Central Kentucky for over 50 years.",
  openGraph: {
    title: "About Us | Family-Owned Since 1975 | Lexington Billiards & Spas",
    description:
      "Family-owned since 1975. The Wilson family has been selling, delivering, and servicing pool tables, hot tubs, and game room furniture in Central Kentucky for over 50 years.",
    images: [
      {
        url: "https://lexingtonbilliardsandspas.com/images/pool-tables.webp",
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  )
}
