import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CategoryTheme } from "@/components/category-theme"
import { FAQSchema } from "@/components/faq-schema"
import { accessoryBrands } from "@/lib/content/brands"
import { AccessoryBrandContent } from "./content"

const BASE_URL = "https://lexingtonbilliardsandspas.com"

const slugs = ["ram-game-room", "falcon-cues", "imperial", "toltec"] as const
type AccessorySlug = (typeof slugs)[number]

const seoData: Record<AccessorySlug, { title: string; description: string; image: string }> = {
  "ram-game-room": {
    title: "RAM Game Room Furniture in Lexington, KY | Lexington Billiards & Spas",
    description:
      "RAM Game Room bar stools, poker tables, dartboard cabinets & outdoor furniture. 50+ styles on display in Lexington, KY. Visit our showroom since 1975.",
    image: "/images/ram-lifestyle.webp",
  },
  "falcon-cues": {
    title: "Falcon Cues in Lexington, KY | Lexington Billiards & Spas",
    description:
      "Falcon pool cues — precision crafted since 1987. Maple shafts, exotic wraps, pro-grade tips. Try before you buy in our Lexington, KY showroom. Cue repair available.",
    image: "/images/falcon-cues-lifestyle.webp",
  },
  imperial: {
    title: "Imperial Licensed Game Room Gear in Lexington, KY | Lexington Billiards & Spas",
    description:
      "Imperial officially licensed NFL, NBA, MLB, NHL & NCAA game room gear. Team felt, cues, dart cabinets. UK Wildcats in stock. Lexington, KY showroom since 1975.",
    image: "/images/accessories.webp",
  },
  toltec: {
    title: "Toltec Billiard Lighting in Lexington, KY | Lexington Billiards & Spas",
    description:
      "Toltec hand-blown art glass billiard lights and pendants. See them installed in our Lexington, KY showroom. Pool table fixtures, bar lights. Since 1975.",
    image: "/images/accessories.webp",
  },
}

