"use client"

import Image from "next/image"

const brands = [
  { name: "C.L. Bailey", logo: "/images/brands/cl-bailey.png" },
  { name: "Brunswick", logo: "/images/brands/brunswick.svg" },
  { name: "Olhausen", logo: "/images/brands/olhausen.svg" },
  { name: "Imperial", logo: "/images/brands/imperial.png" },
  { name: "American Heritage", logo: "/images/brands/american-heritage.png" },
  { name: "Maax", logo: "/images/brands/maax.svg" },
  { name: "Bullfrog Spas", logo: "/images/brands/bullfrog.svg" },
  { name: "Jacuzzi", logo: "/images/brands/jacuzzi.jpg" },
  { name: "Big Green Egg", logo: "/images/brands/big-green-egg.svg" },
]

export const BrandStrip = () => {
  const doubled = [...brands, ...brands]

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
