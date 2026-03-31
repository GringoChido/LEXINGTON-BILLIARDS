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
  | "arcade"
  | "game-room"

export const categoryLabels: Record<BlogCategory, string> = {
  "pool-tables": "Pool Tables",
  "hot-tubs": "Hot Tubs & Spas",
  "big-green-egg": "Big Green Egg",
  "arcade": "Arcade Machines",
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
  "arcade": {
    bg: "rgba(139,69,19,0.1)",
    text: "#8B4513",
    pill: "pill-orange",
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
  "arcade": "/arcade-machines",
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
  // ── Pillar 2: Hot Tubs & Spas ──
  {
    slug: "how-much-does-a-hot-tub-cost",
    title: "How Much Does a Hot Tub Cost? (2026 Pricing Guide)",
    description:
      "Real hot tub pricing from a dealer who's sold spas in Kentucky for 50 years. Brand-by-brand costs, what's included, and what to budget for.",
    category: "hot-tubs",
    author: "Greg Wilson",
    publishedAt: "2026-03-19",
    image: "/images/blog/hot-tub-cost-guide.webp",
    imageAlt: "Hot tubs on display in the Lexington Billiards & Spas showroom",
    readingTime: "8 min read",
    featured: true,
    tags: ["hot tubs", "pricing", "buying guide"],
  },
  {
    slug: "hot-tub-sizes-guide",
    title: "Hot Tub Sizes: How to Choose the Right Spa for Your Space",
    description:
      "From 2-person intimate spas to 8-person premium models and swim spas. Dimensions, weight, space requirements, and who each size is best for.",
    category: "hot-tubs",
    author: "Greg Wilson",
    publishedAt: "2026-03-19",
    image: "/images/blog/hot-tub-sizes.webp",
    imageAlt: "Different sized hot tubs displayed in a showroom",
    readingTime: "7 min read",
    tags: ["hot tubs", "sizing", "buying guide"],
  },
  {
    slug: "american-whirlpool-vs-vita-spa",
    title: "American Whirlpool vs. Vita Spa: Hot Tub Brand Comparison",
    description:
      "An honest comparison of the two hot tub brands we sell, from a dealer who knows both inside and out. Construction, jets, efficiency, and who each is built for.",
    category: "hot-tubs",
    author: "Greg Wilson",
    publishedAt: "2026-03-19",
    image: "/images/blog/brand-comparison-spas.webp",
    imageAlt: "American Whirlpool and Vita Spa hot tubs side by side",
    readingTime: "8 min read",
    featured: true,
    tags: ["hot tubs", "brands", "comparison", "American Whirlpool", "Vita Spa"],
  },
  {
    slug: "hot-tub-buying-guide-kentucky",
    title: "The Complete Hot Tub Buying Guide for Kentucky Homeowners",
    description:
      "Everything you need to know before buying a hot tub in Kentucky. Sizing, placement, electrical, brands, delivery, and how to avoid the most common mistakes.",
    category: "hot-tubs",
    author: "Greg Wilson",
    publishedAt: "2026-03-19",
    image: "/images/blog/hot-tub-buying-guide-ky.webp",
    imageAlt: "Hot tub installed on a Kentucky backyard deck",
    readingTime: "12 min read",
    featured: true,
    tags: ["hot tubs", "buying guide", "Kentucky", "complete guide"],
  },
  {
    slug: "hot-tub-electrical-requirements",
    title: "Hot Tub Electrical Requirements: What You Need Before Delivery",
    description:
      "120V vs 240V, GFCI requirements, dedicated circuits, and what your electrician needs to know. Get your electrical ready before your spa arrives.",
    category: "hot-tubs",
    author: "Greg Wilson",
    publishedAt: "2026-03-19",
    image: "/images/blog/hot-tub-electrical.webp",
    imageAlt: "Electrical panel setup for a 240V hot tub installation",
    readingTime: "7 min read",
    tags: ["hot tubs", "electrical", "installation", "planning"],
  },
  {
    slug: "dealer-vs-big-box-hot-tubs",
    title: "Dealer vs. Big Box Store: Where to Buy a Hot Tub",
    description:
      "The real difference between buying a hot tub from a local dealer and picking one up at Costco or Home Depot. Service, support, and total cost compared.",
    category: "hot-tubs",
    author: "Greg Wilson",
    publishedAt: "2026-03-19",
    image: "/images/blog/dealer-vs-big-box.webp",
    imageAlt: "Lexington Billiards & Spas showroom with hot tubs on display",
    readingTime: "8 min read",
    tags: ["hot tubs", "buying guide", "dealer", "comparison"],
  },
  {
    slug: "hot-tub-vs-swim-spa",
    title: "Hot Tub vs. Swim Spa: Which One Should You Buy?",
    description:
      "They look similar but serve very different purposes. Size, cost, running expenses, and who each one is actually built for.",
    category: "hot-tubs",
    author: "Greg Wilson",
    publishedAt: "2026-03-19",
    image: "/images/blog/hot-tub-vs-swim-spa.webp",
    imageAlt: "Hot tub and swim spa compared side by side on a patio",
    readingTime: "7 min read",
    tags: ["hot tubs", "swim spa", "comparison"],
  },
  {
    slug: "hot-tub-running-costs",
    title: "How Much Does It Cost to Run a Hot Tub Per Month?",
    description:
      "Monthly electricity, chemicals, water, and maintenance costs broken down. What Kentucky hot tub owners actually spend, and how to keep costs low.",
    category: "hot-tubs",
    author: "Greg Wilson",
    publishedAt: "2026-03-19",
    image: "/images/blog/hot-tub-running-costs.webp",
    imageAlt: "Hot tub with energy-efficient insulation and cover",
    readingTime: "7 min read",
    tags: ["hot tubs", "costs", "electricity", "maintenance"],
  },
  {
    slug: "best-hot-tub-features",
    title: "Best Hot Tub Features: Jets, Lighting, Controls & More",
    description:
      "Which hot tub features actually matter and which are gimmicks. Jets, LED lighting, WiFi controls, insulation, and filtration explained by a 50-year dealer.",
    category: "hot-tubs",
    author: "Greg Wilson",
    publishedAt: "2026-03-19",
    image: "/images/blog/hot-tub-features.webp",
    imageAlt: "Hot tub jets and LED lighting in action",
    readingTime: "8 min read",
    tags: ["hot tubs", "features", "jets", "lighting", "buying guide"],
  },
  {
    slug: "indoor-vs-outdoor-hot-tubs",
    title: "Indoor vs. Outdoor Hot Tubs: Placement Guide for Kentucky Homes",
    description:
      "Pros, cons, and requirements for both indoor and outdoor hot tub placement. Ventilation, structural support, deck requirements, and what works best in Kentucky.",
    category: "hot-tubs",
    author: "Greg Wilson",
    publishedAt: "2026-03-19",
    image: "/images/blog/indoor-vs-outdoor-hot-tub.webp",
    imageAlt: "Outdoor hot tub on a Kentucky deck with fall foliage",
    readingTime: "7 min read",
    tags: ["hot tubs", "placement", "indoor", "outdoor", "Kentucky"],
  },
  {
    slug: "how-to-winterize-hot-tub-kentucky",
    title: "How to Winterize Your Hot Tub in Kentucky",
    description:
      "Step-by-step winterization for Kentucky hot tub owners, plus why most people should keep their spa running year-round instead.",
    category: "hot-tubs",
    author: "Greg Wilson",
    publishedAt: "2026-03-19",
    image: "/images/blog/winterize-hot-tub.webp",
    imageAlt: "Hot tub in winter with snow on the cover in Kentucky",
    readingTime: "7 min read",
    tags: ["hot tubs", "winterization", "maintenance", "Kentucky"],
  },
  {
    slug: "hot-tub-troubleshooting",
    title: "Hot Tub Troubleshooting: 7 Common Problems and How to Fix Them",
    description:
      "No heat, cloudy water, noisy pump, error codes, and more. What to check yourself and when to call a factory-authorized technician.",
    category: "hot-tubs",
    author: "Greg Wilson",
    publishedAt: "2026-03-19",
    image: "/images/blog/hot-tub-troubleshooting.webp",
    imageAlt: "Technician servicing a hot tub pump and control panel",
    readingTime: "8 min read",
    tags: ["hot tubs", "troubleshooting", "maintenance", "service"],
  },
  {
    slug: "when-to-replace-hot-tub-cover",
    title: "When to Replace Your Hot Tub Cover (And Why It Matters More Than You Think)",
    description:
      "A waterlogged cover can double your energy bill. Signs it's time for a new one, how to extend cover life, and what to look for in a replacement.",
    category: "hot-tubs",
    author: "Greg Wilson",
    publishedAt: "2026-03-19",
    image: "/images/blog/hot-tub-cover.webp",
    imageAlt: "New hot tub cover being placed on a spa",
    readingTime: "5 min read",
    tags: ["hot tubs", "cover", "maintenance", "energy efficiency"],
  },
  {
    slug: "monthly-hot-tub-maintenance-checklist",
    title: "Monthly Hot Tub Maintenance Checklist",
    description:
      "Weekly, monthly, quarterly, and annual maintenance tasks to keep your spa crystal clear and running smoothly. Plus where to get chemicals and parts in Lexington.",
    category: "hot-tubs",
    author: "Greg Wilson",
    publishedAt: "2026-03-19",
    image: "/images/blog/hot-tub-maintenance.webp",
    imageAlt: "Hot tub maintenance supplies and water testing kit",
    readingTime: "7 min read",
    tags: ["hot tubs", "maintenance", "checklist", "water care"],
  },
  // ── Pillar 3: Big Green Egg ──
  {
    slug: "big-green-egg-prices-by-size",
    title: "Big Green Egg Prices by Size: 2026 Complete Guide",
    description:
      "A complete price breakdown for every Big Green Egg size from Mini to 2XL. What each size costs, what's included, and which one is right for you.",
    category: "big-green-egg",
    author: "Greg Wilson",
    publishedAt: "2026-03-30",
    image: "/images/blog/pool-table-cost-guide.webp",
    imageAlt: "Big Green Egg grills in multiple sizes on display",
    readingTime: "8 min read",
    featured: true,
    tags: ["Big Green Egg", "pricing", "sizes", "buying guide"],
  },
  {
    slug: "what-can-you-cook-on-big-green-egg",
    title: "What Can You Cook on a Big Green Egg? 25+ Ideas",
    description:
      "From brisket to pizza to bread to dessert — the Big Green Egg does it all. 25+ dishes organized by cooking method with temperature guides.",
    category: "big-green-egg",
    author: "Greg Wilson",
    publishedAt: "2026-03-30",
    image: "/images/blog/pool-table-cost-guide.webp",
    imageAlt: "Food cooking on a Big Green Egg ceramic grill",
    readingTime: "9 min read",
    tags: ["Big Green Egg", "recipes", "cooking", "grilling"],
  },
  {
    slug: "is-big-green-egg-worth-it",
    title: "Is a Big Green Egg Worth It? An Honest Dealer Review",
    description:
      "An honest assessment from a dealer who sells Big Green Eggs every day. Pros, cons, who it's for, and who should skip it.",
    category: "big-green-egg",
    author: "Greg Wilson",
    publishedAt: "2026-03-30",
    image: "/images/blog/pool-table-cost-guide.webp",
    imageAlt: "Big Green Egg on a patio with accessories",
    readingTime: "7 min read",
    featured: true,
    tags: ["Big Green Egg", "review", "buying guide", "comparison"],
  },
  {
    slug: "best-eggcessories",
    title: "Best EGGcessories: Must-Have Big Green Egg Accessories",
    description:
      "The top must-have accessories for your Big Green Egg. ConvEGGtor, pizza stone, ash tool, and more — what they do and why you need them.",
    category: "big-green-egg",
    author: "Greg Wilson",
    publishedAt: "2026-03-30",
    image: "/images/blog/pool-table-cost-guide.webp",
    imageAlt: "Big Green Egg accessories and EGGcessories display",
    readingTime: "7 min read",
    tags: ["Big Green Egg", "accessories", "EGGcessories"],
  },
  {
    slug: "big-green-egg-beginner-guide",
    title: "How to Use a Big Green Egg for Beginners",
    description:
      "Your first cook on a Big Green Egg — from lighting to temperature control to common mistakes. A beginner's guide from a dealer who's helped hundreds of new Egg owners.",
    category: "big-green-egg",
    author: "Greg Wilson",
    publishedAt: "2026-03-30",
    image: "/images/blog/pool-table-cost-guide.webp",
    imageAlt: "Lighting charcoal in a Big Green Egg for the first time",
    readingTime: "8 min read",
    tags: ["Big Green Egg", "beginner", "how-to", "temperature"],
  },
  {
    slug: "kamado-vs-big-green-egg",
    title: "Kamado Grill vs. Big Green Egg: What's the Difference?",
    description:
      "What 'kamado' means, how Big Green Egg compares to generic kamado grills, and why buying from an authorized dealer matters.",
    category: "big-green-egg",
    author: "Greg Wilson",
    publishedAt: "2026-03-30",
    image: "/images/blog/pool-table-cost-guide.webp",
    imageAlt: "Big Green Egg compared with generic kamado grill",
    readingTime: "7 min read",
    tags: ["Big Green Egg", "kamado", "comparison", "buying guide"],
  },
  // ── Pillar 4: Arcade Machines ──
  {
    slug: "custom-arcade-cabinet-cost",
    title: "Custom Arcade Cabinet Cost: What to Budget For",
    description:
      "Price ranges for custom multicade cabinets, virtual pinball, cocktail tables, and commercial machines. What affects cost and what you get for your money.",
    category: "arcade",
    author: "Greg Wilson",
    publishedAt: "2026-03-30",
    image: "/images/blog/pool-table-cost-guide.webp",
    imageAlt: "Custom arcade cabinet in a game room",
    readingTime: "7 min read",
    featured: true,
    tags: ["arcade", "pricing", "custom cabinet", "buying guide"],
  },
  {
    slug: "best-arcade-games-for-home",
    title: "Best Arcade Games for Home: The Ultimate Game List",
    description:
      "The classic arcade games everyone loves and why 60+ games in one cabinet is the way to go. Organized by era and style.",
    category: "arcade",
    author: "Greg Wilson",
    publishedAt: "2026-03-30",
    image: "/images/blog/pool-table-cost-guide.webp",
    imageAlt: "Classic arcade games on a multicade cabinet screen",
    readingTime: "8 min read",
    tags: ["arcade", "games", "classic games", "multicade"],
  },
  {
    slug: "bourbon-barrel-arcade-kentucky",
    title: "Bourbon Barrel Arcade: Kentucky-Made Custom Cabinets",
    description:
      "The story behind bourbon barrel arcade cabinets — a uniquely Kentucky creation. Build process, materials, and why these are the most talked-about game room piece.",
    category: "arcade",
    author: "Greg Wilson",
    publishedAt: "2026-03-30",
    image: "/images/blog/pool-table-cost-guide.webp",
    imageAlt: "Bourbon barrel arcade cabinet built in Kentucky",
    readingTime: "6 min read",
    featured: true,
    tags: ["arcade", "bourbon barrel", "Kentucky", "custom"],
  },
  {
    slug: "retro-vs-modern-arcade-machines",
    title: "Retro vs. Modern Arcade Machines: Which Should You Buy?",
    description:
      "Original vintage arcade machines vs. modern multicade reproductions. Maintenance, cost, reliability, and game variety compared.",
    category: "arcade",
    author: "Greg Wilson",
    publishedAt: "2026-03-30",
    image: "/images/blog/pool-table-cost-guide.webp",
    imageAlt: "Retro and modern arcade machines side by side",
    readingTime: "7 min read",
    tags: ["arcade", "retro", "modern", "comparison"],
  },
  {
    slug: "arcade-machine-maintenance-guide",
    title: "Arcade Machine Maintenance: Keep Your Games Running",
    description:
      "Screen care, button replacement, software updates, and when to call a professional. Keep your home arcade in perfect condition.",
    category: "arcade",
    author: "Greg Wilson",
    publishedAt: "2026-03-30",
    image: "/images/blog/pool-table-cost-guide.webp",
    imageAlt: "Maintaining an arcade machine with new buttons and joystick",
    readingTime: "6 min read",
    tags: ["arcade", "maintenance", "repair", "how-to"],
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
