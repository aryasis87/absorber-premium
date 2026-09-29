/* ============================================================================
   "Catatan Pemakai" — cerita kasus konsep Premium. Tiga pemakai yang
   suaranya muncul di beranda, dituliskan lebih panjang seperti artikel
   majalah: keadaan sebelum, apa yang diubah, dan yang terlihat sesudahnya.
   Nama dan usaha adalah ilustrasi untuk purwarupa desain; angka hari
   mengikuti rentang di brief (hari ke-3 → hari ke-7, 2–3× lebih lama).
   ========================================================================== */

export type Cerita = {
  slug: string
  no: string
  judul: string
  ringkas: string
  nama: string
  peran: string
  potret: string
  image: string
  angka: [string, string][]
  isi: ({ p: string } | { h: string } | { kutip: string })[]
}

export const CERITA: Cerita[] = [
  {
    slug: 'rak-yang-tidak-perlu-disortir-sore',
    no: '01',
    judul: 'Rak yang tidak perlu disortir sore hari',
    ringkas: 'Toko buah dengan dua kali sortir setiap hari kini cukup sekali — dan yang dibuang jauh berkurang.',
    nama: 'Relya Nesya',
    peran: 'FreshFruit Market, toko buah',
    potret: '/images/pp1.png',
    image: '/images/l2.webp',
    angka: [['Sortir per hari', '2× → 1×'], ['Layak jual', 'hari ke-3 → ke-7'], ['Dipasang di', 'gudang belakang']],
    isi: [
      { p: 'Setiap sore pukul empat, dua karyawan FreshFruit Market berhenti melayani pembeli untuk menyortir rak. Pisang yang mulai berbintik dipisahkan, mangga yang melunak dipotong harganya, sisanya dibuang. Pekerjaan itu memakan satu jam — setiap hari.' },
      { h: 'Yang diubah' },
      { p: 'Sachet tidak dipasang di rak pajang, melainkan di peti-peti gudang belakang tempat stok menunggu dua sampai empat hari sebelum dipajang. Di sanalah etilen menumpuk paling banyak, karena ruangnya tertutup dan penuh buah klimakterik.' },
      { kutip: 'Buah di toko bertahan lima sampai tujuh hari lebih lama. Penyortiran sore yang dulu rutin, sekarang hampir tidak perlu.' },
      { h: 'Yang terlihat sesudahnya' },
      { p: 'Buah yang dulu mulai menunjukkan tanda pembusukan pada hari ketiga kini masih layak jual hingga hari ketujuh. Sortir sore berubah menjadi sortir pagi saja. Yang paling terasa, kata Relya, justru bukan angka buangan — melainkan satu jam karyawan yang kembali ke kasir.' },
    ],
  },
  {
    slug: 'pengiriman-luar-kota-tanpa-taruhan',
    no: '02',
    judul: 'Pengiriman luar kota yang tidak lagi jadi taruhan',
    ringkas: 'Distributor buah antarkota yang dulu menghitung "susut perjalanan" sebagai biaya tetap.',
    nama: 'Ani Wijaya',
    peran: 'BuahSegar Distribusi, distributor antarkota',
    potret: '/images/pp2.png',
    image: '/images/buahsegar2.webp',
    angka: [['Rute', 'darat 2–4 hari'], ['Dosis', '1 sachet / 1–2 m³'], ['Diperiksa di', 'gudang tujuan']],
    isi: [
      { p: 'Dalam pembukuan BuahSegar Distribusi, ada satu baris yang tidak pernah kosong: susut perjalanan. Setiap truk yang berangkat membawa perkiraan bahwa sebagian muatan akan tiba terlalu matang untuk dijual dengan harga penuh.' },
      { h: 'Yang diubah' },
      { p: 'Perhitungan dosis dimulai dari volume bak truk, bukan berat muatan. Sachet diletakkan di sela peti, tidak di dasar tumpukan, dan kemasan luar dibuka tepat sebelum pemuatan. Di gudang tujuan, petugas mencatat warna indikator sebagai data untuk pengiriman berikutnya.' },
      { kutip: 'Pengiriman ke luar kota tidak lagi jadi taruhan. Barang sampai dalam kondisi yang masih bisa saya banggakan.' },
      { h: 'Yang terlihat sesudahnya' },
      { p: 'Baris susut perjalanan tidak hilang, tetapi mengecil sampai tidak lagi dihitung sebagai biaya tetap. Catatan warna indikator juga memberi sesuatu yang dulu tidak ada: bukti tertulis untuk menjawab keluhan penerima.' },
    ],
  },
  {
    slug: 'mutu-yang-sama-setiap-pagi',
    no: '03',
    judul: 'Mutu yang sama setiap pagi',
    ringkas: 'Dapur kafe yang membutuhkan buah dengan kematangan seragam untuk jus dan saji harian.',
    nama: 'Rina Permata',
    peran: 'The Green Cafe, dapur & bar jus',
    potret: '/images/pp3.png',
    image: '/images/l3.webp',
    angka: [['Belanja buah', '2× seminggu'], ['Disimpan di', 'lemari buah tertutup'], ['Tujuan', 'rasa yang sama tiap hari']],
    isi: [
      { p: 'Bagi dapur, masalahnya bukan buah yang busuk, melainkan buah yang tidak seragam. Mangga yang terlalu matang membuat jus terlalu manis; yang belum matang membuatnya asam. Pelanggan tetap langsung merasakan bedanya.' },
      { h: 'Yang diubah' },
      { p: 'Buah dibeli dua kali seminggu dan disimpan di lemari buah tertutup dengan sachet di rak paling atas. Pisang dan mangga — penghasil etilen — dipisahkan dari stroberi dan jeruk yang masalahnya lebih ke kelembapan.' },
      { kutip: 'Dapur kami butuh mutu yang sama tiap hari. Selisih antar pengiriman jauh lebih kecil sejak memakai sachet ini.' },
      { h: 'Yang terlihat sesudahnya' },
      { p: 'Buah yang dibeli hari Senin masih punya kematangan yang mirip pada hari Kamis. Resep tidak perlu disesuaikan setiap pagi, dan yang paling penting bagi Rina: pelanggan berhenti bertanya kenapa rasanya beda.' },
    ],
  },
]

export const ceritaBySlug = (slug: string) => CERITA.find((c) => c.slug === slug)
