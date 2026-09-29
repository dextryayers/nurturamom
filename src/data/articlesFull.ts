export interface FullArticle {
  slug: string;
  category: string;
  categoryHref: string;
  title: string;
  titleEn: string;
  excerpt: string;
  excerptEn: string;
  minutes: number;
  date: string;
  dateISO: string;
  image: string;
  alt: string;
  takeaways: string[];
  sections: { h: string; p: string[] }[];
  danger: string;
  faqs: { q: string; a: string }[];
  sumber: string[];
}

export function latestArticles(n: number): FullArticle[] {
  return [...fullArticles].sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1)).slice(0, n);
}

export const fullArticles: FullArticle[] = [
  {
    slug: "makanan-trimester-2",
    category: "Kehamilan",
    categoryHref: "/kehamilan",
    title: "Makanan yang Baik untuk Ibu Hamil di Trimester 2",
    titleEn: "Best Foods for Pregnancy in the 2nd Trimester",
    excerpt: "Nutrisi yang tepat sangat penting untuk perkembangan janin dan kesehatan ibu.",
    excerptEn: "Right nutrition matters for fetal growth and mom health.",
    minutes: 5,
    date: "20 September 2026",
    dateISO: "2026-09-20",
    image: "/img/img.webp",
    alt: "Ibu hamil membaca panduan nutrisi trimester 2",
    takeaways: [
      "Tambah 300 kalori per hari dengan protein hewani tiap makan.",
      "Minum tablet tambah darah dengan jus jeruk, bukan teh.",
      "Contoh menu sehari sudah disiapkan dan tinggal ditiru.",
    ],
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
    sumber: [
      "Buku Kesehatan Ibu dan Anak (KIA), Kementerian Kesehatan RI.",
      "WHO recommendations on antenatal care for a positive pregnancy experience, 2016.",
    ],
  },
  {
    slug: "menghadapi-kontraksi",
    category: "Persalinan",
    categoryHref: "/persalinan",
    title: "Tips Menghadapi Kontraksi Saat Persalinan",
    titleEn: "Tips for Coping With Contractions",
    excerpt: "Kenali tanda tanda dan cara efektif mengurangi rasa sakit saat kontraksi.",
    excerptEn: "Know the signs and effective ways to ease contraction pain.",
    minutes: 7,
    date: "18 September 2026",
    dateISO: "2026-09-18",
    image: "/img/img.webp",
    alt: "Ibu bersiap menghadapi kontraksi persalinan",
    takeaways: [
      "Kontraksi asli makin teratur dan tidak hilang saat istirahat.",
      "Napas 4-6 plus ganti posisi tiap 20 menit terbukti membantu.",
      "Berangkat saat kontraksi 5 menit sekali selama 1 jam.",
    ],
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
    sumber: [
      "Buku Saku Pelayanan Kesehatan Ibu di Fasilitas Kesehatan, Kementerian Kesehatan RI.",
      "WHO recommendations: intrapartum care for a positive childbirth experience, 2018.",
    ],
  },
  {
    slug: "merawat-tali-pusat",
    category: "Neonatus",
    categoryHref: "/neonatus",
    title: "Cara Merawat Tali Pusat pada Bayi Baru Lahir",
    titleEn: "How to Care for a Newborn Umbilical Cord",
    excerpt: "Jaga kebersihan dan hindari infeksi dengan perawatan yang tepat.",
    excerptEn: "Keep it clean and prevent infection with proper care.",
    minutes: 4,
    date: "15 September 2026",
    dateISO: "2026-09-15",
    image: "/img/img.webp",
    alt: "Perawatan tali pusat bayi baru lahir",
    takeaways: [
      "Prinsipnya satu: kering, bersih, dan terbuka.",
      "Tali lepas normal hari ke 5 sampai 15.",
      "Merah meluas plus nanah dan bau berarti infeksi, bawa ke faskes hari itu juga.",
    ],
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
    sumber: [
      "Buku Saku Pelayanan Kesehatan Neonatal Esensial, Kementerian Kesehatan RI.",
      "Buku Kesehatan Ibu dan Anak (KIA), Kementerian Kesehatan RI.",
    ],
  },
  {
    slug: "atasi-mual-trimester-1",
    category: "Kehamilan",
    categoryHref: "/kehamilan",
    title: "7 Cara Atasi Mual Muntah di Trimester 1",
    titleEn: "7 Ways to Ease 1st Trimester Nausea",
    excerpt: "Mual itu umum di minggu 6 sampai 12. Ini cara praktis agar tetap bisa makan dan beraktivitas.",
    excerptEn: "Nausea is common in weeks 6 to 12. Practical ways to keep eating and active.",
    minutes: 5,
    date: "14 September 2026",
    dateISO: "2026-09-14",
    image: "/img/img.webp",
    alt: "Ibu hamil trimester awal beristirahat",
    takeaways: [
      "Makan sedikit tapi sering, jangan biarkan perut kosong.",
      "Jahe hangat, biskuit tawar, dan udara segar membantu banyak ibu.",
      "Muntah lebih dari 5 kali sehari wajib periksa, itu bukan mual biasa.",
    ],
    sections: [
      {
        h: "Kenapa mual muncul",
        p: [
          "Hormon hCG naik cepat di minggu 6 sampai 12. Puncak mual biasanya minggu 8 sampai 10 lalu mereda.",
          "Perut kosong, bau menyengat, dan lelah memperberat mual. Polanya beda tiap ibu dan tiap kehamilan.",
        ],
      },
      {
        h: "Cara yang bisa langsung dicoba",
        p: [
          "Makan 5 sampai 6 kali porsi kecil. Simpan biskuit tawar di meja. Ngemil sebelum bangun dari tempat tidur.",
          "Minum jahe hangat atau air lemon. Hindari gorengan dan bau tajam. Buka jendela atau jalan pagi sebentar.",
          "Istirahat cukup. Minta vitamin B6 ke bidan bila mual mengganggu makan lebih dari 3 hari.",
        ],
      },
      {
        h: "Beda mual biasa dan hiperemesis",
        p: [
          "Mual biasa: masih bisa makan dan minum, berat stabil. Hiperemesis: muntah terus, tidak masuk cairan, berat turun, urine gelap.",
          "Hiperemesis butuh infus dan obat dari dokter. Jangan menunda bila sudah dehidrasi.",
        ],
      },
    ],
    danger: "Ke faskes bila muntah lebih dari 5 kali sehari, tidak bisa minum, pusing berat, atau berat turun dalam 1 minggu.",
    faqs: [
      { q: "Bolehkah minum obat mual bebas?", a: "Jangan beli sendiri. Minta resep yang aman untuk hamil ke bidan atau dokter." },
      { q: "Sampai kapan mual hilang?", a: "Umumnya mereda minggu 12 sampai 14. Sebagian kecil berlanjut lebih lama dan tetap perlu dipantau." },
    ],
    sumber: [
      "Buku Kesehatan Ibu dan Anak (KIA), Kementerian Kesehatan RI.",
      "WHO recommendations on antenatal care for a positive pregnancy experience, 2016.",
    ],
  },
  {
    slug: "cegah-anemia-tablet-tambah-darah",
    category: "Kehamilan",
    categoryHref: "/kehamilan",
    title: "Cegah Anemia: Cara Minum Tablet Tambah Darah yang Benar",
    titleEn: "Preventing Anemia: How to Take Iron Tablets Right",
    excerpt: "Separuh ibu hamil kekurangan zat besi. Tablet tambah darah hanya manjur bila diminum dengan benar.",
    excerptEn: "Half of pregnant moms lack iron. Iron tablets only work if taken correctly.",
    minutes: 4,
    date: "12 September 2026",
    dateISO: "2026-09-12",
    image: "/img/img.webp",
    alt: "Tablet tambah darah untuk ibu hamil",
    takeaways: [
      "Minum 1 tablet tiap hari selama hamil plus 40 hari nifas.",
      "Minum dengan air putih atau jus jeruk, jangan dengan teh atau susu.",
      "BAB hitam setelah minum itu wajar, bukan efek berbahaya.",
    ],
    sections: [
      {
        h: "Kenapa anemia berbahaya",
        p: [
          "Anemia bikin ibu cepat lelah, pusing, dan pucat. Risiko perdarahan dan bayi lahir kecil ikut naik.",
          "Kebutuhan zat besi naik 2 kali lipat saat hamil. Makanan saja sering tidak cukup.",
        ],
      },
      {
        h: "Cara minum yang benar",
        p: [
          "Minum 1 tablet tiap malam sebelum tidur atau 2 jam setelah makan agar lambung nyaman.",
          "Dorong dengan jus jeruk atau buah. Vitamin C menaikkan serapan zat besi sampai 2 kali lipat.",
          "Jeda 2 jam dari teh, kopi, susu, dan obat maag. Zat itu menghalangi serapan.",
        ],
      },
      {
        h: "Makanan pendamping",
        p: [
          "Hati ayam seminggu 1 sampai 2 kali, daging merah, ikan, telur, bayam, dan kacang merah.",
          "Cek Hb tiap trimester. Target Hb normal di atas 11 g per dL.",
        ],
      },
    ],
    danger: "Periksa bila pusing sampai pingsan, jantung berdebar saat istirahat, sesak, atau pucat berat di kelopak mata.",
    faqs: [
      { q: "Mual setelah minum tablet, bagaimana?", a: "Pindah ke malam hari dan makan camilan dulu. Bila tetap mual, minta ganti sediaan ke bidan." },
      { q: "Bolehkah berhenti bila Hb normal?", a: "Jangan berhenti sendiri. Lanjutkan sesuai anjuran karena kebutuhan tetap tinggi sampai nifas." },
    ],
    sumber: [
      "Pedoman Pemberian Tablet Tambah Darah, Kementerian Kesehatan RI.",
      "Buku Kesehatan Ibu dan Anak (KIA), Kementerian Kesehatan RI.",
    ],
  },
  {
    slug: "senam-hamil-trimester-3",
    category: "Kehamilan",
    categoryHref: "/kehamilan",
    title: "Senam Hamil Trimester 3: Gerakan Aman dan Manfaatnya",
    titleEn: "3rd Trimester Pregnancy Exercise: Safe Moves",
    excerpt: "Tubuh lentur dan napas terlatih bikin persalinan lebih lancar. Ini panduan gerakannya.",
    excerptEn: "A supple body and trained breathing lead to smoother birth.",
    minutes: 6,
    date: "10 September 2026",
    dateISO: "2026-09-10",
    image: "/img/img.webp",
    alt: "Ibu hamil melakukan senam ringan",
    takeaways: [
      "Senam 2 sampai 3 kali seminggu, 20 sampai 30 menit per sesi.",
      "Fokus ke napas, jongkok, dan relaksasi panggul.",
      "Stop dan periksa bila keluar cairan, perdarahan, atau pusing.",
    ],
    sections: [
      {
        h: "Manfaat yang terasa",
        p: [
          "Napas terlatih untuk mengejan. Otot panggul lentur. Nyeri pinggang berkurang dan tidur lebih nyenyak.",
          "Ibu yang rutin senam umumnya lebih tenang menghadapi kontraksi.",
        ],
      },
      {
        h: "4 gerakan dasar",
        p: [
          "Napas perut: duduk bersila, tarik 4 hitungan, hembus 6 hitungan. Ulangi 8 kali.",
          "Jongkok berpegangan: pegang kursi, jongkok perlahan, tahan 10 detik. Ulangi 5 kali.",
          "Goyang panggul: posisi merangkak, lengkungkan dan luruskan punggung bergantian. Ulangi 8 kali.",
          "Relaksasi miring kiri: baring 10 menit dengan bantal di antara lutut. Tutup dengan napas pelan.",
        ],
      },
      {
        h: "Aturan aman",
        p: [
          "Ikut kelas dengan instruktur bila bisa. Bawa pendamping dan air minum.",
          "Hindari telentang lama, melompat, dan menahan napas. Stop bila kontraksi, cairan keluar, atau pandangan berkunang.",
        ],
      },
    ],
    danger: "Stop senam dan periksa bila perdarahan, ketuban pecah, nyeri perut teratur, pusing berat, atau gerak janin berkurang.",
    faqs: [
      { q: "Kapan mulai senam hamil?", a: "Boleh sejak trimester 2 bila kehamilan normal. Trimester 3 fokus ke napas dan persiapan mengejan." },
      { q: "Bolehkah jalan kaki saja?", a: "Boleh. Jalan santai 20 sampai 30 menit tiap hari setara manfaatnya. Pakai alas kaki nyaman." },
    ],
    sumber: [
      "Buku Kesehatan Ibu dan Anak (KIA), Kementerian Kesehatan RI.",
      "Modul Kelas Ibu Hamil, Kementerian Kesehatan RI.",
    ],
  },
  {
    slug: "tanda-persalinan-sudah-dekat",
    category: "Persalinan",
    categoryHref: "/persalinan",
    title: "5 Tanda Persalinan Sudah Dekat yang Wajib Dikenali",
    titleEn: "5 Signs Labor Is Near You Must Know",
    excerpt: "Bedakan kontraksi palsu dan asli agar tidak panik dan tidak terlambat ke faskes.",
    excerptEn: "Tell false and true contractions apart to avoid panic and delay.",
    minutes: 5,
    date: "8 September 2026",
    dateISO: "2026-09-08",
    image: "/img/img.webp",
    alt: "Ibu hamil minggu akhir bersiap ke faskes",
    takeaways: [
      "Kontraksi asli teratur, makin kuat, dan tidak hilang saat istirahat.",
      "Lendir darah dan ketuban pecah berarti segera berangkat.",
      "Catat pola kontraksi dengan jam agar penilaian bidan akurat.",
    ],
    sections: [
      {
        h: "Tanda 1 sampai 3: kontraksi, lendir, ketuban",
        p: [
          "Kontraksi asli datang tiap 10 menit lalu 5 menit, lama 40 sampai 60 detik, makin sakit. Palsu tidak teratur dan hilang saat jalan.",
          "Lendir bercampur darah keluar 1 sampai 2 hari sebelum persalinan. Ketuban pecah berupa rembesan atau aliran yang tidak bisa ditahan.",
        ],
      },
      {
        h: "Tanda 4 dan 5: perut turun dan energi",
        p: [
          "Perut terasa turun, napas lega tapi sering BAK. Itu kepala janin masuk panggul.",
          "Sebagian ibu merasa berenergi dan ingin berbenah. Sebagian justru diare ringan dan mual.",
        ],
      },
      {
        h: "Cara mencatat kontraksi",
        p: [
          "Catat jam mulai tiap kontraksi dan lamanya selama 1 jam. Contoh: 07.00, 07.07, 07.14, tiap 40 detik.",
          "Bawa catatan ke faskes. Bidan menilai fase persalinan dari pola ini.",
        ],
      },
    ],
    danger: "Langsung ke faskes bila ketuban pecah, perdarahan segar, demam, sakit kepala hebat, atau gerak janin berhenti.",
    faqs: [
      { q: "Ketuban pecah tapi belum mules, bagaimana?", a: "Tetap berangkat. Batas aman menanti kontraksi sekitar 6 jam. Bidan akan menilai induksi." },
      { q: "Bolehkah mandi dulu sebelum berangkat?", a: "Boleh mandi cepat bila ketuban belum pecah. Bila sudah pecah, langsung berangkat tanpa berendam." },
    ],
    sumber: [
      "Buku Saku Pelayanan Kesehatan Ibu di Fasilitas Kesehatan, Kementerian Kesehatan RI.",
      "WHO recommendations: intrapartum care for a positive childbirth experience, 2018.",
    ],
  },
  {
    slug: "perawatan-luka-jahitan-nifas",
    category: "Nifas",
    categoryHref: "/nifas",
    title: "Merawat Luka Jahitan Setelah Melahirkan agar Cepat Kering",
    titleEn: "Caring for Stitches After Birth for Fast Healing",
    excerpt: "Luka jahitan sembuh 7 sampai 10 hari bila dirawat benar. Ini langkah harian yang tepat.",
    excerptEn: "Stitches heal in 7 to 10 days with the right daily care.",
    minutes: 4,
    date: "6 September 2026",
    dateISO: "2026-09-06",
    image: "/img/img.webp",
    alt: "Ibu nifas beristirahat di rumah",
    takeaways: [
      "Jaga luka tetap kering dan ganti pembalut tiap 4 jam.",
      "Basuh dari depan ke belakang tiap BAK dan BAB.",
      "Nyeri bertambah plus bengkak dan bau berarti infeksi, segera periksa.",
    ],
    sections: [
      {
        h: "Perawatan harian",
        p: [
          "Basuh area dengan air matang tiap BAK dan BAB, seka sekali usap dari depan ke belakang.",
          "Keringkan dengan tisu atau kasa bersih. Ganti pembalut tiap 3 sampai 4 jam walau masih sedikit.",
          "Pakai celana longgar katun. Hindari duduk di permukaan keras terlalu lama.",
        ],
      },
      {
        h: "Makanan agar cepat sembuh",
        p: [
          "Protein tiap makan: telur, ikan, ayam, tempe. Vitamin C dari jeruk dan jambu.",
          "Tidak ada pantangan makan berbasis bukti. Daun katuk dan sayur hijau justru membantu ASI.",
        ],
      },
      {
        h: "Tanda infeksi",
        p: [
          "Normal: nyeri berkurang tiap hari, bengkak ringan 2 hari pertama. Tidak normal: nyeri makin hebat, bengkak panas, bernanah, berbau, demam.",
          "Jahitan lepas sebagian plus demam wajib periksa hari itu juga.",
        ],
      },
    ],
    danger: "Periksa hari itu juga bila luka bernanah, berbau, terbuka, demam di atas 38 derajat, atau perdarahan banyak.",
    faqs: [
      { q: "Bolehkah jongkok?", a: "Hindari jongkok dalam 2 minggu pertama. Gunakan kloset duduk bila ada." },
      { q: "Kapan benang lepas?", a: "Benang modern menyerap sendiri 7 sampai 14 hari. Kontrol luka sesuai jadwal bidan." },
    ],
    sumber: [
      "Buku Panduan Asuhan Nifas, Kementerian Kesehatan RI.",
      "Buku Kesehatan Ibu dan Anak (KIA), Kementerian Kesehatan RI.",
    ],
  },
  {
    slug: "baby-blues-vs-depresi-nifas",
    category: "Nifas",
    categoryHref: "/nifas",
    title: "Baby Blues vs Depresi Nifas: Cara Bedakan dan Atasinya",
    titleEn: "Baby Blues vs Postpartum Depression",
    excerpt: "Sedih setelah melahirkan itu umum, tapi ada batasnya. Kenali bedanya agar dapat bantuan tepat.",
    excerptEn: "Post birth sadness is common, but there is a limit. Know the difference.",
    minutes: 6,
    date: "4 September 2026",
    dateISO: "2026-09-04",
    image: "/img/img.webp",
    alt: "Ibu nifas didukung keluarga",
    takeaways: [
      "Baby blues hilang sendiri dalam 2 minggu. Lebih dari itu perlu skrining depresi.",
      "Kurang tidur adalah pemicu utama. Minta shift jaga malam ke pasangan.",
      "Pikiran menyakiti diri atau bayi adalah darurat. Minta bantuan hari itu juga.",
    ],
    sections: [
      {
        h: "Baby blues itu apa",
        p: [
          "Muncul hari ke 3 sampai 5. Gejala: mudah menangis, cemas, sensitif, sulit tidur walau bayi tidur.",
          "Penyebab: hormon turun drastis plus lelah dan adaptasi peran. Terjadi pada 50 sampai 80 persen ibu.",
        ],
      },
      {
        h: "Kapan disebut depresi nifas",
        p: [
          "Gejala sama tapi lebih berat dan lebih dari 2 minggu. Tidak menikmati bayi, merasa gagal, menarik diri, nafsu makan hilang.",
          "Depresi nifas adalah penyakit medis, bukan kurang iman atau kurang bersyukur. Bisa diobati.",
        ],
      },
      {
        h: "Cara membantu diri dan pasangan",
        p: [
          "Tidur saat bayi tidur. Terima bantuan tanpa rasa bersalah. Ceritakan perasaan ke orang terdekat.",
          "Pasangan: ambil alih 1 shift malam, dengarkan tanpa menghakimi, antar ke bidan bila gejala menetap.",
        ],
      },
    ],
    danger: "Minta bantuan darurat bila ada pikiran menyakiti diri atau bayi, tidak bisa tidur berhari hari, atau tidak mampu merawat bayi.",
    faqs: [
      { q: "Apakah baby blues perlu obat?", a: "Umumnya tidak. Dukungan, istirahat, dan nutrisi cukup. Obat hanya bila dokter mendiagnosis depresi." },
      { q: "Bolehkah menyusui saat minum obat depresi?", a: "Banyak obat aman untuk menyusui. Jangan stop ASI atau obat sendiri. Konsultasikan ke dokter." },
    ],
    sumber: [
      "Buku Panduan Asuhan Nifas, Kementerian Kesehatan RI.",
      "WHO guide for integration of perinatal mental health, 2022.",
    ],
  },
  {
    slug: "asi-lancar-minggu-pertama",
    category: "Neonatus",
    categoryHref: "/neonatus",
    title: "Agar ASI Lancar di Minggu Pertama: Posisi dan Jadwal",
    titleEn: "Boosting Milk Supply in the First Week",
    excerpt: "ASI keluar sedikit di hari awal itu normal. Kuncinya frekuensi, posisi, dan pelekatan.",
    excerptEn: "Little milk in early days is normal. Frequency, position, and latch are key.",
    minutes: 5,
    date: "2 September 2026",
    dateISO: "2026-09-02",
    image: "/img/img.webp",
    alt: "Ibu menyusui bayi baru lahir",
    takeaways: [
      "Susui 8 sampai 12 kali sehari, tiap 2 sampai 3 jam termasuk malam.",
      "Pelekatan benar: mulut lebar, bibir dower, dagu menempel.",
      "BAK 6 kali sehari dan BAB kuning berarti ASI cukup.",
    ],
    sections: [
      {
        h: "Kolostrum itu cukup",
        p: [
          "Hari 1 sampai 3 hanya keluar kolostrum kental sedikit. Lambung bayi sebesar kelereng, jadi itu cukup.",
          "Sering disusui memancing produksi. ASI matur deras biasanya hari ke 3 sampai 5.",
        ],
      },
      {
        h: "Posisi dan pelekatan",
        p: [
          "Perut bayi menempel perut ibu. Telinga bahu pinggul segaris. Sangga seluruh badan, bukan hanya kepala.",
          "Tunggu mulut terbuka lebar baru dekatkan. Areola masuk banyak, puting tidak lecet.",
          "Coba posisi cradle, football, dan rebahan miring. Ganti posisi tiap sesi agar puting tidak trauma satu titik.",
        ],
      },
      {
        h: "Tanda ASI cukup dan kurang",
        p: [
          "Cukup: BAK 6 kali, BAB kuning 3 kali, bayi tenang setelah menyusu, berat naik minggu ke 2.",
          "Kurang: BAK kurang dari 4 kali, bayi terus menangis, kuning meluas, berat turun lebih dari 10 persen.",
        ],
      },
    ],
    danger: "Ke faskes bila bayi tidak mau menyusu, lemas, demam, kuning sampai telapak, atau berat turun drastis.",
    faqs: [
      { q: "Perlukah dot atau empeng?", a: "Hindari dot 4 minggu pertama agar bayi tidak bingung puting. Gunakan sendok atau cup feeder bila perlu." },
      { q: "Makanan apa memperbanyak ASI?", a: "Tidak ada makanan ajaib. Kuncinya sering disusui, cukup minum, dan istirahat. Daun katuk boleh sebagai sayur." },
    ],
    sumber: [
      "Buku Saku Pelayanan Kesehatan Neonatal Esensial, Kementerian Kesehatan RI.",
      "Modul Konseling Menyusui, Kementerian Kesehatan RI.",
    ],
  },
  {
    slug: "bayi-kuning-baru-lahir",
    category: "Neonatus",
    categoryHref: "/neonatus",
    title: "Bayi Kuning: Mana yang Normal dan Kapan Harus ke Dokter",
    titleEn: "Jaundiced Baby: Normal or Doctor Visit",
    excerpt: "Separuh bayi kuning di minggu pertama. Sebagian normal, sebagian butuh fototerapi segera.",
    excerptEn: "Half of babies yellow in week one. Some cases are normal, some need phototherapy.",
    minutes: 5,
    date: "1 September 2026",
    dateISO: "2026-09-01",
    image: "/img/img.webp",
    alt: "Bayi baru lahir tidur",
    takeaways: [
      "Kuning normal muncul hari ke 2 sampai 3 dan hilang sebelum 2 minggu.",
      "Kuning dalam 24 jam pertama selalu tidak normal.",
      "Jemur 15 menit pagi bukan terapi. Kuning berat butuh fototerapi di faskes.",
    ],
    sections: [
      {
        h: "Kuning normal",
        p: [
          "Muncul hari ke 2 atau 3, mulai dari wajah lalu dada. Bayi aktif dan mau menyusu kuat.",
          "Hilang sebelum usia 2 minggu pada bayi cukup bulan. Susui sesering mungkin agar bilirubin keluar lewat BAB.",
        ],
      },
      {
        h: "Kuning berbahaya",
        p: [
          "Muncul kurang dari 24 jam. Menyebar cepat ke perut, tangan, dan telapak. Bayi lemas, malas menyusu, atau demam.",
          "Penyebab: beda golongan darah ibu dan bayi, infeksi, atau ASI kurang masuk.",
        ],
      },
      {
        h: "Yang harus dilakukan",
        p: [
          "Cek tiap pagi di cahaya alami. Tekan lembut hidung atau dada, lihat warna kuning yang tertinggal.",
          "Jemur 15 menit sebelum jam 9 boleh sebagai pendamping, bukan pengganti periksa.",
          "Kuning berat diterapi fototerapi (sinar biru khusus) di faskes. Makin cepat makin aman untuk otak.",
        ],
      },
    ],
    danger: "Ke faskes hari itu juga bila kuning muncul di hari pertama, sampai telapak, bayi lemas dan tidak mau menyusu, atau kejang.",
    faqs: [
      { q: "Apakah ASI bikin kuning?", a: "Ada kuning ASI yang jinak dan hilang 3 sampai 12 minggu. Tetap susui, tapi pastikan diperiksa dulu untuk singkirkan penyebab berat." },
      { q: "Bolehkah diberi air gula?", a: "Jangan. Air gula tidak menurunkan kuning dan mengganggu ASI. Susui lebih sering." },
    ],
    sumber: [
      "Buku Saku Pelayanan Kesehatan Neonatal Esensial, Kementerian Kesehatan RI.",
      "Buku Kesehatan Ibu dan Anak (KIA), Kementerian Kesehatan RI.",
    ],
  },
  {
    slug: "mpasi-pertama-6-bulan",
    category: "Anak",
    categoryHref: "/anak",
    title: "MPASI Pertama 6 Bulan: Tekstur, Porsi, dan Menu Seminggu",
    titleEn: "First Solids at 6 Months: Texture and Menu",
    excerpt: "Mulai MPASI tepat 6 bulan dengan tekstur dan protein hewani yang benar agar tidak stunting.",
    excerptEn: "Start solids right at 6 months with correct texture and animal protein.",
    minutes: 6,
    date: "30 Agustus 2026",
    dateISO: "2026-08-30",
    image: "/img/img.webp",
    alt: "Bayi 6 bulan mulai MPASI",
    takeaways: [
      "Mulai tepat 6 bulan, tekstur saring kental, 2 sampai 3 kali sehari.",
      "Protein hewani wajib tiap hari: telur, ikan, atau ayam.",
      "Naikkan tekstur tiap bulan. 9 bulan cincang, 12 bulan makan keluarga.",
    ],
    sections: [
      {
        h: "Aturan dasar",
        p: [
          "ASI tetap utama sampai 2 tahun. MPASI melengkapi, bukan mengganti.",
          "Tekstur awal: saring kental yang tidak langsung tumpah dari sendok. Porsi 3 sampai 5 sendok, naik bertahap.",
          "Cuci tangan, masak sampai matang, sajikan hangat. Buang sisa yang sudah kena ludah lebih dari 2 jam.",
        ],
      },
      {
        h: "Menu seminggu yang mudah",
        p: [
          "Senin: nasi tim plus telur plus bayam. Selasa: nasi tim plus lele plus wortel. Rabu: nasi tim plus ayam plus labu.",
          "Kamis: nasi tim plus hati ayam plus buncis. Jumat: nasi tim plus ikan kembung plus tomat. Sabtu Minggu: ulang favorit.",
          "Tambah 1 sendok minyak atau santan tiap porsi untuk energi. Buah sebagai selingan.",
        ],
      },
      {
        h: "Tanda alergi dan GTM",
        p: [
          "Kenalkan 1 bahan baru tiap 2 hari. Waspadai ruam, muntah berulang, atau sesak setelah makan tertentu.",
          "GTM (gerakan tutup mulut) wajar sesekali. Jangan paksa. Variasikan menu, makan bersama, dan batasi distraksi.",
        ],
      },
    ],
    danger: "Ke faskes bila muntah dan diare berat setelah MPASI, ruam meluas plus sesak, berat turun 2 bulan berturut, atau anak menolak makan lebih dari 2 minggu.",
    faqs: [
      { q: "Bolehkah MPASI instan?", a: "Boleh sesekali saat darurat. Pilih tanpa gula tambahan. Masakan rumah tetap utama." },
      { q: "Kapan boleh garam dan gula?", a: "Di bawah 1 tahun hindari tambahan garam dan gula. Rasa asli bahan sudah cukup." },
    ],
    sumber: [
      "Pedoman Pemberian Makan Bayi dan Anak, Kementerian Kesehatan RI.",
      "Buku Kesehatan Ibu dan Anak (KIA), Kementerian Kesehatan RI.",
    ],
  },
];

export function getArticle(slug: string): FullArticle | undefined {
  return fullArticles.find((a) => a.slug === slug);
}
