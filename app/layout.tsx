import "./globals.css"
import { Figtree } from "next/font/google"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const display = Figtree({ subsets: ["latin"], variable: "--font-display", weight: ["600","700","800"] })

export const metadata = {
  title: 'EthyleneAbsorber — Konsep Premium | Dickson Synergy',
  description: 'Jaga kesegaran buah lebih lama dengan teknologi ethylene absorber berkualitas tinggi.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${display.variable} antialiased bg-white text-gray-800 selection:bg-lime-200 selection:text-black overflow-x-hidden max-w-[100vw]`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
