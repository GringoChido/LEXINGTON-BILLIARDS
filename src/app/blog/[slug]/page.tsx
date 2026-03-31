import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTABlock } from "@/components/cta-block"
import { ArticleSchema } from "@/components/article-schema"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import { HowToSchema } from "@/components/howto-schema"
import { BlogPostLayout } from "@/components/blog-post-layout"
import { blogPosts, getPostBySlug, categoryLabels } from "@/lib/content/blog"

const howToData: Record<string, { name: string; description: string; steps: { name: string; text: string }[] }> = {
  "how-to-clean-pool-table-felt": {
    name: "How to Clean Pool Table Felt",
    description: "Step-by-step guide to properly clean and maintain your pool table cloth without damaging it.",
    steps: [
      { name: "Brush the felt", text: "Use a pool table brush to sweep the felt from one end to the other in straight, overlapping strokes. Always brush in one direction — head rail to foot rail. Never use circular motions." },
      { name: "Vacuum gently", text: "Use a handheld vacuum on the lowest setting or use the upholstery attachment. Hold it slightly above the felt surface. Never press the nozzle directly into the cloth." },
      { name: "Remove stains", text: "For chalk stains, use a damp (not wet) white cloth and blot gently. For tougher stains, use a specialized billiard cloth cleaner. Never use household cleaners, bleach, or excessive water." },
      { name: "Clean the rails and pockets", text: "Wipe the rails with a damp cloth to remove chalk buildup. Clean leather pockets with a leather conditioner. Empty pocket debris regularly." },
      { name: "Maintain regularly", text: "Brush after every playing session. Vacuum monthly. Cover the table when not in use to prevent dust accumulation and sun fading." },
    ],
  },
  "how-to-level-a-pool-table": {
    name: "How to Level a Pool Table",
    description: "Step-by-step guide to leveling your pool table at home using simple tools.",
    steps: [
      { name: "Get a precision level", text: "Use a machinist's level or a high-quality carpenter's level at least 4 feet long. Phone apps are not accurate enough for pool table leveling." },
      { name: "Check the slate", text: "Place the level on the slate surface (not the cloth) in multiple directions — lengthwise, widthwise, and diagonally. Check from center and edges." },
      { name: "Identify the low spots", text: "Note which direction the bubble moves. The table is low on the side the bubble moves toward." },
      { name: "Adjust the leg levelers", text: "Most quality tables have threaded leg levelers. Turn them to raise or lower each corner. Make small adjustments — 1/4 turn at a time." },
      { name: "Use the marble test", text: "Place a billiard ball in the center of the table and watch if it rolls. Repeat at multiple spots. A properly leveled table will hold the ball still." },
      { name: "Re-check and fine-tune", text: "Go back to the level and verify. It may take several rounds of adjustment. If the table still won't level, the floor itself may be uneven — shims under the legs can help." },
    ],
  },
  "how-to-move-a-pool-table": {
    name: "How to Move a Pool Table",
    description: "Professional guide to disassembling, transporting, and reassembling a slate pool table without damage.",
    steps: [
      { name: "Remove the pockets", text: "Start by removing all six pockets. Leather pockets are typically screwed or bolted to the rails. Bag and label all hardware." },
      { name: "Remove the rails", text: "Unbolt all rail sections from the slate. Rails are typically held by bolts accessible from underneath. Keep rails paired and labeled." },
      { name: "Remove the felt", text: "If the felt is stapled, carefully pull staples with a flat tool. If glued, peel slowly to avoid tearing. Old felt may not survive removal — plan for new cloth." },
      { name: "Remove the slate", text: "Unscrew the slate pieces from the frame. Three-piece slate is standard — each piece weighs 150-250 lbs. Requires 2-3 people minimum. Carry vertically, never flat." },
      { name: "Disassemble the frame", text: "Remove legs and cross supports. Label everything for reassembly. Wrap legs to prevent scratches during transport." },
      { name: "Transport carefully", text: "Use moving blankets on all components. Slate must be transported upright, secured against shifting. Never stack slate pieces on top of each other." },
      { name: "Reassemble and level", text: "Reverse the process at the new location. Level the frame, place slate, fill seams with beeswax, install new felt, attach rails, and do final leveling." },
    ],
  },
  "how-to-winterize-hot-tub-kentucky": {
    name: "How to Winterize Your Hot Tub in Kentucky",
    description: "Step-by-step winterization guide for Kentucky hot tub owners who need to shut down their spa for winter.",
    steps: [
      { name: "Turn off the power", text: "Switch off the hot tub at the breaker panel. Never work on a powered spa." },
      { name: "Drain the water", text: "Use the drain valve or a submersible pump to empty all water. A pump is faster — a full hot tub holds 300-500 gallons." },
      { name: "Blow out the lines", text: "Use a shop vac or air compressor on the blower setting to force water out of all plumbing lines, jets, and fittings. This prevents freeze damage." },
      { name: "Remove and clean filters", text: "Take out all filter cartridges. Clean with filter cleaner, dry completely, and store indoors." },
      { name: "Add antifreeze to lines", text: "Pour non-toxic RV antifreeze (propylene glycol, NOT ethylene glycol) into remaining low points in the plumbing." },
      { name: "Clean and cover", text: "Wipe down the shell, secure the cover with locking straps, and place a tarp over the top for extra protection against Kentucky ice storms." },
    ],
  },
}


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
  // ── Pillar 3: Big Green Egg ──
  "big-green-egg-prices-by-size":
    require("@/../content/blog/big-green-egg-prices-by-size.mdx").default,
  "what-can-you-cook-on-big-green-egg":
    require("@/../content/blog/what-can-you-cook-on-big-green-egg.mdx").default,
  "is-big-green-egg-worth-it":
    require("@/../content/blog/is-big-green-egg-worth-it.mdx").default,
  "best-eggcessories":
    require("@/../content/blog/best-eggcessories.mdx").default,
  "big-green-egg-beginner-guide":
    require("@/../content/blog/big-green-egg-beginner-guide.mdx").default,
  "kamado-vs-big-green-egg":
    require("@/../content/blog/kamado-vs-big-green-egg.mdx").default,
  // ── Pillar 4: Arcade Machines ──
  "custom-arcade-cabinet-cost":
    require("@/../content/blog/custom-arcade-cabinet-cost.mdx").default,
  "best-arcade-games-for-home":
    require("@/../content/blog/best-arcade-games-for-home.mdx").default,
  "bourbon-barrel-arcade-kentucky":
    require("@/../content/blog/bourbon-barrel-arcade-kentucky.mdx").default,
  "retro-vs-modern-arcade-machines":
    require("@/../content/blog/retro-vs-modern-arcade-machines.mdx").default,
  "arcade-machine-maintenance-guide":
    require("@/../content/blog/arcade-machine-maintenance-guide.mdx").default,
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
    alternates: {
      canonical: `${BASE_URL}/blog/${slug}`,
    },
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

  const howTo = howToData[slug]

  return (
    <>
      <Navbar />
      <main>
        <BlogPostLayout post={post}>
          <Content />
        </BlogPostLayout>
        <ArticleSchema post={post} />
        <BreadcrumbSchema
          items={[
            { name: "Home", href: "/" },
            { name: "Blog", href: "/blog" },
            { name: post.title, href: `/blog/${slug}` },
          ]}
        />
        {howTo && (
          <HowToSchema
            name={howTo.name}
            description={howTo.description}
            image={post.image}
            steps={howTo.steps}
          />
        )}
        <CTABlock headline="Ready to Make Your Home Legendary?" />
      </main>
      <Footer />
    </>
  )
}
