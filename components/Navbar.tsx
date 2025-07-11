'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ShoppingBag, Phone, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openProducts, setOpenProducts] = useState(false)
  const [activeLink, setActiveLink] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenProducts(false)
      }
    }

    // Active link detection
    const handleActiveLink = () => {
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          current = section.getAttribute('id') || '';
        }
      });
      
      setActiveLink(current);
    }

    window.addEventListener('scroll', () => {
      handleScroll()
      handleActiveLink()
    })
    document.addEventListener('mousedown', handleClickOutside)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Variants for animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const item = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  return (
    <motion.header 
      ref={headerRef}
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-lg transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-xl' : 'bg-white/80'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Premium Animated Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative z-50"
        >
          <Link href="/" className="flex items-center gap-3">
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-[#55A630] rounded-xl flex items-center justify-center shadow-lg"
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.03, 1]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <LeafIcon className="text-white w-7 h-7" />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-emerald-800 tracking-tight">
                Ethylene<span className="font-light">Absorber</span>
              </span>
              <motion.span 
                className="text-xs text-emerald-600 font-medium tracking-wider"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                PREMIUM QUALITY
              </motion.span>
            </div>
          </Link>
        </motion.div>

        {/* Premium Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-base">
          <Link 
            href="/" 
            className={`relative group py-2 px-1 ${activeLink === '' ? 'text-emerald-700' : 'text-gray-700'}`}
            onClick={() => setActiveLink('')}
          >
            <span className="group-hover:text-emerald-700 transition">Beranda</span>
            <motion.div 
              className="absolute bottom-0 left-0 h-0.5 bg-emerald-600 w-0 group-hover:w-full"
              initial={{ width: 0 }}
              animate={{ width: activeLink === '' ? '100%' : '0%' }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </Link>
          
          <div 
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setOpenProducts(true)}
            onMouseLeave={() => setOpenProducts(false)}
          >
            <button 
              className={`flex items-center gap-1 py-2 px-1 group ${activeLink.startsWith('produk') ? 'text-emerald-700' : 'text-gray-700'}`}
              onClick={() => setActiveLink('produk')}
            >
              <span className="group-hover:text-emerald-700 transition">Produk</span>
              <motion.div
                animate={{ rotate: openProducts ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {openProducts && (
                <motion.div
                  className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="py-2">
                    <Link 
                      href="/produk/ethylene-absorber" 
                      className="flex items-center gap-3 px-5 py-3 hover:bg-emerald-50 transition group"
                      onClick={() => setOpenProducts(false)}
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                        <ShoppingBag size={18} className="text-white" />
                      </div>
                      <div>
                        <div className="font-medium group-hover:text-emerald-700">Ethylene Absorber</div>
                        <div className="text-xs text-gray-500 mt-1">Penyerap etilen premium</div>
                      </div>
                    </Link>
                    <Link 
                      href="/produk/kemasan-buah" 
                      className="flex items-center gap-3 px-5 py-3 hover:bg-emerald-50 transition group"
                      onClick={() => setOpenProducts(false)}
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center">
                        <PackageIcon className="text-white" />
                      </div>
                      <div>
                        <div className="font-medium group-hover:text-amber-700">Kemasan Buah</div>
                        <div className="text-xs text-gray-500 mt-1">Kemasan khusus ekspor</div>
                      </div>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <Link 
            href="#manfaat" 
            className={`relative group py-2 px-1 ${activeLink === 'manfaat' ? 'text-emerald-700' : 'text-gray-700'}`}
            onClick={() => setActiveLink('manfaat')}
          >
            <span className="group-hover:text-emerald-700 transition">Manfaat</span>
            <motion.div 
              className="absolute bottom-0 left-0 h-0.5 bg-emerald-600 w-0 group-hover:w-full"
              initial={{ width: 0 }}
              animate={{ width: activeLink === 'manfaat' ? '100%' : '0%' }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </Link>
          
          <Link 
            href="/faq" 
            className={`relative group py-2 px-1 ${activeLink === 'faq' ? 'text-emerald-700' : 'text-gray-700'}`}
            onClick={() => setActiveLink('faq')}
          >
            <span className="group-hover:text-emerald-700 transition">FAQ</span>
            <motion.div 
              className="absolute bottom-0 left-0 h-0.5 bg-emerald-600 w-0 group-hover:w-full"
              initial={{ width: 0 }}
              animate={{ width: activeLink === 'faq' ? '100%' : '0%' }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </Link>
          
          <Link 
            href="/kontak" 
            className={`relative group py-2 px-1 ${activeLink === 'kontak' ? 'text-emerald-700' : 'text-gray-700'}`}
            onClick={() => setActiveLink('kontak')}
          >
            <span className="group-hover:text-emerald-700 transition">Kontak</span>
            <motion.div 
              className="absolute bottom-0 left-0 h-0.5 bg-emerald-600 w-0 group-hover:w-full"
              initial={{ width: 0 }}
              animate={{ width: activeLink === 'kontak' ? '100%' : '0%' }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </nav>

        {/* Premium CTA Button */}
        <motion.div
          className="hidden md:block"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px -5px rgba(85, 166, 48, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="/kontak" 
            className="flex items-center gap-2 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <Phone size={18} className="transition-transform group-hover:animate-pulse" />
            <span className="font-medium tracking-wide">Hubungi Kami</span>
          </Link>
        </motion.div>

        {/* Premium Mobile menu button */}
        <motion.button
          className="md:hidden text-gray-700 z-50 p-2 rounded-lg"
          whileHover={{ backgroundColor: "#f0fdf4" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X size={28} className="text-emerald-700" />
          ) : (
            <Menu size={28} className="text-emerald-700" />
          )}
        </motion.button>
      </div>

      {/* Premium Mobile Navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden fixed inset-0 z-40 bg-gradient-to-b from-white to-emerald-50"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="h-full flex flex-col justify-center px-6">
              <motion.div
                className="space-y-2"
                variants={container}
                initial="hidden"
                animate="show"
              >
                <motion.div variants={item}>
                  <Link 
                    href="/" 
                    className="block text-2xl font-medium py-4 px-4 rounded-xl hover:bg-emerald-100 transition"
                    onClick={() => setOpen(false)}
                  >
                    Beranda
                  </Link>
                </motion.div>
                
                <motion.div variants={item} className="border-t border-emerald-100 pt-2">
                  <button 
                    className="flex items-center justify-between w-full text-2xl font-medium py-4 px-4 rounded-xl hover:bg-emerald-100 transition"
                    onClick={() => setOpenProducts(!openProducts)}
                  >
                    <span>Produk</span>
                    <motion.div
                      animate={{ rotate: openProducts ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={24} />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {openProducts && (
                      <motion.div
                        className="pl-8 space-y-3 mt-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <Link 
                          href="/produk/ethylene-absorber" 
                          className="block py-3 text-xl text-gray-600 hover:text-emerald-700 font-medium pl-2 rounded-lg hover:bg-emerald-50 transition"
                          onClick={() => setOpen(false)}
                        >
                          <span className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center">
                              <ShoppingBag size={16} className="text-white" />
                            </div>
                            Ethylene Absorber
                          </span>
                        </Link>
                        <Link 
                          href="/produk/kemasan-buah" 
                          className="block py-3 text-xl text-gray-600 hover:text-amber-700 font-medium pl-2 rounded-lg hover:bg-amber-50 transition"
                          onClick={() => setOpen(false)}
                        >
                          <span className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center">
                              <PackageIcon className="text-white" />
                            </div>
                            Kemasan Buah
                          </span>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                <motion.div variants={item}>
                  <Link 
                    href="#manfaat" 
                    className="block text-2xl font-medium py-4 px-4 rounded-xl hover:bg-emerald-100 transition"
                    onClick={() => setOpen(false)}
                  >
                    Manfaat
                  </Link>
                </motion.div>
                
                <motion.div variants={item}>
                  <Link 
                    href="/faq" 
                    className="block text-2xl font-medium py-4 px-4 rounded-xl hover:bg-emerald-100 transition"
                    onClick={() => setOpen(false)}
                  >
                    FAQ
                  </Link>
                </motion.div>
                
                <motion.div variants={item}>
                  <Link 
                    href="/kontak" 
                    className="block text-2xl font-medium py-4 px-4 rounded-xl hover:bg-emerald-100 transition"
                    onClick={() => setOpen(false)}
                  >
                    Kontak
                  </Link>
                </motion.div>
              </motion.div>
              
              <motion.div
                className="pt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link 
                  href="/kontak" 
                  className="flex items-center justify-center gap-3 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white px-8 py-4 rounded-xl shadow-lg text-lg font-medium"
                  onClick={() => setOpen(false)}
                >
                  <Phone size={24} className="animate-pulse" />
                  Hubungi Kami
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function LeafIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}

function PackageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}