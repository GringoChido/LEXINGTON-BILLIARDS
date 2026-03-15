import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArcadeContent } from "./content"

export const metadata: Metadata = {
  title: "Arcade Machines | Lexington Billiards & Spas",
  description:
    "Custom multicade cabinets with 60+ classic games and Raw Thrills premium arcade machines. The perfect addition to any Lexington game room. Visit our showroom today.",
}

export default function ArcadePage() {
  return (
    <>
      <Navbar />
      <main>
        <ArcadeContent />
      </main>
      <Footer />
    </>
  )
}
