/* ============================================================================
   Isi halaman legal untuk brief EthyleneAbsorber (PT Dickson Synergy).
   Substansinya sama di keempat entri kontes karena perusahaannya sama —
   yang berbeda adalah cara tiap entri menampilkannya. Ditulis khusus untuk
   bisnis B2B ini (formulir sample, perhitungan dosis, dokumen ekspor),
   bukan templat privasi umum. Draf untuk purwarupa desain; perlu ditinjau
   bagian legal klien sebelum dipakai.
   ========================================================================== */

export type Bagian = { h: string; p?: string; daftar?: string[] };

export const DIPERBARUI = '29 September 2026';

export const PRIVASI: { intro: string; bagian: Bagian[] } = {
  intro:
    'Situs ini hanya meminta data yang kami perlukan untuk menghitung dosis, mengirim sample, dan menyiapkan dokumen pengiriman Anda. Tidak lebih, dan tidak untuk dijual.',
  bagian: [
    {
      h: 'Data yang kami minta',
      p: 'Saat Anda mengisi formulir permintaan sample atau menghubungi kami, kami mencatat:',
      daftar: [
        'Nama, nama perusahaan, surel, dan nomor telepon.',
        'Komoditas yang dikirim, perkiraan volume ruang (m³), dan rute pengiriman.',
        'Alamat pengiriman sample.',
      ],
    },
    {
      h: 'Untuk apa data itu dipakai',
      daftar: [
        'Menyusun perhitungan dosis tertulis untuk muatan Anda.',
        'Mengirim sample dan menindaklanjuti hasil ujinya.',
        'Menyiapkan lembar data teknis, salinan registrasi BPOM, dan pernyataan kesesuaian yang diminta buyer.',
      ],
    },
    {
      h: 'Yang tidak kami lakukan',
      daftar: [
        'Menjual atau menyewakan data Anda kepada pihak mana pun.',
        'Memakai data Anda untuk iklan pihak ketiga.',
        'Menambahkan Anda ke milis tanpa persetujuan tertulis.',
      ],
    },
    {
      h: 'Pihak yang ikut menerima data',
      p: 'Hanya perusahaan kurir yang mengirim sample (nama, telepon, dan alamat pengiriman) serta, bila Anda memintanya, agen pengiriman yang mengurus dokumen ekspor Anda.',
    },
    {
      h: 'Berapa lama kami menyimpannya',
      p: 'Data permintaan sample disimpan paling lama 24 bulan sejak kontak terakhir, lalu dihapus. Data transaksi disimpan sesuai kewajiban perpajakan yang berlaku.',
    },
    {
      h: 'Cookie dan analitik',
      p: 'Situs ini tidak memakai cookie iklan. Kami hanya mengukur jumlah kunjungan secara agregat, tanpa mengenali Anda secara pribadi.',
    },
    {
      h: 'Hak Anda',
      p: 'Anda dapat meminta salinan, perbaikan, atau penghapusan data Anda kapan saja melalui halaman Kontak. Permintaan diproses dalam 14 hari kerja.',
    },
  ],
}

export const KETENTUAN: { intro: string; bagian: Bagian[] } = {
  intro:
    'Ketentuan ini mengatur permintaan sample, perhitungan dosis, pemesanan, dan klaim mutu produk EthyleneAbsorber, Container Dry® II, Desi Pak®, dan Silica Gel.',
  bagian: [
    {
      h: 'Sample',
      daftar: [
        'Sample diberikan tanpa biaya untuk keperluan uji, satu paket per perusahaan per komoditas.',
        'Sample tidak untuk dijual kembali.',
        'Hasil uji di fasilitas Anda dapat berbeda dari hasil uji kami karena suhu, kelembapan, dan kepadatan muatan.',
      ],
    },
    {
      h: 'Perhitungan dosis',
      p: 'Perhitungan dosis tertulis adalah rekomendasi teknis berdasarkan data yang Anda berikan (komoditas, volume, rute). Bila data berubah, perhitungan perlu disusun ulang. Dasar umumnya: satu sachet untuk 1–2 m³ ruang tertutup.',
    },
    {
      h: 'Penawaran dan pemesanan',
      daftar: [
        'Penawaran harga tertulis berlaku 30 hari sejak tanggal diterbitkan.',
        'Pesanan dianggap sah setelah konfirmasi tertulis dari kami.',
        'Jadwal pengiriman mengikuti konfirmasi pesanan; keterlambatan dari pihak kurir di luar kendali kami akan diberitahukan.',
      ],
    },
    {
      h: 'Penyimpanan dan pemakaian',
      p: 'Sachet yang belum dibuka memiliki masa simpan 2 tahun bila disimpan dalam kemasan asli di tempat sejuk dan kering. Setelah dibuka, sachet harus segera dipakai. Masa efektif standar 30 hari dan dapat mencapai 45 hari pada kondisi ideal.',
    },
    {
      h: 'Klaim mutu',
      daftar: [
        'Klaim diajukan paling lambat 7 hari sejak barang diterima.',
        'Sertakan nomor batch, foto indikator warna sachet, dan foto kemasan.',
        'Produk yang terbukti cacat produksi diganti tanpa biaya.',
      ],
    },
    {
      h: 'Batas tanggung jawab',
      p: 'Produk kami memperlambat pematangan dan menahan kelembapan, tetapi tidak menggantikan rantai dingin, penanganan pascapanen, maupun kebersihan kemasan. Kami tidak bertanggung jawab atas kerusakan muatan yang disebabkan faktor di luar fungsi produk.',
    },
    {
      h: 'Hukum yang berlaku',
      p: 'Ketentuan ini tunduk pada hukum Republik Indonesia. Perselisihan diselesaikan terlebih dahulu secara musyawarah.',
    },
  ],
}
