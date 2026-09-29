export interface TopicLink {
  t: string;
  en: string;
  href: string;
}

export interface Topic {
  slug: string;
  title: string;
  titleEn: string;
  desc: string;
  descEn: string;
  icon: string;
  tint: string;
  links: TopicLink[];
}

export const topics: Topic[] = [
  {
    slug: "kehamilan",
    title: "Kehamilan",
    titleEn: "Pregnancy",
    desc: "Informasi tentang perkembangan janin, nutrisi, dan kesehatan ibu hamil.",
    descEn: "Fetal growth, nutrition, and health for expectant moms.",
    icon: "lucide:heart-handshake",
    tint: "bg-[#EFD0D6]/40 text-[#9C3D5C]",
    links: [
      { t: "Makanan trimester 2", en: "2nd trimester food", href: "/artikel/makanan-trimester-2" },
      { t: "Atasi mual trimester 1", en: "Easing 1st trimester nausea", href: "/artikel/atasi-mual-trimester-1" },
      { t: "Cegah anemia", en: "Preventing anemia", href: "/artikel/cegah-anemia-tablet-tambah-darah" },
      { t: "Kalender kehamilan", en: "Pregnancy calendar", href: "/kalender-kehamilan" },
    ],
  },
  {
    slug: "persalinan",
    title: "Persalinan",
    titleEn: "Childbirth",
    desc: "Panduan persiapan, proses persalinan, dan tips pemulihan.",
    descEn: "Birth preparation, the birth process, and recovery tips.",
    icon: "lucide:baby",
    tint: "bg-[#F9E8E0] text-[#76304A]",
    links: [
      { t: "Tips menghadapi kontraksi", en: "Coping with contractions", href: "/artikel/menghadapi-kontraksi" },
      { t: "Tanda sudah dekat", en: "Signs birth is near", href: "/artikel/tanda-persalinan-sudah-dekat" },
      { t: "Checklist tas", en: "Packing checklist", href: "/tools/checklist-persalinan" },
      { t: "Tahap persiapan", en: "Preparation stage", href: "/panduan/persiapan-persalinan" },
    ],
  },
  {
    slug: "nifas",
    title: "Nifas",
    titleEn: "Postpartum",
    desc: "Perawatan diri, perubahan tubuh dan kesehatan pasca melahirkan.",
    descEn: "Self care, body changes, and health after birth.",
    icon: "lucide:flower-2",
    tint: "bg-[#EFD0D6]/40 text-[#9C3D5C]",
    links: [
      { t: "Luka jahitan", en: "Stitch wound care", href: "/artikel/perawatan-luka-jahitan-nifas" },
      { t: "Baby blues vs depresi", en: "Baby blues vs depression", href: "/artikel/baby-blues-vs-depresi-nifas" },
      { t: "Tanda bahaya nifas", en: "Postpartum danger signs", href: "/nifas" },
      { t: "Masa nifas 0-42 hari", en: "Postpartum 0-42 days", href: "/panduan/nifas" },
    ],
  },
  {
    slug: "neonatus",
    title: "Neonatus",
    titleEn: "Newborn",
    desc: "Perawatan bayi baru lahir, menyusui, dan deteksi dini masalah kesehatan.",
    descEn: "Newborn care, breastfeeding, and early health checks.",
    icon: "lucide:milk",
    tint: "bg-[#F9E8E0] text-[#76304A]",
    links: [
      { t: "Merawat tali pusat", en: "Cord care", href: "/artikel/merawat-tali-pusat" },
      { t: "Agar ASI lancar", en: "Boosting milk supply", href: "/artikel/asi-lancar-minggu-pertama" },
      { t: "Bayi kuning", en: "Jaundiced baby", href: "/artikel/bayi-kuning-baru-lahir" },
      { t: "Bayi baru lahir 0-28 hari", en: "Newborn 0-28 days", href: "/panduan/bayi-baru-lahir" },
    ],
  },
  {
    slug: "reproduksi-kb",
    title: "Reproduksi",
    titleEn: "Reproduction",
    desc: "Kesehatan organ reproduksi wanita dan informasi seputar kesuburan.",
    descEn: "Women reproductive health and fertility information.",
    icon: "lucide:heart-pulse",
    tint: "bg-[#EFD0D6]/40 text-[#9C3D5C]",
    links: [
      { t: "Panduan lengkap", en: "Full guide", href: "/reproduksi-kb" },
      { t: "Siap hamil", en: "Planning pregnancy", href: "/kehamilan" },
      { t: "Pilihan KB ringkas", en: "Contraceptive options", href: "/reproduksi-kb#pilihan-kb" },
    ],
  },
  {
    slug: "reproduksi-kb",
    title: "KB",
    titleEn: "Family Planning",
    desc: "Pilihan metode kontrasepsi yang aman dan sesuai kebutuhan.",
    descEn: "Safe contraceptive options for your needs.",
    icon: "lucide:shield-check",
    tint: "bg-[#F9E8E0] text-[#76304A]",
    links: [
      { t: "Pilihan KB ringkas", en: "Contraceptive options", href: "/reproduksi-kb#pilihan-kb" },
      { t: "Panduan lengkap", en: "Full guide", href: "/reproduksi-kb" },
      { t: "Setelah melahirkan", en: "After birth", href: "/nifas" },
    ],
  },
];
