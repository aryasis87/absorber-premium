import Link from 'next/link'

const nav = [
  { label: 'Standar', href: '/#standar' },
  { label: 'Cara Kerja', href: '/#cara-kerja' },
  { label: 'Catatan Pemakai', href: '/#suara' },
  { label: 'Tanya Jawab', href: '/faq' },
  { label: 'Hubungi Kami', href: '/kontak' },
]

const legal = [
  { label: 'Kebijakan Privasi', href: '/privacy' },
  { label: 'Syarat & Ketentuan', href: '/terms' },
]

const standards = [
  ['BPOM RI', 'NA18191100273'],
  ['FDA', '21 CFR 175.300'],
  ['Uni Eropa', 'EU No 10/2011'],
  ['JHOSPA', 'Jepang'],
]

export default function Footer() {
  const tahun = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-ink text-bone/65">
      <div aria-hidden="true" className="hairlines-dark absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-[0.95rem] font-semibold tracking-tight text-bone">
              Ethylene<span className="text-sage">Absorber</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-bone/55">
              Sachet penyerap etilen dan desiccant untuk rantai pasok komoditas segar. Dipasok oleh
              PT Dickson Synergy.
            </p>
          </div>

          <nav aria-label="Navigasi footer">
            <h2 className="tag mb-5 text-bone">Navigasi</h2>
            <ul className="space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-sm transition-colors hover:text-sage">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="tag mb-5 text-bone">Standar</h2>
            <dl className="space-y-3.5">
              {standards.map(([k, v]) => (
                <div key={k}>
                  <dt className="text-sm text-bone/75">{k}</dt>
                  <dd className="tag mt-1 text-bone/40">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="tag mb-5 text-bone">Hubungi</h2>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="tag block text-bone/40">Telepon</span>
                <a href="tel:+628123456789" className="transition-colors hover:text-sage">
                  +62 812 3456 7890
                </a>
              </li>
              <li>
                <span className="tag block text-bone/40">Surel</span>
                <a
                  href="mailto:info@ethyleneabsorber.com"
                  className="break-all transition-colors hover:text-sage"
                >
                  info@ethyleneabsorber.com
                </a>
              </li>
              <li>
                <span className="tag block text-bone/40">Alamat</span>
                <span className="leading-relaxed">Jl. Teknologi No. 123, Bandung 40234</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-bone/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="tag text-bone/40">© {tahun} PT Dickson Synergy</p>
          <div className="flex gap-7">
            {legal.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm transition-colors hover:text-sage">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
