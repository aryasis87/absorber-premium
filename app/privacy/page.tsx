import Link from 'next/link';

export const metadata = {
  title: 'Kebijakan Privasi',
  description: 'Kebijakan privasi EthyleneAbsorber — bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda.',
};

const sections = [
  { h: '1. Informasi yang Kami Kumpulkan', p: 'Kami mengumpulkan informasi yang Anda berikan secara langsung, seperti nama, email, dan nomor telepon saat Anda menghubungi kami atau mengisi formulir. Kami juga mengumpulkan data teknis dasar (seperti jenis perangkat dan halaman yang dikunjungi) untuk meningkatkan layanan.' },
  { h: '2. Penggunaan Informasi', p: 'Informasi digunakan untuk merespons permintaan Anda, mengirim penawaran yang relevan, memproses pesanan, serta meningkatkan kualitas produk dan layanan kami. Kami tidak menjual data pribadi Anda kepada pihak ketiga.' },
  { h: '3. Cookie', p: 'Situs kami dapat menggunakan cookie untuk mengingat preferensi dan menganalisis lalu lintas. Anda dapat menonaktifkan cookie melalui pengaturan browser, meski beberapa fitur mungkin tidak berfungsi optimal.' },
  { h: '4. Keamanan Data', p: 'Kami menerapkan langkah keamanan teknis dan organisasi yang wajar untuk melindungi data Anda dari akses, pengungkapan, atau perubahan yang tidak sah.' },
  { h: '5. Hak Anda', p: 'Anda berhak mengakses, memperbarui, atau meminta penghapusan data pribadi Anda kapan saja dengan menghubungi kami melalui halaman Kontak.' },
  { h: '6. Perubahan Kebijakan', p: 'Kebijakan ini dapat diperbarui sewaktu-waktu. Perubahan akan dipublikasikan di halaman ini beserta tanggal pembaruan terbaru.' },
];

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-32 pb-20 sm:pt-40">
      <p className="tag text-sage">Legal</p>
      <h1 className="mt-4 text-[2.4rem] font-semibold tracking-[-0.04em] text-ink sm:text-5xl">Kebijakan Privasi</h1>
      <p className="tag mt-5 text-ink-soft/60">Terakhir diperbarui: 6 Juli 2026</p>
      <p className="mt-7 leading-relaxed text-ink-soft">
        Privasi Anda penting bagi kami. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda saat menggunakan situs dan layanan kami.
      </p>
      <div className="mt-12 space-y-8 border-t border-ink/15 pt-10">
        {sections.map((s) => (
          <section key={s.h}>
            <h2 className="text-lg font-semibold text-ink">{s.h}</h2>
            <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{s.p}</p>
          </section>
        ))}
      </div>
      <div className="mt-14 border-t border-ink/15 pt-8">
        <p className="text-sm text-ink-soft">Ada pertanyaan tentang privasi Anda?</p>
        <Link href="/kontak" className="mt-3 inline-block text-sm font-semibold text-sage underline-offset-4 hover:underline">Hubungi kami →</Link>
      </div>
    </div>
  );
}
