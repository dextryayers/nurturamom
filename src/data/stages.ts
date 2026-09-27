export interface Stage {
  slug: string;
  title: string;
  range: string;
  icon: string;
}

export const stages: Stage[] = [
  { slug: "trimester-1", title: "Trimester 1", range: "0-12 minggu", icon: "lucide:user-round" },
  { slug: "trimester-2", title: "Trimester 2", range: "13-27 minggu", icon: "lucide:users" },
  { slug: "trimester-3", title: "Trimester 3", range: "28-40 minggu", icon: "lucide:briefcase" },
  { slug: "persiapan-persalinan", title: "Persiapan Persalinan", range: "Ceklis tas", icon: "lucide:calendar-heart" },
  { slug: "nifas", title: "Masa Nifas", range: "0-42 hari", icon: "lucide:flower-2" },
  { slug: "bayi-baru-lahir", title: "Bayi Baru Lahir", range: "0-28 hari", icon: "lucide:baby" },
  { slug: "anak", title: "Anak", range: "0-5 tahun", icon: "lucide:blocks" },
];
