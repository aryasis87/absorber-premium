'use client'

import { useState } from 'react'
import { Search, ChevronDown, ChevronUp, Leaf, Phone, Mail, Zap, Shield, Clock } from 'lucide-react'

const FAQ_DATA = [
  {
    id: 1,
    question: "Bagaimana ethylene absorber memperpanjang kesegaran produk?",
    answer: "Teknologi kami menyerap gas etilen - hormon pematangan alami - dengan material nano-pori berlapis platinum yang mampu menangkap molekul etilen secara selektif tanpa mengganggu komposisi udara lainnya.",
    category: 'technology',
    icon: <Zap className="text-[#55A630]" />,
    highlight: "Efektivitas 99.8% dalam kondisi optimal"
  },
  {
    id: 2,
    question: "Apakah produk ini aman untuk makanan organik?",
    answer: "Sangat aman. Material kami telah mendapatkan sertifikasi food-grade dari BPOM, FDA, dan UE. Tidak mengandung bahan kimia berbahaya dan tidak meninggalkan residu.",
    category: 'safety',
    icon: <Shield className="text-[#55A630]" />,
    badges: ["Food Grade", "BPOM Certified", "Non-Toxic"]
  },
  {
    id: 3,
    question: "Berapa lama masa simpan produk dengan teknologi ini?",
    answer: "Hasil uji laboratorium menunjukkan peningkatan signifikan:",
    category: 'performance',
    icon: <Clock className="text-[#55A630]" />,
    table: [
      { product: "Buah Tropis", standard: "5-7 hari", extended: "14-21 hari" },
      { product: "Sayuran Daun", standard: "3-5 hari", extended: "7-10 hari" },
      { product: "Bunga Potong", standard: "4-6 hari", extended: "10-14 hari" }
    ]
  }
]

const CATEGORIES = [
  { id: 'all', name: 'Semua', icon: <Leaf className="text-[#55A630]" /> },
  { id: 'technology', name: 'Teknologi', icon: <Zap className="text-[#55A630]" /> },
  { id: 'safety', name: 'Keamanan', icon: <Shield className="text-[#55A630]" /> },
  { id: 'performance', name: 'Performa', icon: <Clock className="text-[#55A630]" /> }
]

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedId, setExpandedId] = useState<number | null>(1)

  const filteredFAQs = FAQ_DATA.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-white pt-28 pb-20 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-[#55A630]/10 px-4 py-2 rounded-full border border-[#55A630]/20 mb-6">
            <Leaf className="text-[#55A630] mr-2" size={18} />
            <span className="font-medium text-[#55A630]">Pusat Bantuan Profesional</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            <span className="block">Solusi Penyimpanan</span>
            <span className="text-[#55A630]">Produk Segar</span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Temukan jawaban lengkap tentang teknologi ethylene absorber kami yang dirancang untuk industri profesional.
          </p>
          
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Cari pertanyaan..."
              className="w-full pl-12 pr-5 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#55A630] focus:border-transparent text-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-5 py-2.5 rounded-full border text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-[#55A630] text-white border-[#55A630] shadow-sm'
                  : 'text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
        
        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map(faq => (
              <div 
                key={faq.id} 
                className={`bg-white rounded-xl border transition-all ${
                  expandedId === faq.id 
                    ? 'border-[#55A630] shadow-md' 
                    : 'border-gray-100 hover:border-[#55A630]/50'
                }`}
              >
                <button
                  onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                  className="w-full flex items-start p-5 text-left gap-4"
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    expandedId === faq.id ? 'bg-[#55A630]/10' : 'bg-gray-50'
                  }`}>
                    {faq.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{faq.question}</h3>
                    {faq.highlight && (
                      <span className="inline-block bg-[#55A630]/10 text-[#55A630] text-xs font-medium px-2.5 py-1 rounded-full">
                        {faq.highlight}
                      </span>
                    )}
                  </div>
                  
                  <div className="ml-2">
                    {expandedId === faq.id ? (
                      <ChevronUp className="text-[#55A630]" size={24} />
                    ) : (
                      <ChevronDown className="text-gray-400" size={24} />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedId === faq.id ? 'max-h-[500px] pb-5' : 'max-h-0'
                  }`}
                >
                  <div className="px-5">
                    <div className="border-t border-gray-100 my-4"></div>
                    <div className="pl-16 pr-5 space-y-4">
                      <p className="text-gray-600">{faq.answer}</p>
                      
                      {faq.table && (
                        <div className="overflow-x-auto">
                          <table className="min-w-full bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                            <thead className="bg-gray-100">
                              <tr>
                                <th className="px-4 py-2.5 text-left text-sm font-medium text-gray-700">Produk</th>
                                <th className="px-4 py-2.5 text-left text-sm font-medium text-gray-700">Standar</th>
                                <th className="px-4 py-2.5 text-left text-sm font-medium text-gray-700">Dengan EA</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              {faq.table.map((row, i) => (
                                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                  <td className="px-4 py-3 text-sm font-medium text-gray-700">{row.product}</td>
                                  <td className="px-4 py-3 text-sm text-gray-600">{row.standard}</td>
                                  <td className="px-4 py-3 text-sm font-semibold text-[#55A630]">{row.extended}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                      
                      {faq.badges && (
                        <div className="flex flex-wrap gap-2 pt-2">
                          {faq.badges.map((badge, i) => (
                            <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#55A630]/10 text-[#55A630] border border-[#55A630]/20">
                              {badge}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16">
              <div className="mx-auto w-24 h-24 rounded-full bg-gray-50 flex items-center justify-center mb-6">
                <Search className="text-gray-400" size={40} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Pertanyaan tidak ditemukan</h3>
              <p className="text-gray-600 max-w-md mx-auto mb-6">
                Coba gunakan kata kunci lain atau pilih kategori berbeda
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setActiveCategory('all')
                }}
                className="px-5 py-2.5 bg-[#55A630] text-white rounded-lg hover:bg-[#55A630]/90 transition-colors"
              >
                Reset Pencarian
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Expert Support */}
      <div className="bg-gray-50 border-t border-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Butuh Bantuan <span className="text-[#55A630]">Langsung?</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  Tim ahli kami siap membantu Anda dengan solusi khusus untuk kebutuhan bisnis Anda.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#55A630]/10 flex items-center justify-center">
                      <Phone className="text-[#55A630]" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Telepon</h4>
                      <a href="tel:+628123456789" className="text-gray-900 hover:text-[#55A630] transition-colors">
                        +62 812 3456 7890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#55A630]/10 flex items-center justify-center">
                      <Mail className="text-[#55A630]" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Email</h4>
                      <a href="mailto:support@ethylene-pro.com" className="text-gray-900 hover:text-[#55A630] transition-colors">
                        support@ethylene-pro.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2">
                <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Jam Operasional</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between text-gray-700">
                      <span>Senin-Jumat</span>
                      <span className="font-medium">08:00 - 17:00</span>
                    </li>
                    <li className="flex justify-between text-gray-700">
                      <span>Sabtu</span>
                      <span className="font-medium">09:00 - 15:00</span>
                    </li>
                    <li className="flex justify-between text-gray-700">
                      <span>Minggu</span>
                      <span className="font-medium text-[#55A630]">Emergency Only</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}