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
    <div className="mx-auto max-w-3xl px-6 pt-32 pb-20 sm:pt-40">
      <p className="tag text-sage">Legal</p>
      <h1 className="mt-4 text-[2.4rem] font-semibold tracking-[-0.04em] text-ink sm:text-5xl">Syarat &amp; Ketentuan</h1>
      <p className="tag mt-5 text-ink-soft/60">Terakhir diperbarui: 6 Juli 2026</p>
      <p className="mt-7 leading-relaxed text-ink-soft">
        Mohon baca ketentuan berikut dengan saksama sebelum menggunakan situs dan layanan kami.
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
        <p className="text-sm text-ink-soft">Butuh penjelasan lebih lanjut?</p>
        <Link href="/kontak" className="mt-3 inline-block text-sm font-semibold text-sage underline-offset-4 hover:underline">Hubungi kami →</Link>
      </div>
    </div>
  );
}
