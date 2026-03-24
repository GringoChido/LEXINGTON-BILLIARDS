import type { BrandDetailContent } from "@/components/brand-detail-page"

export type BrandData = { categoryName: string; content: BrandDetailContent }

export const brandContent: Record<string, BrandData> = {
  "ram-game-room": {
    categoryName: "Game Room Accessories",
    content: {
      heroImage: "/images/ram-lifestyle.webp",
      story: "RAM Game Room is a one-stop shop for everything that makes a game room complete. Bar stools, pub tables, poker tables, dartboards, spectator chairs, wall decor, and outdoor entertainment furniture. From game night essentials to weather-resistant patio bars \u2014 RAM brings it all together.",
      highlights: [
        "Complete game room furniture line",
        "Indoor & outdoor options",
        "Bar stools in 50+ styles",
        "Poker tables & accessories",
        "Dartboard cabinets",
        "Wall decor & signage",
      ],
      collections: [
        { name: "Bar Stools & Seating", description: "Over 50 styles of bar stools, spectator chairs, and pub seating in wood, metal, and upholstered options." },
        { name: "Pub & Bistro Tables", description: "Pub-height and bistro tables in styles from rustic to contemporary, matching any bar stool in the line." },
        { name: "Poker Tables", description: "Dedicated poker tables with drink holders, chip trays, and premium felt surfaces for serious game nights." },
        { name: "Dartboard Cabinets", description: "Solid wood dartboard cabinets with integrated scoreboards, dart storage, and classic styling." },
        { name: "Outdoor & Patio Furniture", description: "Weather-resistant outdoor bar stools, pub tables, and entertainment furniture built to last in any climate." },
        { name: "Wall Decor & Signs", description: "Game room wall art, vintage-style signs, neon lights, and decorative pieces to complete the space." },
      ],
      craftsmanship: "RAM builds with solid wood and metal construction, commercial-grade vinyl upholstery that stands up to heavy use, and weather-resistant outdoor finishes that don\u2019t fade or crack. Every piece is designed to handle real use in real game rooms \u2014 not just look good in a catalog.",
      whyBuyFromUs: "RAM\u2019s complete furniture line means you can outfit your entire game room from one brand with a consistent look. At Lexington Billiards, you can see RAM furniture in our showroom \u2014 sit on the stools, feel the poker table felt, check the dartboard cabinet quality. We help you plan your game room layout and deliver everything together.",
      faqs: [
        { question: "What kind of furniture does RAM Game Room make?", answer: "RAM makes everything for the game room and beyond \u2014 bar stools (50+ styles), pub and bistro tables, poker tables, dartboard cabinets, spectator chairs, wall decor, signage, and outdoor entertainment furniture. It\u2019s a complete line designed to work together." },
        { question: "Does RAM make outdoor furniture?", answer: "Yes. RAM offers a line of weather-resistant outdoor bar stools, pub tables, and entertainment furniture with finishes specifically engineered to withstand sun, rain, and temperature changes. Perfect for patios, decks, and outdoor bars." },
        { question: "What styles of bar stools are available?", answer: "RAM offers over 50 bar stool styles spanning traditional, contemporary, rustic, and industrial aesthetics. Materials include solid wood, metal, and combinations with commercial-grade vinyl upholstery in dozens of colors. Visit our showroom to sit in them." },
        { question: "Does RAM sell poker tables?", answer: "Yes. RAM makes dedicated poker tables with built-in drink holders, chip trays, and premium playing surfaces. Available in multiple sizes and styles to match your game room. See them in our Lexington showroom." },
        { question: "Can I see RAM furniture in the showroom?", answer: "Yes. Lexington Billiards keeps RAM Game Room furniture on display in our showroom at 1431 Leestown Road. Come see the bar stools, poker tables, and accessories in person. We\u2019re open Monday through Saturday, 10am to 6pm." },
      ],
    },
  },
  "falcon-cues": {
    categoryName: "Game Room Accessories",
    content: {
      heroImage: "/images/falcon-cues-lifestyle.webp",
      story: "Falcon has been crafting precision cue sticks for serious players since 1987. From entry-level house cues to professional-grade competition sticks \u2014 premium shafts, exotic wraps, and tips that deliver real performance at the table.",
      highlights: [
        "Crafted since 1987",
        "Professional-grade to entry-level options",
        "Premium North American maple shafts",
        "Exotic wood inlays and wraps",
        "Precision ferrules and tips",
        "Break cues and jump cues available",
      ],
      collections: [
        { name: "Classic Series", description: "Entry-level cues with quality maple shafts and dependable tips. Perfect for home use and developing players." },
        { name: "Pro Series", description: "Intermediate cues with upgraded shafts, precision ferrules, and performance tips for competitive players." },
        { name: "Elite Series", description: "Advanced cues with exotic wood inlays, premium leather wraps, and competition-grade components." },
        { name: "Specialty Cues", description: "Break cues, jump cues, and specialty sticks designed for specific shots and advanced technique." },
      ],
      craftsmanship: "Falcon starts with kiln-dried North American hard maple \u2014 the gold standard for cue shafts. Every cue is hand-turned and precision-balanced for consistent stroke mechanics. Layered leather tips are carefully shaped for optimal ball contact. Stainless steel joints provide a solid, vibration-free hit. The exotic wood and Irish linen wraps aren\u2019t just decorative \u2014 they provide real grip and moisture management.",
      whyBuyFromUs: "Choosing the right cue stick is personal \u2014 weight, balance, tip size, and wrap feel all matter. At Lexington Billiards, you can hold and hit with Falcon cues on our showroom tables before you buy. Our staff plays pool and can help you find the right cue for your game. We also offer professional cue repair and re-tipping service.",
      faqs: [
        { question: "What makes Falcon Cues different?", answer: "Falcon has been building precision cue sticks since 1987, focusing on quality materials and balanced construction. North American maple shafts, layered leather tips, stainless steel joints, and exotic wraps deliver a cue that performs as well as it looks. The range spans from affordable house cues to professional-grade competition sticks." },
        { question: "What weight cue should I buy?", answer: "Most players prefer cues between 19 and 21 ounces. Lighter cues (18-19 oz) offer more finesse and control, while heavier cues (20-21 oz) provide more power and stability. The best approach is to try several weights \u2014 visit our Lexington showroom and hit some balls with different Falcon models." },
        { question: "Does Falcon make break cues?", answer: "Yes. Falcon offers dedicated break cues and jump cues in their Specialty Series. Break cues use harder tips and stiffer shafts for maximum power on the break shot, while jump cues are shorter with phenolic tips for elevated cue ball jumps." },
        { question: "Can I try Falcon Cues in the showroom?", answer: "Absolutely. Lexington Billiards keeps Falcon cues on display and available for testing. Grab one, hit some balls on our showroom tables, and feel the difference. We\u2019re at 1431 Leestown Road, open Monday through Saturday, 10am to 6pm." },
        { question: "Does Lexington Billiards do cue repair?", answer: "Yes. We offer professional cue repair services including re-tipping, shaft straightening, wrap replacement, and ferrule repair. Whether you have a Falcon or any other brand, bring it in and we\u2019ll get it playing like new." },
      ],
    },
  },
  imperial: {
    categoryName: "Game Room Accessories",
    content: {
      heroImage: "/images/accessories.webp",
      story: "Imperial holds official licenses from the NFL, NBA, MLB, NHL, and NCAA. Team-branded pool table felt, cues, dart cabinets, pub tables, and wall art \u2014 represent your team in your game room with officially licensed gear.",
      highlights: [
        "Official NFL, NBA, MLB, NHL, NCAA licenses",
        "Team-branded felt & cue sticks",
        "Dart cabinets & dartboards",
        "Pub tables & bar stools",
        "Wall art & decorative signs",
        "Perfect gifts for sports fans",
      ],
      collections: [
        { name: "Team Pool Table Felt", description: "Officially licensed felt featuring your team\u2019s logo and colors. Professional-grade printing on tournament-quality cloth." },
        { name: "Team Cue Sticks", description: "Cue sticks featuring official team logos. Available for all major league and NCAA teams." },
        { name: "Dart Cabinets", description: "Solid wood dart cabinets with team logos, integrated scoreboards, and dart storage." },
        { name: "Pub Tables & Stools", description: "Team-branded pub tables and bar stools with official logos and team-color vinyl upholstery." },
        { name: "Wall Art & Decor", description: "Officially licensed wall art, vintage-style signs, neon lights, and decorative pieces." },
      ],
      craftsmanship: "Imperial\u2019s official league licensing ensures every product features authentic, approved logos and team colors. Pool table felt uses commercial-grade printing processes for vibrant, durable results that hold up to years of play. Solid wood dart cabinets are built to last, and team-color vinyl upholstery on pub furniture uses commercial-grade materials resistant to fading and wear.",
      whyBuyFromUs: "Lexington Billiards is your local source for officially licensed game room gear. We carry Imperial\u2019s full line of team products \u2014 especially popular for University of Kentucky Wildcats fans. See the quality in person at our showroom, and we\u2019ll help you plan a team-themed game room that\u2019s the envy of every fan in your circle.",
      faqs: [
        { question: "What teams does Imperial carry?", answer: "Imperial holds official licenses from the NFL (all 32 teams), NBA, MLB, NHL, and the NCAA. That means virtually every major professional and college team is available. University of Kentucky Wildcats products are among our most popular sellers in Lexington." },
        { question: "Can I get UK Wildcats gear for my game room?", answer: "Absolutely. Imperial makes officially licensed University of Kentucky pool table felt, cues, dart cabinets, pub tables, and wall art. We keep popular UK items in stock and can order the full range. Visit our showroom to see what\u2019s available." },
        { question: "Does Imperial make pool table felt with my team\u2019s logo?", answer: "Yes. Imperial produces officially licensed pool table felt for all NFL, NBA, MLB, NHL, and NCAA teams. The felt features your team\u2019s official logo and colors, printed with commercial-grade processes for vibrant, long-lasting results." },
        { question: "What other team products does Imperial sell?", answer: "Beyond pool table felt, Imperial makes team-branded cue sticks, dart cabinets with team logos, pub tables and bar stools in team colors, wall art, neon signs, and decorative accessories. You can outfit an entire game room in your team\u2019s colors." },
        { question: "Can I see Imperial products in the showroom?", answer: "Yes. Lexington Billiards carries Imperial team products in our showroom at 1431 Leestown Road. We stock popular items and can order the full range for any team. Stop by Monday through Saturday, 10am to 6pm." },
      ],
    },
  },
  toltec: {
    categoryName: "Game Room Accessories",
    content: {
      heroImage: "/images/accessories.webp",
      story: "Toltec builds pendant lights and billiard fixtures that transform a game room from functional to unforgettable. Hand-blown art glass shades in dozens of styles \u2014 every light is a conversation piece that happens to illuminate your table perfectly.",
      highlights: [
        "Hand-blown art glass shades",
        "Dozens of shade styles and colors",
        "2-light and 3-light billiard fixtures",
        "Pendant lights for any room",
        "Commercial-quality hardware",
        "UL listed for safety",
      ],
      collections: [
        { name: "Billiard & Pool Table Lights", description: "2-light and 3-light fixtures designed specifically for pool tables. Proper spread and height for even illumination across the playing surface." },
        { name: "Pendant Lights", description: "Individual pendant fixtures for bars, kitchen islands, and accent lighting throughout the home." },
        { name: "Mini Pendants", description: "Compact pendant fixtures perfect for smaller spaces, grouped installations, and decorative accent lighting." },
        { name: "Bar Lights", description: "Multi-light fixtures designed for bars, pub tables, and entertainment areas." },
      ],
      craftsmanship: "Every Toltec shade is hand-blown glass \u2014 no two are exactly alike. The glass artisans create swirls, colors, and textures that give each fixture a one-of-a-kind character. The hardware is commercial-quality steel and brass with multiple finish options including dark granite, brushed nickel, bronze, and chrome. Adjustable chain lengths let you hang at the perfect height. Every fixture is UL listed.",
      whyBuyFromUs: "Choosing a billiard light is about seeing it in person \u2014 photos don\u2019t capture the depth of hand-blown glass. At Lexington Billiards, we have Toltec lights installed over our showroom tables so you can see exactly how they look and how they light the playing surface. We help you choose the right size, style, and height for your table and room.",
      faqs: [
        { question: "What size billiard light do I need?", answer: "Your light should be approximately two-thirds the length of your table. For a 7-foot table, a 2-light fixture works well. For 8-foot and 9-foot tables, a 3-light fixture provides better coverage. Visit our showroom to see both sizes installed over actual tables." },
        { question: "How high should a pool table light hang?", answer: "The bottom of the shade should hang 32 to 36 inches above the playing surface. This provides even illumination without creating glare or obstructing player movement. Toltec fixtures include adjustable chain lengths to dial in the perfect height for your ceiling." },
        { question: "Are Toltec shades hand-blown?", answer: "Yes. Every Toltec art glass shade is hand-blown by skilled glass artisans. The hand-blown process creates unique swirls, colors, and textures in every shade \u2014 no two are exactly identical. This gives each fixture genuine one-of-a-kind character." },
        { question: "What finishes does Toltec offer?", answer: "Toltec fixtures are available in multiple hardware finishes including dark granite, brushed nickel, bronze, and chrome. These finishes pair with dozens of art glass shade styles, so you can match virtually any room decor or personal style." },
        { question: "Can I see Toltec lights installed in the showroom?", answer: "Yes. Lexington Billiards has Toltec billiard lights installed and illuminated over our showroom pool tables. Seeing them in person is the best way to appreciate the hand-blown glass quality and choose the right shade style for your room." },
      ],
    },
  },
}
