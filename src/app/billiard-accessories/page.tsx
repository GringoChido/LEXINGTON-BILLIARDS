import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CategoryTheme } from "@/components/category-theme"
import { FAQSchema } from "@/components/faq-schema"
import { BlogLinkStrip } from "@/components/blog-link-strip"
import { BilliardAccessoriesContent } from "./content"

export const metadata: Metadata = {
  title: "Game Room Accessories in Lexington, KY | Cues, Lighting & Furniture",
  description:
    "Pool cues, billiard lighting, bar stools, cloth, and game room furniture. Falcon Cues, Imperial, Toltec Lighting, and RAM. Visit our Lexington showroom.",
  openGraph: {
    title: "Game Room Accessories in Lexington, KY | Cues, Lighting & Furniture",
    description:
      "Pool cues, billiard lighting, bar stools, cloth, and game room furniture. Falcon Cues, Imperial, Toltec Lighting, and RAM. Visit our Lexington showroom.",
    images: [
      {
        url: "https://lexingtonbilliardsandspas.com/images/accessories.webp",
      },
    ],
  },
}

const accessoryFAQs = [
  {
    question: "What game room accessories do you carry?",
    answer:
      "We carry pool cues (Falcon Cues), billiard lighting (Toltec), bar stools, pub tables, poker tables, dartboards, wall decor, and outdoor entertainment furniture from RAM Game Room. Plus officially licensed NFL, NBA, MLB, NHL, and NCAA gear from Imperial.",
  },
  {
    question: "How do I choose the right pool cue?",
    answer:
      "Start with weight — most players prefer 19-21 oz. Then consider tip size (12-13mm for most players), shaft material, and grip style. Our Falcon Cues range from beginner to professional grade. Come to our showroom and try several.",
  },
  {
    question: "What kind of pool table light do I need?",
    answer:
      "Your light should be 2/3 the length of your table and hang 32-36 inches above the playing surface. Toltec billiard lights come in dozens of art glass styles. Visit our showroom to see them installed over actual tables.",
  },
]

export default function BilliardAccessoriesPage() {
  return (
    <>
      <CategoryTheme category="billiard-accessories" />
      <Navbar />
      <main>
        <BilliardAccessoriesContent />
      </main>
      <FAQSchema faqs={accessoryFAQs} />
      <BlogLinkStrip category="game room accessories" />
      <Footer />
    </>
  )
}
