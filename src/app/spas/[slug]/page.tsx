import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CategoryTheme } from "@/components/category-theme"
import { FAQSchema } from "@/components/faq-schema"
import { spaBrands } from "@/lib/content/brands"
import { SpaBrandContent } from "./content"

const BASE_URL = "https://lexingtonbilliardsandspas.com"

const seoData: Record<string, { title: string; description: string }> = {
  "american-whirlpool": {
    title: "American Whirlpool Hot Tubs in Lexington, KY | Lexington Billiards & Spas",
    description: "American Whirlpool hot tubs with free delivery & installation in Lexington, KY. Advanced hydrotherapy, energy-efficient. Factory-authorized dealer since 1975.",
  },
  "vita-spa": {
    title: "Vita Spa Hot Tubs in Lexington, KY | Lexington Billiards & Spas",
    description: "Vita Spa hot tubs \u2014 premium hydrotherapy at exceptional value. Free delivery & installation in Lexington, KY. Factory-authorized dealer, service since 1975.",
  },
}

const faqData: Record<string, { question: string; answer: string }[]> = {
  "american-whirlpool": [
    { question: "How energy-efficient are American Whirlpool spas?", answer: "Very efficient. American Whirlpool uses full-foam insulation and tight-fitting covers to minimize heat loss. Most owners report monthly operating costs between $20 and $40 depending on usage and climate. The stainless steel frame and efficient pumps are engineered to reduce energy consumption without sacrificing jet power." },
    { question: "What sizes does American Whirlpool offer?", answer: "American Whirlpool offers models ranging from intimate 2-person spas to full-size 8+ person models, plus swim spas for fitness swimming. Visit our Lexington showroom to sit in every model \u2014 our spas are plumbed, powered, and ready for you to test." },
    { question: "What is the warranty on American Whirlpool?", answer: "American Whirlpool provides a comprehensive manufacturer warranty covering the shell, structure, plumbing, and components. As a factory-authorized dealer, Lexington Billiards handles all warranty service locally \u2014 no waiting for out-of-state technicians." },
    { question: "Do American Whirlpool spas have good jets?", answer: "Yes. American Whirlpool is known for their advanced hydrotherapy jet systems. Multiple jet types target different muscle groups, and the commercial-grade pumps deliver consistent, powerful pressure. The 400 and 600 Series models offer the most advanced jet configurations." },
    { question: "Are American Whirlpool spas easy to maintain?", answer: "Yes. The ozone water purification system reduces the chemicals needed to keep your water clean. Digital topside controls make temperature and jet management simple. And Lexington Billiards provides water care training with every purchase \u2014 we teach you exactly how to maintain your spa." },
  ],
  "vita-spa": [
    { question: "Is Vita Spa a good brand?", answer: "Yes. Vita Spa has built a strong reputation for delivering quality hydrotherapy at a competitive price. Their innovative jet designs and energy-efficient engineering rival spas at significantly higher price points. At Lexington Billiards, we stand behind every Vita Spa with factory-authorized service and lifetime support." },
    { question: "How does Vita Spa compare to American Whirlpool?", answer: "Both are excellent brands. American Whirlpool tends toward the premium end with more advanced features and commercial-grade construction. Vita Spa delivers exceptional value \u2014 similar hydrotherapy quality at a more accessible price. Visit our showroom to compare them side by side." },
    { question: "What sizes does Vita Spa come in?", answer: "Vita Spa offers models from compact 2-3 person spas in the 100 Series to full-size 7-8 person luxury models in the 700 Series. Our Lexington showroom has multiple models plumbed and running so you can test the jets and find your perfect fit." },
    { question: "Are Vita Spa hot tubs energy efficient?", answer: "Yes. Vita Spa uses polyurethane foam insulation, tight-fitting covers, and efficient circulation pumps to minimize energy consumption. Most owners report monthly operating costs comparable to other premium spa brands \u2014 typically $20 to $45 per month." },
    { question: "What warranty does Vita Spa offer?", answer: "Vita Spa provides a comprehensive manufacturer warranty covering the shell, structure, plumbing, and electrical components. Lexington Billiards is a factory-authorized service center, so all warranty work is handled locally by our trained technicians." },
  ],
}

export const generateStaticParams = () =>
  spaBrands.map((brand) => ({ slug: brand.slug }))

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> => {
  const { slug } = await params
  const seo = seoData[slug]
  if (!seo) return {}

  const brand = spaBrands.find((b) => b.slug === slug)

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `${BASE_URL}/spas/${slug}`,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `${BASE_URL}/spas/${slug}`,
      images: brand?.image
        ? [{ url: `${BASE_URL}${brand.image}` }]
        : undefined,
    },
  }
}

export default async function SpaBrandPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const brand = spaBrands.find((b) => b.slug === slug)
  const seo = seoData[slug]
  const faqs = faqData[slug]

  if (!brand || !seo) notFound()

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${brand.name} Hot Tubs`,
    description: seo.description,
    brand: { "@type": "Brand", name: brand.name },
    image: brand.image ? `${BASE_URL}${brand.image}` : undefined,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "LocalBusiness",
        name: "Lexington Billiards & Spas",
        address: {
          "@type": "PostalAddress",
          streetAddress: "163 Lexington Green Circle",
          addressLocality: "Lexington",
          addressRegion: "KY",
          postalCode: "40503",
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
        name: "Hot Tubs & Spas",
        item: `${BASE_URL}/spas`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: brand.name,
        item: `${BASE_URL}/spas/${slug}`,
      },
    ],
  }

  return (
    <>
      <CategoryTheme category="spas" />
      <Navbar />
      <main>
        <SpaBrandContent slug={slug} />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqs && <FAQSchema faqs={faqs} />}
      <Footer />
    </>
  )
}
