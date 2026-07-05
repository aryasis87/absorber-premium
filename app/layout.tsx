import "./globals.css"
import { Figtree } from "next/font/google"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const display = Figtree({ subsets: ["latin"], variable: "--font-display", weight: ["600","700","800"] })

const __jsonld = {"@context":"https://schema.org","@type":"CreativeWork","name":"EthyleneAbsorber — Konsep Premium","description":"Landing page produk ethylene absorber","url":"https://absorber-premium.vercel.app"};

export const metadata = {
  metadataBase: new URL("https://absorber-premium.vercel.app"),
  title: "EthyleneAbsorber — Konsep Premium | Dickson Synergy",
  description: "Landing page EthyleneAbsorber konsep \"Premium\": bersih dan meyakinkan, menonjolkan kualitas dan kealamian produk.",
  applicationName: "EthyleneAbsorber",
  keywords: ["ethylene absorber", "kesegaran buah", "landing page premium", "desain web"],
  authors: [{ name: "EthyleneAbsorber" }],
  creator: "EthyleneAbsorber",
  publisher: "EthyleneAbsorber",
  alternates: { canonical: "https://absorber-premium.vercel.app" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://absorber-premium.vercel.app",
    siteName: "EthyleneAbsorber",
    title: "EthyleneAbsorber — Konsep Premium | Dickson Synergy",
    description: "Landing page EthyleneAbsorber konsep \"Premium\": bersih dan meyakinkan, menonjolkan kualitas dan kealamian produk.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "EthyleneAbsorber — Konsep Premium | Dickson Synergy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EthyleneAbsorber — Konsep Premium | Dickson Synergy",
    description: "Landing page EthyleneAbsorber konsep \"Premium\": bersih dan meyakinkan, menonjolkan kualitas dan kealamian produk.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${display.variable} antialiased bg-white text-gray-800 selection:bg-lime-200 selection:text-black overflow-x-hidden max-w-[100vw]`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  )
}
