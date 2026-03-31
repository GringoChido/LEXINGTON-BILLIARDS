export const company = {
  name: "Lexington Billiards & Spas",
  shortName: "Lexington Billiards",
  owner: "Greg Wilson",
  family: "Wilson",
  established: 1975,
  yearsInBusiness: new Date().getFullYear() - 1975,
  address: {
    street: "1431 Leestown Rd",
    city: "Lexington",
    state: "KY",
    zip: "40511",
    full: "1431 Leestown Rd, Lexington, KY 40511",
    mapsUrl: "https://maps.google.com/?q=1431+Leestown+Rd+Lexington+KY+40511",
  },
  phone: {
    display: "(859) 255-7639",
    href: "tel:8592557639",
  },
  hours: {
    weekday: "Mon-Sat 10am-6pm",
    weekend: "Sunday Closed",
    full: "Mon-Sat 10am-6pm | Sunday Closed",
  },
  social: {
    facebook: "https://www.facebook.com/Lexington-Billiards-Spas-128542447211835/",
    instagram: "https://www.instagram.com/lexingtonbilliards/",
  },
  deliveryRadius: "50 miles",
  serviceArea: "Central Kentucky",
  tagline: "Make Your Home the Best House on the Block",
} as const

import type { T } from "@/lib/i18n/context"

export const navLinks: { href: string; label: T }[] = [
  { href: "/pool-tables", label: { en: "Pool Tables", es: "Mesas de Billar" } },
  { href: "/spas", label: { en: "Hot Tubs & Spas", es: "Jacuzzis y Spas" } },
  { href: "/big-green-egg", label: { en: "Big Green Egg", es: "Big Green Egg" } },
  { href: "/arcade-machines", label: { en: "Arcade", es: "Arcade" } },
  { href: "/billiard-accessories", label: { en: "Game Room Accessories", es: "Accesorios" } },
  { href: "/blog", label: { en: "Blog", es: "Blog" } },
  { href: "/about", label: { en: "About", es: "Nosotros" } },
  { href: "/contact", label: { en: "Contact", es: "Contacto" } },
]

export const whyUs = [
  {
    title: "Built on Pool Tables Since 1975",
    description: "The Wilson family has sold, delivered, and serviced pool tables in Central Kentucky for 50 years. C.L. Bailey, Brunswick, Connelly, Imperial, American Heritage.",
  },
  {
    title: "Lexington's Oldest Spa Dealer",
    description: "Nobody in Central Kentucky has been selling and servicing hot tubs longer than us. Factory-authorized service on every brand we carry.",
  },
  {
    title: "Free Delivery & Professional Setup",
    description: "Within 50 miles of Lexington. Tables delivered, assembled, and leveled. Spas installed and ready to soak.",
  },
  {
    title: "50 Years of Service & Repair",
    description: "Re-cloth, re-cushion, cue repair, spa maintenance — we do it all. Our service team covers all of Central and Eastern Kentucky.",
  },
] as const
