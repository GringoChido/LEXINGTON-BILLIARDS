import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CategoryTheme } from "@/components/category-theme"
import { FAQSchema } from "@/components/faq-schema"
import { BlogLinkStrip } from "@/components/blog-link-strip"
import { PoolTablesContent } from "./content"

export const metadata: Metadata = {
  title: "Pool Tables in Lexington, KY | Free Delivery & Setup Since 1975",
  alternates: {
    canonical: "https://lexingtonbilliardsandspas.com/pool-tables",
  },
  description:
    "C.L. Bailey, Brunswick, A.E. Schmidt, Connelly, Imperial, and American Heritage pool tables. Free delivery within 50 miles, professional installation, and 29 cloth color choices. Lexington's oldest billiards dealer since 1975.",
  openGraph: {
    title: "Pool Tables in Lexington, KY | Free Delivery & Setup Since 1975",
    description:
      "C.L. Bailey, Brunswick, A.E. Schmidt, Connelly, Imperial, and American Heritage pool tables. Free delivery within 50 miles, professional installation, and 29 cloth color choices. Lexington's oldest billiards dealer since 1975.",
    images: [
      {
        url: "https://lexingtonbilliardsandspas.com/images/pool-tables.webp",
      },
    ],
  },
}

const poolTableFAQs = [
  {
    question: "What size pool table do I need for my room?",
    answer:
      "For a 7-foot table, you need a minimum room size of 13x16 feet. For an 8-foot table, 13.5x17 feet. For a 9-foot table, 14x18 feet. This assumes standard 58-inch cues. Visit our Lexington showroom and we'll help you measure your space.",
  },
  {
    question: "Do you deliver pool tables in Lexington, KY?",
    answer:
      "Yes. Every pool table we sell includes free delivery, professional installation, and leveling within 50 miles of Lexington, Kentucky. We've been delivering and setting up tables in Central Kentucky since 1975.",
  },
  {
    question: "How much does a pool table cost?",
    answer:
      "Quality pool tables range from $1,500 to $8,000+ depending on brand, size, and wood species. Our C.L. Bailey tables start at the entry level, while Brunswick and Connelly tables are at the premium end. Every table includes free delivery, installation, and a full accessory kit.",
  },
  {
    question: "What brands of pool tables do you carry?",
    answer:
      "We carry C.L. Bailey, Brunswick, A.E. Schmidt, Connelly, Imperial, and American Heritage. Each brand is hand-selected for quality construction and long-term durability.",
  },
  {
    question: "Can I choose the felt color on my pool table?",
    answer:
      "Absolutely. We offer 29 premium cloth colors from Championship and Simonis. You can see and feel every color in our Lexington showroom, and we install your chosen color the day your table is delivered.",
  },
]

export default function PoolTablesPage() {
  return (
    <>
      <CategoryTheme category="pool-tables" />
      <Navbar />
      <main>
        <PoolTablesContent />
      </main>
      <FAQSchema faqs={poolTableFAQs} />
      <BlogLinkStrip category="pool tables" />
      <Footer />
    </>
  )
}
