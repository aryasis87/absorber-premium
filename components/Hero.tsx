'use client'

import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Leaf, Package, CheckCircle, Globe } from 'lucide-react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 50])
  const opacity = useTransform(scrollYProgress, [0, 0.9], [1, 0])

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[800px] overflow-hidden flex items-center justify-center bg-gradient-to-br from-white to-[#f8faf8]"
    >
      {/* Natural Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle leaf pattern */}
        <div className="absolute inset-0 bg-[url('/images/leaf-pattern.svg')] bg-[size:200px_200px] opacity-[0.03]" />
        
        {/* Organic shapes */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#55A630]/5 blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#8CCF42]/5 blur-[60px]" />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div className="relative z-10" style={{ y, opacity }}>
            {/* Eco-friendly Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Leaf className="text-[#55A630]" size={18} />
              <span className="text-sm font-medium text-gray-700">Ramah Lingkungan & Alami</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              <span className="block">Jaga Kesegaran</span>
              <span className="block text-[#55A630] mt-2">Buah & Sayuran</span>
              <span className="block text-gray-700 mt-2">Lebih Lama & Alami</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-600 max-w-xl mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Ethylene absorber kami menggunakan bahan alami untuk memperpanjang kesegaran produk pertanian tanpa bahan kimia berbahaya. Solusi aman untuk distribusi dan penyimpanan.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="/#features"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 bg-[#55A630] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-3"
              >
                <Package size={20} />
                Lihat Produk
              </motion.a>

              <motion.a
                href="/#features"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 bg-white text-gray-700 font-medium border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center gap-3"
              >
                Pelajari Teknologi
              </motion.a>
            </motion.div>

            {/* Benefit Points */}
            <motion.div 
              className="mt-12 flex flex-wrap gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {[
                { icon: CheckCircle, text: "Tanpa Bahan Kimia" },
                { icon: Leaf, text: "Ramah Lingkungan" },
                { icon: Globe, text: "Standar Internasional" }
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <item.icon className="text-[#55A630] mr-2" size={20} />
                  <span className="text-gray-700">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Product Showcase */}
          <motion.div
            className="relative h-[500px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Product Container */}
              <motion.div 
                className="w-full max-w-md h-[400px] rounded-3xl bg-white shadow-xl border border-gray-100 flex items-center justify-center p-8"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="/images/l1.webp"
                  alt="Ethylene Absorber Sachet"
                  width={350}
                  height={350}
                  className="object-contain z-10"
                  priority
                />
              </motion.div>

              {/* Floating Fruits */}
              <motion.div
                className="absolute top-20 left-0 z-20"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  delay: 0.5
                }}
              >
                <Image
                  src="/images/l2.webp"
                  alt="Buah Segar"
                  width={120}
                  height={120}
                  className="drop-shadow-lg rounded-full"
                />
              </motion.div>

              <motion.div
                className="absolute bottom-20 right-0 z-20"
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 7,
                  repeat: Infinity,
                  delay: 1
                }}
              >
                <Image
                  src="/images/l4.webp"
                  alt="Buah Segar"
                  width={140}
                  height={140}
                  className="drop-shadow-lg rounded-3xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scrolling Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-[#55A630] text-sm mb-2">Scroll untuk menjelajahi</div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-5 h-8 border-2 border-[#55A630] rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-[#55A630] rounded-full mt-1"
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}