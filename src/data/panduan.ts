export interface Panduan {
  slug: string;
  title: string;
  titleEn: string;
  range: string;
  rangeEn: string;
  desc: string;
  descEn: string;
  points: string[];
  pointsEn: string[];
}

export const panduan: Panduan[] = [
  {
    slug: "trimester-1",
    title: "Trimester 1",
    titleEn: "1st Trimester",
    range: "0-12 minggu",
    rangeEn: "0-12 weeks",
    desc: "Fondasi organ janin. Fokus ke asam folat, ANC pertama, dan atasi mual.",
    descEn: "Fetal organs form. Focus on folic acid, first ANC, and nausea.",
    points: ["ANC 1 kali dan USG 8-12 minggu", "Asam folat 400 mcg per hari sesuai anjuran", "Makan sedikit tapi sering", "Hindari rokok, alkohol, dan obat bebas"],
    pointsEn: ["1 ANC visit and 8-12 week ultrasound", "400 mcg folic acid daily as advised", "Eat small frequent meals", "Avoid smoking, alcohol, and free drugs"],
  },
  {
    slug: "trimester-2",
    title: "Trimester 2",
    titleEn: "2nd Trimester",
    range: "13-27 minggu",
    rangeEn: "13-27 weeks",
    desc: "Masa paling nyaman. Gerak mulai terasa. Fokus ke protein dan zat besi.",
    descEn: "The most comfortable phase. Movement begins. Focus on protein and iron.",
    points: ["ANC 2 kali dan USG anatomi 18-22 minggu", "Protein hewani tiap hari", "Jalan santai 20-30 menit", "Catat gerak pertama"],
    pointsEn: ["2 ANC visits and 18-22 week anatomy scan", "Animal protein daily", "20-30 minute relaxed walks", "Note the first movements"],
  },
  {
    slug: "trimester-3",
    title: "Trimester 3",
    titleEn: "3rd Trimester",
    range: "28-40 minggu",
    rangeEn: "28-40 weeks",
    desc: "Tumbuh cepat. Kontrol makin rapat. Siapkan tas dan rencana rujukan.",
    descEn: "Fast growth. Visits get closer. Pack the bag and referral plan.",
    points: ["ANC tiap 2 minggu lalu tiap minggu sejak 36 minggu", "Hitung tendangan 10 kali per 2 jam", "Siapkan tas sejak 34 minggu", "Kenali tanda persalinan"],
    pointsEn: ["ANC every 2 weeks, weekly from 36 weeks", "Count 10 kicks per 2 hours", "Pack the bag from 34 weeks", "Know labor signs"],
  },
  {
    slug: "persiapan-persalinan",
    title: "Persiapan Persalinan",
    titleEn: "Birth Preparation",
    range: "Ceklis tas",
    rangeEn: "Bag checklist",
    desc: "Dokumen, barang ibu, barang bayi, dan tim pendamping siap 100 persen.",
    descEn: "Documents, mom and baby items, and support team fully ready.",
    points: ["Dokumen dan buku KIA dalam 1 map", "Baju ganti ibu dan bayi 3 pasang", "Pembalut nifas dan popok", "Nomor darurat dan transport"],
    pointsEn: ["Documents and KIA book in 1 folder", "3 outfits each for mom and baby", "Postpartum pads and diapers", "Emergency numbers and transport"],
  },
  {
    slug: "nifas",
    title: "Masa Nifas",
    titleEn: "Postpartum Period",
    range: "0-42 hari",
    rangeEn: "0-42 days",
    desc: "Pemulihan ibu dan adaptasi menyusui. Istirahat adalah obat utama.",
    descEn: "Mom recovery and breastfeeding adaptation. Rest is the main cure.",
    points: ["Susui 8-12 kali sehari", "Jaga luka tetap kering", "Pantau lokia 2-6 minggu", "Kontrol nifas dan bahas KB"],
    pointsEn: ["Nurse 8-12 times daily", "Keep wounds dry", "Watch lochia for 2-6 weeks", "Postpartum check and family planning talk"],
  },
  {
    slug: "bayi-baru-lahir",
    title: "Bayi Baru Lahir",
    titleEn: "Newborn Baby",
    range: "0-28 hari",
    rangeEn: "0-28 days",
    desc: "IMD, ASI eksklusif, tali pusat kering, dan imunisasi awal.",
    descEn: "Skin to skin, exclusive breastfeeding, dry cord, first vaccines.",
    points: ["IMD 1 jam pertama", "ASI saja tanpa tambahan", "Tali pusat kering dan terbuka", "HB 0, BCG, Polio 0"],
    pointsEn: ["Skin to skin in hour one", "Breastmilk only, nothing added", "Dry open cord", "HB 0, BCG, Polio 0"],
  },
  {
    slug: "anak",
    title: "Anak",
    titleEn: "Child",
    range: "0-5 tahun",
    rangeEn: "0-5 years",
    desc: "MPASI tepat, imunisasi lengkap, stimulasi harian, dan timbang rutin.",
    descEn: "Timely solids, full vaccines, daily stimulation, routine weighing.",
    points: ["MPASI 6 bulan plus ASI sampai 2 tahun", "Imunisasi dasar lengkap", "Stimulasi bicara dan motorik", "Posyandu tiap bulan"],
    pointsEn: ["Solids at 6 months plus milk to age 2", "Complete basic vaccines", "Speech and motor stimulation", "Monthly posyandu visits"],
  },
];

export function getPanduan(slug: string): Panduan | undefined {
  return panduan.find((p) => p.slug === slug);
}
