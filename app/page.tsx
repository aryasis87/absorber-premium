'use client'

import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonial'

export default function HomePage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.02])
  const y = useTransform(scrollYProgress, [0, 1], [0, -40])

  return (
    <motion.main 
      ref={containerRef}
      className="bg-white text-gray-800 overflow-hidden"
      style={{ scale }}
    >
      <Hero />

      {/* SECTION: Manfaat */}
      <motion.section 
        id="features" 
        className="py-24 md:py-32 relative bg-gradient-to-b from-white to-[#f9fbfd]"
        style={{ y }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-[#55A630]/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-1/4 h-1/4 bg-[#8CCF42]/5 rounded-full blur-[80px]" />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Features />
        </div>
      </motion.section>

      {/* SECTION: Testimonial */}
      <Testimonials />

      {/* SECTION: CTA */}
      <section
        id="cta"
        className="relative py-24 md:py-32 bg-gradient-to-br from-[#55A630] to-[#2E7D32] text-white"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[size:100px_100px] opacity-10" />
          
          {/* Subtle floating elements */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full bg-white/5 backdrop-blur-sm"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity
            }}
          />
          
          <motion.div
            className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 1
            }}
          />
        </div>

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Pertahankan Kesegaran <br />
              <span className="text-[#E9F5DB] font-extrabold">Buah & Sayuran</span>
            </h2>

            <p className="text-lg md:text-xl leading-relaxed mb-10 text-white/90 max-w-2xl mx-auto">
              Dengan teknologi ethylene absorber mutakhir, produk pertanian Anda tetap segar lebih lama selama distribusi dan penyimpanan.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/kontak"
                className="px-8 py-3.5 bg-white text-green-700 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:scale-[1.03] active:scale-95"
              >
                Konsultasi Gratis
              </a>
              <a
                href="/produk"
                className="px-8 py-3.5 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors duration-300"
              >
                Lihat Produk
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}