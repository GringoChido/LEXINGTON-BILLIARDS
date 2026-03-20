import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTABlock } from "@/components/cta-block"
import { ArticleSchema } from "@/components/article-schema"
import { BlogPostLayout } from "@/components/blog-post-layout"
import { blogPosts, getPostBySlug } from "@/lib/content/blog"

const BASE_URL = "https://lexingtonbilliardsandspas.com"

// MDX content imports keyed by slug
const mdxContent: Record<string, React.ComponentType> = {
  "how-much-does-a-pool-table-cost":
    require("@/../content/blog/how-much-does-a-pool-table-cost.mdx").default,
  "how-to-choose-pool-table-size":
    require("@/../content/blog/how-to-choose-pool-table-size.mdx").default,
  "pool-table-felt-colors":
    require("@/../content/blog/pool-table-felt-colors.mdx").default,
  "slate-vs-non-slate-pool-tables":
    require("@/../content/blog/slate-vs-non-slate-pool-tables.mdx").default,
  "how-to-move-a-pool-table":
    require("@/../content/blog/how-to-move-a-pool-table.mdx").default,
  "pool-table-maintenance-recloth-recushion":
    require("@/../content/blog/pool-table-maintenance-recloth-recushion.mdx").default,
  "cl-bailey-vs-brunswick-vs-olhausen":
    require("@/../content/blog/cl-bailey-vs-brunswick-vs-olhausen.mdx").default,
  "pool-table-buying-guide-kentucky":
    require("@/../content/blog/pool-table-buying-guide-kentucky.mdx").default,
  "pool-table-room-layouts-dimensions":
    require("@/../content/blog/pool-table-room-layouts-dimensions.mdx").default,
  "7-foot-vs-8-foot-vs-9-foot-pool-tables":
    require("@/../content/blog/7-foot-vs-8-foot-vs-9-foot-pool-tables.mdx").default,
  "how-to-clean-pool-table-felt":
    require("@/../content/blog/how-to-clean-pool-table-felt.mdx").default,
  "5-pool-games-beyond-8-ball":
    require("@/../content/blog/5-pool-games-beyond-8-ball.mdx").default,
  "how-to-level-a-pool-table":
    require("@/../content/blog/how-to-level-a-pool-table.mdx").default,
  "championship-vs-simonis-cloth":
    require("@/../content/blog/championship-vs-simonis-cloth.mdx").default,
  // ── Pillar 2: Hot Tubs & Spas ──
  "how-much-does-a-hot-tub-cost":
    require("@/../content/blog/how-much-does-a-hot-tub-cost.mdx").default,
  "hot-tub-sizes-guide":
    require("@/../content/blog/hot-tub-sizes-guide.mdx").default,
  "american-whirlpool-vs-vita-spa":
    require("@/../content/blog/american-whirlpool-vs-vita-spa.mdx").default,
  "hot-tub-buying-guide-kentucky":
    require("@/../content/blog/hot-tub-buying-guide-kentucky.mdx").default,
  "hot-tub-electrical-requirements":
    require("@/../content/blog/hot-tub-electrical-requirements.mdx").default,
  "dealer-vs-big-box-hot-tubs":
    require("@/../content/blog/dealer-vs-big-box-hot-tubs.mdx").default,
  "hot-tub-vs-swim-spa":
    require("@/../content/blog/hot-tub-vs-swim-spa.mdx").default,
  "hot-tub-running-costs":
    require("@/../content/blog/hot-tub-running-costs.mdx").default,
  "best-hot-tub-features":
    require("@/../content/blog/best-hot-tub-features.mdx").default,
  "indoor-vs-outdoor-hot-tubs":
    require("@/../content/blog/indoor-vs-outdoor-hot-tubs.mdx").default,
  "how-to-winterize-hot-tub-kentucky":
    require("@/../content/blog/how-to-winterize-hot-tub-kentucky.mdx").default,
  "hot-tub-troubleshooting":
    require("@/../content/blog/hot-tub-troubleshooting.mdx").default,
  "when-to-replace-hot-tub-cover":
    require("@/../content/blog/when-to-replace-hot-tub-cover.mdx").default,
  "monthly-hot-tub-maintenance-checklist":
    require("@/../content/blog/monthly-hot-tub-maintenance-checklist.mdx").default,
}

type Params = Promise<{ slug: string }>

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [{ url: `${BASE_URL}${post.image}` }],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Params
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const Content = mdxContent[slug]
  if (!Content) notFound()

  return (
    <>
      <Navbar />
      <main>
        <BlogPostLayout post={post}>
          <Content />
        </BlogPostLayout>
        <ArticleSchema post={post} />
        <CTABlock headline="Ready to Make Your Home Legendary?" />
      </main>
      <Footer />
    </>
  )
}
