'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Quote } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  company: string
  content: string
  avatar: string
  index: number
}

export function TestimonialCard({ name, company, content, avatar, index }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg p-6 md:p-8 h-full flex flex-col border border-gray-100 hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Quote className="text-[#55A630] mb-4 rotate-180" size={24} />
      
      <p className="text-gray-600 mb-6 flex-grow">{content}</p>
      
      <div className="flex items-center mt-auto">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#55A630]/20 mr-4">
          <Image 
            src={avatar}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        
        <div>
          <h4 className="font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{company}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Testimonials() {
  const testimonials = [
    {
      name: "Andini Sarah",
      company: "PT. Buah Segar Nusantara",
      content: "Sejak menggunakan ethylene absorber dari Dickson Synergy, kerugian akibat pembusukan buah selama distribusi berkurang hingga 40%. Produk kami tetap segar sampai ke tangan konsumen.",
      avatar: "/images/pp1.png" // Menggunakan path lokal
    },
    {
      name: "Siti Rahayu",
      company: "Eksportir Mangga",
      content: "Solusi yang sangat efektif untuk ekspor buah ke luar negeri. Kesegaran buah terjaga lebih lama tanpa perlu bahan kimia berbahaya. Pelanggan di luar negeri sangat puas!",
      avatar: "/images/pp2.png" // Menggunakan path lokal
    },
    {
    name: "Relya Zeff",
    company: "Pemilik Supermarket",
    content: "Produk ini menjadi andalan kami untuk menjaga kesegaran buah di rak penjualan. Masa simpan lebih panjang, penjualan meningkat 25% dalam 3 bulan terakhir.",
    avatar: "/images/pp3.png" // Menggunakan path lokal
    }
  ]

  const brands = [
    { 
      name: "Fresh Fruits Co.", 
      logo: "/images/ff.webp", // Menggunakan path lokal
      description: "Supplier Buah Premium" 
    },
    { 
      name: "Global Growers", 
      logo: "/images/gg.webp", // Menggunakan path lokal
      description: "Eksportir Buah Terkemuka" 
    },
    { 
      name: "Organic Valley", 
      logo: "/images/ov.webp", // Menggunakan path lokal
      description: "Pertanian Organik" 
    },
    { 
      name: "Farm Direct", 
      logo: "/images/fd.webp", // Menggunakan path lokal
      description: "Retail Buah Premium" 
    },
    { 
      name: "Harvest Hub", 
      logo: "/images/hh.webp", // Menggunakan path lokal
      description: "Supplier Buah Tropis" 
    }
  ]

  return (
    <section className="py-24 bg-[#f9fbf8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Apa Kata Pelanggan Kami
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ribuan pelaku usaha pertanian dan retail telah mempercayai produk kami untuk menjaga kesegaran produk mereka.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} index={index} {...testimonial} />
          ))}
        </div>

        {/* Brand Logos - Improved */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-gray-500 mb-8 text-sm uppercase tracking-wider">
            Dipercaya oleh perusahaan ternama
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 items-center">
            {brands.map((brand, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 w-24 h-24 flex items-center justify-center mb-2">
                  <Image 
                    src={brand.logo}
                    alt={brand.name}
                    width={100}
                    height={100}
                    className="object-cover scale-[1.6] opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-700">{brand.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{brand.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}