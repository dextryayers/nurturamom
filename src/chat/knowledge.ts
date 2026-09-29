import { topics } from "../data/topics";
import { fullArticles } from "../data/articlesFull";
import { panduan } from "../data/panduan";
import { tools } from "../data/content";

export interface Doc {
  id: string;
  title: string;
  text: string;
  href: string;
  tags: string;
}

const STOP = new Set(
  "yang dan di ke dari untuk dengan adalah itu ini apa bagaimana berapa kapan mana siapa mengapa apakah saya aku kamu anda bu ibu hamil bayi anak the and or a an of to in on is are what how when".split(" ")
);

function stem(w: string): string {
  let s = w;
  if (s.length > 6) {
    for (const suf of ["nya", "lah", "kah", "pun"]) {
      if (s.endsWith(suf)) {
        s = s.slice(0, -suf.length);
        break;
      }
    }
  }
  if (s.length > 5) {
    for (const suf of ["kan", "an", "i"]) {
      if (s.endsWith(suf)) {
        s = s.slice(0, -suf.length);
        break;
      }
    }
  }
  if (s.length > 5) {
    for (const pre of ["meng", "meny", "men", "mem", "peng", "peny", "pen", "pem", "ter", "ber", "per", "ke", "di", "se"]) {
      if (s.startsWith(pre)) {
        s = s.slice(pre.length);
        break;
      }
    }
    if (s.startsWith("me") && s.length > 4) s = s.slice(2);
    if (s.startsWith("pe") && s.length > 4) s = s.slice(2);
  }
  return s.length >= 3 ? s : w;
}

export function tokens(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP.has(w))
    .map(stem);
}

function cocok(q: string, w: string): number {
  if (w === q) return 3;
  if (w.startsWith(q) || q.startsWith(w)) return 2;
  if (q.length >= 4 && w.length >= 4 && (w.includes(q) || q.includes(w))) return 1;
  return 0;
}

