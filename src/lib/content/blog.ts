export interface BlogPost {
  slug: string
  title: string
  description: string
  category: BlogCategory
  author: string
  publishedAt: string
  updatedAt?: string
  image: string
  imageAlt: string
  readingTime: string
  featured?: boolean
  tags: string[]
}

export type BlogCategory =
  | "pool-tables"
  | "hot-tubs"
  | "big-green-egg"
  | "game-room"

export const categoryLabels: Record<BlogCategory, string> = {
  "pool-tables": "Pool Tables",
  "hot-tubs": "Hot Tubs & Spas",
  "big-green-egg": "Big Green Egg",
  "game-room": "Game Room",
}

export const categoryColors: Record<
  BlogCategory,
  { bg: string; text: string; pill: string }
> = {
  "pool-tables": {
    bg: "rgba(27,67,50,0.1)",
    text: "#1B4332",
    pill: "pill-dark",
  },
  "hot-tubs": {
    bg: "rgba(10,74,92,0.1)",
    text: "#0A4A5C",
    pill: "pill-teal",
  },
  "big-green-egg": {
    bg: "rgba(45,106,47,0.1)",
    text: "#2D6A2F",
    pill: "pill-dark",
  },
  "game-room": {
    bg: "rgba(232,98,26,0.1)",
    text: "#E8621A",
    pill: "pill-orange",
  },
}

