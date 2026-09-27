export interface Tool {
  slug: string;
  title: string;
  desc: string;
  icon: string;
}

export const tools: Tool[] = [
  {
    slug: "kalender-kehamilan",
    title: "Kalender Kehamilan",
    desc: "Lacak usia kehamilan dan perkembangan janin.",
    icon: "lucide:calendar-days",
  },
  {
    slug: "imt",
    title: "Hitung IMT",
    desc: "Ketahui status gizi anda.",
    icon: "lucide:scale",
  },
  {
    slug: "hpl",
    title: "Kalkulator HPL",
    desc: "Perkirakan tanggal persalinan.",
    icon: "lucide:calendar-clock",
  },
  {
    slug: "checklist-persalinan",
    title: "Checklist Persiapan Persalinan",
    desc: "Persiapan segala kebutuhan Anda.",
    icon: "lucide:clipboard-check",
  },
  {
    slug: "imunisasi",
    title: "Jadwal Imunisasi Anak",
    desc: "Jaga si kecil tetap sehat dan terlindungi.",
    icon: "lucide:syringe",
  },
];

export interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  minutes: number;
  image: string;
  alt: string;
}

export const articles: Article[] = [
  {
    slug: "makanan-trimester-2",
    category: "Kehamilan",
    title: "Makanan yang Baik untuk Ibu Hamil di Trimester 2",
    excerpt: "Nutrisi yang tepat sangat penting untuk perkembangan janin dan kesehatan ibu.",
    minutes: 5,
    image: "/img/img.webp",
    alt: "Ibu hamil berkonsultasi tentang nutrisi trimester 2",
  },
  {
    slug: "menghadapi-kontraksi",
    category: "Persalinan",
    title: "Tips Menghadapi Kontraksi Saat Persalinan",
    excerpt: "Kenali tanda tanda dan cara efektif mengurangi rasa sakit saat kontraksi.",
    minutes: 7,
    image: "/img/img.webp",
    alt: "Ibu bersiap menghadapi kontraksi persalinan",
  },
  {
    slug: "merawat-tali-pusat",
    category: "Neonatus",
    title: "Cara Merawat Tali Pusat pada Bayi Baru Lahir",
    excerpt: "Jaga kebersihan dan hindari infeksi dengan perawatan yang tepat.",
    minutes: 4,
    image: "/img/img.webp",
    alt: "Perawatan tali pusat bayi baru lahir",
  },
];
