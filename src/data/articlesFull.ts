export interface FullArticle {
  slug: string;
  category: string;
  categoryHref: string;
  title: string;
  excerpt: string;
  minutes: number;
  date: string;
  image: string;
  alt: string;
  sections: { h: string; p: string[] }[];
  danger: string;
  faqs: { q: string; a: string }[];
}

export const fullArticles: FullArticle[] = [
  {
    slug: "makanan-trimester-2",
    category: "Kehamilan",
    categoryHref: "/kehamilan",
    title: "Makanan yang Baik untuk Ibu Hamil di Trimester 2",
    excerpt: "Nutrisi yang tepat sangat penting untuk perkembangan janin dan kesehatan ibu.",
    minutes: 5,
    date: "20 September 2026",
    image: "/img/img.webp",
    alt: "Ibu hamil berkonsultasi tentang nutrisi trimester 2",
    sections: [
      {
        h: "Kenapa trimester 2 disebut masa emas",
        p: [
          "Mual biasanya berkurang. Nafsu makan kembali. Janin tumbuh cepat dari 100 gram ke hampir 900 gram.",
          "Fokus minggu 13 sampai 27 adalah protein untuk otot dan otak, zat besi untuk darah, kalsium untuk tulang, dan serat agar BAB lancar.",
        ],
      },
      {
        h: "Porsi harian yang realistis",
        p: [
          "Nasi 3 kali porsi sedang. Lauk hewani 2 kali sehari. Contoh: telur pagi, ikan siang. Tempe atau tahu tiap makan.",
          "Sayur 2 mangkok sehari. Buah 2 potong. Susu 1 gelas bila tidak alergi. Air 8 sampai 10 gelas.",
          "Tablet tambah darah tetap diminum sesuai anjuran. Minum dengan jus jeruk agar serapan lebih baik. Hindari teh dekat jam minum tablet.",
        ],
      },
      {
        h: "Contoh menu 1 hari",
        p: [
          "Pagi: nasi plus telur rebus plus tumis bayam plus pepaya. Selingan: kacang rebus.",
          "Siang: nasi plus lele goreng plus tempe plus sayur asem. Malam: nasi porsi kecil plus ayam plus sup wortel.",
        ],
      },
    ],
    danger: "Ke bidan bila berat badan turun 2 minggu berturut, muntah hebat, pusing sampai pingsan, atau bengkak mendadak di wajah dan tangan.",
    faqs: [
      { q: "Bolehkah kopi di trimester 2?", a: "Boleh maksimal 200 mg kafein per hari. Sekitar 1 cangkir kecil. Hindari kopi sachet manis tiap hari." },
      { q: "Apakah harus makan 2 porsi?", a: "Tidak harus 2 kali lipat. Tambah sekitar 300 kalori. Setara 1 piring kecil nasi plus lauk." },
    ],
  },
  {
    slug: "menghadapi-kontraksi",
    category: "Persalinan",
    categoryHref: "/persalinan",
    title: "Tips Menghadapi Kontraksi Saat Persalinan",
    excerpt: "Kenali tanda tanda dan cara efektif mengurangi rasa sakit saat kontraksi.",
    minutes: 7,
    date: "18 September 2026",
    image: "/img/img.webp",
    alt: "Ibu bersiap menghadapi kontraksi persalinan",
    sections: [
      {
        h: "Kenali pola kontraksi",
        p: [
          "Catat jam mulai, lama, dan jarak. Kontraksi aktif biasanya 40 sampai 60 detik tiap 5 menit.",
          "Bila dibawa jalan makin kuat dan teratur, itu tanda persalinan. Bila hilang saat istirahat, itu kontraksi palsu.",
        ],
      },
      {
        h: "Teknik yang terbukti membantu",
        p: [
          "Napas 4-6. Tarik 4 hitungan, hembus 6 hitungan. Bahu rileks. Rahang tidak dikatup.",
          "Ganti posisi tiap 20 menit. Duduk di birth ball, berdiri bersandar, atau miring kiri.",
          "Pijat pinggang oleh pendamping. Kompres hangat di punggung bawah. Mandi air hangat bila ketuban belum pecah dan diizinkan.",
        ],
      },
      {
        h: "Kapan berangkat",
        p: [
          "Bila kontraksi 5 menit sekali selama 1 jam, ketuban pecah, keluar lendir darah, atau ada tanda bahaya.",
          "Bawa buku KIA, hasil lab, dan tas yang sudah disiapkan sejak minggu 34.",
        ],
      },
    ],
    danger: "Segera ke faskes bila ketuban pecah lebih dari 6 jam tanpa kontraksi, perdarahan segar, demam, atau gerak janin berhenti.",
    faqs: [
      { q: "Apakah semua kontraksi sakit?", a: "Intensitas beda tiap ibu. Fokus ke napas dan posisi biasanya menurunkan nyeri 2 sampai 3 skala." },
      { q: "Bolehkah makan saat persalinan awal?", a: "Boleh camilan ringan dan air bila tidak ada larangan medis. Hindari makan berat saat pembukaan aktif." },
    ],
  },
  {
    slug: "merawat-tali-pusat",
    category: "Neonatus",
    categoryHref: "/neonatus",
    title: "Cara Merawat Tali Pusat pada Bayi Baru Lahir",
    excerpt: "Jaga kebersihan dan hindari infeksi dengan perawatan yang tepat.",
    minutes: 4,
    date: "15 September 2026",
    image: "/img/img.webp",
    alt: "Perawatan tali pusat bayi baru lahir",
    sections: [
      {
        h: "Prinsip utama: kering dan bersih",
        p: [
          "Biarkan tali pusat terbuka. Lipat popok di bawah pangkal agar tidak tertutup.",
          "Cuci tangan sebelum dan sesudah memegang. Mandikan dengan spons sampai tali lepas.",
        ],
      },
      {
        h: "Langkah harian",
        p: [
          "Cek tiap ganti popok. Bila kotor oleh urine atau BAB, bersihkan dengan air matang lalu keringkan dengan kasa bersih.",
          "Tidak perlu alkohol rutin kecuali anjuran tenaga kesehatan. Jangan beri ramuan, koin, atau gurita ketat.",
          "Tali biasa lepas hari ke 5 sampai 15. Sedikit darah kering itu wajar.",
        ],
      },
      {
        h: "Tanda infeksi",
        p: [
          "Kulit sekitar merah meluas, bengkak, bernanah, berbau, demam, atau bayi rewel dan malas menyusu.",
          "Bila satu saja muncul, bawa ke faskes hari itu juga. Jangan menunggu lepas sendiri.",
        ],
      },
    ],
    danger: "Ke faskes hari itu juga bila pangkal bernanah, berbau, berdarah banyak, atau bayi demam dan tidak mau menyusu.",
    faqs: [
      { q: "Bolehkah memandikan sebelum tali lepas?", a: "Boleh dengan lap spons. Hindari merendam. Keringkan pangkal setelahnya." },
      { q: "Apakah bedak boleh?", a: "Hindari bedak di pangkal tali pusat. Jaga tetap kering dan bersih." },
    ],
  },
];

export function getArticle(slug: string): FullArticle | undefined {
  return fullArticles.find((a) => a.slug === slug);
}