const brandFaqs: Record<AccessorySlug, { question: string; answer: string }[]> = {
  "ram-game-room": [
    { question: "What kind of furniture does RAM Game Room make?", answer: "RAM makes everything for the game room and beyond — bar stools (50+ styles), pub and bistro tables, poker tables, dartboard cabinets, spectator chairs, wall decor, signage, and outdoor entertainment furniture. It's a complete line designed to work together." },
    { question: "Does RAM make outdoor furniture?", answer: "Yes. RAM offers a line of weather-resistant outdoor bar stools, pub tables, and entertainment furniture with finishes specifically engineered to withstand sun, rain, and temperature changes. Perfect for patios, decks, and outdoor bars." },
    { question: "What styles of bar stools are available?", answer: "RAM offers over 50 bar stool styles spanning traditional, contemporary, rustic, and industrial aesthetics. Materials include solid wood, metal, and combinations with commercial-grade vinyl upholstery in dozens of colors. Visit our showroom to sit in them." },
    { question: "Does RAM sell poker tables?", answer: "Yes. RAM makes dedicated poker tables with built-in drink holders, chip trays, and premium playing surfaces. Available in multiple sizes and styles to match your game room. See them in our Lexington showroom." },
    { question: "Can I see RAM furniture in the showroom?", answer: "Yes. Lexington Billiards keeps RAM Game Room furniture on display in our showroom at 1431 Leestown Road. Come see the bar stools, poker tables, and accessories in person. We're open Monday through Saturday, 10am to 6pm." },
  ],
  "falcon-cues": [
    { question: "What makes Falcon Cues different?", answer: "Falcon has been building precision cue sticks since 1987, focusing on quality materials and balanced construction. North American maple shafts, layered leather tips, stainless steel joints, and exotic wraps deliver a cue that performs as well as it looks. The range spans from affordable house cues to professional-grade competition sticks." },
    { question: "What weight cue should I buy?", answer: "Most players prefer cues between 19 and 21 ounces. Lighter cues (18-19 oz) offer more finesse and control, while heavier cues (20-21 oz) provide more power and stability. The best approach is to try several weights — visit our Lexington showroom and hit some balls with different Falcon models." },
    { question: "Does Falcon make break cues?", answer: "Yes. Falcon offers dedicated break cues and jump cues in their Specialty Series. Break cues use harder tips and stiffer shafts for maximum power on the break shot, while jump cues are shorter with phenolic tips for elevated cue ball jumps." },
    { question: "Can I try Falcon Cues in the showroom?", answer: "Absolutely. Lexington Billiards keeps Falcon cues on display and available for testing. Grab one, hit some balls on our showroom tables, and feel the difference. We're at 1431 Leestown Road, open Monday through Saturday, 10am to 6pm." },
    { question: "Does Lexington Billiards do cue repair?", answer: "Yes. We offer professional cue repair services including re-tipping, shaft straightening, wrap replacement, and ferrule repair. Whether you have a Falcon or any other brand, bring it in and we'll get it playing like new." },
  ],
  imperial: [
    { question: "What teams does Imperial carry?", answer: "Imperial holds official licenses from the NFL (all 32 teams), NBA, MLB, NHL, and the NCAA. That means virtually every major professional and college team is available. University of Kentucky Wildcats products are among our most popular sellers in Lexington." },
    { question: "Can I get UK Wildcats gear for my game room?", answer: "Absolutely. Imperial makes officially licensed University of Kentucky pool table felt, cues, dart cabinets, pub tables, and wall art. We keep popular UK items in stock and can order the full range. Visit our showroom to see what's available." },
    { question: "Does Imperial make pool table felt with my team's logo?", answer: "Yes. Imperial produces officially licensed pool table felt for all NFL, NBA, MLB, NHL, and NCAA teams. The felt features your team's official logo and colors, printed with commercial-grade processes for vibrant, long-lasting results." },
    { question: "What other team products does Imperial sell?", answer: "Beyond pool table felt, Imperial makes team-branded cue sticks, dart cabinets with team logos, pub tables and bar stools in team colors, wall art, neon signs, and decorative accessories. You can outfit an entire game room in your team's colors." },
    { question: "Can I see Imperial products in the showroom?", answer: "Yes. Lexington Billiards carries Imperial team products in our showroom at 1431 Leestown Road. We stock popular items and can order the full range for any team. Stop by Monday through Saturday, 10am to 6pm." },
  ],
  toltec: [
    { question: "What size billiard light do I need?", answer: "Your light should be approximately two-thirds the length of your table. For a 7-foot table, a 2-light fixture works well. For 8-foot and 9-foot tables, a 3-light fixture provides better coverage. Visit our showroom to see both sizes installed over actual tables." },
    { question: "How high should a pool table light hang?", answer: "The bottom of the shade should hang 32 to 36 inches above the playing surface. This provides even illumination without creating glare or obstructing player movement. Toltec fixtures include adjustable chain lengths to dial in the perfect height for your ceiling." },
    { question: "Are Toltec shades hand-blown?", answer: "Yes. Every Toltec art glass shade is hand-blown by skilled glass artisans. The hand-blown process creates unique swirls, colors, and textures in every shade — no two are exactly identical. This gives each fixture genuine one-of-a-kind character." },
    { question: "What finishes does Toltec offer?", answer: "Toltec fixtures are available in multiple hardware finishes including dark granite, brushed nickel, bronze, and chrome. These finishes pair with dozens of art glass shade styles, so you can match virtually any room decor or personal style." },
    { question: "Can I see Toltec lights installed in the showroom?", answer: "Yes. Lexington Billiards has Toltec billiard lights installed and illuminated over our showroom pool tables. Seeing them in person is the best way to appreciate the hand-blown glass quality and choose the right shade style for your room." },
  ],
}

export const generateStaticParams = () => slugs.map((slug) => ({ slug }))

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> => {
  const { slug } = await params
  const seo = seoData[slug as AccessorySlug]
  if (!seo) return {}

  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      images: [{ url: `${BASE_URL}${seo.image}` }],
    },
  }
}

export default async function AccessoryBrandPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const brand = accessoryBrands.find((b) => b.slug === slug)
  if (!brand) notFound()

  const seo = seoData[slug as AccessorySlug]
  const faqs = brandFaqs[slug as AccessorySlug] ?? []

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: brand.name,
    description: brand.description,
    brand: { "@type": "Brand", name: brand.name },
    offers: {
      "@type": "AggregateOffer",
      availability: "https://schema.org/InStore",
      areaServed: {
        "@type": "City",
        name: "Lexington",
        containedInPlace: { "@type": "State", name: "Kentucky" },
      },
      seller: {
        "@type": "LocalBusiness",
        name: "Lexington Billiards & Spas",
        address: {
          "@type": "PostalAddress",
          streetAddress: "1431 Leestown Road",
          addressLocality: "Lexington",
          addressRegion: "KY",
          postalCode: "40508",
        },
      },
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Billiard Accessories",
        item: `${BASE_URL}/billiard-accessories`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: brand.name,
        item: `${BASE_URL}/billiard-accessories/${slug}`,
      },
    ],
  }

  return (
    <>
      <CategoryTheme category="billiard-accessories" />
      <Navbar />
      <main>
        <AccessoryBrandContent slug={slug} />
      </main>
      <FAQSchema faqs={faqs} />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
