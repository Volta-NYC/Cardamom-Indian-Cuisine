import "./globals.css"
import { Playfair_Display, Inter } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata = {
  title: "Cardamom Indian Cuisine — Sunnyside, NY",
  description:
    "Authentic Indian cuisine in Sunnyside, Queens NY. Dine-in, takeaway, and delivery. Halal, vegan & vegetarian options available.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-dark-base text-cream font-sans">
        {children}
      </body>
    </html>
  )
}
