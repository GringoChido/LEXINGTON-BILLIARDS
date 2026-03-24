"use client"

import { BrandDetailPage } from "@/components/brand-detail-page"
import { spaBrands } from "@/lib/content/brands"
import { brandContent } from "./data"

export const SpaBrandContent = ({ slug }: { slug: string }) => {
  const brand = spaBrands.find((b) => b.slug === slug)
  const data = brandContent[slug]

  if (!brand || !data) return null

  return (
    <BrandDetailPage
      brandName={brand.name}
      brandSlug={brand.slug}
      brandTagline={brand.tagline}
      established={brand.established}
      category="spas"
      categoryName={data.categoryName}
      content={data.content}
    />
  )
}
