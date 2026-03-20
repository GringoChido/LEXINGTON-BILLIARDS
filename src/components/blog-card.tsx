"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import type { BlogPost } from "@/lib/content/blog"
import { categoryLabels, categoryColors } from "@/lib/content/blog"

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr + "T00:00:00")
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export const BlogCard = ({
  post,
  index = 0,
}: {
  post: BlogPost
  index?: number
}) => {
  const colors = categoryColors[post.category]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="group block rounded-xl overflow-hidden border card-hover"
        style={{
          borderColor: "var(--color-border)",
          background: "var(--color-background)",
        }}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute top-4 left-4 z-10">
            <span className={`pill ${colors.pill}`}>
              {categoryLabels[post.category]}
            </span>
          </div>
        </div>

        <div className="p-5 lg:p-6">
          <h3
            className="heading text-[length:var(--text-h4)] mb-2 line-clamp-2"
            style={{ color: "var(--color-text)" }}
          >
            {post.title}
          </h3>
          <p
            className="text-sm leading-relaxed mb-4 line-clamp-2"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {post.description}
          </p>
          <div
            className="flex items-center gap-2 text-xs"
            style={{ color: "var(--color-text-muted)" }}
          >
            <span className="font-semibold" style={{ color: "var(--color-text)" }}>
              {post.author}
            </span>
            <span>&middot;</span>
            <span>{formatDate(post.publishedAt)}</span>
            <span>&middot;</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