const BIDAN: Doc[] = [
  {
    id: "bidan-anc",
    title: "Jadwal kontrol kehamilan ANC",
    text: "Kontrol hamil minimal 6 kali. 1 kali trimester 1, 2 kali trimester 2, 3 kali trimester 3. Tiap kontrol dicek tekanan darah, berat badan, tinggi fundus, detak jantung janin, dan Hb. Bawa buku KIA setiap kali.",
    href: "/kehamilan",
    tags: "anc kontrol periksa hamil jadwal trimester fundus tensi",
  },
  {
    id: "bidan-ttd",
    title: "Tablet tambah darah untuk ibu hamil",
    text: "Minum 1 tablet tambah darah tiap malam selama hamil dan 40 hari nifas. Minum dengan jus jeruk agar terserap, jangan dengan teh, kopi, atau susu. BAB hitam setelah minum itu wajar.",
    href: "/artikel/cegah-anemia-tablet-tambah-darah",
    tags: "anemia zat besi hb tablet darah pusing lemas",
  },
  {
    id: "bidan-gizi",
    title: "Gizi ibu hamil tiap hari",
    text: "Tambah 300 kalori per hari. Protein hewani tiap makan seperti telur, ikan, ayam, atau daging. Sayur hijau, buah, dan air 8 sampai 10 gelas. Batasi kafein maksimal 1 cangkir kecil.",
    href: "/artikel/makanan-trimester-2",
    tags: "gizi makan nutrisi menu protein vitamin kalori",
  },
  {
    id: "bidan-hpl",
    title: "Cara menghitung HPL dan HPHT",
    text: "HPL dihitung dari HPHT yaitu hari pertama haid terakhir dengan rumus Naegele. Tambah 7 hari, kurang 3 bulan, tambah 1 tahun. Hanya 5 persen bayi lahir tepat di HPL, rentang normal 37 sampai 42 minggu.",
    href: "/kalender-kehamilan",
    tags: "hpl hpht hitung tanggal lahir perkiraan due date lahir",
  },
  {
    id: "bidan-kontraksi",
    title: "Kontraksi asli dan palsu",
    text: "Kontraksi asli makin teratur, makin kuat, dan tidak hilang saat istirahat. Kontraksi palsu hilang bila dibawa jalan. Berangkat ke faskes bila kontraksi 5 menit sekali selama 1 jam, ketuban pecah, atau keluar lendir darah.",
    href: "/artikel/menghadapi-kontraksi",
    tags: "kontraksi mules kencang perut sakit palsu asli melahirkan",
  },
  {
    id: "bidan-tas",
    title: "Tas persalinan",
    text: "Siapkan sejak minggu 34. Isi dokumen dan buku KIA, baju ganti ibu berkancing, pembalut nifas, baju bayi, bedong, popok, selimut, camilan, dan charger.",
    href: "/tools/checklist-persalinan",
    tags: "tas barang bawaan lahir dokumen",
  },
  {
    id: "bidan-imd",
    title: "IMD dan ASI pertama",
    text: "IMD dilakukan dalam 1 jam pertama setelah lahir dengan kontak kulit ke kulit. Kolostrum kental yang keluar hari 1 sampai 3 sudah cukup karena lambung bayi sebesar kelereng.",
    href: "/artikel/asi-lancar-minggu-pertama",
    tags: "imd inisiasi menyusu dini kolostrum asi pertama",
  },
  {
    id: "bidan-pelekatan",
    title: "Pelekatan menyusui yang benar",
    text: "Perut bayi menempel perut ibu, mulut terbuka lebar, bibir dower, dagu menempel payudara. Susui 8 sampai 12 kali sehari tiap 2 sampai 3 jam. BAK 6 kali sehari tanda ASI cukup.",
    href: "/artikel/asi-lancar-minggu-pertama",
    tags: "pelekatan latch posisi menyusui asi puting lecet",
  },
  {
    id: "bidan-mastitis",
    title: "Payudara bengkak dan mastitis",
    text: "Payudara bengkak keras disertai demam adalah mastitis. Tetap susui dari sisi yang sakit, kompres hangat sebelum menyusu, dan segera periksa. Jangan stop menyusui mendadak.",
    href: "/nifas",
    tags: "payudara bengkak mastitis demam asi sakit",
  },
  {
    id: "bidan-lokia",
    title: "Darah nifas lokia",
    text: "Lokia normal 2 sampai 6 minggu. Awal merah terang lalu coklat dan kekuningan. Ganti pembalut tiap 3 sampai 4 jam. Waspadai bila kembali merah segar dalam jumlah banyak.",
    href: "/nifas",
    tags: "lokia darah nifas pembalut perdarahan",
  },
  {
    id: "bidan-jahitan",
    title: "Luka jahitan nifas",
    text: "Basuh dari depan ke belakang tiap BAK dan BAB, keringkan, jaga tetap kering. Sembuh 7 sampai 10 hari. Periksa bila bengkak, bernanah, berbau, atau demam.",
    href: "/artikel/perawatan-luka-jahitan-nifas",
    tags: "jahitan luka robekan perineum kering sembuh",
  },
  {
    id: "bidan-blues",
    title: "Baby blues dan depresi nifas",
    text: "Baby blues muncul hari ke 3 sampai 5 dan hilang dalam 2 minggu. Bila sedih berat lebih dari 2 minggu, tidak menikmati bayi, atau ada pikiran menyakiti diri, itu depresi nifas dan butuh bantuan profesional.",
    href: "/artikel/baby-blues-vs-depresi-nifas",
    tags: "baby blues sedih depresi stres menangis mental",
  },
  {
    id: "bidan-tali",
    title: "Tali pusat bayi",
    text: "Biarkan tali pusat kering dan terbuka, lipat popok di bawahnya. Bersihkan dengan air matang bila kotor. Lepas normal hari ke 5 sampai 15. Periksa bila merah meluas, bernanah, atau berbau.",
    href: "/artikel/merawat-tali-pusat",
    tags: "tali pusat pusar udel lepas",
  },
  {
    id: "bidan-kuning",
    title: "Bayi kuning",
    text: "Kuning normal muncul hari ke 2 sampai 3 dan hilang sebelum 2 minggu. Kuning dalam 24 jam pertama, sampai telapak, atau disertai bayi lemas wajib ke faskes hari itu juga untuk fototerapi.",
    href: "/artikel/bayi-kuning-baru-lahir",
    tags: "kuning bilirubin jemur fototerapi",
  },
  {
    id: "bidan-mpasi",
    title: "MPASI 6 bulan",
    text: "Mulai MPASI tepat 6 bulan dengan tekstur saring kental. Protein hewani tiap hari seperti telur, ikan, atau ayam. ASI lanjut sampai 2 tahun. Hindari garam dan gula di bawah 1 tahun.",
    href: "/artikel/mpasi-pertama-6-bulan",
    tags: "mpasi makan bayi bubur tekstur porsi stunting",
  },
  {
    id: "bidan-imunisasi",
    title: "Imunisasi dasar bayi",
    text: "HB 0 kurang dari 24 jam, BCG dan Polio 0 saat baru lahir. DPT, Hib, Polio, dan PCV di bulan 2, 3, dan 4. Campak MR di 9 bulan. Demam ringan setelah DPT itu wajar. Bawa buku KIA tiap kunjungan.",
    href: "/tools/imunisasi",
    tags: "imunisasi vaksin bcg dpt polio campak mr demam",
  },
  {
    id: "bidan-kb",
    title: "KB setelah melahirkan dan menyusui",
    text: "Pilihan aman untuk menyusui adalah IUD, implan, suntik 3 bulan, atau pil menyusui. Bahas KB pasca salin sebelum 6 minggu. Hindari pil kombinasi di 6 minggu pertama.",
    href: "/reproduksi-kb",
    tags: "kb kontrasepsi pil iud implan suntik menyusui",
  },
  {
    id: "bidan-demam-anak",
    title: "Demam pada anak",
    text: "Demam di atas 38 derajat kompres hangat, beri ASI atau cairan lebih sering, dan pantau. Ke faskes bila demam lebih dari 3 hari, kejang, sesak, dehidrasi, atau bayi di bawah 3 bulan demam.",
    href: "/anak",
    tags: "demam panas anak obat kompres kejang",
  },
  {
    id: "bidan-batuk",
    title: "Batuk pilek pada bayi",
    text: "Batuk pilek ringan tanpa demam tinggi umumnya virus dan sembuh 1 sampai 2 minggu. Cukupkan ASI dan cairan, jemur pagi, hindari asap rokok. Ke faskes bila napas cepat, sesak, atau tidak mau menyusu.",
    href: "/anak",
    tags: "batuk pilek flu hidung mampet napas",
  },
  {
    id: "bidan-tumbang",
    title: "Tumbuh kembang dan posyandu",
    text: "Timbang tiap bulan di posyandu untuk pantau stunting. Red flag bicara: 12 bulan belum babbling, 18 bulan belum ada kata bermakna. Stimulasi dengan ajak bicara dan bacakan buku tiap hari.",
    href: "/anak",
    tags: "tumbuh kembang posyandu timbang stunting bicara stimulasi",
  },
  {
    id: "bidan-preeklampsia",
    title: "Preeklampsia dan tekanan darah tinggi",
    text: "Waspadai sakit kepala hebat, pandangan kabur, nyeri ulu hati, dan bengkak mendadak di wajah dan tangan setelah minggu 20. Itu tanda preeklampsia. Ukur tensi segera dan ke faskes hari itu juga.",
    href: "/kehamilan",
    tags: "preeklampsia tensi darah tinggi bengkak pusing kejang",
  },
  {
    id: "bidan-diabetes",
    title: "Diabetes gestasional",
    text: "Skrining gula darah biasanya minggu 24 sampai 28. Risiko lebih tinggi bila usia di atas 35, obesitas, atau riwayat bayi besar. Atasi dengan diet rendah gula, jalan santai, dan pantau gula sesuai anjuran.",
    href: "/kehamilan",
    tags: "diabetes gula darah gestasional manis kencing",
  },
  {
    id: "bidan-usg",
    title: "Jadwal USG kehamilan",
    text: "USG trimester 1 di minggu 8 sampai 12 memastikan usia dan jumlah janin. USG anatomi di minggu 18 sampai 22 melihat organ lengkap. USG akhir menilai posisi, plasenta, dan air ketuban.",
    href: "/kehamilan",
    tags: "usg ultrasonografi lihat janin jenis kelamin plasenta",
  },
  {
    id: "bidan-suplemen",
    title: "Suplemen ibu hamil",
    text: "Wajib: asam folat 400 mcg sebelum dan awal hamil, tablet tambah darah tiap hari, kalsium bila asupan susu kurang. Vitamin D dari jemur pagi 15 menit. Konsultasikan semua suplemen ke bidan, jangan racik sendiri.",
    href: "/artikel/cegah-anemia-tablet-tambah-darah",
    tags: "suplemen vitamin asam folat kalsium obat",
  },
  {
    id: "bidan-ruam",
    title: "Ruam popok bayi",
    text: "Ruam popok karena lembap dan jarang ganti. Ganti tiap 2 sampai 3 jam, keringkan lipatan, angin anginkan 10 menit, oles tipis krim zinc. Periksa bila melepuh, bernanah, atau demam.",
    href: "/neonatus",
    tags: "ruam popok merah pantat diaper krim",
  },
  {
    id: "bidan-gtm",
    title: "Anak GTM susah makan",
    text: "GTM sesekali itu wajar. Jangan paksa makan. Variasikan menu dan tekstur, makan bersama tanpa distraksi gadget, batasi susu maksimal 500 ml sehari agar lapar saat makan.",
    href: "/artikel/mpasi-pertama-6-bulan",
    tags: "gtm susah makan tutup mulut picky makan",
  },
  {
    id: "bidan-sapih",
    title: "Menyapih anak",
    text: "Sapih bertahap mulai kurangi 1 sesi menyusu tiap minggu, ganti dengan camilan dan pelukan. Hindari oles pahit atau tiba tiba pergi. ASI ideal sampai 2 tahun, sapih paksa bikin anak stres.",
    href: "/anak",
    tags: "sapih berhenti asi menyusu lepas",
  },
  {
    id: "bidan-pijat",
    title: "Pijat bayi",
    text: "Pijat 10 sampai 15 menit setelah mandi dengan minyak kelapa murni. Gerakan lembut dari kaki ke perut searah jarum jam membantu kolik dan tidur. Stop bila bayi menangis atau ada ruam.",
    href: "/neonatus",
    tags: "pijat bayi massage kolik kembung tidur",
  },
];

