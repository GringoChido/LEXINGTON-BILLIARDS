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
  sameAs: [company.social.facebook],
  priceRange: "$$",
  image: "https://lexingtonbilliardsandspas.com/images/pool-tables.webp",
}

export const StructuredData = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
  />
)
