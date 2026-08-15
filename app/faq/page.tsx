'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const FAQS = [
  ['Apa itu ethylene absorber?', 'Sachet penyerap gas etilen — hormon gas yang dilepas buah dan sayur selama pematangan. Dengan menahannya, kesegaran bertahan dua sampai tiga kali lebih lama dibanding tanpa perlakuan.'],
  ['Bagaimana cara penggunaannya?', 'Letakkan sachet di dalam kemasan, peti, atau kontainer. Satu sachet efektif untuk ruang 1–2 m³, dan kemasan perlu tertutup rapat agar penyerapan berjalan optimal.'],
  ['Berapa lama masa efektifnya?', 'Tiga puluh hari sejak dibuka, dan hingga empat puluh lima hari pada kondisi penyimpanan ideal. Indikator warna pada sachet berubah ketika daya serapnya habis.'],
  ['Apakah aman untuk produk pangan?', 'Aman. Terdaftar di BPOM RI dengan nomor NA18191100273 dan memenuhi FDA 21 CFR 175.300, EU No 10/2011, serta JHOSPA Jepang. Bahan aktifnya terbungkus material food-grade.'],
  ['Apakah memengaruhi rasa buah?', 'Tidak. Sachet hanya menyerap gas dari udara sekitarnya tanpa mengubah komposisi kimia buah. Uji organoleptik tidak menemukan perbedaan rasa, aroma, maupun tekstur.'],
  ['Dapatkah dipakai untuk ekspor?', 'Ya. Pelayaran laut umumnya menempuh tiga sampai empat minggu — selesai sebelum sachet mencapai batas tiga puluh hari, sehingga satu sachet menutup seluruh perjalanan.'],
  ['Berapa lama hasilnya terlihat?', 'Perbedaan mulai tampak dalam 24–48 jam pertama. Buah yang biasanya menunjukkan tanda pembusukan pada hari ketiga umumnya masih segar hingga hari ketujuh atau lebih.'],
  ['Bagaimana menyimpan yang belum dipakai?', 'Dalam kemasan aslinya, di tempat sejuk dan kering. Sachet yang belum dibuka bertahan hingga dua tahun; setelah dibuka, gunakan segera.'],
]

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="bg-bone">
      <header className="relative overflow-hidden bg-ink text-bone">
        <div aria-hidden="true" className="hairlines-dark absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32 pb-16 md:pt-40 md:pb-20">
          <p className="tag mb-6 text-sage">Pertanyaan Umum</p>
          <h1 className="max-w-3xl text-[2.4rem] leading-[1.02] font-semibold tracking-[-0.04em] sm:text-5xl lg:text-[4rem]">
            Delapan pertanyaan yang paling sering diajukan
          </h1>
        </div>
      </header>

      <section className="relative overflow-hidden py-16 md:py-24">
        <div aria-hidden="true" className="hairlines absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <dl className="border-t border-ink/15">
            {FAQS.map(([q, a], i) => {
              const terbuka = open === i
              return (
                <div key={q} className="border-b border-ink/15">
                  <dt>
                    <button
                      onClick={() => setOpen(terbuka ? null : i)}
                      aria-expanded={terbuka}
                      aria-controls={`a-${i}`}
                      className="flex w-full items-start gap-5 py-6 text-left"
                    >
                      <span aria-hidden="true" className="tag mt-1.5 shrink-0 text-sage">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="flex-1 text-base font-semibold text-ink md:text-lg">{q}</span>
                      <Plus
                        size={18}
                        strokeWidth={2}
                        aria-hidden="true"
                        className={`mt-1 shrink-0 text-ink transition-transform duration-300 ${
                          terbuka ? 'rotate-45' : ''
                        }`}
                      />
                    </button>
                  </dt>
                  <AnimatePresence initial={false}>
                    {terbuka && (
                      <motion.dd
                        id={`a-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 pl-11 text-sm leading-relaxed text-ink-soft">{a}</p>
                      </motion.dd>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </dl>

          <div className="mt-14 flex flex-col items-start gap-6 border-t border-ink/15 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md leading-relaxed text-ink-soft">
              Pertanyaan Anda mungkin lebih khusus. Sampaikan kondisi muatannya, kami jawab dengan
              perhitungan.
            </p>
            <Link
              href="/kontak"
              className="inline-flex shrink-0 items-center justify-center bg-ink px-8 py-4 text-sm font-semibold text-bone transition-colors hover:bg-sage-deep"
            >
              Kirim Pertanyaan
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
