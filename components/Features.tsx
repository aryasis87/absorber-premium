'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Leaf, ShieldCheck, Truck, Zap, PackageCheck, Globe, BadgeCheck, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'

const features = [
  {
    icon: Leaf,
    title: 'Ramah Lingkungan',
    desc: 'Formulasi biodegradable dengan teknologi nano yang terurai alami dalam 90 hari tanpa residu berbahaya.',
    color: '#55A630',
    delay: 0.1,
    stats: '100% Organik'
  },
  {
    icon: ShieldCheck,
    title: 'Sertifikasi BPOM',
    desc: 'Memiliki sertifikat BPOM RI NA18191100273 dan lolos uji klinis untuk produk pangan internasional.',
    color: '#2563EB',
    delay: 0.2,
    stats: '100% Aman'
  },
  {
    icon: Truck,
    title: 'Distribusi Global',
    desc: 'Digunakan oleh 150+ eksportir di 12 negara dengan tingkat keberhasilan 98.7%.',
    color: '#7C3AED',
    delay: 0.3,
    stats: '12 Negara'
  },
  {
    icon: Zap,
    title: 'Efektivitas Tinggi',
    desc: 'Mengurangi pembusukan buah hingga 72.3% berdasarkan uji coba di laboratorium independen.',
    color: '#D97706',
    delay: 0.4,
    stats: '72.3% Efektif'
  },
  {
    icon: PackageCheck,
    title: 'Kemasan Eksklusif',
    desc: 'Menggunakan teknologi barrier 7 lapis dengan indikator kesegaran digital.',
    color: '#DC2626',
    delay: 0.5,
    stats: '7 Lapis Proteksi'
  },
  {
    icon: Globe,
    title: 'Standar Internasional',
    desc: 'Memenuhi standar FDA (21 CFR 175.300), EU No 10/2011, dan Jepang JHOSPA.',
    color: '#0891B2',
    delay: 0.6,
    stats: '3 Sertifikat'
  }
]

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  })

  // Perbaikan: Hindari animasi di server dengan state mounted
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={mounted && inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: feature.delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative group h-full"
      whileHover={{ y: -15 }}
    >
      {/* Main card */}
      <div className="relative z-10 h-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 group-hover:shadow-2xl transition-all duration-500">
        {/* Gradient accent */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-2"
          style={{ 
            background: `linear-gradient(90deg, ${feature.color}00, ${feature.color}aa, ${feature.color}00)`,
          }}
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
        />
        
        <div className="p-8 pb-0">
          <motion.div 
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 border border-gray-200 bg-gradient-to-br from-white to-gray-50"
            style={{ boxShadow: `0 4px 20px -6px ${feature.color}80` }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 500, damping: 15 }}
          >
            <feature.icon 
              className="text-[--color]" 
              size={32} 
              style={{ '--color': feature.color } as React.CSSProperties}
            />
          </motion.div>
          
          <h3 className="text-2xl font-bold mb-3 text-gray-900 flex items-center">
            {feature.title}
            <BadgeCheck 
              className="ml-2 text-[--color]" 
              size={20} 
              style={{ '--color': feature.color } as React.CSSProperties}
            />
          </h3>
          
          <p className="text-gray-600 mb-6 line-clamp-3">
            {feature.desc}
          </p>
        </div>
        
        <div 
          className="px-8 py-4 bg-gradient-to-r from-white to-gray-50 border-t border-gray-100"
        >
          <div
            className="text-sm font-semibold text-[--color] flex items-center"
            style={{ '--color': feature.color } as React.CSSProperties}
          >
            <motion.span
              className="inline-block w-2 h-2 rounded-full mr-2"
              style={{ backgroundColor: feature.color }}
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            {feature.stats}
          </div>
        </div>
        
        {/* Floating indicator */}
        <motion.div
          className="absolute bottom-4 right-4 w-8 h-8 rounded-full flex items-center justify-center"
          style={{ 
            backgroundColor: `${feature.color}20`,
            border: `1px solid ${feature.color}`
          }}
          animate={{ 
            y: [0, -5, 0],
            boxShadow: [`0 0 0 ${feature.color}40`, `0 0 10px ${feature.color}`, `0 0 0 ${feature.color}40`]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Sparkles 
            size={16} 
            className="text-[--color]"
            style={{ '--color': feature.color } as React.CSSProperties}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // Perbaikan: Hindari animasi di server dengan state mounted
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-br from-[#55A63010] to-[#2563EB10] rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tl from-[#7C3AED10] to-[#0891B210] rounded-full blur-[100px]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center mb-16 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={mounted && inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4"
        >
          <motion.div
            className="text-sm font-semibold text-[#55A630] bg-[#55A630]/10 px-4 py-1.5 rounded-full mb-3 inline-flex items-center shadow-sm"
            initial={{ opacity: 0 }}
            animate={mounted && inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="mr-2" size={16} />
            <span>Teknologi Premium</span>
          </motion.div>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={mounted && inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
        >
          Keunggulan Premium
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={mounted && inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-xl text-gray-600"
        >
          Inovasi teknologi yang membedakan kami dari kompetitor
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>

      {/* Premium Badge */}
      {mounted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, type: 'spring', stiffness: 100 }}
          className="mt-20 text-center"
        >
          <motion.div
            className="inline-flex items-center bg-gradient-to-r from-[#55A630] via-[#4CAF50] to-[#8BC34A] text-white px-8 py-4 rounded-full shadow-lg"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              boxShadow: [
                '0 5px 15px rgba(85, 166, 48, 0.3)',
                '0 10px 25px rgba(76, 175, 80, 0.4)',
                '0 5px 15px rgba(85, 166, 48, 0.3)'
              ]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              repeatType: 'reverse',
              ease: "easeInOut"
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 15px 30px rgba(76, 175, 80, 0.5)'
            }}
          >
            <Zap className="mr-3" size={24} />
            <span className="text-lg font-bold tracking-wide">Best Technology in 2025</span>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}