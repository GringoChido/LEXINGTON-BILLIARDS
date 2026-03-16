export interface ExperienceCategory {
  href: string
  label: string
  experienceTitle: string
  tagline: string
  image: string
}

export const experienceCategories: ExperienceCategory[] = [
  {
    href: "/pool-tables",
    label: "Pool Tables",
    experienceTitle: "Pool Tables",
    tagline: "The game room starts here",
    image: "/images/tile-pool-tables.jpg",
  },
  {
    href: "/spas",
    label: "Hot Tubs & Spas",
    experienceTitle: "Hot Tubs & Spas",
    tagline: "Your backyard is missing one",
    image: "/images/tile-hot-tubs.jpg",
  },
  {
    href: "/big-green-egg",
    label: "Big Green Egg",
    experienceTitle: "Big Green Egg",
    tagline: "It\u2019s not a grill. It\u2019s an obsession.",
    image: "/images/tile-big-green-egg.webp",
  },
  {
    href: "/arcade-machines",
    label: "Arcade Machines",
    experienceTitle: "Arcade Machines",
    tagline: "Bring the arcade home",
    image: "/images/tile-arcade.avif",
  },
  {
    href: "/billiard-accessories",
    label: "Billiard Accessories",
    experienceTitle: "Billiard Accessories",
    tagline: "Everything your game room needs",
    image: "/images/tile-accessories.webp",
  },
]

export const productCategories = [
  { href: "/pool-tables", label: "Pool Tables", shortLabel: "Tables", image: "/images/pool-tables.webp" },
  { href: "/spas", label: "Hot Tubs & Spas", shortLabel: "Spas", image: "/images/hot-tubs.jpg" },
  { href: "/big-green-egg", label: "Big Green Egg", shortLabel: "BGE", image: "/images/big-green-egg.jpg" },
  { href: "/arcade-machines", label: "Arcade Machines", shortLabel: "Arcade", image: "/images/arcade.jpg" },
  { href: "/billiard-accessories", label: "Game Room Accessories", shortLabel: "Accessories", image: "/images/accessories.jpg" },
] as const

export const testimonials = [
  {
    quote:
      "We bought our first pool table from Greg\u2019s dad in 1982. Just bought our third from Greg. That tells you everything about this family.",
    author: "Mike R.",
    location: "Georgetown, KY",
  },
  {
    quote:
      "They delivered and installed our hot tub in a single afternoon. Two years later, it still runs perfectly. Best purchase we\u2019ve ever made for our home.",
    author: "Sarah & Tom L.",
    location: "Lexington, KY",
  },
  {
    quote:
      "I priced tables online for months. Lexington Billiards matched the price and gave me free delivery, free installation, and 29 cloth color choices. No contest.",
    author: "James K.",
    location: "Richmond, KY",
  },
]
