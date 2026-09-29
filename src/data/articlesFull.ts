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
      {
        h: "Ceklis belanja mingguan",
        p: [
          "Protein hewani untuk 14 kali makan: telur 1 kg, ikan 1 kg, ayam setengah kg. Tempe dan tahu untuk tiap hari.",
          "Sayur hijau 7 ikat, buah 14 potong, susu 1 liter bila tidak alergi. Tablet tambah darah pastikan cukup sebulan.",
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
      {
        h: "Simulasi latihan di rumah",
        p: [
          "Minggu 36, latih timer kontraksi 1 kali. Catat 1 jam penuh agar terbiasa bedakan asli dan palsu.",
          "Praktikkan 3 posisi: duduk birth ball, berdiri bersandar tembok, miring kiri. Nilai mana paling nyaman.",
          "Cek ulang tas persalinan dan rute ke faskes termasuk rute cadangan bila macet atau banjir.",
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
      {
        h: "Jadwal cek harian",
        p: [
          "Pagi: cek saat ganti popok pertama. Lihat warna dan bau. Foto bila ada perubahan untuk ditunjukkan ke bidan.",
          "Sore: cek ulang setelah mandi spons. Pastikan lipatan popok tetap di bawah pangkal.",
          "Malam: cek terakhir sebelum tidur. Catat hari ke berapa di buku KIA.",
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
      {
        h: "Resep minuman pereda mual",
        p: [
          "Jahe hangat: 2 iris jahe segar diseduh air panas 5 menit, tambah 1 sendok madu. Minum pelan 2 kali sehari.",
          "Lemon hangat: peras setengah lemon ke air hangat, tambah sejumput garam. Aroma dan rasanya menekan mual.",
          "Hindari minuman bersoda manis dan jamu tanpa label. Catat minuman mana yang paling cocok untukmu.",
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
      {
        h: "Rutinitas minum 7 hari",
        p: [
          "Tempel jadwal di kulkas dan centang tiap malam. Siapkan jus jeruk 3 kali seminggu sebagai pendamping.",
          "Bila lupa 1 hari, minum keesokan harinya. Jangan minum 2 tablet sekaligus.",
          "Evaluasi tiap kontrol: bawa sisa tablet agar bidan tahu kepatuhanmu.",
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
      {
        h: "Jadwal mingguan contoh",
        p: [
          "Senin: jalan santai 20 menit plus napas perut 8 kali. Rabu: jongkok berpegangan 5 kali plus goyang panggul 8 kali.",
          "Jumat: ulangi paket Senin. Minggu: relaksasi miring kiri 10 menit plus evaluasi minggu berjalan.",
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
      {
        h: "Siapkan nomor dan rute",
        p: [
          "Simpan 3 nomor: bidan, faskes, dan sopir atau keluarga. Tempel di kulkas dan HP pendamping.",
          "Survei rute siang dan malam. Catat waktu tempuh dan 1 rute cadangan. Siapkan uang tunai dan e toll bila perlu.",
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
      {
        h: "Rutinitas ganti pembalut",
        p: [
          "Ganti tiap 3 sampai 4 jam: pagi bangun, siang, sore, malam sebelum tidur. Lebih sering bila deras.",
          "Tiap ganti: cuci tangan, basuh depan ke belakang, keringkan, pasang pembalut baru. Cuci tangan lagi.",
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
      {
        h: "Rencana dukungan 2 minggu",
        p: [
          "Tulis siapa bertugas apa: masak, cuci, jaga malam, antar kontrol. Tempel di kulkas agar jelas.",
          "Jadwalkan 1 telepon dengan teman dekat tiap 3 hari. Isolasi memperberat baby blues.",
          "Bila hari ke 14 belum membaik, datang ke faskes untuk skrining. Bawa catatan mood harianmu.",
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
      {
        h: "Contoh jadwal susui 24 jam",
        p: [
          "06.00, 08.30, 11.00, 13.30, 16.00, 18.30, 21.00, 23.30, 02.00, 04.30. Total 10 kali, tiap sesi 15 sampai 30 menit.",
          "Bangunkan bayi bila tidur lebih dari 3 jam di minggu pertama. Setelah berat naik baik, boleh ikut ritme bayi.",
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
      {
        h: "Catat warna harian",
        p: [
          "Hari 1: merah muda normal. Hari 2 sampai 3: catat sebaran kuning (wajah saja atau sampai dada).",
          "Hari 4 sampai 7: kuning harus memudar. Foto tiap pagi di cahaya sama untuk pembanding.",
          "Bawa catatan dan foto saat kontrol. Itu membantu bidan menilai cepat.",
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
      {
        h: "Jadwal makan usia 6 sampai 8 bulan",
        p: [
          "06.00 ASI, 08.00 bubur saring, 10.00 buah, 12.00 bubur saring, 15.00 ASI plus camilan, 18.00 bubur saring, malam ASI on demand.",
          "Naikkan porsi tiap minggu. Target akhir bulan ke 8: 3 kali makan plus 1 selingan.",
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
  {
    slug: "usg-kehamilan-kapan",
    category: "Kehamilan",
    categoryHref: "/kehamilan",
    title: "USG Kehamilan: Kapan dan Apa yang Dibaca",
    titleEn: "Pregnancy Ultrasound: When and What It Shows",
    excerpt: "USG tiap trimester punya tujuan beda. Pahami jadwal dan cara baca hasilnya.",
    excerptEn: "Each trimester scan has its own goal. Know the schedule and readings.",
    minutes: 5,
    date: "28 Agustus 2026",
    dateISO: "2026-08-28",
    image: "/img/img.webp",
    alt: "Ibu hamil menjalani USG",
    takeaways: [
      "USG 8 sampai 12 minggu memastikan usia dan jumlah janin.",
      "USG 18 sampai 22 minggu melihat organ lengkap.",
      "Bawa hasil lama tiap USG agar bisa dibandingkan.",
    ],
    sections: [
      {
        h: "Jadwal ideal 3 kali",
        p: [
          "Trimester 1 minggu 8 sampai 12: pastikan hamil di rahim, hitung usia, dengar detak jantung.",
          "Trimester 2 minggu 18 sampai 22: skrining anatomi kepala, jantung, tulang, dan plasenta.",
          "Trimester 3 minggu 32 sampai 36: posisi, air ketuban, taksiran berat, dan aliran darah tali pusat.",
        ],
      },
      {
        h: "Cara baca singkatan",
        p: [
          "GA usia kehamilan, EDD tanggal perkiraan lahir, BPD diameter kepala, FL panjang paha, AC lingkar perut.",
          "AFI indeks air ketuban. Normal 8 sampai 18. Di bawah itu oligohidramnion, perlu pemantauan ketat.",
        ],
      },
      {
        h: "Batas USG",
        p: [
          "USG taksiran berat bisa meleset 10 sampai 15 persen. Jangan panik dengan 1 angka di luar rentang.",
          "USG 2D cukup untuk skrining. USG 4D hiburan, bukan kebutuhan medis. Bila hasil meragukan, dokter merujuk fetomaternal.",
        ],
      },
    ],
    danger: "Periksa bila USG menyebut ketuban sangat sedikit, plasenta menutupi jalan lahir di trimester 3, atau tidak ada detak jantung.",
    faqs: [
      { q: "Apakah USG aman untuk janin?", a: "Ya. USG tanpa radiasi dan aman sesuai studi puluhan tahun. Ikuti jadwal anjuran saja." },
      { q: "Bolehkah tahu jenis kelamin?", a: "Boleh bila terlihat jelas, biasanya setelah minggu 18. Akurasinya di atas 90 persen." },
    ],
    sumber: [
      "Buku Kesehatan Ibu dan Anak (KIA), Kementerian Kesehatan RI.",
      "WHO recommendations on antenatal care for a positive pregnancy experience, 2016.",
    ],
  },
  {
    slug: "preeklampsia-waspada",
    category: "Kehamilan",
    categoryHref: "/kehamilan",
    title: "Preeklampsia: Kenali Sebelum Terlambat",
    titleEn: "Preeclampsia: Catch It Early",
    excerpt: "Tekanan darah tinggi setelah minggu 20 bisa fatal. Hafalkan 5 tandanya.",
    excerptEn: "High blood pressure after week 20 can be fatal. Memorize these 5 signs.",
    minutes: 5,
    date: "27 Agustus 2026",
    dateISO: "2026-08-27",
    image: "/img/img.webp",
    alt: "Ibu hamil cek tekanan darah",
    takeaways: [
      "Tensi 140/90 ke atas setelah minggu 20 wajib evaluasi.",
      "Sakit kepala hebat, kabur, nyeri ulu hati, bengkak mendadak adalah alarm.",
      "Satu-satunya obat definitif adalah persalinan. Jangan tunda ke faskes.",
    ],
    sections: [
      {
        h: "Apa itu preeklampsia",
        p: [
          "Tekanan darah tinggi plus protein urine atau gangguan organ setelah minggu 20. Bisaberkembang cepat dalam hitungan hari.",
          "Risiko tinggi: hamil pertama, usia di atas 35, kembar, obesitas, riwayat hipertensi atau preeklampsia.",
        ],
      },
      {
        h: "5 tanda alarm",
        p: [
          "Sakit kepala hebat tidak mempan obat, pandangan kabur atau berbayang, nyeri ulu hati kanan atas.",
          "Bengkak mendadak di wajah dan tangan, urine berkurang, tensi 140/90 atau lebih di 2 kali ukur.",
        ],
      },
      {
        h: "Yang harus dilakukan",
        p: [
          "Ukur tensi ulang setelah istirahat 15 menit. Bila tetap tinggi, ke faskes hari itu juga.",
          "Bawa catatan tensi, hasil lab, dan buku KIA. Jangan minum obat penurun tensi tanpa resep.",
          "Istirahat miring kiri membantu aliran darah. Tetap kontrol ketat sampai persalinan.",
        ],
      },
    ],
    danger: "Ke IGD bila kejang, sesak, nyeri dada, pandangan hilang, atau tensi di atas 160/110.",
    faqs: [
      { q: "Apakah preeklampsia bisa dicegah?", a: "Risiko diturunkan dengan ANC rutin, kalsium cukup, dan aspirin dosis rendah untuk risiko tinggi sesuai resep dokter." },
      { q: "Apakah harus sesar?", a: "Tidak selalu. Tergantung usia kehamilan dan kondisi ibu janin. Dokter memutuskan yang paling aman." },
    ],
    sumber: [
      "Buku Saku Pelayanan Kesehatan Ibu di Fasilitas Kesehatan, Kementerian Kesehatan RI.",
      "WHO recommendations for prevention and treatment of pre-eclampsia, 2022.",
    ],
  },
  {
    slug: "diabetes-gestasional",
    category: "Kehamilan",
    categoryHref: "/kehamilan",
    title: "Diabetes Gestasional: Skrining, Diet, dan Pantauan",
    titleEn: "Gestational Diabetes: Screening and Diet",
    excerpt: "Gula tinggi saat hamil bisa dikendalikan. Kuncinya skrining tepat waktu dan pola makan.",
    excerptEn: "High sugar in pregnancy is manageable with timely screening and diet.",
    minutes: 5,
    date: "26 Agustus 2026",
    dateISO: "2026-08-26",
    image: "/img/img.webp",
    alt: "Ibu hamil mengatur pola makan",
    takeaways: [
      "Skrining gula di minggu 24 sampai 28, lebih awal bila berisiko.",
      "Nasi porsi kecil, protein tiap makan, stop minuman manis.",
      "Jalan 20 menit setelah makan menurunkan gula secara nyata.",
    ],
    sections: [
      {
        h: "Siapa berisiko",
        p: [
          "Usia di atas 25 dengan obesitas, riwayat bayi besar di atas 4 kg, riwayat diabetes keluarga, atau gula tinggi di kehamilan lalu.",
          "Gejala sering samar: haus terus, sering BAK, lelah. Makanya skrining wajib, bukan tunggu gejala.",
        ],
      },
      {
        h: "Atur makan harian",
        p: [
          "Nasi setengah piring, ganti sebagian dengan jagung atau ubi. Protein hewani tiap makan. Sayur 2 mangkok.",
          "Buah utuh bukan jus. Stop teh manis, boba, dan kue basah. Ngemil kacang rebus atau telur rebus.",
          "Jalan santai 20 menit setelah makan besar. Catat gula puasa dan 2 jam setelah makan bila diminta.",
        ],
      },
      {
        h: "Dampak bila tak terkendali",
        p: [
          "Bayi besar menyulitkan persalinan normal, gula bayi drop setelah lahir, risiko sesar naik.",
          "Kabar baik: gula biasanya normal kembali setelah persalinan. Cek ulang 6 sampai 12 minggu pasca salin.",
        ],
      },
    ],
    danger: "Ke faskes bila gula puasa di atas 200, muntah terus, napas cepat dalam, atau gerak janin berkurang.",
    faqs: [
      { q: "Apakah harus suntik insulin?", a: "Sebagian besar cukup diet dan aktivitas. Insulin hanya bila gula tak terkendali dengan diet, sesuai resep dokter." },
      { q: "Bolehkah puasa?", a: "Ibu hamil dengan diabetes tidak dianjurkan puasa penuh. Konsultasikan ke dokter untuk penyesuaian." },
    ],
    sumber: [
      "Pedoman Pengelolaan Diabetes dalam Kehamilan, Kementerian Kesehatan RI.",
      "Buku Kesehatan Ibu dan Anak (KIA), Kementerian Kesehatan RI.",
    ],
  },
  {
    slug: "tidur-trimester-3",
    category: "Kehamilan",
    categoryHref: "/kehamilan",
    title: "Tidur Nyenyak di Trimester 3: Posisi dan Triknya",
    titleEn: "Sleeping Well in the 3rd Trimester",
    excerpt: "Perut besar bikin susah tidur. Posisi miring plus trik ini membantu.",
    excerptEn: "Big belly ruins sleep. Side position plus these tricks help.",
    minutes: 4,
    date: "25 Agustus 2026",
    dateISO: "2026-08-25",
    image: "/img/img.webp",
    alt: "Ibu hamil tidur miring nyaman",
    takeaways: [
      "Tidur miring kiri paling baik untuk aliran darah.",
      "Bantal di antara lutut dan bawah perut mengurangi nyeri.",
      "Kurangi minum 2 jam sebelum tidur agar tidak bolak balik BAK.",
    ],
    sections: [
      {
        h: "Posisi terbaik",
        p: [
          "Miring kiri melancarkan darah ke janin dan ginjal. Miring kanan boleh bergantian bila pegal.",
          "Hindari telentang lama setelah minggu 28 karena menekan pembuluh besar dan bikin pusing.",
          "Ganjal punggung 30 derajat dengan bantal bila sesak. Posisi setengah duduk membantu asam lambung.",
        ],
      },
      {
        h: "Atasi keluhan malam",
        p: [
          "Kram betis: luruskan kaki dan tarik jari ke arah lutut. Cukup kalsium dan magnesium dari susu dan kacang.",
          "Sering BAK: kurangi minum 2 jam sebelum tidur, tapi kejar cairan di siang hari.",
          "Pegal pinggang: mandi hangat sebelum tidur dan minta pijat ringan punggung bawah.",
        ],
      },
      {
        h: "Rutinitas tidur",
        p: [
          "Matikan layar 30 menit sebelum tidur. Kamar gelap, sejuk, dan tenang.",
          "Bila tidak tidur dalam 20 menit, bangun dan lakukan hal tenang lalu coba lagi. Hindari begadang tiap malam.",
        ],
      },
    ],
    danger: "Periksa bila mendengkur berat disertai henti napas, kaki bengkak mendadak, atau sakit kepala pagi berulang.",
    faqs: [
      { q: "Bolehkah minum obat tidur?", a: "Jangan minum obat tidur bebas. Minta saran aman ke bidan bila insomnia lebih dari 1 minggu." },
      { q: "Berapa jam ideal?", a: "Target 7 sampai 9 jam termasuk tidur siang 30 menit. Kualitas lebih penting dari sekadar lama." },
    ],
    sumber: [
      "Modul Kelas Ibu Hamil, Kementerian Kesehatan RI.",
      "Buku Kesehatan Ibu dan Anak (KIA), Kementerian Kesehatan RI.",
    ],
  },
  {
    slug: "teknik-mengejan",
    category: "Persalinan",
    categoryHref: "/persalinan",
    title: "Teknik Mengejan yang Benar agar Cepat dan Aman",
    titleEn: "Pushing Right for a Faster Safe Birth",
    excerpt: "Mengejan ada tekniknya. Salah teknik bikin lelah, benar bikin bayi cepat lahir.",
    excerptEn: "Pushing is a skill. Right technique brings baby faster.",
    minutes: 5,
    date: "24 Agustus 2026",
    dateISO: "2026-08-24",
    image: "/img/img.webp",
    alt: "Ibu berlatih napas persalinan",
    takeaways: [
      "Mengejan hanya saat pembukaan lengkap dan ada dorongan.",
      "Dagu dada, punggung bulat, tahan napas, dorong ke bawah seperti BAB.",
      "Istirahat di antara kontraksi untuk hemat tenaga.",
    ],
    sections: [
      {
        h: "Kapan mulai mengejan",
        p: [
          "Tunggu aba aba bidan: pembukaan 10 dan dorongan kuat seperti ingin BAB. Mengejan terlalu dini bikin lelah dan bengkak jalan lahir.",
          "Di antara kontraksi, napas normal dan rileks. Hemat tenaga untuk dorongan berikutnya.",
        ],
      },
      {
        h: "Langkah mengejan",
        p: [
          "Saat kontraksi datang, tarik napas dalam, dagu tempel dada, pegang lutut atau tiang.",
          "Tahan napas dan dorong ke bawah sekuatnya 10 detik. Ulangi 2 sampai 3 kali per kontraksi.",
          "Jangan teriak dengan mulut terbuka lebar. Tenaga lari ke wajah, bukan ke bawah.",
        ],
      },
      {
        h: "Posisi membantu",
        p: [
          "Setengah duduk paling umum. Jongkok berpegangan memperlebar panggul bila diizinkan.",
          "Miring kiri cocok bila lelah atau detak janin perlu dipulihkan. Ikuti arahan bidan.",
        ],
      },
    ],
    danger: "Bidan akan bertindak bila detak janin menurun, ibu kelelahan berat, atau pembukaan macet. Percayakan keputusan episiotomi dan rujukan.",
    faqs: [
      { q: "Berapa lama kala mengejan normal?", a: "Anak pertama 1 sampai 2 jam, anak berikut 15 sampai 60 menit. Lebih dari itu dievaluasi." },
      { q: "Bolehkah minum saat mengejan?", a: "Boleh seteguk air di antara kontraksi bila tidak ada larangan. Hindari makan berat." },
    ],
    sumber: [
      "Buku Saku Pelayanan Kesehatan Ibu di Fasilitas Kesehatan, Kementerian Kesehatan RI.",
      "WHO recommendations: intrapartum care for a positive childbirth experience, 2018.",
    ],
  },
  {
    slug: "pendamping-persalinan",
    category: "Persalinan",
    categoryHref: "/persalinan",
    title: "Peran Pendamping Persalinan: Panduan untuk Suami",
    titleEn: "Birth Companion Guide for Husbands",
    excerpt: "Pendamping yang siap bikin ibu tenang dan persalinan lancar. Ini tugasnya.",
    excerptEn: "A ready companion calms mom and smooths birth. Here are the duties.",
    minutes: 4,
    date: "23 Agustus 2026",
    dateISO: "2026-08-23",
    image: "/img/img.webp",
    alt: "Suami mendampingi istri persalinan",
    takeaways: [
      "Tugas utama: hitung kontraksi, atur napas, pijat pinggang.",
      "Siapkan dokumen, camilan, dan charger. Jangan panik duluan.",
      "Hormati keputusan ibu dan bidan di ruang bersalin.",
    ],
    sections: [
      {
        h: "Sebelum hari H",
        p: [
          "Ikut minimal 1 kelas hamil. Hafal tanda persalinan dan rute faskes.",
          "Siapkan tas, dokumen, uang, dan cuti. Pastikan HP aktif 24 jam sejak minggu 37.",
        ],
      },
      {
        h: "Saat kontraksi",
        p: [
          "Catat pola kontraksi. Pandu napas 4 hembus 6. Pijat pinggang bawah dengan kepalan tangan.",
          "Tawarkan air tiap 30 menit. Bantu ganti posisi tiap 20 menit. Jadi juru bicara bila ibu lelah.",
        ],
      },
      {
        h: "Setelah bayi lahir",
        p: [
          "Dukung IMD dengan tidak merebut bayi. Foto secukupnya, utamakan kontak ibu dan bayi.",
          "Urus administrasi agar ibu fokus menyusui. Ingat: pujian menenangkan lebih manjur dari nasihat.",
        ],
      },
    ],
    danger: "Pendamping harus panggil tenaga kesehatan bila perdarahan banyak, ibu kejang, atau bayi tidak menangis dan biru.",
    faqs: [
      { q: "Bolehkah suami masuk ruang bersalin?", a: "Kebanyakan faskes boleh 1 pendamping. Tanya aturan faskes pilihan sejak ANC." },
      { q: "Kalau suami takut darah?", a: "Tetap bisa dampingi dari sisi kepala sambil pandu napas. Jujur ke bidan soal batas nyamanmu." },
    ],
    sumber: [
      "Modul Kelas Ibu Hamil, Kementerian Kesehatan RI.",
      "WHO recommendations: intrapartum care for a positive childbirth experience, 2018.",
    ],
  },
  {
    slug: "senam-nifas",
    category: "Nifas",
    categoryHref: "/nifas",
    title: "Senam Nifas: Kegel dan Jalan Santai agar Pulih",
    titleEn: "Postpartum Exercise for Recovery",
    excerpt: "Mulai gerak sejak dini bikin pemulihan cepat. Ini tahapan amannya.",
    excerptEn: "Early movement speeds recovery. Here are the safe stages.",
    minutes: 4,
    date: "22 Agustus 2026",
    dateISO: "2026-08-22",
    image: "/img/img.webp",
    alt: "Ibu nifas jalan santai",
    takeaways: [
      "Hari 1: miring kanan kiri dan duduk. Kegel mulai hari 2 bila nyaman.",
      "Minggu 2: jalan 10 menit. Minggu 6: olahraga penuh setelah kontrol.",
      "Stop bila perdarahan bertambah atau nyeri tajam.",
    ],
    sections: [
      {
        h: "Minggu pertama",
        p: [
          "Hari 1: miring kanan kiri di tempat tidur, duduk di tepi ranjang. Latih napas perut.",
          "Hari 2 sampai 7: Kegel 5 detik tahan, 10 kali, 3 sesi sehari. Jalan dalam rumah 5 menit.",
        ],
      },
      {
        h: "Minggu 2 sampai 6",
        p: [
          "Jalan santai 10 menit naik bertahap ke 30 menit. Bawa bayi dengan gendongan ergonomis bila nyaman.",
          "Hindari angkat berat, sit up, dan lari sampai kontrol 6 minggu menyatakan sembuh.",
        ],
      },
      {
        h: "Setelah kontrol 6 minggu",
        p: [
          "Boleh renang, yoga, dan lari ringan bertahap. Lanjut Kegel 3 bulan untuk dasar panggul kuat.",
          "Operasi sesar ikut jadwal sama tapi mulai jalan setelah bisa kentut dan dengan izin dokter.",
        ],
      },
    ],
    danger: "Stop dan periksa bila perdarahan segar bertambah, nyeri perut tajam, pusing berat, atau luka terbuka.",
    faqs: [
      { q: "Kapan boleh berhubungan lagi?", a: "Umumnya setelah 6 minggu dan luka sembuh plus sudah kontrol. Bahas KB sekalian." },
      { q: "Perut masih buncit, normal?", a: "Normal sampai 3 bulan. Diastasis recti ringan membaik dengan latihan perut dalam bertahap." },
    ],
    sumber: [
      "Buku Panduan Asuhan Nifas, Kementerian Kesehatan RI.",
      "Buku Kesehatan Ibu dan Anak (KIA), Kementerian Kesehatan RI.",
    ],
  },
  {
    slug: "kb-pasca-salin",
    category: "KB",
    categoryHref: "/reproduksi-kb",
    title: "KB Setelah Melahirkan: Kapan Mulai dan Apa yang Aman",
    titleEn: "Postpartum Contraception: When and What Is Safe",
    excerpt: "Jarak anak ideal 2 sampai 3 tahun. Mulai KB sebelum 6 minggu agar tidak kebobolan.",
    excerptEn: "Ideal spacing is 2 to 3 years. Start birth control before 6 weeks.",
    minutes: 5,
    date: "21 Agustus 2026",
    dateISO: "2026-08-21",
    image: "/img/img.webp",
    alt: "Ibu berkonsultasi KB pasca salin",
    takeaways: [
      "Kesuburan bisa kembali sebelum haid pertama. Jangan tunggu haid.",
      "IUD, implan, dan suntik 3 bulan aman untuk menyusui.",
      "Bahas KB sebelum pulang dari faskes atau maksimal minggu 6.",
    ],
    sections: [
      {
        h: "Kenapa harus cepat",
        p: [
          "Ovulasi bisa terjadi minggu ke 3 pasca salin walau belum haid dan menyusui. Banyak kehamilan tak rencana terjadi di masa ini.",
          "Jarak kurang dari 2 tahun menaikkan risiko prematur dan anemia ibu.",
        ],
      },
      {
        h: "Pilihan aman menyusui",
        p: [
          "IUD bisa dipasang segera setelah plasenta lahir atau 6 minggu. Implan kapan saja setelah salin.",
          "Suntik 3 bulan mulai minggu 6. Pil menyusui diminum tiap hari jam yang sama.",
          "Hindari pil kombinasi di 6 minggu pertama karena menekan ASI.",
        ],
      },
      {
        h: "MAL sebagai jeda",
        p: [
          "Menyusui eksklusif, bayi di bawah 6 bulan, dan belum haid memberi proteksi 98 persen. Syaratnya ketat ketiganya.",
          "Tetap siapkan metode lanjutan sebelum salah satu syarat gugur.",
        ],
      },
    ],
    danger: "Periksa bila perdarahan hebat setelah pasang IUD, nyeri perut hebat, demam, atau benang IUD tidak teraba.",
    faqs: [
      { q: "Apakah KB bikin ASI seret?", a: "IUD, implan, dan suntik 3 bulan terbukti tidak mengurangi ASI. Pil kombinasi yang perlu dihindari awal." },
      { q: "Kapan boleh berhubungan lagi?", a: "Umumnya setelah 6 minggu dan luka sembuh. Idealnya KB sudah terpasang sebelum itu." },
    ],
    sumber: [
      "Buku Panduan Pelayanan KB, Kementerian Kesehatan RI.",
      "WHO Medical eligibility criteria for contraceptive use, 2015.",
    ],
  },
  {
    slug: "iud-implan-suntik",
    category: "KB",
    categoryHref: "/reproduksi-kb",
    title: "IUD vs Implan vs Suntik: Bandingkan Sebelum Pilih",
    titleEn: "IUD vs Implant vs Injection Compared",
    excerpt: "Tiga KB paling populer dibedah jujur: efektivitas, efek, dan biaya.",
    excerptEn: "The three most popular methods compared honestly.",
    minutes: 6,
    date: "20 Agustus 2026",
    dateISO: "2026-08-20",
    image: "/img/img.webp",
    alt: "Pilihan kontrasepsi modern",
    takeaways: [
      "IUD dan implan efektivitas di atas 99 persen dan tahan tahunan.",
      "Suntik praktis tapi butuh disiplin tiap 1 atau 3 bulan.",
      "Semua bisa dihentikan dan kesuburan kembali.",
    ],
    sections: [
      {
        h: "IUD",
        p: [
          "Tembaga 10 tahun, hormonal 5 tahun. Dipasang 5 menit di faskes. Haid bisa lebih banyak di 3 bulan pertama lalu stabil.",
          "Cocok untuk yang ingin jarang kontrol. Kontrol benang 1 bulan setelah pasang.",
        ],
      },
      {
        h: "Implan",
        p: [
          "Batang kecil di lengan atas, tahan 3 tahun. Haid tidak teratur atau berhenti, itu wajar dan aman.",
          "Cocok menyusui dan pelupa jadwal. Dilepas kapan saja bila ingin hamil.",
        ],
      },
      {
        h: "Suntik",
        p: [
          "Suntik 1 bulan atau 3 bulan. Praktis dan privat. Efek umum: haid tidak teratur dan naik berat 1 sampai 2 kg.",
          "Butuh datang tepat jadwal. Kesuburan kembali rata rata 4 sampai 10 bulan setelah stop suntik 3 bulan.",
        ],
      },
    ],
    danger: "Periksa bila nyeri perut hebat, perdarahan sangat banyak, pusing berat, atau benang IUD hilang.",
    faqs: [
      { q: "Mana yang paling murah?", a: "Jangka panjang IUD dan implan paling hemat per tahun. Banyak puskesmas gratis dengan BPJS." },
      { q: "Bisa pindah metode?", a: "Bisa kapan saja. Konsultasikan transisi agar tidak ada jeda tanpa proteksi." },
    ],
    sumber: [
      "Buku Panduan Pelayanan KB, Kementerian Kesehatan RI.",
      "WHO Medical eligibility criteria for contraceptive use, 2015.",
    ],
  },
  {
    slug: "memandikan-bayi",
    category: "Neonatus",
    categoryHref: "/neonatus",
    title: "Memandikan Bayi Baru Lahir: Langkah Aman Anti Panik",
    titleEn: "Bathing a Newborn Safely",
    excerpt: "Bayi licin bikin grogi. Ikuti urutan ini agar mandi 5 menit aman.",
    excerptEn: "Slippery babies are scary. Follow this order for a safe 5 minute bath.",
    minutes: 4,
    date: "19 Agustus 2026",
    dateISO: "2026-08-19",
    image: "/img/img.webp",
    alt: "Bayi dimandikan dengan spons",
    takeaways: [
      "Siapkan semua dulu sebelum buka baju bayi.",
      "Air suam kuku, mulai wajah lalu ke bawah, area popok terakhir.",
      "Jangan tinggalkan bayi sendiri di air sedetik pun.",
    ],
    sections: [
      {
        h: "Persiapan 2 menit",
        p: [
          "Siapkan bak air suam, waslap 2, handuk, baju, popok, dan minyak telon dalam jangkauan tangan.",
          "Tes suhu dengan siku bagian dalam. Hangat nyaman, bukan panas. Ruangan hangat tanpa angin.",
        ],
      },
      {
        h: "Urutan memandikan",
        p: [
          "Bersihkan wajah dan kepala dulu dengan waslap tanpa sabun. Lalu badan depan belakang dengan sabun bayi secukupnya.",
          "Area popok terakhir. Angkat dengan sangga leher dan bokong. Total 5 sampai 10 menit cukup.",
          "Sebelum tali pusat lepas, mandikan dengan spons tanpa merendam.",
        ],
      },
      {
        h: "Setelah mandi",
        p: [
          "Keringkan tiap lipatan: leher, ketiak, selangkangan. Oles minyak telon tipis.",
          "Pakaikan baju dan topi segera agar tidak kedinginan. Mandi 1 kali sehari cukup, 2 kali bila gerah.",
        ],
      },
    ],
    danger: "Tunda mandi rendam dan periksa bila tali pusat bernanah, bayi demam, atau kulit melepuh dan bernanah.",
    faqs: [
      { q: "Sabun tiap hari boleh?", a: "Boleh sabun bayi lembut, tapi 2 sampai 3 kali seminggu cukup. Air saja di hari lain." },
      { q: "Bayi menangis saat mandi?", a: "Wajar awalnya. Bicara lembut, gerak pelan, dan pastikan air tidak dingin. Biasanya terbiasa dalam 2 minggu." },
    ],
    sumber: [
      "Buku Saku Pelayanan Kesehatan Neonatal Esensial, Kementerian Kesehatan RI.",
      "Buku Kesehatan Ibu dan Anak (KIA), Kementerian Kesehatan RI.",
    ],
  },
  {
    slug: "kolik-bayi",
    category: "Neonatus",
    categoryHref: "/neonatus",
    title: "Kolik Bayi: Menangis Terus? Ini Cara Menenangkan",
    titleEn: "Baby Colic: Soothing a Crying Baby",
    excerpt: "Menangis 3 jam sehari 3 hari seminggu bikin panik. Bedakan kolik dan sakit.",
    excerptEn: "Hours of crying panic parents. Tell colic from illness.",
    minutes: 5,
    date: "18 Agustus 2026",
    dateISO: "2026-08-18",
    image: "/img/img.webp",
    alt: "Bayi ditenangkan dalam gendongan",
    takeaways: [
      "Kolik: menangis lebih dari 3 jam, 3 hari seminggu, bayi sehat dan mau menyusu.",
      "5S menenangkan: bedong, miring, shush, goyang, hisap.",
      "Kolik hilang sendiri usia 3 sampai 4 bulan.",
    ],
    sections: [
      {
        h: "Kenali kolik",
        p: [
          "Aturan 3: menangis lebih dari 3 jam sehari, lebih dari 3 hari seminggu, lebih dari 3 minggu. Puncak usia 6 minggu.",
          "Bukan kolik bila disertai demam, muntah menyemprot, BAB berdarah, atau tidak mau menyusu. Itu sakit, bawa ke faskes.",
        ],
      },
      {
        h: "Teknik 5S",
        p: [
          "Swaddle: bedong rapat tapi pinggul longgar. Side: gendong miring di lengan.",
          "Shush: bunyi shh dekat telinga meniru rahim. Swing: goyang pelan ritmis. Suck: tawarkan menyusu atau jari bersih.",
        ],
      },
      {
        h: "Jaga kewarasan orang tua",
        p: [
          "Bergantian jaga dengan pasangan. Letakkan bayi aman di tempat tidur dan istirahat 10 menit bila emosi memuncak.",
          "Jangan guncang bayi. Shaken baby berakibat fatal. Minta bantuan keluarga atau tetangga.",
        ],
      },
    ],
    danger: "Bukan kolik bila demam, muntah menyemprot, BAB berdarah atau hitam, sesak, atau lemas. Bawa ke faskes segera.",
    faqs: [
      { q: "Perlukah ganti susu atau diet ibu?", a: "Jarang perlu. Coba evaluasi 2 minggu dulu. Jangan stop ASI tanpa anjuran tenaga kesehatan." },
      { q: "Obat kolik aman?", a: "Tidak ada obat terbukti manjur. Simethicone boleh dicoba tapi efek terbatas. Fokus ke teknik menenangkan." },
    ],
    sumber: [
      "Buku Saku Pelayanan Kesehatan Neonatal Esensial, Kementerian Kesehatan RI.",
      "Buku Kesehatan Ibu dan Anak (KIA), Kementerian Kesehatan RI.",
    ],
  },
  {
    slug: "demam-anak",
    category: "Anak",
    categoryHref: "/anak",
    title: "Demam Anak: Ukur, Kompres, dan Kapan ke Dokter",
    titleEn: "Child Fever: Measure and When to Worry",
    excerpt: "Termometer bicara lebih jujur dari tangan. Ini panduan dosis dan batasnya.",
    excerptEn: "Thermometers beat hand checks. Dosing guide and limits here.",
    minutes: 5,
    date: "17 Agustus 2026",
    dateISO: "2026-08-17",
    image: "/img/img.webp",
    alt: "Ibu mengukur suhu anak",
    takeaways: [
      "Demam adalah 38 derajat ke atas diukur termometer, bukan tangan.",
      "Paracetamol 10 sampai 15 mg per kg tiap 4 sampai 6 jam.",
      "Bayi di bawah 3 bulan demam langsung ke faskes.",
    ],
    sections: [
      {
        h: "Ukur dengan benar",
        p: [
          "Termometer digital di ketiak tambah 0,5 derajat, atau rektal paling akurat untuk bayi. Ukur tiap 4 jam saat demam.",
          "Catat jam dan angka. Catatan ini menentukan keputusan dokter.",
        ],
      },
      {
        h: "Perawatan di rumah",
        p: [
          "Kompres hangat kening dan lipatan, bukan air dingin atau alkohol. Pakaian tipis 1 lapis.",
          "Cairan lebih sering: ASI, air putih, sup. Paracetamol 10 sampai 15 mg per kg BB tiap 4 sampai 6 jam, maksimal 4 kali sehari.",
          "Jangan selimuti tebal dan jangan paksa makan. Observasi 24 sampai 72 jam.",
        ],
      },
      {
        h: "Batas ke dokter",
        p: [
          "Bayi di bawah 3 bulan demam berapa pun. Demam lebih dari 3 hari. Kejang, sesak, dehidrasi, ruam tidak hilang ditekan.",
          "Demam setelah imunisasi 1 sampai 2 hari itu wajar. Lewat dari itu periksa.",
        ],
      },
    ],
    danger: "Ke IGD bila kejang, sesak, leher kaku, dehidrasi berat, atau bayi lemas tidak responsif.",
    faqs: [
      { q: "Kompres dingin boleh?", a: "Jangan. Air dingin bikin menggigil dan suhu naik. Pakai air hangat suam kuku." },
      { q: "Antibiotik perlu?", a: "Demam virus tidak butuh antibiotik. Hanya dokter yang memutuskan setelah periksa." },
    ],
    sumber: [
      "Buku Saku Pelayanan Kesehatan Anak, Kementerian Kesehatan RI.",
      "Buku Kesehatan Ibu dan Anak (KIA), Kementerian Kesehatan RI.",
    ],
  },
  {
    slug: "tumbuh-gigi",
    category: "Anak",
    categoryHref: "/anak",
    title: "Tumbuh Gigi Bayi: Urutan, Gejala, dan Pereda Nyeri",
    titleEn: "Baby Teething: Order and Relief",
    excerpt: "Ngeces dan rewel di usia 6 bulan biasanya gigi pertama. Ini panduannya.",
    excerptEn: "Drooling at 6 months is usually the first tooth. Guide here.",
    minutes: 4,
    date: "16 Agustus 2026",
    dateISO: "2026-08-16",
    image: "/img/img.webp",
    alt: "Bayi tumbuh gigi pertama",
    takeaways: [
      "Gigi pertama muncul 6 sampai 10 bulan, lengkap 20 gigi usia 3 tahun.",
      "Ngeces, gigit, dan rewel itu wajar. Demam tinggi bukan karena gigi.",
      "Teether dingin dan pijat gusi meredakan. Sikat gigi sejak gigi pertama.",
    ],
    sections: [
      {
        h: "Urutan muncul",
        p: [
          "6 sampai 10 bulan: 2 gigi seri bawah. 8 sampai 12 bulan: 2 seri atas. 9 sampai 16 bulan: samping.",
          "13 sampai 24 bulan: geraham dan taring. Total 20 gigi susu lengkap sekitar 3 tahun.",
        ],
      },
      {
        h: "Gejala wajar vs tidak",
        p: [
          "Wajar: ngeces banyak, gigit benda, rewel, nafsu makan turun 2 sampai 3 hari, gusi bengkak.",
          "Bukan gigi: demam di atas 38,5, diare berat, ruam luas. Itu infeksi, periksa ke faskes.",
        ],
      },
      {
        h: "Pereda dan perawatan",
        p: [
          "Teether dingin dari kulkas, sendok dingin, atau pijat gusi jari bersih 2 menit.",
          "Sikat gigi berfluoride seujung beras 2 kali sehari sejak gigi pertama. Kunjungan gigi pertama usia 1 tahun.",
        ],
      },
    ],
    danger: "Periksa bila demam tinggi lebih dari 2 hari, diare dehidrasi, atau gusi bengkak bernanah.",
    faqs: [
      { q: "Teething gel aman?", a: "Hindari gel benzocaine untuk bayi. Teether dingin dan pijat gusi lebih aman." },
      { q: "Belum tumbuh gigi usia 1 tahun?", a: "Masih normal sampai 15 bulan. Konsultasikan bila lewat itu belum ada satupun." },
    ],
    sumber: [
      "Buku Kesehatan Ibu dan Anak (KIA), Kementerian Kesehatan RI.",
      "Pedoman Kesehatan Gigi Anak, Kementerian Kesehatan RI.",
    ],
  },
];

export function getArticle(slug: string): FullArticle | undefined {
  return fullArticles.find((a) => a.slug === slug);
}
