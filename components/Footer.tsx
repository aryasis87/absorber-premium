'use client'

import Link from 'next/link'
import { 
  Phone, Mail, MapPin, 
  Facebook, Twitter, Instagram, Linkedin, 
  Leaf, Package, Gift, Truck, HelpCircle, MessageSquare, BookOpen
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-[#0a2e1d] to-[#071e12] text-gray-300">
      {/* Decorative top gradient */}
      <div className="h-1.5 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500"></div>
      
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand info */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg">
                <Leaf className="text-white w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Ethylene<span className="font-light">Absorber</span>
                </h3>
                <p className="text-emerald-400 text-sm font-medium tracking-wider mt-1">
                  PREMIUM QUALITY SOLUTIONS
                </p>
              </div>
            </div>
            
            <p className="mb-8 text-gray-400 max-w-xs text-lg leading-relaxed">
              Solusi premium untuk menjaga kesegaran buah selama distribusi dan ekspor dengan teknologi ethylene absorber terkini.
            </p>
            
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-emerald-900/50 flex items-center justify-center hover:bg-emerald-700 transition-all duration-300 group"
                >
                  <social.icon className="text-gray-300 group-hover:text-white" size={20} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8 pb-3 border-b border-emerald-700/50">
              Navigasi
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="flex items-center gap-3 group py-2.5 hover:text-emerald-400 transition-colors duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-900/50 flex items-center justify-center group-hover:bg-emerald-700 transition-colors">
                      <link.icon size={16} className="text-emerald-400" />
                    </div>
                    <span className="text-lg font-medium">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8 pb-3 border-b border-emerald-700/50">
              Produk Kami
            </h4>
            <ul className="space-y-4">
              {products.map((product, index) => (
                <li key={index}>
                  <Link 
                    href={product.href} 
                    className="flex items-center gap-3 group py-2.5 hover:text-emerald-400 transition-colors duration-300"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-900/50 flex items-center justify-center group-hover:bg-emerald-700 transition-colors">
                      <product.icon size={16} className="text-emerald-400" />
                    </div>
                    <span className="text-lg font-medium">{product.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8 pb-3 border-b border-emerald-700/50">
              Kontak Kami
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-lg bg-emerald-900/50 flex items-center justify-center">
                  <Phone size={20} className="text-emerald-400" />
                </div>
                <div>
                  <div className="font-medium text-lg text-emerald-100">Telepon</div>
                  <a href="tel:+628123456789" className="text-lg hover:text-emerald-400 transition-colors block mt-1">
                    +62 812 3456 7890
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-lg bg-emerald-900/50 flex items-center justify-center">
                  <Mail size={20} className="text-emerald-400" />
                </div>
                <div>
                  <div className="font-medium text-lg text-emerald-100">Email</div>
                  <a href="mailto:info@ethyleneabsorber.com" className="text-lg hover:text-emerald-400 transition-colors block mt-1">
                    info@ethyleneabsorber.com
                  </a>
                </div>
              </li>
              
              <li className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-lg bg-emerald-900/50 flex items-center justify-center">
                  <MapPin size={20} className="text-emerald-400" />
                </div>
                <div>
                  <div className="font-medium text-lg text-emerald-100">Alamat</div>
                  <div className="text-lg mt-1">
                    Jl. Teknologi No. 123, Bandung, Indonesia 40234
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-emerald-900/50 to-emerald-800/30 border border-emerald-700/30 backdrop-blur-sm relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-emerald-700/10"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-emerald-600/10"></div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Tetap Terhubung dengan Kami
            </h3>
            
            <p className="mb-8 text-gray-300 text-lg max-w-2xl mx-auto">
              Berlangganan newsletter eksklusif untuk mendapatkan informasi produk terbaru, tips menjaga kesegaran buah, dan penawaran khusus
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Email Anda" 
                className="flex-1 px-5 py-4 rounded-xl bg-emerald-900/40 border border-emerald-700/50 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400 text-lg"
              />
              <button
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 group"
              >
                <span className="flex items-center justify-center gap-2">
                  Berlangganan
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-emerald-900 py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-emerald-500/80">
            © {currentYear} Dickson Synergy. All rights reserved.
          </p>
          
          <div className="flex gap-8">
            <Link href="/privacy" className="text-emerald-300 hover:text-white transition-colors flex items-center gap-2">
              <BookOpen size={16} />
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-emerald-300 hover:text-white transition-colors flex items-center gap-2">
              <BookOpen size={16} />
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

const socialLinks = [
  { icon: Facebook, url: "https://facebook.com", color: "#1877F2" },
  { icon: Twitter, url: "https://twitter.com", color: "#1DA1F2" },
  { icon: Instagram, url: "https://instagram.com", color: "#E1306C" },
  { icon: Linkedin, url: "https://linkedin.com", color: "#0A66C2" },
]

const quickLinks = [
  { label: "Beranda", href: "/", icon: Leaf },
  { label: "Manfaat", href: "#features", icon: Gift },
  { label: "FAQ", href: "/faq", icon: HelpCircle },
  { label: "Kontak", href: "/kontak", icon: MessageSquare },
  { label: "Blog", href: "/blog", icon: BookOpen },
]

const products = [
  { label: "Ethylene Absorber", href: "/produk/ethylene-absorber", icon: Leaf },
  { label: "Kemasan Buah", href: "/produk/kemasan-buah", icon: Package },
  { label: "Paket Ekspor", href: "/produk/paket-ekspor", icon: Gift },
  { label: "Solusi Distribusi", href: "/produk/solusi-distribusi", icon: Truck },
]