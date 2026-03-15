import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PoolTablesContent } from "./content"

export const metadata: Metadata = {
  title: "Pool Tables | Lexington Billiards & Spas",
  description:
    "C.L. Bailey, Brunswick, Olhausen, Imperial, and American Heritage pool tables. Free delivery within 50 miles, professional installation, and 29 cloth color choices. Lexington's oldest billiards dealer since 1975.",
}

export default function PoolTablesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PoolTablesContent />
      </main>
      <Footer />
    </>
  )
}
