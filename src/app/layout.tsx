import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/about-us/navigation";
// import { Toaster } from "@/components/ui/toaster"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Bright Arc",
  description:
    "Bright Arc is a web application that provides a platform for students to connect with their academic advisors and explore various resources related to their academic pursuits.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body className={`${poppins.variable} font-poppins`}>
        <header >
        <Navigation />
        </header>
        {children}
        {/* <Toaster /> */}
      </body>
    </html>
  )
}
