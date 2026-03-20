import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CategoryTheme } from "@/components/category-theme"
import { FAQSchema } from "@/components/faq-schema"
import { BlogLinkStrip } from "@/components/blog-link-strip"
import { ArcadeContent } from "./content"

export const metadata: Metadata = {
  title: "Custom Arcade Machines in Lexington, KY | 60+ Classic Games",
  description:
    "Custom multicade arcade machines with 60+ classic games. Bourbon barrel cabinets, virtual pinball, cocktail tables. Built by hand in Kentucky. Visit our Lexington showroom.",
  openGraph: {
    title: "Custom Arcade Machines in Lexington, KY | 60+ Classic Games",
    description:
      "Custom multicade arcade machines with 60+ classic games. Bourbon barrel cabinets, virtual pinball, cocktail tables. Built by hand in Kentucky. Visit our Lexington showroom.",
    images: [
      {
        url: "https://lexingtonbilliardsandspas.com/images/arcade.webp",
      },
    ],
  },
}

const arcadeFAQs = [
  {
    question: "What arcade machines do you sell?",
    answer:
      "We sell custom-built multicade cabinets with 60+ classic games (Pac-Man, Galaga, Street Fighter, and more), virtual pinball machines, cocktail table arcades, and commercial-grade Raw Thrills cabinets. Each multicade is handcrafted one at a time.",
  },
  {
    question: "Can I get a custom arcade cabinet?",
    answer:
      "Yes. Our multicade cabinets are built by hand — not assembled from kits. You can customize the artwork, cabinet finish, and even get bourbon barrel designs that are uniquely Kentucky. Visit our showroom to see them in person.",
  },
  {
    question: "How much does an arcade machine cost?",
    answer:
      "Custom multicade cabinets start in the mid-range and go up depending on size and customization. Commercial-grade Raw Thrills machines are at the premium end. Contact us for current pricing — every build is unique.",
  },
]

export default function ArcadePage() {
  return (
    <>
      <CategoryTheme category="arcade-machines" />
      <Navbar />
      <main>
        <ArcadeContent />
      </main>
      <FAQSchema faqs={arcadeFAQs} />
      <BlogLinkStrip category="arcade machines & game rooms" />
      <Footer />
    </>
  )
}
