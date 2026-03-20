"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import type { BlogPost } from "@/lib/content/blog"
import {
  categoryLabels,
  categoryColors,
  categoryToProductPage,
  getPostsByCategory,
} from "@/lib/content/blog"
import { BlogCard } from "@/components/blog-card"

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr + "T00:00:00")
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export const BlogPostLayout = ({
  post,
  children,
}: {
  post: BlogPost
  children: React.ReactNode
}) => {
  const colors = categoryColors[post.category]
  const relatedPosts = getPostsByCategory(post.category).filter(
    (p) => p.slug !== post.slug
  )
  const productPage = categoryToProductPage[post.category]

  return (
    <>
      {/* Article hero */}
      <section className="relative min-h-[50vh] lg:min-h-[55vh] flex items-end overflow-hidden pt-[var(--header-height)]">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-dark/60 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent z-[1]" />

        <div className="relative z-10 mx-auto max-w-[var(--content-max)] px-[var(--section-px)] pb-12 lg:pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
          >
            <span className={`pill ${colors.pill} mb-4 inline-block`}>
              {categoryLabels[post.category]}
            </span>
            <h1
              className="heading text-[length:var(--text-h1)] mb-4"
              style={{ color: "var(--color-text-on-dark)" }}
            >
              {post.title}
            </h1>
            <div
              className="flex flex-wrap items-center gap-2 text-sm"
              style={{ color: "rgba(255,247,237,0.6)" }}
            >
              <span
                className="font-semibold"
                style={{ color: "var(--color-text-on-dark)" }}
              >
                {post.author}
              </span>
              <span>&middot;</span>
              <span>{formatDate(post.publishedAt)}</span>
              <span>&middot;</span>
              <span>{post.readingTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-[var(--section-py)]">
        <div className="mx-auto max-w-[var(--narrow-max)] px-[var(--section-px)]">
          <div className="prose">{children}</div>
        </div>
      </section>

      {/* Product page CTA */}
      <section className="py-8">
        <div className="mx-auto max-w-[var(--narrow-max)] px-[var(--section-px)] text-center">
          <Link
            href={productPage}
            className="text-base font-bold inline-flex items-center gap-2 transition-colors hover:opacity-80"
            style={{ color: "var(--color-primary)" }}
          >
            Ready to shop? Visit our {categoryLabels[post.category]} page
            &rarr;
          </Link>
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section
          className="py-[var(--section-py)]"
          style={{ background: "var(--color-cream)" }}
        >
          <div className="mx-auto max-w-[var(--content-max)] px-[var(--section-px)]">
            <h2
              className="heading text-[length:var(--text-h3)] mb-8 text-center"
              style={{ color: "var(--color-text)" }}
            >
              More on {categoryLabels[post.category]}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.slice(0, 3).map((p, i) => (
                <BlogCard key={p.slug} post={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
