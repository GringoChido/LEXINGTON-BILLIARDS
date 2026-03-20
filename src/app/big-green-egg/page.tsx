import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CategoryTheme } from "@/components/category-theme"
import { FAQSchema } from "@/components/faq-schema"
import { BlogLinkStrip } from "@/components/blog-link-strip"
import { BigGreenEggContent } from "./content"

export const metadata: Metadata = {
  title: "Big Green Egg Dealer in Lexington, KY | All Sizes In Stock",
  description:
    "Authorized Big Green Egg dealer in Lexington, KY. All sizes in stock — 2XL to Mini. EGGcessories, organic lump charcoal, and expert advice. Serving Central Kentucky since 1975.",
  openGraph: {
    title: "Big Green Egg Dealer in Lexington, KY | All Sizes In Stock",
    description:
      "Authorized Big Green Egg dealer in Lexington, KY. All sizes in stock — 2XL to Mini. EGGcessories, organic lump charcoal, and expert advice. Serving Central Kentucky since 1975.",
    images: [
      {
        url: "https://lexingtonbilliardsandspas.com/images/big-green-egg.webp",
      },
    ],
  },
}

const bgeFAQs = [
  {
    question: "What size Big Green Egg should I buy?",
    answer:
      "The Large is the most popular and versatile size — it handles everything from weeknight dinners to full briskets. The XL is ideal for entertaining, and the 2XL is for serious outdoor cooking enthusiasts. We stock all sizes in our Lexington showroom.",
  },
  {
    question: "What can you cook on a Big Green Egg?",
    answer:
      "Everything. The Big Green Egg grills, smokes, bakes, roasts, and sears. People cook pizza, brisket, bread, turkey, steaks, vegetables, and desserts on them. It's not a grill — it's a complete outdoor kitchen.",
  },
  {
    question: "How long does a Big Green Egg last?",
    answer:
      "A Big Green Egg is built from NASA-grade ceramics and is designed to last a lifetime. Many Eggs are still in use after 20+ years. It comes with a limited lifetime warranty on the ceramics.",
  },
  {
    question: "Where can I buy a Big Green Egg in Lexington, KY?",
    answer:
      "Lexington Billiards & Spas is an authorized Big Green Egg dealer at 1431 Leestown Rd, Lexington, KY. We carry all sizes, EGGcessories, and organic lump charcoal. Open Mon-Sat 10am-6pm.",
  },
]

export default function BigGreenEggPage() {
  return (
    <>
      <CategoryTheme category="big-green-egg" />
      <Navbar />
      <main>
        <BigGreenEggContent />
      </main>
      <FAQSchema faqs={bgeFAQs} />
      <BlogLinkStrip category="Big Green Egg" />
      <Footer />
    </>
  )
}