function buildIndex(): Doc[] {
  const docs: Doc[] = [...BIDAN];
  for (const a of fullArticles) {
    docs.push({
      id: "art-" + a.slug,
      title: a.title,
      text: a.excerpt + " " + a.takeaways.join(" ") + " " + a.sections.map((s) => s.h).join(" "),
      href: "/artikel/" + a.slug,
      tags: a.category + " " + a.slug.replace(/-/g, " "),
    });
  }
  for (const t of topics) {
    docs.push({
      id: "top-" + t.slug + "-" + t.title,
      title: t.title,
      text: t.desc + " " + t.links.map((l) => l.t).join(" "),
      href: "/" + t.slug,
      tags: t.title + " topik",
    });
  }
  for (const p of panduan) {
    docs.push({
      id: "pan-" + p.slug,
      title: p.title + " " + p.range,
      text: p.desc + " " + p.points.join(" "),
      href: "/panduan/" + p.slug,
      tags: "tahap panduan " + p.title,
    });
  }
  for (const t of tools) {
    docs.push({
      id: "tool-" + t.slug,
      title: t.title,
      text: t.desc,
      href: t.slug === "kalender-kehamilan" ? "/kalender-kehamilan" : "/tools/" + t.slug,
      tags: "tool kalkulator hitung",
    });
  }
  docs.push({
    id: "faq-hpl",
    title: "Cara menghitung HPL",
    text: "HPL dihitung dari HPHT dengan rumus Naegele. Tambah 7 hari, kurang 3 bulan, tambah 1 tahun. Contoh HPHT 10 Maret 2026 menghasilkan HPL 17 Desember 2026. Pakai Kalender Kehamilan untuk hasil otomatis.",
    href: "/kalender-kehamilan",
    tags: "hpl hpht hitung tanggal lahir perkiraan due date lahir",
  });
  docs.push({
    id: "faq-anc",
    title: "Jadwal kontrol kehamilan",
    text: "Kontrol minimal 6 kali. 1 kali trimester 1, 2 kali trimester 2, 3 kali trimester 3. Bawa buku KIA tiap kontrol.",
    href: "/kehamilan",
    tags: "anc kontrol periksa hamil jadwal trimester",
  });
  docs.push({
    id: "faq-bahaya",
    title: "Tanda bahaya kehamilan dan nifas",
    text: "Segera ke faskes bila ada perdarahan, ketuban pecah, demam tinggi, nyeri hebat, kejang, sakit kepala hebat, atau gerak janin berkurang.",
    href: "/nifas",
    tags: "bahaya darurat tanda perdarahan demam",
  });
  return docs;
}

