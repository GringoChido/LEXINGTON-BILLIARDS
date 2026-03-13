import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { CategoryGrid } from "@/components/category-grid"
import { AboutBand } from "@/components/about-band"
import { CtaBand } from "@/components/cta-band"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-[var(--header-height-mobile)] lg:pt-[var(--header-height)]">
        <Hero />
        <TrustBar />
        <CategoryGrid />
        <AboutBand />
        <CtaBand />
      </main>
      <Footer />
    </>
  )
}
