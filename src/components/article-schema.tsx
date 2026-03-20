import type { BlogPost } from "@/lib/content/blog"

const BASE_URL = "https://lexingtonbilliardsandspas.com"

export const ArticleSchema = ({ post }: { post: BlogPost }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `${BASE_URL}${post.image}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Lexington Billiards & Spas",
      url: BASE_URL,
    },
    mainEntityOfPage: `${BASE_URL}/blog/${post.slug}`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
