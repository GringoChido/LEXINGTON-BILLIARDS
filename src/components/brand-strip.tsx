"use client"

import Image from "next/image"
import { brandLogos, allBrands } from "@/lib/content/brands"

export const BrandStrip = () => {
  const brandsWithLogos = allBrands
    .filter((b) => brandLogos[b.slug])
    .map((b) => ({ name: b.name, logo: brandLogos[b.slug] }))
  const doubled = [...brandsWithLogos, ...brandsWithLogos]

  return (
    <section
      className="py-14 overflow-hidden"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="max-w-[var(--content-max)] mx-auto px-[var(--section-px)] mb-10">
        <p className="text-center heading text-[length:var(--text-h4)] text-[var(--color-text)]">
          Brands We&apos;re Proud to Carry
        </p>
      </div>

      <div className="relative">
        {/* Edge masks */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--color-surface), transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--color-surface), transparent)" }}
        />

        {/* Marquee */}
        <div className="flex overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-0">
            {doubled.map((brand, i) => (
              <div
                key={i}
                className="flex items-center shrink-0 px-8 sm:px-12"
              >
                <div className="relative h-10 sm:h-12 w-28 sm:w-36">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                    sizes="144px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
