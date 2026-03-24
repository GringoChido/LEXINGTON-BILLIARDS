"use client"

import { BrandDetailPage } from "@/components/brand-detail-page"
import { accessoryBrands } from "@/lib/content/brands"
import { brandContent } from "./data"

export const AccessoryBrandContent = ({ slug }: { slug: string }) => {
  const brand = accessoryBrands.find((b) => b.slug === slug)
  const data = brandContent[slug]
  if (!brand || !data) return null

  return (
    <BrandDetailPage
      brandName={brand.name}
      brandSlug={brand.slug}
      brandTagline={brand.tagline}
      established={brand.established}
      category="billiard-accessories"
      categoryName={data.categoryName}
      content={data.content}
    />
  )
}
