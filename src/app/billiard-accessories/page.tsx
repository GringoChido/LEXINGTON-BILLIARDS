import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BilliardAccessoriesContent } from "./content"

export const metadata: Metadata = {
  title: "Billiard & Game Room Accessories | Lexington Billiards & Spas",
  description:
    "Cue sticks, table lights, bar stools, game room furniture, and billiard supplies. RAM Game Room, Falcon Cues, Imperial, and Toltec Lighting — all in our Lexington showroom since 1975.",
}

export default function BilliardAccessoriesPage() {
  return (
    <>
      <Navbar />
      <main>
        <BilliardAccessoriesContent />
      </main>
      <Footer />
    </>
  )
}
