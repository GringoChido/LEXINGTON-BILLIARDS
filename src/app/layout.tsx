import type { Metadata } from "next"
import { Outfit, DM_Sans } from "next/font/google"
import "./globals.css"

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default:
      "Lexington Billiards & Spas | Pool Tables, Hot Tubs & Game Room Furniture Since 1975",
    template: "%s | Lexington Billiards & Spas",
  },
  description:
    "Make your home the best house on the block. Premium pool tables, hot tubs, Big Green Egg grills, and arcade machines. Family-owned since 1975. Free delivery & expert installation in Central Kentucky.",
  metadataBase: new URL("https://lexingtonbilliardsandspas.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Lexington Billiards & Spas",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${dmSans.variable} bg-background text-text font-body antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
