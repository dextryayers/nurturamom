export interface Topic {
  slug: string;
  title: string;
  desc: string;
  icon: string;
  tint: string;
}

export const topics: Topic[] = [
  {
    slug: "kehamilan",
    title: "Kehamilan",
    desc: "Informasi tentang perkembangan janin, nutrisi, dan kesehatan ibu hamil.",
    icon: "lucide:heart-handshake",
    tint: "bg-[#FFCAD4]/40 text-[#B9375E]",
  },
  {
    slug: "persalinan",
    title: "Persalinan",
    desc: "Panduan persiapan, proses persalinan, dan tips pemulihan.",
    icon: "lucide:baby",
    tint: "bg-[#F9E8E0] text-[#8A2846]",
  },
  {
    slug: "nifas",
    title: "Nifas",
    desc: "Perawatan diri, perubahan tubuh dan kesehatan pasca melahirkan.",
    icon: "lucide:flower-2",
    tint: "bg-[#FFCAD4]/40 text-[#B9375E]",
  },
  {
    slug: "neonatus",
    title: "Neonatus",
    desc: "Perawatan bayi baru lahir, menyusui, dan deteksi dini masalah kesehatan.",
    icon: "lucide:milk",
    tint: "bg-[#F9E8E0] text-[#8A2846]",
  },
  {
    slug: "reproduksi-kb",
    title: "Reproduksi",
    desc: "Kesehatan organ reproduksi wanita dan informasi seputar kesuburan.",
    icon: "lucide:heart-pulse",
    tint: "bg-[#FFCAD4]/40 text-[#B9375E]",
  },
  {
    slug: "reproduksi-kb",
    title: "KB",
    desc: "Pilihan metode kontrasepsi yang aman dan sesuai kebutuhan.",
    icon: "lucide:shield-check",
    tint: "bg-[#F9E8E0] text-[#8A2846]",
  },
];
