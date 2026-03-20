"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { BlogCard } from "@/components/blog-card"
import {
  blogPosts,
  categoryLabels,
  categoryColors,
  categoryToProductPage,
  type BlogCategory,
} from "@/lib/content/blog"

const allCategories: BlogCategory[] = [
  "pool-tables",
  "hot-tubs",
  "big-green-egg",
  "game-room",
]

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr + "T00:00:00")
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export const BlogListing = () => {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | null>(
    null
  )

  const filtered = activeCategory
    ? blogPosts.filter((p) => p.category === activeCategory)
    : blogPosts

  const featured = filtered.find((p) => p.featured)
  const rest = filtered.filter((p) => p !== featured)

  return (
    <>
      {/* Category filter bar */}
      <div
        className="sticky top-[var(--header-height)] z-30 border-b"
        style={{
          background: "var(--color-background)",
          borderColor: "var(--color-border)",
        }}
      >
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)] py-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
            <button
              onClick={() => setActiveCategory(null)}
              className={`pill shrink-0 cursor-pointer transition-all ${
                activeCategory === null ? "pill-orange" : ""
              }`}
              style={
                activeCategory === null
                  ? undefined
                  : {
                      background: "transparent",
                      color: "var(--color-text-muted)",
                      border: "1px solid var(--color-border)",
                    }
              }
            >
              All
            </button>
            {allCategories.map((cat) => {
              const isActive = activeCategory === cat
              const colors = categoryColors[cat]
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`pill shrink-0 cursor-pointer transition-all ${
                    isActive ? colors.pill : ""
                  }`}
                  style={
                    isActive
                      ? undefined
                      : {
                          background: "transparent",
                          color: "var(--color-text-muted)",
                          border: "1px solid var(--color-border)",
                        }
                  }
                >
                  {categoryLabels[cat]}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Posts */}
      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p
                className="heading text-[length:var(--text-h3)] mb-4"
                style={{ color: "var(--color-text)" }}
              >
                More{" "}
                {activeCategory
                  ? categoryLabels[activeCategory]
                  : ""}{" "}
                content coming soon.
              </p>
              <p
                className="text-base mb-6"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Check back or visit our{" "}
                <Link
                  href={
                    activeCategory
                      ? categoryToProductPage[activeCategory]
                      : "/"
                  }
                  className="underline"
                  style={{ color: "var(--color-primary)" }}
                >
                  {activeCategory
                    ? categoryLabels[activeCategory]
                    : "home"}{" "}
                  page
                </Link>
                .
              </p>
            </div>
          ) : (
            <>
              {/* Featured post */}
              {featured && (
                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                  className="mb-16"
                >
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="group block rounded-2xl border overflow-hidden card-hover"
                    style={{
                      borderColor: "var(--color-border)",
                      background: "var(--color-cream)",
                    }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[400px] overflow-hidden">
                        <Image
                          src={featured.image}
                          alt={featured.imageAlt}
                          fill
                          priority
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <span
                          className={`pill ${categoryColors[featured.category].pill} self-start mb-4`}
                        >
                          {categoryLabels[featured.category]}
                        </span>
                        <h2
                          className="heading text-[length:var(--text-h3)] mb-3"
                          style={{ color: "var(--color-text)" }}
                        >
                          {featured.title}
                        </h2>
                        <p
                          className="text-base leading-relaxed mb-6 max-w-[50ch]"
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          {featured.description}
                        </p>
                        <div
                          className="flex items-center gap-2 text-sm"
                          style={{ color: "var(--color-text-muted)" }}
                        >
                          <span
                            className="font-semibold"
                            style={{ color: "var(--color-text)" }}
                          >
                            {featured.author}
                          </span>
                          <span>&middot;</span>
                          <span>{formatDate(featured.publishedAt)}</span>
                          <span>&middot;</span>
                          <span>{featured.readingTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}

              {/* Post grid */}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map((post, i) => (
                    <BlogCard key={post.slug} post={post} index={i} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  )
}
