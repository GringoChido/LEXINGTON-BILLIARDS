import type { BrandDetailContent } from "@/components/brand-detail-page"

export type BrandData = { categoryName: string; established?: string; content: BrandDetailContent }

export const brandContent: Record<string, BrandData> = {
  "american-whirlpool": {
    categoryName: "Hot Tubs & Spas",
    content: {
      heroImage: "/images/american-whirlpool-lifestyle.webp",
      story: "American Whirlpool leads the Lexington Billiards spa lineup with advanced hydrotherapy engineering, energy-efficient insulation, and commercial-grade components built to perform for decades. From intimate two-person models to full-size family spas, every American Whirlpool is designed for the way you actually live.",
      highlights: [
        "Advanced hydrotherapy jet systems",
        "Energy-efficient full-foam insulation",
        "Stainless steel frame construction",
        "LED mood lighting standard",
        "Digital topside controls",
        "Models from 2 to 8+ persons",
      ],
      collections: [
        { name: "200 Series", description: "Entry-level value models with core hydrotherapy features and energy-efficient engineering." },
        { name: "400 Series", description: "Mid-range spas with enhanced jet configurations, upgraded controls, and premium seating layouts." },
        { name: "600 Series", description: "Premium models with the most powerful jet systems, advanced lighting, and top-tier insulation." },
        { name: "Swim Spas", description: "Full-length swim-in-place systems combining fitness swimming with hydrotherapy relaxation." },
      ],
      craftsmanship: "American Whirlpool builds on a stainless steel frame \u2014 not wood \u2014 for a structure that won\u2019t rot, warp, or weaken over time. Full-foam insulation locks in heat and reduces operating costs. Commercial-grade pumps deliver powerful, consistent jet pressure. The ozone water purification system keeps your water clean with fewer chemicals. Every spa is built with a premium acrylic shell that resists fading, cracking, and staining.",
      whyBuyFromUs: "When you buy an American Whirlpool from Lexington Billiards, you get more than a hot tub \u2014 you get a relationship. Free delivery and installation, water care training so you know exactly how to maintain your spa, and factory-authorized service from technicians who know these spas inside and out. We stock chemicals, filters, and replacement parts year-round. We\u2019ve been Central Kentucky\u2019s spa dealer for over 50 years.",
      faqs: [
        { question: "How energy-efficient are American Whirlpool spas?", answer: "Very efficient. American Whirlpool uses full-foam insulation and tight-fitting covers to minimize heat loss. Most owners report monthly operating costs between $20 and $40 depending on usage and climate. The stainless steel frame and efficient pumps are engineered to reduce energy consumption without sacrificing jet power." },
        { question: "What sizes does American Whirlpool offer?", answer: "American Whirlpool offers models ranging from intimate 2-person spas to full-size 8+ person models, plus swim spas for fitness swimming. Visit our Lexington showroom to sit in every model \u2014 our spas are plumbed, powered, and ready for you to test." },
        { question: "What is the warranty on American Whirlpool?", answer: "American Whirlpool provides a comprehensive manufacturer warranty covering the shell, structure, plumbing, and components. As a factory-authorized dealer, Lexington Billiards handles all warranty service locally \u2014 no waiting for out-of-state technicians." },
        { question: "Do American Whirlpool spas have good jets?", answer: "Yes. American Whirlpool is known for their advanced hydrotherapy jet systems. Multiple jet types target different muscle groups, and the commercial-grade pumps deliver consistent, powerful pressure. The 400 and 600 Series models offer the most advanced jet configurations." },
        { question: "Are American Whirlpool spas easy to maintain?", answer: "Yes. The ozone water purification system reduces the chemicals needed to keep your water clean. Digital topside controls make temperature and jet management simple. And Lexington Billiards provides water care training with every purchase \u2014 we teach you exactly how to maintain your spa." },
      ],
    },
  },
  "vita-spa": {
    categoryName: "Hot Tubs & Spas",
    content: {
      heroImage: "/images/vita-spa-lifestyle.webp",
      story: "Vita Spa combines cutting-edge jet technology with elegant design to deliver a hydrotherapy experience that rivals models at twice the price. Innovation meets value \u2014 Vita Spa proves you don\u2019t have to overspend to get an exceptional hot tub.",
      highlights: [
        "Innovative jet designs",
        "Excellent value-to-performance ratio",
        "Energy-efficient engineering",
        "Multiple therapy seat configurations",
        "LED lighting systems",
        "Easy-access equipment compartment",
      ],
      collections: [
        { name: "100 Series", description: "Compact models perfect for smaller spaces and couples. Core hydrotherapy features at an accessible price." },
        { name: "300 Series", description: "Family-sized spas with versatile seating and multiple jet zones for whole-body therapy." },
        { name: "500 Series", description: "Premium models with advanced jet technology, upgraded lighting, and enhanced insulation." },
        { name: "700 Series", description: "Luxury-tier spas with the most powerful jet systems, premium finishes, and top-of-the-line features." },
      ],
      craftsmanship: "Vita Spa builds with a durable acrylic shell reinforced with a steel structure for long-term stability. Polyurethane foam insulation and weatherproof cabinetry keep heat in and energy costs down. High-flow circulation pumps deliver powerful jet therapy without excessive noise. The easy-access equipment compartment makes maintenance straightforward \u2014 a thoughtful engineering detail that owners appreciate.",
      whyBuyFromUs: "Vita Spa represents the sweet spot \u2014 premium hydrotherapy without the premium price tag. Lexington Billiards delivers every Vita Spa with free installation, water care training, and the same factory-authorized service we provide on every brand we carry. We\u2019ve been helping Central Kentucky families find the right spa for over 50 years, and Vita Spa consistently earns our recommendation for value-conscious buyers.",
      faqs: [
        { question: "Is Vita Spa a good brand?", answer: "Yes. Vita Spa has built a strong reputation for delivering quality hydrotherapy at a competitive price. Their innovative jet designs and energy-efficient engineering rival spas at significantly higher price points. At Lexington Billiards, we stand behind every Vita Spa with factory-authorized service and lifetime support." },
        { question: "How does Vita Spa compare to American Whirlpool?", answer: "Both are excellent brands. American Whirlpool tends toward the premium end with more advanced features and commercial-grade construction. Vita Spa delivers exceptional value \u2014 similar hydrotherapy quality at a more accessible price. Visit our showroom to compare them side by side." },
        { question: "What sizes does Vita Spa come in?", answer: "Vita Spa offers models from compact 2-3 person spas in the 100 Series to full-size 7-8 person luxury models in the 700 Series. Our Lexington showroom has multiple models plumbed and running so you can test the jets and find your perfect fit." },
        { question: "Are Vita Spa hot tubs energy efficient?", answer: "Yes. Vita Spa uses polyurethane foam insulation, tight-fitting covers, and efficient circulation pumps to minimize energy consumption. Most owners report monthly operating costs comparable to other premium spa brands \u2014 typically $20 to $45 per month." },
        { question: "What warranty does Vita Spa offer?", answer: "Vita Spa provides a comprehensive manufacturer warranty covering the shell, structure, plumbing, and electrical components. Lexington Billiards is a factory-authorized service center, so all warranty work is handled locally by our trained technicians." },
      ],
    },
  },
}