export const KNOWLEDGE: Doc[] = buildIndex();

export function searchDocs(query: string, n = 3): Doc[] {
  const qs = tokens(query);
  if (qs.length === 0) return [];
  const scored = KNOWLEDGE.map((d) => {
    const tt = tokens(d.title);
    const tg = tokens(d.tags);
    const tx = tokens(d.text);
    let s = 0;
    for (const q of qs) {
      let best = 0;
      for (const w of tt) best = Math.max(best, cocok(q, w));
      s += best * 3;
      best = 0;
      for (const w of tg) best = Math.max(best, cocok(q, w));
      s += best * 2;
      best = 0;
      for (const w of tx) best = Math.max(best, cocok(q, w));
      s += best;
    }
    if (d.title.toLowerCase().includes(query.trim().toLowerCase()) && query.trim().length > 3) s += 4;
    return { d, s };
  })
    .filter((r) => r.s > 0)
    .sort((a, b) => b.s - a.s);
  return scored.slice(0, n).map((r) => r.d);
}

const DANGER_PATTERNS = [
  "perdarahan",
  "berdarah",
  "ketuban",
  "demam",
  "kejang",
  "pusing hebat",
  "sakit kepala hebat",
  "nyeri hebat",
  "gerak janin",
  "janin berhenti",
  "tidak bergerak",
  "muntah terus",
  "sesak",
  "tidak mau menyusu",
  "lemas",
  "kuning",
  "bleeding",
  "water broke",
  "fever",
  "seizure",
  "severe headache",
  "no fetal movement",
  "shortness of breath",
];

export function detectDanger(query: string): boolean {
  const q = query.toLowerCase();
  return DANGER_PATTERNS.some((p) => q.includes(p));
}
