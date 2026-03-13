import type { Metadata } from "next"
import { Barlow_Condensed, DM_Sans } from "next/font/google"
import "./globals.css"

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow-condensed",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Lexington Billiards and Spas | Pool Tables, Hot Tubs & Game Room Furniture",
    template: "%s | Lexington Billiards and Spas",
  },
  description:
    "Visit Lexington's oldest game room showroom — pool tables, hot tubs, Big Green Egg grills, and arcade machines. Family-owned since 1975. Free delivery & expert installation in Central Kentucky.",
  metadataBase: new URL("https://lexingtonbilliardsandspas.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Lexington Billiards and Spas",
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
        className={`${barlowCondensed.variable} ${dmSans.variable} bg-background text-text font-body antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
