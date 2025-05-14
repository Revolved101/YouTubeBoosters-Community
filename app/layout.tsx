import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import DonationBanner from "@/components/donation-banner"
import FloatingDonateButton from "@/components/floating-donate-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "YTBoard - YouTube Channel Directory",
  description: "Discover and promote YouTube channels",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <DonationBanner />
          {children}
          <FloatingDonateButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
