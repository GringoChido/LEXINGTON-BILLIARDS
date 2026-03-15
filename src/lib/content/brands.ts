export interface Brand {
  name: string
  slug: string
  tagline: string
  description: string
  featured?: boolean
  established?: string
}

/* ── Pool Table Brands ── */
export const poolTableBrands: Brand[] = [
  {
    name: "C.L. Bailey",
    slug: "cl-bailey",
    tagline: "The pool table we recommend first",
    description:
      "C.L. Bailey is the heart of our lineup. Solid hardwood construction, classic styling, and value that makes owning a real pool table accessible to every family. This is the brand we stock deepest — and for good reason.",
    featured: true,
  },
  {
    name: "Brunswick",
    slug: "brunswick",
    tagline: "The gold standard since 1845",
    description:
      "Brunswick has defined billiards for nearly two centuries. Tournament-grade engineering meets contemporary design — the choice of players who demand the best.",
    established: "1845",
  },
  {
    name: "A.E. Schmidt",
    slug: "ae-schmidt",
    tagline: "America's oldest pool table manufacturer",
    description:
      "A.E. Schmidt has been building pool tables in St. Louis since 1850 — the oldest manufacturer in the country. Heirloom-quality construction with old-world craftsmanship that has never gone out of style.",
    established: "1850",
  },
  {
    name: "Connelly",
    slug: "connelly",
    tagline: "Precision crafted in Arizona",
    description:
      "Connelly builds every table by hand in their Tucson, Arizona facility. Premium hardwoods, Italian slate, and furniture-grade finishes — tables built for players who know the difference.",
  },
  {
    name: "Olhausen",
    slug: "olhausen",
    tagline: "Made in America since 1972",
    description:
      "Every Olhausen table is handcrafted in Portland, Tennessee with premium hardwoods and Italian slate. Built to last generations, not just years.",
    established: "1972",
  },
  {
    name: "Imperial",
    slug: "imperial",
    tagline: "Game room furniture, perfected",
    description:
      "Imperial brings together billiards, shuffleboard, and game room furniture under one roof. Quality construction with officially licensed designs that fit any space.",
  },
  {
    name: "American Heritage",
    slug: "american-heritage",
    tagline: "Where style meets play",
    description:
      "American Heritage combines stunning furniture design with serious playability. Their tables are as beautiful to look at as they are to play on.",
  },
]

/* ── Spa Brands ── */
export const spaBrands: Brand[] = [
  {
    name: "American Whirlpool",
    slug: "american-whirlpool",
    tagline: "Built for the way you live",
    description:
      "American Whirlpool leads our spa lineup with advanced hydrotherapy, energy-efficient engineering, and commercial-grade components. From intimate two-person models to full-size family spas — built to perform for decades.",
    featured: true,
  },
  {
    name: "Vita Spa",
    slug: "vita-spa",
    tagline: "Innovation in every jet",
    description:
      "Vita Spa combines cutting-edge jet technology with elegant design. Their spas deliver a hydrotherapy experience that rivals models at twice the price — exceptional value without compromise.",
  },
]

/* ── Big Green Egg ── */
export const eggBrand: Brand = {
  name: "Big Green Egg",
  slug: "big-green-egg",
  tagline: "The Ultimate Cooking Experience",
  description:
    "The Big Green Egg is the world\u2019s most versatile outdoor cooker. Grill, smoke, bake, and roast with unmatched precision. Once you cook on an Egg, everything else is just a grill.",
}

/* ── Arcade Brands ── */
export const arcadeBrands: Brand[] = [
  {
    name: "Custom Multicades",
    slug: "custom-multicades",
    tagline: "Handcrafted. 60+ classics. Your design.",
    description:
      "Each cabinet is custom built one at a time by hand — not assembled from a kit. Full-size stand-up units and cocktail tables loaded with Pac-Man, Galaga, Street Fighter, and dozens more. Available in custom designs and team colors.",
  },
  {
    name: "Raw Thrills",
    slug: "raw-thrills",
    tagline: "Premium commercial arcade machines",
    description:
      "Raw Thrills builds the machines you see in real arcades and entertainment centers. Premium cabinets with commercial-grade hardware for the serious game room.",
  },
]

/* ── Billiard Accessories Brands ── */
export const accessoryBrands: Brand[] = [
  {
    name: "RAM Game Room",
    slug: "ram-game-room",
    tagline: "Complete game room solutions",
    description:
      "Bar stools, pub tables, dartboards, wall decor, and game room furniture. RAM brings everything together under one roof.",
  },
  {
    name: "RAM Furniture",
    slug: "ram-furniture",
    tagline: "Built for game night",
    description:
      "Spectator chairs, pub tables, and bar stools in styles from rustic to contemporary. Hardwood construction built for the long session.",
  },
  {
    name: "RAM Outdoor Decor",
    slug: "ram-outdoor-decor",
    tagline: "Bring the game room outside",
    description:
      "Weather-resistant outdoor game room furniture, patio bars, and entertainment pieces that hold up to Kentucky seasons.",
  },
  {
    name: "Falcon Cues",
    slug: "falcon-cues",
    tagline: "Professional grade, player approved",
    description:
      "Falcon has been crafting precision cue sticks for serious players since 1987. Premium shafts, exotic wraps, and professional-grade tips — the cue that elevates your game.",
  },
  {
    name: "Imperial",
    slug: "imperial",
    tagline: "Officially licensed game room gear",
    description:
      "Imperial holds official licenses from the NFL, NBA, MLB, NHL, and NCAA. Team-branded pool table felt, cues, dart cabinets, and wall art — represent your team in your game room.",
  },
  {
    name: "Toltec Lighting",
    slug: "toltec",
    tagline: "The light that changes the room",
    description:
      "Toltec builds pendant lights and billiard fixtures that transform a game room from functional to unforgettable. Hand-blown art glass shades in dozens of styles.",
  },
]

/* ── All brand logos (slug → path) ── */
export const brandLogos: Record<string, string> = {
  "cl-bailey": "/images/brands/cl-bailey.png",
  "brunswick": "/images/brands/brunswick.svg",
  "ae-schmidt": "/images/brands/ae-schmidt.svg",
  "connelly": "/images/brands/connelly.svg",
  "olhausen": "/images/brands/olhausen.svg",
  "imperial": "/images/brands/imperial.png",
  "american-heritage": "/images/brands/american-heritage.png",
  "american-whirlpool": "/images/brands/american-whirlpool.svg",
  "vita-spa": "/images/brands/vita-spa.svg",
  "big-green-egg": "/images/brands/big-green-egg.svg",
  "raw-thrills": "/images/brands/raw-thrills.png",
  "ram-game-room": "/images/brands/ram-game-room.svg",
  "falcon-cues": "/images/brands/falcon-cues.svg",
  "toltec": "/images/brands/toltec.svg",
  "maax": "/images/brands/maax.svg",
  "bullfrog": "/images/brands/bullfrog.svg",
  "jacuzzi": "/images/brands/jacuzzi.jpg",
}

/* ── All brands for marquee ── */
export const allBrands: Brand[] = [
  ...poolTableBrands,
  ...spaBrands,
  eggBrand,
  ...arcadeBrands.slice(0, 1), // Custom Multicades only (not a logo brand)
  ...accessoryBrands.filter((b) => !b.slug.startsWith("ram-")),
]
