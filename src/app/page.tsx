import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { HeroSlider } from "@/components/hero-slider"
import { ExperienceGrid } from "@/components/experience-grid"
import { BrandStrip } from "@/components/brand-strip"
import { WhyUs } from "@/components/why-us"
import { Testimonials } from "@/components/testimonials"
import { SocialStrip } from "@/components/social-strip"
import { CTABlock } from "@/components/cta-block"
import { Footer } from "@/components/footer"
import { FAQSchema } from "@/components/faq-schema"

export const metadata: Metadata = {
  title:
    "Lexington Billiards & Spas | Pool Tables, Hot Tubs & Game Room Furniture Since 1975",
  description:
    "Make your home the best house on the block. Premium pool tables, hot tubs, Big Green Egg grills, and arcade machines. Family-owned since 1975. Free delivery & expert installation in Central Kentucky.",
  alternates: {
    canonical: "https://lexingtonbilliardsandspas.com",
  },
  openGraph: {
    title:
      "Lexington Billiards & Spas | Pool Tables, Hot Tubs & Game Room Furniture Since 1975",
    description:
      "Premium pool tables, hot tubs, Big Green Egg grills, and arcade machines. Family-owned since 1975. Free delivery & expert installation in Central Kentucky.",
    images: [
      {
        url: "https://lexingtonbilliardsandspas.com/images/pool-tables.webp",
      },
    ],
  },
}

const homeFAQs = [
  {
    question: "What does Lexington Billiards & Spas sell?",
    answer:
      "We carry premium pool tables (C.L. Bailey, Brunswick, A.E. Schmidt, Connelly, Imperial, American Heritage), hot tubs (American Whirlpool, Vita Spa), Big Green Egg grills in all sizes, custom arcade machines, and a full line of game room accessories including cues, lighting, and furniture.",
  },
  {
    question: "Do you offer free delivery in Lexington, KY?",
    answer:
      "Yes. Every pool table and hot tub we sell includes free delivery, professional installation, and setup within 50 miles of Lexington, Kentucky. We've been delivering and installing in Central Kentucky since 1975.",
  },
  {
    question: "How long has Lexington Billiards & Spas been in business?",
    answer:
      "Lexington Billiards & Spas has been family-owned and operated since 1975 — over 50 years. The Wilson family has been selling, delivering, and servicing pool tables, hot tubs, and game room furniture in Central Kentucky for three generations.",
  },
  {
    question: "Do you offer financing on pool tables and hot tubs?",
    answer:
      "Yes, we offer flexible financing options on pool tables, hot tubs, and other game room furniture. Visit our showroom or contact us at (859) 255-7639 to learn about current financing plans.",
  },
  {
    question: "Where is your showroom located?",
    answer:
      "Our 5,000+ sq ft showroom is at 1431 Leestown Rd, Lexington, KY 40511. We're open Monday through Saturday, 10am to 6pm. Come see our pool tables, hot tubs, Big Green Eggs, and arcade machines in person.",
  },
]

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />
        <ExperienceGrid />
        <BrandStrip />
        <WhyUs />
        <Testimonials />
        <SocialStrip />
        <CTABlock headline="Ready to Make Your Home Legendary?" />
      </main>
      <FAQSchema faqs={homeFAQs} />
      <Footer />
    </>
  )
}
