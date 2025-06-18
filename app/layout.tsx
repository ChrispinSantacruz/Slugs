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
  generator: 'v0.dev',
  icons: {
    icon: [
      {
        url: '/images/team/luthorbarbosa.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/images/team/luthorbarbosa.png',
        sizes: '16x16',
        type: 'image/png',
      }
    ],
    shortcut: '/images/team/luthorbarbosa.png',
    apple: '/images/team/luthorbarbosa.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/images/team/luthorbarbosa.png" type="image/png" />
        <link rel="shortcut icon" href="/images/team/luthorbarbosa.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/team/luthorbarbosa.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
