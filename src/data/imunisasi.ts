export interface Imunisasi {
  usia: string;
  usiaEn: string;
  bulan: number;
  vaksin: string[];
  catatan: string;
  catatanEn: string;
}

export const imunisasi: Imunisasi[] = [
  { usia: "0 bulan", usiaEn: "0 months", bulan: 0, vaksin: ["HB 0", "BCG", "Polio 0"], catatan: "HB 0 ideal kurang dari 24 jam setelah lahir.", catatanEn: "HB 0 ideally within 24 hours of birth." },
  { usia: "2 bulan", usiaEn: "2 months", bulan: 2, vaksin: ["DPT 1", "Hib 1", "Polio 1", "Hepatitis B 1", "PCV 1", "Rotavirus 1"], catatan: "Bawa buku KIA. Demam ringan setelah DPT itu wajar.", catatanEn: "Bring the KIA book. Mild fever after DPT is normal." },
  { usia: "3 bulan", usiaEn: "3 months", bulan: 3, vaksin: ["DPT 2", "Hib 2", "Polio 2", "Hepatitis B 2", "PCV 2"], catatan: "Jarak minimal 4 minggu dari dosis 1.", catatanEn: "At least 4 weeks after dose 1." },
  { usia: "4 bulan", usiaEn: "4 months", bulan: 4, vaksin: ["DPT 3", "Hib 3", "Polio 3", "Hepatitis B 3", "PCV 3", "Rotavirus 2", "IPV"], catatan: "Tanya ketersediaan IPV di puskesmas.", catatanEn: "Ask about IPV stock at the health center." },
  { usia: "6 bulan", usiaEn: "6 months", bulan: 6, vaksin: ["PCV 4 bila jadwal 4 dosis", "Influenza tahunan"], catatan: "Mulai MPASI tepat 6 bulan. Imunisasi tetap jalan.", catatanEn: "Start solids right at 6 months. Immunization continues." },
  { usia: "9 bulan", usiaEn: "9 months", bulan: 9, vaksin: ["Campak atau MR 1"], catatan: "Vitamin A kapsul biru biasanya diberikan.", catatanEn: "Blue vitamin A capsule is usually given." },
  { usia: "12 bulan", usiaEn: "12 months", bulan: 12, vaksin: ["PCV booster", "Varisela", "Hepatitis A"], catatan: "Cek status gizi dan tumbuh kembang.", catatanEn: "Check nutrition and growth." },
  { usia: "15 bulan", usiaEn: "15 months", bulan: 15, vaksin: ["MR 2"], catatan: "Jarak minimal 6 bulan dari MR 1.", catatanEn: "At least 6 months after MR 1." },
  { usia: "18 bulan", usiaEn: "18 months", bulan: 18, vaksin: ["DPT booster", "Hib booster", "Polio booster"], catatan: "Bawa catatan KIPI bila pernah ada.", catatanEn: "Bring past reaction notes if any." },
];

export interface ChecklistGroup {
  title: string;
  titleEn: string;
  items: string[];
  itemsEn: string[];
}

export const checklistPersalinan: ChecklistGroup[] = [
  {
    title: "Dokumen penting",
    titleEn: "Important documents",
    items: ["KTP dan KK", "Buku KIA", "Kartu BPJS atau asuransi", "Hasil USG dan lab terakhir", "Rencana rujukan dan nomor darurat"],
    itemsEn: ["ID card and family card", "KIA health book", "Insurance card", "Latest ultrasound and lab results", "Referral plan and emergency numbers"],
  },
  {
    title: "Untuk ibu",
    titleEn: "For mom",
    items: ["Baju ganti 3 pasang berkancing depan", "Kain jarik dan stagen bila perlu", "Pembalut nifas", "Bra menyusui dan breast pad", "Sandal jepit dan kaus kaki", "Camilan dan air minum"],
    itemsEn: ["3 front-button outfits", "Cloth wrap and binder if needed", "Postpartum pads", "Nursing bra and pads", "Sandals and socks", "Snacks and drinking water"],
  },
  {
    title: "Untuk bayi",
    titleEn: "For baby",
    items: ["Baju bayi 3 pasang", "Popok kain dan popok sekali pakai", "Bedong 2 lembar", "Topi dan kaus kaki bayi", "Selimut tipis", "Tisu basah non alkohol"],
    itemsEn: ["3 baby outfits", "Cloth and disposable diapers", "2 swaddle cloths", "Baby hat and socks", "Light blanket", "Alcohol free wet wipes"],
  },
  {
    title: "Pendamping",
    titleEn: "Companion",
    items: ["Baju ganti pendamping", "Charger HP", "Uang tunai secukupnya", "Kamera bila ingin dokumentasi", "Catatan kontak bidan"],
    itemsEn: ["Companion change of clothes", "Phone charger", "Enough cash", "Camera for documentation", "Midwife contact notes"],
  },
];
