import type { Metadata } from "next"
import { Fraunces, DM_Sans, DM_Mono } from "next/font/google"
import { Providers } from "@/components/providers"
import { ChatWidget } from "@/components/chat-widget"
import { StructuredData } from "@/components/structured-data"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
})

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
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
        className={`${fraunces.variable} ${dmSans.variable} ${dmMono.variable} bg-background text-text font-body antialiased overflow-x-hidden`}
      >
        <StructuredData />
        <Providers>
          {children}
          <ChatWidget />
        </Providers>
      </body>
    </html>
  )
}
