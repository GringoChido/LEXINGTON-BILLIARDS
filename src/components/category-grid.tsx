"use client"

import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    href: "/pool-tables",
    label: "Pool Tables",
    hook: "From family rooms to tournament halls",
    image: "/images/pool-tables.jpg",
  },
  {
    href: "/hot-tubs-spas",
    label: "Hot Tubs & Spas",
    hook: "Your backyard escape, installed",
    image: "/images/hot-tubs.jpg",
  },
  {
    href: "/big-green-egg",
    label: "Big Green Egg",
    hook: "The grill that changes everything",
    image: "/images/big-green-egg.jpg",
  },
  {
    href: "/arcade-machines",
    label: "Arcade Machines",
    hook: "Classic games. Modern quality.",
    image: "/images/arcade.webp",
  },
  {
    href: "/bar-stools",
    label: "Bar Stools",
    hook: "Finish the room right",
    image: "/images/bar-stools.webp",
  },
  {
    href: "/accessories",
    label: "Accessories",
    hook: "Cues, covers, and everything in between",
    image: "/images/accessories.jpg",
  },
]

export const CategoryGrid = () => {
  return (
    <section className="py-[var(--section-padding-y)]">
      <div className="mx-auto max-w-[var(--content-max)] px-4 sm:px-8 lg:px-16">
        <h2 className="heading-section text-[length:var(--text-h2)] text-center mb-10">
          Explore the Showroom
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <div
              key={cat.href}
              className="animate-[fadeUp_0.5s_ease-out_both]"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <Link
                href={cat.href}
                className="group relative block rounded-xl overflow-hidden aspect-[4/3] bg-surface hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(245,197,24,0.15)] transition-all duration-300"
              >
                {cat.image ? (
                  <Image
                    src={cat.image}
                    alt={cat.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-surface-alt to-surface" />
                )}

                {/* Bottom gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-heading font-bold uppercase text-2xl text-text group-hover:text-accent transition-colors">
                    {cat.label}
                  </h3>
                  <p className="text-text-secondary text-sm mt-1">{cat.hook}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
