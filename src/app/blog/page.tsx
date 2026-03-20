import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTABlock } from "@/components/cta-block"
import { BlogListing } from "@/components/blog-listing"

export const metadata: Metadata = {
  title: "Blog | Pool Tables, Hot Tubs & Game Room Guides",
  description:
    "Expert guides, buying advice, and tips from Lexington Billiards & Spas. 50 years of knowledge about pool tables, hot tubs, Big Green Egg, and game room design.",
  openGraph: {
    title: "Blog | Pool Tables, Hot Tubs & Game Room Guides",
    description:
      "Expert guides, buying advice, and tips from Lexington Billiards & Spas.",
    images: [
      {
        url: "https://lexingtonbilliardsandspas.com/images/pool-tables.webp",
      },
    ],
  },
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          className="pt-[calc(var(--header-height)+3rem)] pb-12 lg:pb-16"
          style={{ background: "var(--color-dark)" }}
        >
          <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
            <p className="section-label mb-4">From the Showroom Floor</p>
            <h1
              className="heading text-[length:var(--text-h1)] mb-4"
              style={{ color: "var(--color-text-on-dark)" }}
            >
              The Lexington Billiards Blog
            </h1>
            <p
              className="text-base lg:text-lg max-w-[52ch] leading-relaxed"
              style={{ color: "rgba(255,247,237,0.6)" }}
            >
              Buying guides, maintenance tips, and game room ideas — backed
              by 50 years of experience.
            </p>
          </div>
        </section>

        <BlogListing />

        <CTABlock headline="Have a Question? We Have 50 Years of Answers." />
      </main>
      <Footer />
    </>
  )
}
