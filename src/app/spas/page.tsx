import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CategoryTheme } from "@/components/category-theme"
import { FAQSchema } from "@/components/faq-schema"
import { BlogLinkStrip } from "@/components/blog-link-strip"
import { SpasContent } from "./content"

export const metadata: Metadata = {
  title: "Hot Tubs & Spas in Lexington, KY | Factory-Authorized Dealer Since 1975",
  description:
    "Lexington's oldest spa dealer. American Whirlpool and Vita Spa hot tubs with free delivery and installation, factory-authorized service, financing available. Serving Central Kentucky since 1975.",
  openGraph: {
    title: "Hot Tubs & Spas in Lexington, KY | Factory-Authorized Dealer Since 1975",
    description:
      "Lexington's oldest spa dealer. American Whirlpool and Vita Spa hot tubs with free delivery and installation, factory-authorized service, financing available. Serving Central Kentucky since 1975.",
    images: [
      {
        url: "https://lexingtonbilliardsandspas.com/images/hot-tubs.webp",
      },
    ],
  },
}

const spaFAQs = [
  {
    question: "How much does it cost to run a hot tub per month?",
    answer:
      "Most modern hot tubs cost between $20 and $50 per month to operate in Kentucky, depending on the model, insulation quality, and usage. Our American Whirlpool and Vita Spa models are engineered for energy efficiency.",
  },
  {
    question: "Do you install hot tubs in Lexington?",
    answer:
      "Yes. We provide free delivery and installation within Lexington. Our team handles placement, electrical coordination, and the first fill. We've been installing spas in Central Kentucky for over 50 years.",
  },
  {
    question: "What size hot tub should I buy?",
    answer:
      "We carry 2-person intimate spas up to 8-person premium models, plus swim spas. The right size depends on how you'll use it — relaxation, family time, or fitness. Visit our showroom to sit in every model and test the jets.",
  },
  {
    question: "Do you service hot tubs?",
    answer:
      "Yes. We're a factory-authorized service center for every brand we sell. Our certified technicians handle warranty repairs, maintenance, water chemistry, and spa moving. We also stock all chemicals, filters, and replacement parts.",
  },
  {
    question:
      "What's the difference between buying a hot tub from a dealer vs. a big box store?",
    answer:
      "A dealer like Lexington Billiards & Spas provides free delivery, professional installation, water care training, factory-authorized service, and decades of expertise. Big box stores sell you a spa and leave you on your own.",
  },
]

export default function SpasPage() {
  return (
    <>
      <CategoryTheme category="spas" />
      <Navbar />
      <main>
        <SpasContent />
      </main>
      <FAQSchema faqs={spaFAQs} />
      <BlogLinkStrip category="hot tubs & spas" />
      <Footer />
    </>
  )
}