export const categoryToProductPage: Record<BlogCategory, string> = {
  "pool-tables": "/pool-tables",
  "hot-tubs": "/spas",
  "big-green-egg": "/big-green-egg",
  "game-room": "/arcade-machines",
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-much-does-a-pool-table-cost",
    title: "How Much Does a Pool Table Cost? (2026 Pricing Guide)",
    description:
      "A real-world pricing breakdown from a dealer who's sold pool tables in Kentucky for 50 years. Brand-by-brand costs, what's included, and what to watch out for.",
    category: "pool-tables",
    author: "Greg Wilson",
    publishedAt: "2026-03-19",
    image: "/images/blog/pool-table-cost-guide.webp",
    imageAlt: "Pool tables on display in the Lexington Billiards showroom",
    readingTime: "8 min read",
    featured: true,
    tags: ["pool tables", "pricing", "buying guide"],
  },
  {
    slug: "how-to-choose-pool-table-size",
    title: "How to Choose the Right Pool Table Size for Your Room",
    description:
      "Room dimensions, cue clearance, and size charts from a dealer who's measured hundreds of game rooms across Kentucky. Find your perfect fit.",
    category: "pool-tables",
    author: "Greg Wilson",
    publishedAt: "2026-03-19",
    image: "/images/blog/pool-table-size-guide.webp",
    imageAlt: "Measuring a game room for pool table sizing in a Kentucky home",
    readingTime: "7 min read",
    tags: ["pool tables", "sizing", "room dimensions", "buying guide"],
  },
  {
    slug: "pool-table-felt-colors",
    title: "Pool Table Felt Colors: 29 Options from Championship & Simonis",
    description:
      "Every cloth color we stock, from tournament green to burgundy to electric blue. See what each looks like on a real table in our Lexington showroom.",
    category: "pool-tables",
    author: "Greg Wilson",
    publishedAt: "2026-03-19",
    image: "/images/blog/pool-table-felt-colors.webp",
    imageAlt: "Pool table felt color swatches from Championship and Simonis",
    readingTime: "6 min read",
    tags: ["pool tables", "felt", "cloth", "customization"],
  },
  {
    slug: "slate-vs-non-slate-pool-tables",
    title: "Slate vs. Non-Slate Pool Tables: Why the Surface Matters",
    description:
      "The honest truth about MDF, slatron, and real slate from a dealer who's installed thousands of tables. What cheap tables won't tell you.",
    category: "pool-tables",
    author: "Greg Wilson",
    publishedAt: "2026-03-19",
    image: "/images/blog/slate-vs-non-slate.webp",
    imageAlt: "Cross-section of a three-piece slate pool table bed",
    readingTime: "7 min read",
    tags: ["pool tables", "slate", "quality", "buying guide"],
  },
  {
    slug: "how-to-move-a-pool-table",
    title: "How to Move a Pool Table (Without Destroying It)",
    description:
      "The right way to disassemble, transport, and reassemble a slate pool table. From a team that moves tables every week in Central Kentucky.",
    category: "pool-tables",
    author: "Greg Wilson",
    publishedAt: "2026-03-19",
    image: "/images/blog/move-pool-table.webp",
    imageAlt: "Professional pool table movers disassembling a slate table",
    readingTime: "8 min read",
    tags: ["pool tables", "moving", "maintenance", "service"],
  },
  {
    slug: "pool-table-maintenance-recloth-recushion",
    title: "When to Re-Cloth and Re-Cushion Your Pool Table",
    description:
      "Signs your cloth is worn out and your cushions are dead. How often to replace them, what it costs, and why it matters for your game.",
    category: "pool-tables",
    author: "Greg Wilson",
    publishedAt: "2026-03-19",
    image: "/images/blog/recloth-recushion.webp",
    imageAlt: "Technician re-clothing a pool table with new Championship felt",
    readingTime: "6 min read",
    tags: ["pool tables", "maintenance", "re-cloth", "re-cushion"],
  },
  {
    slug: "cl-bailey-vs-brunswick-vs-olhausen",
    title: "C.L. Bailey vs. Brunswick vs. Olhausen: Pool Table Brand Comparison",
    description:
      "An honest comparison of three top pool table brands from a dealer who sells all of them. Construction, value, and who each brand is built for.",
    category: "pool-tables",
    author: "Greg Wilson",
    publishedAt: "2026-03-19",
    image: "/images/blog/brand-comparison.webp",
    imageAlt: "Three pool tables from C.L. Bailey, Brunswick, and Olhausen side by side",
    readingTime: "9 min read",
    featured: true,
    tags: ["pool tables", "brands", "comparison", "C.L. Bailey", "Brunswick", "Olhausen"],
  },
  {
    slug: "pool-table-buying-guide-kentucky",
    title: "The Complete Pool Table Buying Guide for Kentucky Homeowners",
    description:
      "Everything you need to know before buying a pool table in Kentucky. Sizing, brands, delivery, basements, and how to avoid the most common mistakes.",
    category: "pool-tables",
    author: "Greg Wilson",
    publishedAt: "2026-03-19",
    image: "/images/blog/buying-guide-kentucky.webp",
    imageAlt: "Beautiful game room with a pool table in a Kentucky basement",
    readingTime: "12 min read",
    featured: true,
    tags: ["pool tables", "buying guide", "Kentucky", "complete guide"],
  },
  {
    slug: "pool-table-room-layouts-dimensions",
    title: "Pool Table Room Layouts: Dimensions, Lighting & Design Ideas",
    description:
      "How to design the perfect game room around your pool table. Layouts, lighting height, seating zones, and real examples from Kentucky homes.",
    category: "pool-tables",
    author: "Greg Wilson",
    publishedAt: "2026-03-19",
    image: "/images/blog/room-layouts.webp",
    imageAlt: "Well-designed game room with pool table, lighting, and seating",
    readingTime: "8 min read",
    tags: ["pool tables", "game room", "room design", "lighting"],
  },
  {
    slug: "7-foot-vs-8-foot-vs-9-foot-pool-tables",
    title: "7-Foot vs. 8-Foot vs. 9-Foot Pool Tables: Which Size Is Right?",
    description:
      "A side-by-side comparison of the three standard pool table sizes. Playability, room requirements, and which size most Kentucky homeowners choose.",
    category: "pool-tables",
    author: "Greg Wilson",
    publishedAt: "2026-03-19",
    image: "/images/blog/table-size-comparison.webp",
    imageAlt: "Size comparison of 7-foot, 8-foot, and 9-foot pool tables",
    readingTime: "7 min read",
    tags: ["pool tables", "sizing", "comparison", "7-foot", "8-foot", "9-foot"],
  },
  {
    slug: "how-to-clean-pool-table-felt",
    title: "How to Clean Pool Table Felt (The Right Way)",
    description:
      "The do's and don'ts of cleaning your pool table cloth. Brushing technique, stain removal, and the mistakes that ruin felt fast.",
    category: "pool-tables",
    author: "Greg Wilson",
    publishedAt: "2026-03-19",
    image: "/images/blog/clean-felt.webp",
    imageAlt: "Brushing pool table felt with a proper billiard brush",
    readingTime: "5 min read",
    tags: ["pool tables", "maintenance", "cleaning", "felt care"],
  },
  {
    slug: "5-pool-games-beyond-8-ball",
    title: "5 Pool Games Beyond 8-Ball That You Should Be Playing",
    description:
      "Cutthroat, One Pocket, Bank Pool, 3-Ball, and Rotation. Rules, strategy, and why these games will make you a better player.",
    category: "pool-tables",
    author: "Greg Wilson",
    publishedAt: "2026-03-19",
    image: "/images/blog/pool-games.webp",
    imageAlt: "Friends playing pool around a billiard table",
    readingTime: "7 min read",
    tags: ["pool tables", "pool games", "rules", "entertainment"],
  },
  {
    slug: "how-to-level-a-pool-table",
    title: "How to Level a Pool Table (DIY Guide)",
    description:
      "Step-by-step instructions for leveling your pool table at home. Tools you need, the marble test, and when to call a professional.",
    category: "pool-tables",
    author: "Greg Wilson",
    publishedAt: "2026-03-19",
    image: "/images/blog/level-pool-table.webp",
    imageAlt: "Using a precision level on a pool table slate surface",
    readingTime: "6 min read",
    tags: ["pool tables", "maintenance", "leveling", "DIY"],
  },
  {
    slug: "championship-vs-simonis-cloth",
    title: "Championship vs. Simonis Cloth: Which Pool Table Felt Is Better?",
    description:
      "A head-to-head comparison of the two most popular pool table cloth brands. Speed, durability, price, and which one we recommend for most players.",
    category: "pool-tables",
    author: "Greg Wilson",
    publishedAt: "2026-03-19",
    image: "/images/blog/championship-vs-simonis.webp",
    imageAlt: "Championship and Simonis pool table cloth side by side",
    readingTime: "7 min read",
    tags: ["pool tables", "cloth", "Championship", "Simonis", "comparison"],
  },
]

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter((p) => p.category === category)
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured)
}

export function getAllCategories(): BlogCategory[] {
  return [...new Set(blogPosts.map((p) => p.category))]
}
