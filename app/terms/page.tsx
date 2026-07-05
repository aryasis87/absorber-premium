import Link from 'next/link';

export const metadata = {
  title: 'Syarat & Ketentuan',
  description: 'Syarat & ketentuan penggunaan situs dan layanan EthyleneAbsorber.',
};

const sections = [
  { h: '1. Penerimaan Ketentuan', p: 'Dengan mengakses dan menggunakan situs ini, Anda menyetujui untuk terikat oleh Syarat & Ketentuan berikut. Jika Anda tidak setuju, mohon untuk tidak menggunakan layanan kami.' },
  { h: '2. Penggunaan Layanan', p: 'Anda setuju menggunakan situs dan produk kami hanya untuk tujuan yang sah. Anda tidak diperkenankan menyalahgunakan, mengganggu, atau mencoba mengakses sistem kami tanpa izin.' },
  { h: '3. Produk & Pemesanan', p: 'Kami berupaya menampilkan informasi produk seakurat mungkin. Ketersediaan, harga, dan spesifikasi dapat berubah sewaktu-waktu. Konfirmasi pesanan akan dikomunikasikan sebelum transaksi diselesaikan.' },
  { h: '4. Hak Kekayaan Intelektual', p: 'Seluruh konten, logo, dan materi di situs ini adalah milik kami dan dilindungi hukum. Dilarang menyalin atau mendistribusikan tanpa izin tertulis.' },
  { h: '5. Batasan Tanggung Jawab', p: 'Layanan disediakan "sebagaimana adanya". Kami tidak bertanggung jawab atas kerugian tidak langsung yang timbul dari penggunaan situs, sejauh diizinkan oleh hukum yang berlaku.' },
  { h: '6. Perubahan Ketentuan', p: 'Kami dapat memperbarui ketentuan ini kapan saja. Versi terbaru akan selalu tersedia di halaman ini.' },
];

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 pt-28 pb-20 sm:pt-32">
      <p className="text-sm font-semibold uppercase tracking-wider text-[#7DBE33]">Legal</p>
      <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">Syarat &amp; Ketentuan</h1>
      <p className="mt-4 text-gray-500">Terakhir diperbarui: 6 Juli 2026</p>
      <p className="mt-6 leading-relaxed text-gray-600">
        Mohon baca ketentuan berikut dengan saksama sebelum menggunakan situs dan layanan kami.
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
        <p className="text-gray-600">Butuh penjelasan lebih lanjut?</p>
        <Link href="/kontak" className="mt-2 inline-block font-semibold text-[#7DBE33] hover:underline">Hubungi kami →</Link>
      </div>
    </main>
  );
}
