import Image from 'next/image';
import Link from 'next/link';
import { SectionHead } from '@/components/ui';

const voices = [
  {
    quote:
      'Buah di toko bertahan lima sampai tujuh hari lebih lama. Penyortiran sore yang dulu rutin, sekarang hampir tidak perlu.',
    name: 'Relya Nesya',
    role: 'FreshFruit Market',
    image: '/images/pp1.png',
  },
  {
    quote:
      'Pengiriman ke luar kota tidak lagi jadi taruhan. Barang sampai dalam kondisi yang masih bisa saya banggakan.',
    name: 'Ani Wijaya',
    role: 'BuahSegar Distribusi',
    image: '/images/pp2.png',
  },
  {
    quote:
      'Dapur kami butuh mutu yang sama tiap hari. Selisih antar pengiriman jauh lebih kecil sejak memakai sachet ini.',
    name: 'Rina Permata',
    role: 'The Green Cafe',
    image: '/images/pp3.png',
  },
];

const faqs = [
  ['Berapa sachet untuk satu ruang?', 'Satu sachet untuk 1–2 m³, dengan kemasan tertutup rapat.'],
  ['Berapa lama masa efektifnya?', '30 hari sejak dibuka, hingga 45 hari pada kondisi ideal.'],
  ['Apakah aman untuk pangan?', 'Ya — terdaftar BPOM RI NA18191100273 dan memenuhi FDA, EU, serta JHOSPA.'],
];

export default function Testimonials() {
  return (
    <>
      <section id="suara" className="relative overflow-hidden bg-bone py-20 md:py-28">
        <div aria-hidden="true" className="hairlines absolute inset-0" />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <SectionHead
            no="03"
            tag="Catatan Pemakai"
            title="Dinilai dari yang tidak jadi terbuang"
            className="mb-16"
          />

          <div className="grid gap-px bg-ink/12 md:grid-cols-3">
            {voices.map((v) => (
              <figure key={v.name} className="flex flex-col bg-bone p-8">
                <blockquote className="flex-1 text-[1.05rem] leading-relaxed text-ink">
                  {v.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-ink/15 pt-6">
                  <span className="relative h-11 w-11 shrink-0 overflow-hidden bg-bone-2">
                    <Image src={v.image} alt="" fill sizes="44px" className="object-cover" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-ink">{v.name}</span>
                    <span className="tag mt-1 block text-ink-soft/60">{v.role}</span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="tag mt-8 leading-[1.7] text-ink-soft/45">
            Kutipan di atas adalah ilustrasi skenario penggunaan untuk keperluan purwarupa desain.
          </p>
        </div>
      </section>

      {/* Tanya jawab ringkas + penutup */}
      <section id="tanya" className="relative overflow-hidden bg-bone-2 py-20 md:py-28">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
            <div>
              <p className="tag mb-4 text-sage">Pertanyaan Umum</p>
              <h2 className="text-[1.9rem] leading-[1.12] font-semibold text-ink md:text-[2.4rem]">
                Tiga yang paling sering ditanyakan
              </h2>
              <Link
                href="/faq"
                className="mt-8 inline-block text-sm font-semibold text-sage underline-offset-8 hover:underline"
              >
                Lihat semuanya →
              </Link>
            </div>

            <dl className="border-t border-ink/15">
              {faqs.map(([q, a]) => (
                <div key={q} className="border-b border-ink/15 py-6">
                  <dt className="text-base font-semibold text-ink">{q}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-ink-soft">{a}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-20 flex flex-col items-start gap-8 border-t border-ink/15 pt-14 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-xl text-[1.9rem] leading-[1.1] font-semibold text-ink md:text-[2.6rem]">
              Coba pada satu peti sebelum memutuskan.
            </h2>
            <Link
              href="/kontak"
              className="inline-flex shrink-0 items-center justify-center bg-ink px-9 py-4 text-sm font-semibold text-bone transition-colors duration-300 hover:bg-sage-deep"
            >
              Minta Sample Gratis
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
