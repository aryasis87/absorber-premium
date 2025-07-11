// app/kontak/page.tsx
'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Mail, Phone, MapPin, Clock, Send, Check, 
  Facebook, Twitter, Instagram, Linkedin, Globe, ChevronDown, Leaf
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };
  
  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };
  
  const contactInfo = [
    {
      icon: Phone,
      title: 'Telepon',
      details: '+62 812 3456 7890',
      description: 'Hubungi kami selama jam kerja',
      color: '#55A630'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@ethyleneabsorber.com',
      description: 'Respon dalam 1-2 jam kerja',
      color: '#55A630'
    },
    {
      icon: MapPin,
      title: 'Lokasi',
      details: 'Jl. Teknologi No. 123, Bandung',
      description: 'Indonesia 40234',
      color: '#55A630'
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      details: 'Senin - Jumat: 08.00 - 17.00',
      description: 'Sabtu: 08.00 - 12.00',
      color: '#55A630'
    }
  ];
  
  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com", name: "Facebook" },
    { icon: Twitter, url: "https://twitter.com", name: "Twitter" },
    { icon: Instagram, url: "https://instagram.com", name: "Instagram" },
    { icon: Linkedin, url: "https://linkedin.com", name: "LinkedIn" }
  ];

  const faqs = [
    {
      question: "Berapa lama waktu respon untuk email?",
      answer: "Kami berusaha merespons semua email dalam waktu 1-2 jam kerja pada hari kerja. Untuk permintaan di akhir pekan, respons akan diberikan pada hari kerja berikutnya."
    },
    {
      question: "Apakah saya perlu membuat janji sebelum datang ke kantor?",
      answer: "Meskipun tidak wajib, kami sangat menyarankan untuk membuat janji terlebih dahulu. Ini memastikan bahwa staf yang tepat akan tersedia untuk membantu Anda."
    },
    {
      question: "Apakah ada layanan dukungan 24/7?",
      answer: "Untuk dukungan teknis darurat, kami menyediakan layanan 24/7 melalui hotline khusus: +62 812 3456 7891."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#55A630] to-[#3d8820] text-white">
        {/* Natural Pattern Background */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/leaf-pattern.svg')] bg-repeat"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-24 md:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={mounted ? { opacity: 0, y: 20 } : false}
              animate={mounted ? { opacity: 1, y: 0 } : false}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="inline-flex items-center bg-white/20 px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm"
                initial={mounted ? { opacity: 0, scale: 0.9 } : false}
                animate={mounted ? { opacity: 1, scale: 1 } : false}
                transition={{ delay: 0.2 }}
              >
                <Leaf size={18} className="mr-2" />
                <span className="font-medium">Hubungi Kami</span>
              </motion.div>
              
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6"
                initial={mounted ? { opacity: 0 } : false}
                animate={mounted ? { opacity: 1 } : false}
                transition={{ delay: 0.3 }}
              >
                <span className="block">Kami Siap Membantu</span>
                <span className="block">Pertanyaan Anda</span>
              </motion.h1>
              
              <motion.p
                className="text-xl text-white/90 mb-8"
                initial={mounted ? { opacity: 0 } : false}
                animate={mounted ? { opacity: 1 } : false}
                transition={{ delay: 0.4 }}
              >
                Tim dukungan profesional kami siap membantu Anda dengan solusi alami dan ramah lingkungan.
              </motion.p>
              
              <motion.div
                className="flex flex-wrap gap-4"
                initial={mounted ? { opacity: 0 } : false}
                animate={mounted ? { opacity: 1 } : false}
                transition={{ delay: 0.5 }}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="text-white" size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-8"
              initial={mounted ? { opacity: 0, y: 20 } : false}
              animate={mounted ? { opacity: 1, y: 0 } : false}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Send className="text-[#55A630]" size={24} />
                <h2 className="text-2xl font-bold text-gray-800">Kirim Pesan</h2>
              </div>
              
              <AnimatePresence>
                {submitSuccess ? (
                  <motion.div
                    className="bg-green-50 border border-green-100 rounded-xl p-6 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                      <Check className="text-green-600" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold text-green-800 mb-2">Pesan Terkirim!</h3>
                    <p className="text-green-700">
                      Terima kasih telah menghubungi kami. Tim kami akan segera merespons pesan Anda.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 mb-2">Nama Lengkap</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#55A630] focus:border-transparent text-gray-700 placeholder-gray-400"
                          placeholder="Masukkan nama Anda"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#55A630] focus:border-transparent text-gray-700 placeholder-gray-400"
                            placeholder="email@contoh.com"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-gray-700 mb-2">Telepon</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#55A630] focus:border-transparent text-gray-700 placeholder-gray-400"
                            placeholder="+62 812 3456 7890"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-gray-700 mb-2">Subjek</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#55A630] focus:border-transparent text-gray-700 placeholder-gray-400"
                          placeholder="Subjek pesan Anda"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-gray-700 mb-2">Pesan</label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#55A630] focus:border-transparent text-gray-700 placeholder-gray-400"
                          placeholder="Tulis pesan Anda..."
                        ></textarea>
                      </div>
                      
                      <motion.button
                        type="submit"
                        className={`w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-semibold text-white transition-all ${
                          isSubmitting 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-[#55A630] hover:bg-[#478526] shadow-md'
                        }`}
                        disabled={isSubmitting}
                        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Mengirim...</span>
                          </>
                        ) : (
                          <>
                            <Send size={20} />
                            <span>Kirim Pesan</span>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Contact Info Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center bg-[#55A630] px-4 py-1.5 rounded-full mb-6 mx-auto"
            initial={mounted ? { opacity: 0, y: 10 } : false}
            animate={mounted ? { opacity: 1, y: 0 } : false}
            transition={{ delay: 0.2 }}
          >
            <MapPin size={18} className="mr-2 text-white" />
            <span className="font-medium text-white">Informasi Kontak</span>
          </motion.div>
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={mounted ? { opacity: 0, y: 10 } : false}
            animate={mounted ? { opacity: 1, y: 0 } : false}
            transition={{ delay: 0.3 }}
          >
            Hubungi Kami Melalui <span className="text-[#55A630]">Berbagai Cara</span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={mounted ? { opacity: 0 } : false}
            animate={mounted ? { opacity: 1 } : false}
            transition={{ delay: 0.4 }}
          >
            Kami menyediakan berbagai saluran komunikasi untuk melayani kebutuhan Anda dengan profesional.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
              initial={mounted ? { opacity: 0, y: 20 } : false}
              animate={mounted ? { opacity: 1, y: 0 } : false}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="h-2 bg-[#55A630]"></div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-[#55A630]/10 flex items-center justify-center mb-4">
                  <item.icon className="text-[#55A630]" size={20} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-lg font-medium text-gray-700 mb-2">{item.details}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Map Section */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16">
              <motion.div
                className="inline-flex items-center bg-[#55A630] px-4 py-1.5 rounded-full mb-6"
                initial={mounted ? { opacity: 0, y: 10 } : false}
                animate={mounted ? { opacity: 1, y: 0 } : false}
                transition={{ delay: 0.2 }}
              >
                <MapPin size={18} className="mr-2 text-white" />
                <span className="font-medium text-white">Lokasi Kami</span>
              </motion.div>
              
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
                initial={mounted ? { opacity: 0, y: 10 } : false}
                animate={mounted ? { opacity: 1, y: 0 } : false}
                transition={{ delay: 0.3 }}
              >
                Kunjungi Kantor Kami
              </motion.h2>
              
              <motion.p
                className="text-xl text-gray-600 mb-8"
                initial={mounted ? { opacity: 0 } : false}
                animate={mounted ? { opacity: 1 } : false}
                transition={{ delay: 0.4 }}
              >
                Kantor kami berada di lokasi strategis dengan suasana alami dan nyaman.
              </motion.p>
              
              <motion.div
                className="space-y-4"
                initial={mounted ? { opacity: 0 } : false}
                animate={mounted ? { opacity: 1 } : false}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#55A630] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Alamat</h3>
                    <p className="text-gray-600">Jl. Teknologi No. 123, Gedung Inovasi Lt. 5, Bandung, Indonesia 40234</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="text-[#55A630] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Jam Operasional</h3>
                    <p className="text-gray-600">Senin - Jumat: 08.00 - 17.00 WIB</p>
                    <p className="text-gray-600">Sabtu: 08.00 - 12.00 WIB</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Globe className="text-[#55A630] mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Navigasi</h3>
                    <p className="text-gray-600">Koordinat: -6.917464, 107.619125</p>
                    <a href="#" className="text-[#55A630] hover:underline">Petunjuk arah di Google Maps</a>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              className="bg-gray-50 h-96 lg:h-auto border-l border-gray-100 relative"
              initial={mounted ? { opacity: 0 } : false}
              animate={mounted ? { opacity: 1 } : false}
              transition={{ delay: 0.6 }}
            >
              {/* Map Placeholder with Natural Elements */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#f0f7ed] to-[#e0f0d8]">
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-full border-4 border-[#55A630] flex items-center justify-center mx-auto mb-4">
                    <MapPin className="text-[#55A630]" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Lokasi Kami</h3>
                  <p className="text-gray-600">Jl. Teknologi No. 123, Bandung</p>
                  <div className="mt-6">
                    <div className="inline-block px-4 py-2 bg-[#55A630] text-white rounded-lg">
                      Lihat Peta
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="max-w-5xl mx-auto px-4 pb-24">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
          <div className="p-8 border-b border-gray-100 bg-gray-50">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-[#55A630]/10 flex items-center justify-center">
                <Leaf className="text-[#55A630]" size={20} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Pertanyaan Umum</h3>
            </div>
            <p className="text-gray-600">Temukan jawaban untuk pertanyaan yang sering diajukan</p>
          </div>
          
          <div className="divide-y divide-gray-100">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="py-6 px-8 cursor-pointer group"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between w-full text-left">
                  <h3 className="text-lg font-semibold text-gray-800 pr-4 group-hover:text-[#55A630] transition-colors">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: activeFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-[#55A630]" size={24} />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {activeFAQ === index && (
                    <motion.div
                      className="pt-4 pb-2 text-gray-600 overflow-hidden"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating Contact Button */}
      {mounted && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.a
            href="#"
            className="w-16 h-16 rounded-full bg-[#55A630] flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Phone className="text-white" size={24} />
          </motion.a>
        </motion.div>
      )}
    </div>
  );
}