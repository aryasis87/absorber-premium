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
    <main className="mx-auto max-w-3xl px-6 pt-28 pb-20 sm:pt-32">
      <p className="text-sm font-semibold uppercase tracking-wider text-[#7DBE33]">Legal</p>
      <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">Kebijakan Privasi</h1>
      <p className="mt-4 text-gray-500">Terakhir diperbarui: 6 Juli 2026</p>
      <p className="mt-6 leading-relaxed text-gray-600">
        Privasi Anda penting bagi kami. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda saat menggunakan situs dan layanan kami.
      </p>
      <div className="mt-10 space-y-8">
        {sections.map((s) => (
          <section key={s.h}>
            <h2 className="text-xl font-semibold text-gray-900">{s.h}</h2>
            <p className="mt-2 leading-relaxed text-gray-600">{s.p}</p>
          </section>
        ))}
      </div>
      <div className="mt-12 rounded-2xl border border-gray-200 bg-gray-50 p-6">
        <p className="text-gray-600">Ada pertanyaan tentang privasi Anda?</p>
        <Link href="/kontak" className="mt-2 inline-block font-semibold text-[#7DBE33] hover:underline">Hubungi kami →</Link>
      </div>
    </main>
  );
}
