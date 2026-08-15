'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV = [
  { label: 'Standar', href: '/#standar' },
  { label: 'Cara Kerja', href: '/#cara-kerja' },
  { label: 'Catatan Pemakai', href: '/#suara' },
  { label: 'Tanya Jawab', href: '/faq' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-colors duration-300 ${
        scrolled ? 'border-ink/12 bg-bone/92 backdrop-blur-md' : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-[0.95rem] font-semibold tracking-tight text-ink">
          Ethylene<span className="text-sage">Absorber</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigasi utama">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="tag text-ink-soft transition-colors hover:text-ink"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/kontak"
            className="bg-ink px-6 py-3 text-xs font-semibold tracking-[0.12em] text-bone uppercase transition-colors hover:bg-sage-deep"
          >
            Minta Sample
          </Link>
        </nav>

        <button
          className="-mr-2 p-2 text-ink md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Buka menu"
          aria-expanded={open}
        >
          <Menu size={22} strokeWidth={1.75} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-ink/55 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 z-50 flex h-full w-[86%] max-w-sm flex-col bg-bone md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.35 }}
              role="dialog"
              aria-modal="true"
              aria-label="Menu navigasi"
            >
              <div className="flex items-center justify-between border-b border-ink/12 px-6 py-4">
                <span className="tag text-ink-soft/60">Menu</span>
                <button onClick={() => setOpen(false)} className="-mr-2 p-2 text-ink" aria-label="Tutup menu">
                  <X size={20} strokeWidth={1.75} />
                </button>
              </div>

              <nav className="flex-1 px-6" aria-label="Navigasi mobile">
                {NAV.map((n, i) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-ink/10 py-5 text-lg font-semibold text-ink"
                  >
                    <span aria-hidden="true" className="tag text-sage">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {n.label}
                  </Link>
                ))}
              </nav>

              <div className="p-6">
                <Link
                  href="/kontak"
                  onClick={() => setOpen(false)}
                  className="block bg-ink py-4 text-center text-xs font-semibold tracking-[0.12em] text-bone uppercase"
                >
                  Minta Sample
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
