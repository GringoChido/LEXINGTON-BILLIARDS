import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CategoryTheme } from "@/components/category-theme"
import { FAQSchema } from "@/components/faq-schema"
import { poolTableBrands } from "@/lib/content/brands"
import { BrandContent } from "./content"
import { brandContent } from "./data"

const seoData: Record<string, { title: string; description: string }> = {
  "cl-bailey": {
    title: "C.L. Bailey Pool Tables in Lexington, KY | Lexington Billiards & Spas",
    description: "C.L. Bailey pool tables with free delivery & setup in Lexington, KY. Solid hardwood, slate playing surface, 29 cloth colors. Central Kentucky\u2019s trusted dealer since 1975.",
  },
  brunswick: {
    title: "Brunswick Pool Tables in Lexington, KY | Lexington Billiards & Spas",
    description: "Brunswick pool tables \u2014 the gold standard since 1845. Free delivery & setup in Lexington, KY. Tournament-grade slate, SuperSpeed cushions. Authorized dealer since 1975.",
  },
  "ae-schmidt": {
    title: "A.E. Schmidt Pool Tables in Lexington, KY | Lexington Billiards & Spas",
    description: "A.E. Schmidt pool tables \u2014 America\u2019s oldest manufacturer since 1850. Heirloom-quality hardwoods, custom options. Free delivery in Lexington, KY. Authorized dealer.",
  },
  connelly: {
    title: "Connelly Pool Tables in Lexington, KY | Lexington Billiards & Spas",
    description: "Connelly pool tables \u2014 100% handcrafted in Tucson, AZ. Italian slate, hardwood construction, lifetime warranty. Free delivery in Lexington, KY. Dealer since 1975.",
  },
  imperial: {
    title: "Imperial Pool Tables in Lexington, KY | Lexington Billiards & Spas",
    description: "Imperial pool tables, shuffleboard, and licensed NFL/NBA/MLB/NHL/NCAA game room gear. Free delivery in Lexington, KY. Quality at every price point since 1975.",
  },
  "american-heritage": {
    title: "American Heritage Pool Tables in Lexington, KY | Lexington Billiards & Spas",
    description: "American Heritage pool tables with dining conversion options. Furniture-grade design, slate surface. Free delivery in Lexington, KY. Showroom open since 1975.",
  },
}

export const generateStaticParams = () =>
  poolTableBrands.map((brand) => ({ slug: brand.slug }))

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> => {
  const { slug } = await params
  const seo = seoData[slug]
  const data = brandContent[slug]
  if (!seo || !data) return {}

  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      images: [{ url: `https://lexingtonbilliardsandspas.com${data.content.heroImage}` }],
    },
  }
}

const PoolTableBrandPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const { slug } = await params
  const brand = poolTableBrands.find((b) => b.slug === slug)
  const data = brandContent[slug]
  if (!brand || !data) return null

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${brand.name} Pool Tables`,
    description: data.content.story,
    brand: {
      "@type": "Brand",
      name: brand.name,
    },
    image: `https://lexingtonbilliardsandspas.com${data.content.heroImage}`,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "LocalBusiness",
        name: "Lexington Billiards & Spas",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lexington",
          addressRegion: "KY",
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
        item: "https://lexingtonbilliardsandspas.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Pool Tables",
        item: "https://lexingtonbilliardsandspas.com/pool-tables",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: brand.name,
        item: `https://lexingtonbilliardsandspas.com/pool-tables/${slug}`,
      },
    ],
  }

  return (
    <>
      <CategoryTheme category="pool-tables" />
      <Navbar />
      <main>
        <BrandContent slug={slug} />
      </main>
      <FAQSchema faqs={data.content.faqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Footer />
    </>
  )
}

export default PoolTableBrandPage
