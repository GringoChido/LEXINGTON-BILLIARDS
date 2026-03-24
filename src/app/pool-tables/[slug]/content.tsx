"use client"

import { BrandDetailPage } from "@/components/brand-detail-page"
import { poolTableBrands } from "@/lib/content/brands"
import { brandContent } from "./data"

export const BrandContent = ({ slug }: { slug: string }) => {
  const data = brandContent[slug]
  const brand = poolTableBrands.find((b) => b.slug === slug)
  if (!data || !brand) return null

  return (
    <BrandDetailPage
      brandName={brand.name}
      brandSlug={brand.slug}
      brandTagline={data.tagline}
      established={data.established ?? brand.established}
      category="pool-tables"
      categoryName="Pool Tables"
      content={data.content}
    />
  )
}
