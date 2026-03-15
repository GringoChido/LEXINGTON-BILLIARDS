import { Navbar } from "@/components/navbar"
import { HeroSlider } from "@/components/hero-slider"
import { ExperienceGrid } from "@/components/experience-grid"
import { ClBaileyFeature } from "@/components/cl-bailey-feature"
import { BrandStrip } from "@/components/brand-strip"
import { WhyUs } from "@/components/why-us"
import { Testimonials } from "@/components/testimonials"
import { SocialStrip } from "@/components/social-strip"
import { ContactCta } from "@/components/contact-cta"
import { Footer } from "@/components/footer"
import { WaveDivider, AngleDivider } from "@/components/section-divider"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />
        <WaveDivider from="#1C1917" to="var(--color-background)" />
        <ExperienceGrid />
        <AngleDivider from="var(--color-background)" to="#1C1917" />
        <ClBaileyFeature />
        <WaveDivider from="#1C1917" to="var(--color-surface)" />
        <BrandStrip />
        <AngleDivider from="var(--color-surface)" to="var(--color-background)" flip />
        <WhyUs />
        <WaveDivider from="var(--color-background)" to="var(--color-surface)" />
        <Testimonials />
        <AngleDivider from="var(--color-surface)" to="#1C1917" />
        <SocialStrip />
        <WaveDivider from="#1C1917" to="var(--color-primary)" />
        <ContactCta />
      </main>
      <Footer />
    </>
  )
}
