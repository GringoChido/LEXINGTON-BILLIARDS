export interface Brand {
  name: string
  slug: string
  tagline: string
  description: string
  featured?: boolean
}

export const poolTableBrands: Brand[] = [
  {
    name: "C.L. Bailey",
    slug: "cl-bailey",
    tagline: "Quality meets craftsmanship",
    description:
      "C.L. Bailey is the heart of our pool table lineup. Exceptional build quality, classic styling, and value that makes owning a real pool table accessible to every family. This is our lead brand — and for good reason.",
    featured: true,
  },
  {
    name: "Brunswick",
    slug: "brunswick",
    tagline: "The gold standard since 1845",
    description:
      "Brunswick has defined billiards for nearly two centuries. Tournament-grade engineering meets contemporary design — the choice of players who demand the best.",
  },
  {
    name: "Olhausen",
    slug: "olhausen",
    tagline: "Made in America since 1972",
    description:
      "Every Olhausen table is handcrafted in Portland, Tennessee with premium hardwoods and Italian slate. Built to last generations, not just years.",
  },
  {
    name: "Imperial",
    slug: "imperial",
    tagline: "Game room furniture, perfected",
    description:
      "Imperial brings together billiards, shuffleboard, and game room furniture under one roof. Quality construction with designs that fit any space.",
  },
  {
    name: "American Heritage",
    slug: "american-heritage",
    tagline: "Where style meets play",
    description:
      "American Heritage combines stunning furniture design with serious playability. Their tables are as beautiful to look at as they are to play on.",
  },
]

export const spaBrands: Brand[] = [
  {
    name: "Maax",
    slug: "maax",
    tagline: "Premium hydrotherapy, engineered right",
    description:
      "Maax hot tubs deliver advanced jet systems, energy-efficient insulation, and commercial-grade components designed to perform for decades.",
  },
  {
    name: "Bullfrog",
    slug: "bullfrog",
    tagline: "The jetpack revolution",
    description:
      "Bullfrog\u2019s patented JetPak system lets you customize your massage experience. Swap jet configurations anytime — no other spa on the market offers this flexibility.",
  },
  {
    name: "Jacuzzi",
    slug: "jacuzzi",
    tagline: "The name that started it all",
    description:
      "Jacuzzi invented the hot tub. Their legacy of innovation continues with industry-leading hydrotherapy, premium materials, and designs that stand the test of time.",
  },
]

export const arcadeBrands: Brand[] = [
  {
    name: "Custom Multicades",
    slug: "custom-multicades",
    tagline: "60+ classics in one cabinet",
    description:
      "Custom-built multicade cabinets loaded with Pac-Man, Galaga, Street Fighter, and dozens more. Commercial-grade joysticks, real buttons, and built to last.",
  },
  {
    name: "Raw Thrills",
    slug: "raw-thrills",
    tagline: "Premium arcade experiences",
    description:
      "Raw Thrills builds the machines that arcade collectors and enthusiasts recognize on sight. Premium cabinets for serious game rooms.",
  },
]
