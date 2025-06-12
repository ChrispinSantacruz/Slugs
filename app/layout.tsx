import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/ThemeProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SlugDudes - Immortal Mutant Slug Colony",
  description:
    "Enter the viscous universe of immortal mutant slugs from the primordial slime colony. The future is slimy, and it's here.",
  keywords: "SlugDudes, cryptocurrency, NFT, blockchain, mutant slugs, DeFi, gaming",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
