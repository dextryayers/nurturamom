export interface Panduan {
  slug: string;
  title: string;
  range: string;
  desc: string;
  points: string[];
}

export const panduan: Panduan[] = [
  {
    slug: "trimester-1",
    title: "Trimester 1",
    range: "0-12 minggu",
    desc: "Fondasi organ janin. Fokus ke asam folat, ANC pertama, dan atasi mual.",
    points: ["ANC 1 kali dan USG 8-12 minggu", "Asam folat 400 mcg per hari sesuai anjuran", "Makan sedikit tapi sering", "Hindari rokok, alkohol, dan obat bebas"],
  },
  {
    slug: "trimester-2",
    title: "Trimester 2",
    range: "13-27 minggu",
    desc: "Masa paling nyaman. Gerak mulai terasa. Fokus ke protein dan zat besi.",
    points: ["ANC 2 kali dan USG anatomi 18-22 minggu", "Protein hewani tiap hari", "Jalan santai 20-30 menit", "Catat gerak pertama"],
  },
  {
    slug: "trimester-3",
    title: "Trimester 3",
    range: "28-40 minggu",
    desc: "Tumbuh cepat. Kontrol makin rapat. Siapkan tas dan rencana rujukan.",
    points: ["ANC tiap 2 minggu lalu tiap minggu sejak 36 minggu", "Hitung tendangan 10 kali per 2 jam", "Siapkan tas sejak 34 minggu", "Kenali tanda persalinan"],
  },
  {
    slug: "persiapan-persalinan",
    title: "Persiapan Persalinan",
    range: "Ceklis tas",
    desc: "Dokumen, barang ibu, barang bayi, dan tim pendamping siap 100 persen.",
    points: ["Dokumen dan buku KIA dalam 1 map", "Baju ganti ibu dan bayi 3 pasang", "Pembalut nifas dan popok", "Nomor darurat dan transport"],
  },
  {
    slug: "nifas",
    title: "Masa Nifas",
    range: "0-42 hari",
    desc: "Pemulihan ibu dan adaptasi menyusui. Istirahat adalah obat utama.",
    points: ["Susui 8-12 kali sehari", "Jaga luka tetap kering", "Pantau lokia 2-6 minggu", "Kontrol nifas dan bahas KB"],
  },
  {
    slug: "bayi-baru-lahir",
    title: "Bayi Baru Lahir",
    range: "0-28 hari",
    desc: "IMD, ASI eksklusif, tali pusat kering, dan imunisasi awal.",
    points: ["IMD 1 jam pertama", "ASI saja tanpa tambahan", "Tali pusat kering dan terbuka", "HB 0, BCG, Polio 0"],
  },
  {
    slug: "anak",
    title: "Anak",
    range: "0-5 tahun",
    desc: "MPASI tepat, imunisasi lengkap, stimulasi harian, dan timbang rutin.",
    points: ["MPASI 6 bulan plus ASI sampai 2 tahun", "Imunisasi dasar lengkap", "Stimulasi bicara dan motorik", "Posyandu tiap bulan"],
  },
];

export function getPanduan(slug: string): Panduan | undefined {
  return panduan.find((p) => p.slug === slug);
}
