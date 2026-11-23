export interface Tool {
  slug: string;
  title: string;
  titleEn: string;
  desc: string;
  descEn: string;
  icon: string;
}

export const tools: Tool[] = [
  {
    slug: "kalender-kehamilan",
    title: "Kalender Kehamilan",
    titleEn: "Pregnancy Calendar",
    desc: "Lacak usia kehamilan dan perkembangan janin.",
    descEn: "Track gestational age and fetal growth.",
    icon: "lucide:calendar-days",
  },
  {
    slug: "imt",
    title: "Hitung IMT",
    titleEn: "Check BMI",
    desc: "Ketahui status gizi anda.",
    descEn: "Know your nutritional status.",
    icon: "lucide:scale",
  },
  {
    slug: "hpl",
    title: "Kalkulator HPL",
    titleEn: "Due Date Calculator",
    desc: "Perkirakan tanggal persalinan.",
    descEn: "Estimate the birth date.",
    icon: "lucide:calendar-clock",
  },
  {
    slug: "kalkulator-haid",
    title: "Kalkulator Haid",
    titleEn: "Period Calculator",
    desc: "Perkirakan haid, ovulasi, dan masa subur.",
    descEn: "Estimate periods, ovulation, and fertile days.",
    icon: "lucide:calendar-heart",
  },
  {
    slug: "kalkulator-nifas",
    title: "Kalkulator Nifas",
    titleEn: "Postpartum Calculator",
    desc: "Hitung 42 hari nifas dan jadwal KF.",
    descEn: "Track 42 postpartum days and KF visits.",
    icon: "lucide:flower-2",
  },
  {
    slug: "checklist-persalinan",
    title: "Checklist Persiapan Persalinan",
    titleEn: "Birth Packing Checklist",
    desc: "Persiapan segala kebutuhan Anda.",
    descEn: "Prepare everything you need.",
    icon: "lucide:clipboard-check",
  },
  {
    slug: "imunisasi",
    title: "Jadwal Imunisasi Anak",
    titleEn: "Child Immunization Schedule",
    desc: "Jaga si kecil tetap sehat dan terlindungi.",
    descEn: "Keep your little one healthy and protected.",
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
    alt: "Ibu hamil membaca panduan nutrisi trimester 2",
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
