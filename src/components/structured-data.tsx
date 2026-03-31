import { company } from "@/lib/content/company"

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  description:
    "Premium pool tables, hot tubs, Big Green Egg grills, and arcade machines. Family-owned since 1975. Free delivery & expert installation in Central Kentucky.",
  url: "https://lexingtonbilliardsandspas.com",
  telephone: company.phone.display,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    addressRegion: company.address.state,
    postalCode: company.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.0606,
    longitude: -84.5283,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "18:00",
    },
  ],
  foundingDate: "1975",
  founder: {
    "@type": "Person",
    name: company.owner,
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 38.0606,
      longitude: -84.5283,
    },
    geoRadius: "80467",
  },
  sameAs: [
    company.social.facebook,
    company.social.instagram,
  ],
  priceRange: "$$",
  image: "https://lexingtonbilliardsandspas.com/images/pool-tables.webp",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Products & Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Pool Tables" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Hot Tubs & Spas" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Big Green Egg Grills" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Arcade Machines" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Game Room Accessories" } },
    ],
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.name,
  url: "https://lexingtonbilliardsandspas.com",
  logo: "https://lexingtonbilliardsandspas.com/images/logo.webp",
  description:
    "Family-owned pool table, hot tub, and game room dealer in Lexington, Kentucky since 1975.",
  foundingDate: "1975",
  founder: {
    "@type": "Person",
    name: company.owner,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    addressRegion: company.address.state,
    postalCode: company.address.zip,
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: company.phone.display,
    contactType: "sales",
    availableLanguage: ["English"],
  },
  sameAs: [
    company.social.facebook,
    company.social.instagram,
  ],
}

export const StructuredData = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  </>
)
