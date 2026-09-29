export interface Stage {
  slug: string;
  title: string;
  titleEn: string;
  range: string;
  icon: string;
}

export const stages: Stage[] = [
  { slug: "trimester-1", title: "Trimester 1", titleEn: "1st Trimester", range: "0-12 minggu", icon: "lucide:user-round" },
  { slug: "trimester-2", title: "Trimester 2", titleEn: "2nd Trimester", range: "13-27 minggu", icon: "lucide:users" },
  { slug: "trimester-3", title: "Trimester 3", titleEn: "3rd Trimester", range: "28-40 minggu", icon: "lucide:briefcase" },
  { slug: "persiapan-persalinan", title: "Persiapan Persalinan", titleEn: "Birth Preparation", range: "Ceklis tas", icon: "lucide:calendar-heart" },
  { slug: "nifas", title: "Masa Nifas", titleEn: "Postpartum Period", range: "0-42 hari", icon: "lucide:flower-2" },
  { slug: "bayi-baru-lahir", title: "Bayi Baru Lahir", titleEn: "Newborn Baby", range: "0-28 hari", icon: "lucide:baby" },
  { slug: "anak", title: "Anak", titleEn: "Child", range: "0-5 tahun", icon: "lucide:blocks" },
];
