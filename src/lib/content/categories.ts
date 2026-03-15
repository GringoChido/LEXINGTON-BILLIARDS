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
    experienceTitle: "The Game Room",
    tagline: "Where legends are made and rivalries never die",
    image: "/images/pool-tables.jpg",
  },
  {
    href: "/spas",
    label: "Hot Tubs & Spas",
    experienceTitle: "The Backyard",
    tagline: "Your private escape, right outside the back door",
    image: "/images/hot-tubs.jpg",
  },
  {
    href: "/big-green-egg",
    label: "Big Green Egg",
    experienceTitle: "The Cookout",
    tagline: "Low and slow or hot and fast — one grill does it all",
    image: "/images/big-green-egg.jpg",
  },
  {
    href: "/arcade-machines",
    label: "Arcade Machines",
    experienceTitle: "The Party",
    tagline: "Pac-Man, Galaga, and 58 of their closest friends",
    image: "/images/arcade.webp",
  },
]

export const productCategories = [
  { href: "/pool-tables", label: "Pool Tables", shortLabel: "Tables", image: "/images/pool-tables.jpg" },
  { href: "/spas", label: "Hot Tubs & Spas", shortLabel: "Spas", image: "/images/hot-tubs.jpg" },
  { href: "/big-green-egg", label: "Big Green Egg", shortLabel: "BGE", image: "/images/big-green-egg.jpg" },
  { href: "/arcade-machines", label: "Arcade Machines", shortLabel: "Arcade", image: "/images/arcade.webp" },
  { href: "/accessories", label: "Accessories", shortLabel: "Accessories", image: "/images/accessories.jpg" },
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
