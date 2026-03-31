import type { Metadata } from "next"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTABlock } from "@/components/cta-block"

export const metadata: Metadata = {
  title: "Our Brands | Pool Tables, Hot Tubs & Game Room Brands We Carry",
  alternates: {
    canonical: "https://lexingtonbilliardsandspas.com/brands",
  },
  description:
    "Every brand at Lexington Billiards & Spas is hand-selected for quality. C.L. Bailey, Brunswick, Connelly, American Whirlpool, Vita Spa, Big Green Egg, Falcon Cues, Toltec, RAM, and more.",
  openGraph: {
    title: "Our Brands | Pool Tables, Hot Tubs & Game Room Brands We Carry",
    description:
      "Every brand is hand-selected for quality. Pool tables, hot tubs, grills, arcade machines, and game room accessories from the best manufacturers.",
  },
}

const brandCategories = [
  {
    category: "Pool Tables",
    href: "/pool-tables",
    brands: [
      { name: "C.L. Bailey", slug: "/pool-tables/cl-bailey", desc: "Entry to mid-range. Solid hardwood, American made." },
      { name: "Brunswick", slug: "/pool-tables/brunswick", desc: "The gold standard since 1845. Tournament-grade." },
      { name: "A.E. Schmidt", slug: "/pool-tables/ae-schmidt", desc: "America's oldest manufacturer. Heirloom quality since 1850." },
      { name: "Connelly", slug: "/pool-tables/connelly", desc: "100% handcrafted in Tucson. Italian slate, lifetime warranty." },
      { name: "Imperial", slug: "/pool-tables/imperial", desc: "Quality at every price point. Plus licensed sports gear." },
      { name: "American Heritage", slug: "/pool-tables/american-heritage", desc: "Furniture-grade design with dining conversion options." },
    ],
  },
  {
    category: "Hot Tubs & Spas",
    href: "/spas",
    brands: [
      { name: "American Whirlpool", slug: "/spas/american-whirlpool", desc: "Premium hydrotherapy. Commercial-grade pumps, stainless frame." },
      { name: "Vita Spa", slug: "/spas/vita-spa", desc: "Exceptional value. Quality hydrotherapy at accessible prices." },
    ],
  },
  {
    category: "Outdoor Cooking",
    href: "/big-green-egg",
    brands: [
      { name: "Big Green Egg", slug: "/big-green-egg", desc: "The ultimate outdoor cooker. Grill, smoke, bake, roast, sear. All sizes in stock." },
    ],
  },
  {
    category: "Game Room Accessories",
    href: "/billiard-accessories",
    brands: [
      { name: "Falcon Cues", slug: "/billiard-accessories/falcon-cues", desc: "Precision pool cues since 1987. Maple shafts, pro-grade tips." },
      { name: "Toltec", slug: "/billiard-accessories/toltec", desc: "Hand-blown art glass billiard lighting and pendants." },
      { name: "RAM Game Room", slug: "/billiard-accessories/ram-game-room", desc: "Bar stools, poker tables, dartboards, outdoor furniture." },
      { name: "Imperial", slug: "/billiard-accessories/imperial", desc: "Officially licensed NFL/NBA/MLB/NHL/NCAA game room gear." },
    ],
  },
  {
    category: "Arcade Machines",
    href: "/arcade-machines",
    brands: [
      { name: "Custom Multicade", slug: "/arcade-machines", desc: "Hand-built cabinets with 60+ classic games. Bourbon barrel designs." },
      { name: "Raw Thrills", slug: "/arcade-machines", desc: "Commercial-grade arcade machines for home and business." },
    ],
  },
]

export default function BrandsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section
          className="pt-[calc(var(--header-height)+3rem)] pb-12 lg:pb-16"
          style={{ background: "var(--color-dark)" }}
        >
          <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
            <p className="section-label mb-4">Hand-Selected Since 1975</p>
            <h1
              className="heading text-[length:var(--text-h1)] mb-4"
              style={{ color: "var(--color-text-on-dark)" }}
            >
              The Brands We Carry
            </h1>
            <p
              className="text-base lg:text-lg max-w-[52ch] leading-relaxed"
              style={{ color: "rgba(255,247,237,0.6)" }}
            >
              Every brand on our showroom floor is one we&apos;d put in our own
              home. We don&apos;t carry everything — just the best.
            </p>
          </div>
        </section>

        <section className="py-[var(--section-py)]">
          <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
            <div className="space-y-16">
              {brandCategories.map((cat) => (
                <div key={cat.category}>
                  <div className="flex items-center gap-4 mb-6">
                    <h2
                      className="heading text-[length:var(--text-h2)]"
                      style={{ color: "var(--color-text)" }}
                    >
                      {cat.category}
                    </h2>
                    <Link
                      href={cat.href}
                      className="text-sm font-medium shrink-0"
                      style={{ color: "var(--color-primary)" }}
                    >
                      View all &rarr;
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cat.brands.map((brand) => (
                      <Link
                        key={brand.name}
                        href={brand.slug}
                        className="rounded-xl border p-6 transition-colors hover:border-[var(--color-primary)]"
                        style={{ borderColor: "var(--color-border)" }}
                      >
                        <h3
                          className="font-display font-bold text-base mb-1"
                          style={{ color: "var(--color-text)" }}
                        >
                          {brand.name}
                        </h3>
                        <p
                          className="text-sm"
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          {brand.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABlock headline="Ready to See Them in Person?" />
      </main>
      <Footer />
    </>
  )
}
