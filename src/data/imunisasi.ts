export interface Imunisasi {
  usia: string;
  vaksin: string[];
  catatan: string;
}

export const imunisasi: Imunisasi[] = [
  { usia: "0 bulan", vaksin: ["HB 0", "BCG", "Polio 0"], catatan: "HB 0 ideal kurang dari 24 jam setelah lahir." },
  { usia: "2 bulan", vaksin: ["DPT 1", "Hib 1", "Polio 1", "Hepatitis B 1", "PCV 1", "Rotavirus 1"], catatan: "Bawa buku KIA. Demam ringan setelah DPT itu wajar." },
  { usia: "3 bulan", vaksin: ["DPT 2", "Hib 2", "Polio 2", "Hepatitis B 2", "PCV 2"], catatan: "Jarak minimal 4 minggu dari dosis 1." },
  { usia: "4 bulan", vaksin: ["DPT 3", "Hib 3", "Polio 3", "Hepatitis B 3", "PCV 3", "Rotavirus 2", "IPV"], catatan: "Tanya ketersediaan IPV di puskesmas." },
  { usia: "6 bulan", vaksin: ["PCV 4 bila jadwal 4 dosis", "Influenza tahunan"], catatan: "Mulai MPASI tepat 6 bulan. Imunisasi tetap jalan." },
  { usia: "9 bulan", vaksin: ["Campak atau MR 1"], catatan: "Vitamin A kapsul biru biasanya diberikan." },
  { usia: "12 bulan", vaksin: ["PCV booster", "Varisela", "Hepatitis A"], catatan: "Cek status gizi dan tumbuh kembang." },
  { usia: "15 bulan", vaksin: ["MR 2"], catatan: "Jarak minimal 6 bulan dari MR 1." },
  { usia: "18 bulan", vaksin: ["DPT booster", "Hib booster", "Polio booster"], catatan: "Bawa catatan KIPI bila pernah ada." },
];

export interface ChecklistGroup {
  title: string;
  items: string[];
}

export const checklistPersalinan: ChecklistGroup[] = [
  {
    title: "Dokumen penting",
    items: ["KTP dan KK", "Buku KIA", "Kartu BPJS atau asuransi", "Hasil USG dan lab terakhir", "Rencana rujukan dan nomor darurat"],
  },
  {
    title: "Untuk ibu",
    items: ["Baju ganti 3 pasang berkancing depan", "Kain jarik dan stagen bila perlu", "Pembalut nifas", "Bra menyusui dan breast pad", "Sandal jepit dan kaus kaki", "Camilan dan air minum"],
  },
  {
    title: "Untuk bayi",
    items: ["Baju bayi 3 pasang", "Popok kain dan popok sekali pakai", "Bedong 2 lembar", "Topi dan kaus kaki bayi", "Selimut tipis", "Tisu basah non alkohol"],
  },
  {
    title: "Pendamping",
    items: ["Baju ganti pendamping", "Charger HP", "Uang tunai secukupnya", "Kamera bila ingin dokumentasi", "Catatan kontak bidan"],
  },
];
