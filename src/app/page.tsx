import { Navbar } from "@/components/navbar"
import { HeroSlider } from "@/components/hero-slider"
import { ExperienceGrid } from "@/components/experience-grid"
import { BrandStrip } from "@/components/brand-strip"
import { WhyUs } from "@/components/why-us"
import { Testimonials } from "@/components/testimonials"
import { SocialStrip } from "@/components/social-strip"
import { ContactCta } from "@/components/contact-cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />
        <ExperienceGrid />
        <WhyUs />
        <BrandStrip />
        <Testimonials />
        <SocialStrip />
        <ContactCta />
      </main>
      <Footer />
    </>
  )
}
