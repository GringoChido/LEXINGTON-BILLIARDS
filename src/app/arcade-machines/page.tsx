import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CategoryTheme } from "@/components/category-theme"
import { FAQSchema } from "@/components/faq-schema"
import { BlogLinkStrip } from "@/components/blog-link-strip"
import { ArcadeContent } from "./content"

export const metadata: Metadata = {
  title: "Custom Arcade Machines in Lexington, KY | 60+ Classic Games",
  alternates: {
    canonical: "https://lexingtonbilliardsandspas.com/arcade-machines",
  },
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
  {
    question: "What is a bourbon barrel arcade machine?",
    answer:
      "A bourbon barrel arcade is a custom multicade cabinet built from authentic Kentucky bourbon barrels. These are uniquely Kentucky — you won't find them anywhere else. The barrel staves become the cabinet, giving each machine a one-of-a-kind look that's perfect for game rooms, man caves, and bars.",
  },
  {
    question: "Do you sell virtual pinball machines?",
    answer:
      "Yes. Our virtual pinball machines feature high-definition screens that simulate dozens of classic pinball tables. Solenoid feedback, DMD scoring displays, and authentic flipper buttons create a realistic pinball experience. Visit our showroom to play one.",
  },
  {
    question: "Can I see the arcade machines before buying?",
    answer:
      "Absolutely. Our Lexington showroom at 1431 Leestown Rd has arcade machines powered up and ready to play. Come in Monday through Saturday, 10am to 6pm, and try them for yourself.",
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
