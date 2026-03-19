export interface Brand {
  name: string
  slug: string
  tagline: string
  description: string
  scene: string
  image?: string
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
    scene: "C.L. Bailey pool table in warm living room, hardwood floors, pendant lighting, family game night",
    image: "/images/brands/scene-cl-bailey.jpg",
    featured: true,
  },
  {
    name: "Brunswick",
    slug: "brunswick",
    tagline: "The gold standard since 1845",
    description:
      "Brunswick has defined billiards for nearly two centuries. Tournament-grade engineering meets contemporary design — the choice of players who demand the best.",
    scene: "Brunswick tournament pool table in upscale game room, slate top, leather pockets, dark wood finish",
    image: "/images/brands/scene-brunswick.webp",
    established: "1845",
  },
  {
    name: "A.E. Schmidt",
    slug: "ae-schmidt",
    tagline: "America's oldest pool table manufacturer",
    description:
      "A.E. Schmidt has been building pool tables in St. Louis since 1850 — the oldest manufacturer in the country. Heirloom-quality construction with old-world craftsmanship that has never gone out of style.",
    scene: "A.E. Schmidt heirloom pool table, ornate carved legs, green felt, traditional billiard room",
    image: "/images/brands/scene-ae-schmidt.jpg",
    established: "1850",
  },
  {
    name: "Connelly",
    slug: "connelly",
    tagline: "Precision crafted in Arizona",
    description:
      "Connelly builds every table by hand in their Tucson, Arizona facility. Premium hardwoods, Italian slate, and furniture-grade finishes — tables built for players who know the difference.",
    scene: "Connelly pool table closeup, hand-rubbed hardwood rail, Italian slate bed, precision craftsmanship",
    image: "/images/brands/scene-connelly.webp",
  },
  {
    name: "Olhausen",
    slug: "olhausen",
    tagline: "Made in America since 1972",
    description:
      "Every Olhausen table is handcrafted in Portland, Tennessee with premium hardwoods and Italian slate. Built to last generations, not just years.",
    scene: "Olhausen pool table in modern game room, clean lines, contemporary finish, LED table light above",
    image: "/images/brands/scene-olhausen.webp",
    established: "1972",
  },
  {
    name: "Imperial",
    slug: "imperial",
    tagline: "Game room furniture, perfected",
    description:
      "Imperial brings together billiards, shuffleboard, and game room furniture under one roof. Quality construction with officially licensed designs that fit any space.",
    scene: "Imperial shuffleboard table and pool table in spacious game room, sports memorabilia on walls",
    image: "/images/brands/scene-imperial.webp",
  },
  {
    name: "American Heritage",
    slug: "american-heritage",
    tagline: "Where style meets play",
    description:
      "American Heritage combines stunning furniture design with serious playability. Their tables are as beautiful to look at as they are to play on.",
    scene: "American Heritage billiard table as dining table, elegant room, convertible top, chandelier",
    image: "/images/brands/scene-american-heritage.jpg",
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
    image: "/images/american-whirlpool-lifestyle.webp",
    scene: "American Whirlpool spa on patio deck at twilight, LED lighting, steam rising, landscaped garden",
    featured: true,
  },
  {
    name: "Vita Spa",
    slug: "vita-spa",
    tagline: "Innovation in every jet",
    description:
      "Vita Spa combines cutting-edge jet technology with elegant design. Their spas deliver a hydrotherapy experience that rivals models at twice the price — exceptional value without compromise.",
    image: "/images/vita-spa-lifestyle.webp",
    scene: "Vita Spa hot tub on covered patio, couple relaxing, evening ambiance, string lights overhead",
  },
]

/* ── Big Green Egg ── */
export const eggBrand: Brand = {
  name: "Big Green Egg",
  slug: "big-green-egg",
  tagline: "The Ultimate Cooking Experience",
  description:
    "The Big Green Egg is the world\u2019s most versatile outdoor cooker. Grill, smoke, bake, and roast with unmatched precision. Once you cook on an Egg, everything else is just a grill.",
  scene: "Big Green Egg on outdoor patio, smoking brisket, wood table with accessories, backyard cookout",
}

/* ── Arcade Brands ── */
export const arcadeBrands: Brand[] = [
  {
    name: "Custom Multicades",
    slug: "custom-multicades",
    tagline: "Handcrafted. 60+ classics. Your design.",
    description:
      "Each cabinet is custom built one at a time by hand — not assembled from a kit. Full-size stand-up units and cocktail tables loaded with Pac-Man, Galaga, Street Fighter, and dozens more. Available in custom designs and team colors.",
    scene: "Custom multicade arcade cabinet in game room, glowing screen, retro artwork, neon accent lighting",
  },
  {
    name: "Raw Thrills",
    slug: "raw-thrills",
    tagline: "Premium commercial arcade machines",
    description:
      "Raw Thrills builds the machines you see in real arcades and entertainment centers. Premium cabinets with commercial-grade hardware for the serious game room.",
    scene: "Raw Thrills racing arcade cabinet in dark game room, large screen glowing, steering wheel controller",
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
    scene: "RAM Game Room setup with bar stools, pub table, dartboard cabinet, and wall art in styled basement",
  },
  {
    name: "RAM Furniture",
    slug: "ram-furniture",
    tagline: "Built for game night",
    description:
      "Spectator chairs, pub tables, and bar stools in styles from rustic to contemporary. Hardwood construction built for the long session.",
    scene: "RAM spectator chairs around pool table, leather seats, hardwood frames, warm game room lighting",
  },
  {
    name: "RAM Outdoor Decor",
    slug: "ram-outdoor-decor",
    tagline: "Bring the game room outside",
    description:
      "Weather-resistant outdoor game room furniture, patio bars, and entertainment pieces that hold up to Kentucky seasons.",
    scene: "RAM outdoor patio bar and stools, covered porch, summer evening, outdoor entertainment area",
  },
  {
    name: "Falcon Cues",
    slug: "falcon-cues",
    tagline: "Professional grade, player approved",
    description:
      "Falcon has been crafting precision cue sticks for serious players since 1987. Premium shafts, exotic wraps, and professional-grade tips — the cue that elevates your game.",
    scene: "Falcon cue sticks displayed on wall rack, exotic wood inlays, leather wraps, closeup detail",
  },
  {
    name: "Imperial",
    slug: "imperial",
    tagline: "Officially licensed game room gear",
    description:
      "Imperial holds official licenses from the NFL, NBA, MLB, NHL, and NCAA. Team-branded pool table felt, cues, dart cabinets, and wall art — represent your team in your game room.",
    scene: "Imperial NFL-branded pool table felt and team cues in sports-themed game room, jerseys on wall",
  },
  {
    name: "Toltec Lighting",
    slug: "toltec",
    tagline: "The light that changes the room",
    description:
      "Toltec builds pendant lights and billiard fixtures that transform a game room from functional to unforgettable. Hand-blown art glass shades in dozens of styles.",
    scene: "Toltec billiard pendant light over pool table, hand-blown art glass shade, warm ambient glow",
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
