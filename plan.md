# plan.md: nurturamom.com

> Teman Sehat Ibu dan Anak. Informasi kesehatan terpercaya untuk menemani setiap tahap perjalanan menjadi ibu.

Dokumen ini adalah blueprint pembangunan ulang `nurturamom.com` persis mengikuti referensi UI terlampir (hero cream plus foto ibu dan bayi, 6 kartu topik, timeline tahap, 3 artikel, 5 tools, CTA hijau sage, footer 4 kolom), dengan kualitas **modern, profesional, ringan, anti AI slop**, dan **SEO kuat**.

Catatan gaya untuk dokumen ini dan seluruh web: tanpa karakter emdash (U+2014). Gunakan titik, koma, titik dua, atau kalimat baru sebagai pengganti.

---

## 1. Ringkasan Produk

### 1.1 Tujuan
1. **Tanggalan / Kalender Kehamilan.** Pelacakan usia kehamilan minggu per minggu, HPL, trimester, dan perkembangan janin.
2. **Kesehatan Ibu dan Bayi.** Pusat informasi: Kehamilan, Persalinan, Nifas, Neonatus, Anak, Reproduksi dan KB.
3. **Tentang Bidan.** Kredibilitas: siapa bidan di balik konten, STR dan pengalaman, jadwal praktik, dan alur konsultasi.

### 1.2 Prinsip Anti AI Slop plus Tanpa Emdash

Aturan ini mengikat untuk semua copy, kode, dan konten MDX. Pelanggaran berarti PR ditolak.

**A. Larangan emdash total.**
- Dilarang memakai karakter U+2014 di mana pun: H1, paragraf, button, placeholder, meta title, meta description, alt image, JSON LD, bahkan komentar kode. Tulis rujukan sebagai teks `U+2014`, jangan tulis karakternya.
- Dilarang juga memakai karakter U+2013 sebagai pengganti gaya. Untuk rentang cukup pakai hubung pendek `-` atau kata `sampai`. Contoh benar: `0-12 minggu`, `Trimester 1 sampai 3`.
- Pengganti wajib:
  - Salah (memakai U+2014): `Kalender akurat [EMDASH] dihitung dari HPHT`
  - Benar: `Kalender akurat karena dihitung dari HPHT.`
  - Salah (memakai U+2014): `Nifas [EMDASH] masa 0-42 hari`
  - Benar: `Nifas: masa 0-42 hari.`
- Validasi otomatis: jalankan `rg -n "\\u2014" src content public` sebelum commit. Hasil harus nol. Tambahkan ke CI sebagai step `no-emdash`.

**B. Larangan visual slop.**
- Tanpa gradient ungu biru generik, tanpa glassmorphism berlebihan, tanpa blob acak.
- Tanpa emoji sebagai ikon. Semua ikon wajib **Lucide** (`lucide-vue-next` untuk Vue island, `astro-icon` untuk statis).
- Tanpa ilustrasi AI yang anatominya salah. Gunakan foto asli yang hangat seperti referensi, ikon flat pastel yang konsisten, dan dekorasi daun atau bunga kecil di sudut saja.
- Tanpa card dengan shadow hitam tebal. Gunakan `shadow-[0_8px_30px_rgba(96,36,55,0.06)]` plus `border-[#F3E6DD]` plus `rounded-[20px]`.

**C. Larangan copy slop.**
Dilarang frasa generik berikut dan variasinya:
- `di era modern ini`, `di era digital ini`, `solusi inovatif terdepan`, ` merevolusi`, `menyelami`, `lanskap kesehatan`, `secara keseluruhan`, `penting untuk dicatat`, `perlu diingat bahwa`, `sebagai kesimpulan`, `selamat datang di website kami`.
- Dilarang pembuka kalimat beruntun yang kaku: `Selain itu... Selain itu... Selain itu...` Maksimal satu kali per artikel.
- Dilarang klaim kabur: `akurat 100 persen`, `terbaik`, `nomor 1`, `dijamin berhasil`. Ganti dengan angka yang bisa diverifikasi. Contoh: `HPL dihitung dengan rumus Naegele dari HPHT. Akurasi tetap perlu konfirmasi USG.`
- Dilarang paragraf templat AI: tiga kalimat panjang dengan koma bertumpuk dan dua emdash. Ganti dengan kalimat pendek 12 sampai 20 kata, satu ide per kalimat.
- Wajib nada bidan Indonesia yang hangat dan tegas. Contoh nada benar: `Mual di trimester 1 itu wajar. Makan sedikit tapi sering. Hubungi bidan jika muntah lebih dari 5 kali sehari.`

**D. Yang diwajibkan.**
- Spasi lega, ritme 8px, max width konten `1160px`.
- Satu gaya visual: **warm paper plus plum plus sage**.
- Setiap klaim medis ada sumber atau disclaimer plus tanggal ditinjau bidan.
- Setiap halaman punya detail konkret: angka minggu, dosis umum sesuai pedoman, contoh menu, checklist barang, atau jadwal. Tanpa halaman yang hanya berisi definisi umum.

### 1.3 Target Pengguna dan Perangkat
- Ibu hamil, ibu nifas, ibu muda usia 21-35 tahun, mobile first (75 persen lebih dari HP).
- Koneksi lambat: budget JS di bawah 90KB gz, LCP di bawah 2 detik di 4G, Lighthouse 95 plus.

---

## 2. Tech Stack (Ringan plus Modern)

| Kebutuhan | Pilihan | Alasan |
|---|---|---|
| Framework | **Astro 5 plus Vue 3 Islands** | Astro untuk MPA super ringan (0 JS by default). Vue hanya untuk komponen interaktif: `PregnancyCalendar.vue`, `HplCalculator.vue`, `BmiCalculator.vue`, `SearchBar.vue`. |
| Styling | **Tailwind CSS v4** (`@tailwindcss/vite`) | Utility first, tree shaken, design token via `@theme`. Tanpa UI kit berat. |
| Ikon | **Lucide** (`lucide-vue-next` untuk islands, `astro-icon` untuk statis) | Konsisten, stroke 1.8, ringan karena import per ikon. |
| Animasi | **GSAP 3 ringan**. Hanya `gsap` core plus `ScrollTrigger`, di load lazy via `astro:after-swap` atau `IntersectionObserver`. Hormati `prefers-reduced-motion`. Tanpa ScrollSmoother, tanpa Lenis. | Fade up halus 24px, stagger kartu 60ms, parallax hero sangat tipis (y: -12). |
| Konten | **Astro Content Collections plus MDX** (`src/content/artikel/`, `src/content/tahap/`) | Type safe, frontmatter tervalidasi, RSS plus sitemap otomatis. |
| Gambar | `astro:assets` plus `sharp`, format AVIF dan WebP, `loading="lazy"` kecuali hero (`fetchpriority="high"`) | Skor PageSpeed. |
| SEO | `@astrojs/sitemap`, `astro-robots-txt`, SEO manual tanpa lib berat, JSON LD inline | Kontrol penuh atas meta. |
| Form dan Search | Client search lokal dengan **Pagefind** plus form konsultasi ke WhatsApp | Tanpa backend di v1. |
| Hosting | Vercel atau Cloudflare Pages, domain `https://nurturamom.com` | Edge, HTTPS, kompresi Brotli. |
| Kualitas | ESLint plus Prettier plus `astro check`, plus custom check `no-emdash` | Cegah regresi gaya dan copy. |

Yang **tidak** dipakai di v1: React, Next.js, jQuery, Bootstrap, slider library (gunakan CSS scroll snap), Three.js, plugin GSAP berbayar.

---

## 3. Design System

### 3.1 Warna, dari `color.txt` plus netral pendukung
Sumber utama (`color.txt`):
- `#602437` Deep Plum (teks heading, footer text, badge gelap)
- `#8A2846` Berry Rose (hover, link aktif)
- `#B9375E` Raspberry (aksen link `Lihat selengkapnya`, dot timeline)
- `#FFCAD4` Soft Blush (bg badge, bg ikon, highlight kata `Ibu dan Anak`)
- `#E05780` Rose Pink (badge kategori, CTA sekunder, bunga dekoratif)

Netral hangat (wajib agar tidak terlihat AI dan tetap persis referensi):
- `#FFFCF8` paper background (bukan putih polos)
- `#FFF4EC` atau `#FFF6F0` hero dan section cream
- `#F3E6DD` border kartu
- `#3D2B30` body text, `#8A7A7E` muted
- `#7C9D8B` Sage (tombol `Cari`, `Konsultasi`, `Jelajahi Sekarang` persis di gambar) plus hover `#6B8C7A`
- `#F9E8E0` bg ikon selang seling agar tidak monoton

Aturan pakai:
- Heading: `Deep Plum`. Kata penegas (`Ibu dan Anak`) pakai `Raspberry` atau highlight blush.
- Tombol primer: Sage pill `rounded-full`. Tombol sekunder: outline Plum.
- Badge kategori: bg `#FFCAD4` plus teks `#602437`, `rounded-full text-[11px] font-bold uppercase`.
- Maksimal 2 warna aksen dalam satu viewport.

### 3.2 Tipografi dan Copywriting
- Font: **Plus Jakarta Sans** (400, 500, 700, 800 saja) via `fontsource` self host. Satu font untuk semua agar ringan. Heading `tracking-[-0.02em]`, body `leading-relaxed`.
- Skala: Hero H1 `clamp(2.2rem, 5vw, 3.4rem)` weight 800. H2 section `1.4rem` weight 800 plus ikon sparkle kecil. Body `0.95rem`. Small `0.8rem`.
- Bahasa: Indonesia natural tanpa emdash. Contoh H1: `Teman Sehat` (Plum) baris baru `Ibu dan Anak` (Raspberry). Sub: `Informasi kesehatan terpercaya untuk menemani setiap tahap perjalanan menjadi ibu.`
- Aturan kalimat: maksimal 25 kata per kalimat. Paragraf maksimal 3 kalimat. Gunakan titik dua untuk definisi. Contoh: `Trimester 2: usia 13-27 minggu. Energi biasanya pulih. Fokus ke protein, zat besi, dan kalsium.`
- Microcopy tombol dan form tanpa emdash. Contoh: `Cari`, `Hitung HPL`, `Lihat selengkapnya`, `Jelajahi Sekarang`, `Tanya Bidan di WhatsApp`.

### 3.3 Komponen Inti (Tailwind)
- `Container`: `max-w-[1160px] mx-auto px-5 md:px-8`.
- `CardTopic`: `bg-white rounded-[20px] border border-[#F3E6DD] p-6 shadow-[0_8px_30px_rgba(96,36,55,0.06)] hover:-translate-y-1 transition`. Ikon di lingkaran `w-16 h-16 rounded-full bg-[#FFCAD4]/40 grid place-items-center`.
- `PillButton`: `rounded-full bg-[#7C9D8B] text-white text-sm font-semibold px-6 py-2.5 hover:bg-[#6B8C7A]`.
- `SearchBar`: pill putih dengan ikon `Search` lucide di kiri, input tanpa border, tombol Sage di kanan dalam pill yang sama.
- `TimelineTahap`: horizontal scroll snap di mobile, 7 node dengan dot plus garis dashed `#E8CFC2`, ikon lingkaran pastel beda tiap tahap, label plus rentang minggu di bawah.
- Dekorasi: daun kiri bawah hero dan bunga kecil `#E05780` di kanan CTA atau footer. Opacity di bawah 0.9, tidak menutupi teks.

### 3.4 Ikon Lucide (wajib, tanpa emoji)
Navbar: `MessageCircle` (Konsultasi). Hero search: `Search`. Kartu topik: `HeartHandshake` (Kehamilan), `Baby` (Persalinan), `Flower2` (Nifas), `Milk` (Neonatus), `HeartPulse` (Reproduksi), `ShieldCheck` (KB). Tahap: `UserRound`, `Users`, `Briefcase`, `CalendarHeart`, `Sparkles`. Tools: `CalendarDays` (Kalender Kehamilan), `Scale` (IMT), `CalendarClock` (HPL), `ClipboardCheck` (Checklist), `Syringe` (Imunisasi). Artikel meta: `Clock3` (waktu baca). Footer: `Mail`, `MapPin`, `Instagram`, `Facebook`, `Youtube`, `Music2` (pengganti TikTok).

---

## 4. Struktur Halaman, Persis Referensi

### 4.1 Global: Header plus Footer
**Header (sticky, blur cream):**
- Kiri: logo final `public/logo.jpg` (45KB, ikon ibu menggendong bayi plus wordmark `nurtura` sage dan `mom` pink). Tidak boleh digambar ulang. Tampil sebagai image `h-10 w-auto md:h-11` dengan `rounded-xl bg-white px-2 py-1` karena file sumber berlatar putih. Alt: `Logo NurturaMom, ibu menggendong bayi`. Loading eager. Footer pakai file yang sama ukuran `h-12 w-auto`. Favicon dan apple touch diturunkan dari crop ikon atas logo ini, bukan file baru.
- Tengah: `Beranda, Kehamilan, Persalinan, Nifas, Neonatus, Anak, Reproduksi dan KB`. Ukuran `text-[13px] font-medium`, status aktif underline Raspberry.
- Kanan: tombol `Konsultasi` (ikon `MessageCircle`) model Sage pill. Mobile: hamburger lalu drawer.
- Behavior: tambah `shadow-sm` setelah scroll lebih dari 8px (pakai CSS scroll driven, tanpa JS berat).

**Footer:**
- 4 kolom: brand plus tagline `Informasi kesehatan terpercaya untuk ibu dan anak.` Kolom Navigasi (Beranda, Kehamilan, Persalinan, Nifas). Kolom Neonatus, Anak, Reproduksi dan KB, Tentang Kami. Kolom Kontak: `hello@nurturamom.id`, Indonesia, sosmed.
- Bawah: disclaimer `Informasi di nurturamom bersifat edukatif dan bukan pengganti konsultasi tenaga kesehatan.` plus `© 2025 nurturamom. All rights reserved.` plus bunga dekoratif kanan.

### 4.2 Beranda `/` (urutan wajib sama dengan gambar)
1. **Hero.** Container cream `rounded-[28px]`, grid 2 kolom. Kolom foto kanan wajib pakai file final `public/img/img.webp` (11KB, foto bidan berhijab putih berkonsultasi dengan ibu hamil berhijab coklat). Tampil `rounded-[28px]` full bleed, aspect 4/3, object cover, object position center, `fetchpriority="high"`, widths 640 dan 1024 via `astro:assets`. Alt: `Bidan berkonsultasi dengan ibu hamil`. Karena sisi kiri foto terang (gorden putih), tambah overlay gradient cream tipis dari kiri agar teks menyatu. Search pill di bawah subheading. GSAP: H1 fade up per kata, foto clip reveal 0.8 detik. Microcopy di bawah search: `Populer: HPL, Trimester 2, Imunisasi BCG`. Tanpa emdash di semua teks hero.
2. **Jelajahi Informasi Kesehatan.** H2 plus ikon `Sparkles` Raspberry kecil plus sub `Pilih topik yang ingin Anda pelajari sesuai tahap perjalanan Anda.` Grid 3x2 kartu (isi persis gambar: Kehamilan, Persalinan, Nifas, Neonatus, Reproduksi, KB dengan deskripsi 1 kalimat plus `Lihat selengkapnya` dengan panah Lucide `ArrowRight`, bukan karakter panah teks).
3. **Panduan Berdasarkan Tahap.** Strip cream, 7 node horizontal: Trimester 1 (0-12 minggu), Trimester 2 (13-27 minggu), Trimester 3 (28-40 minggu), Persiapan Persalinan, Masa Nifas (0-42 hari), Bayi Baru Lahir (0-28 hari), Anak (0-5 tahun). Klik masuk ke `/panduan/[slug]`.
4. **Artikel Terbaru.** Header plus link `Lihat semua` kanan. 3 kartu foto (ibu hamil trimester 2, ibu dan bayi setelah persalinan, bayi tidur): badge kategori plus `Clock3` plus `5 menit baca`, judul bold Plum, excerpt 2 baris `line-clamp-2`.
5. **Tools untuk Ibu.** Sub `Fitur praktis yang bisa membantu Anda di setiap tahap.` Grid 5 kartu ikon Sage: Kalender Kehamilan, Hitung IMT, Kalkulator HPL, Checklist Persiapan Persalinan, Jadwal Imunisasi Anak. Tiap kartu deskripsi 1 baris plus seluruh kartu bisa diklik.
6. **CTA.** Banner Sage muda `#DCE9E1` plus foto ibu dan anak kiri (rounded), teks `Mulai perjalanan sehat bersama nurturamom` plus sub plus tombol Sage gelap `Jelajahi Sekarang` dengan ikon `ArrowRight`.

### 4.3 Tanggalan Kehamilan `/kalender-kehamilan` (fitur unggulan)
Vue Island `PregnancyCalendar.vue`:
- Input: HPHT (date picker) atau usia kehamilan manual (minggu plus hari). Validasi: HPHT tidak boleh di masa depan, tidak boleh lebih dari 42 minggu lalu.
- Output langsung: usia kehamilan (Minggu X Hari Y), badge trimester, HPL (Naegele: HPHT tambah 7 hari kurang 3 bulan tambah 1 tahun), hitung mundur hari, progress bar 280 hari, ukuran janin analogi buah (tabel statis minggu 4-42, contoh minggu 12 `sebesar buah plum`).
- Timeline mingguan: accordion perkembangan janin plus keluhan umum plus tips plus checklist gizi plus kapan harus ke bidan (tanda bahaya).
- CTA simpan: tombol `Simpan dan Ingatkan via WhatsApp` (generate link `wa.me` dengan teks prefill, tanpa backend) plus `Unduh ringkasan` (print CSS).
- URL shareable: `?hpht=2026-03-10` agar bisa dibagikan dan dicrawl sebagai contoh (canonical tetap ke URL bersih).
- Skema data di `src/data/fetalGrowth.ts` agar mudah diaudit bidan.
- Semua label tanpa emdash. Contoh label benar: `Usia kehamilan: 20 minggu 3 hari.` Contoh salah yang dilarang: `Usia kehamilan [EMDASH] 20 minggu`.

Halaman pendamping: `/tools/hpl` (kalkulator fokus), `/tools/imt` (IMT plus tabel khusus ibu hamil), `/tools/checklist-persalinan` (checkbox tersimpan di `localStorage`, ada progress persen), `/tools/imunisasi` (tabel IDAI 0-18 bulan plus pengingat).

### 4.4 Kesehatan Ibu dan Bayi (6 pilar plus anak)
Route: `/kehamilan`, `/persalinan`, `/nifas`, `/neonatus`, `/anak`, `/reproduksi-kb`. Template sama:
- Hero mini (breadcrumb plus H1 plus deskripsi plus ilustrasi pastel).
- Sub topik chips (contoh Kehamilan: Trimester 1, Trimester 2, Trimester 3, Nutrisi, Keluhan, Persiapan).
- Artikel terkait (filter Content Collection berdasar kategori).
- FAQ accordion (untuk rich snippet) plus box peringatan blush `Kapan harus ke bidan atau dokter`.
- CTA konsultasi.

### 4.5 Tentang Bidan `/tentang-bidan` plus `/tentang-kami`
- Foto profesional, nama, gelar (S.Tr.Keb., Bd), no. STR (sensor parsial), lama pengalaman dalam tahun, filosofi asuhan.
- Kredensial: pendidikan, pelatihan (APN, CTU, laktasi), afiliasi IBI.
- Layanan: ANC, pendampingan persalinan, nifas dan laktasi, KB, pijat bayi (sesuai kompetensi).
- Jadwal praktik dalam tabel plus tombol WhatsApp plus peta (embed ringan `loading="lazy"`).
- Testimoni 3 kartu (nama samaran plus avatar inisial, tanpa foto pasien asli).
- E E A T: halaman ini di link dari setiap artikel sebagai peninjau (`Ditinjau oleh Bidan X pada ...`).

### 4.6 Artikel `/artikel/[...slug]`
- Layout: breadcrumb, H1 tunggal, meta (kategori, tanggal, waktu baca, peninjau), hero image 16/9, TOC sticky kanan (desktop), konten prose yang hangat, box `Kapan harus ke bidan`, kartu penulis dan peninjau, 3 artikel terkait, FAQ.
- Contoh awal (wajib ada agar tidak kosong, sesuai gambar): `Makanan yang Baik untuk Ibu Hamil di Trimester 2`, `Tips Menghadapi Kontraksi Saat Persalinan`, `Cara Merawat Tali Pusat pada Bayi Baru Lahir`.
- Aturan copy artikel: tanpa emdash, tanpa frasa slop di seksi 1.2, maksimal 25 kata per kalimat, tiap tips harus spesifik (contoh: `Tambah 1 telur rebus dan 1 gelas susu tiap hari jika tidak ada alergi.` bukan `Cukupi nutrisi dengan baik.`).

### 4.7 Konsultasi `/konsultasi`
- Penjelasan alur 3 langkah, form ringan (nama, WA, topik, pesan) lalu diteruskan ke link `wa.me`. Tanpa simpan data pribadi di server (privasi). Cantumkan jam respons plus disclaimer darurat (hubungi IGD jika perdarahan, ketuban pecah, demam tinggi, atau gerak janin berkurang).

---

## 5. SEO Kuat: nurturamom.com

### 5.1 Teknikal
- `site: https://nurturamom.com`, `trailingSlash: never`, canonical absolut tiap halaman.
- `robots.txt`: allow all plus sitemap. `sitemap-index.xml` via `@astrojs/sitemap` (artikel, pilar, tools).
- Meta dasar tiap halaman: title 50-60 karakter, description 150-160 karakter Bahasa Indonesia tanpa emdash, tanpa keywords (sudah usang), `og:*`, `twitter:card summary_large_image`, `theme-color #602437`, favicon SVG plus apple touch.
- Gambar: `public/img/` pindah ke `src/assets/` agar dioptimasi. `alt` deskriptif Indonesia tanpa emdash. Hero `fetchpriority="high"`.
- Performance: font self host `display=swap`, GSAP dan Vue di code split hanya di halaman tools, Pagefind search index saat build.

### 5.2 Pola Title dan Description (tanpa emdash)
- Beranda title: `NurturaMom: Teman Sehat Ibu dan Anak, Kalender Kehamilan dan Info Bidan`
- Beranda description: `Informasi kehamilan, persalinan, nifas, dan kesehatan bayi yang ditinjau bidan. Hitung HPL, pantau trimester, dan konsultasi di nurturamom.com.`
- Kalender title: `Kalender Kehamilan dan Kalkulator HPL: NurturaMom`
- Kalender description: `Hitung usia kehamilan dan HPL dari HPHT. Pantau perkembangan janin tiap minggu plus checklist gizi dan tanda bahaya.`
- Artikel: `{Judul}: NurturaMom` plus description dari excerpt 155 karakter tanpa emdash.
- Pilar: `Panduan {Kehamilan Trimester 2}: Nutrisi dan Keluhan: NurturaMom`.

### 5.3 Structured Data (JSON LD)
- Global: `Organization` plus `WebSite` (SearchAction ke `/cari?q=`).
- Artikel: `MedicalWebPage` atau `Article` (headline, image, datePublished, author Person, reviewedBy Person bidan dengan credential).
- FAQ tiap pilar dan artikel: `FAQPage`.
- Bidan: gunakan `Person` plus `MedicalClinic` (address, openingHours, telephone) di `/tentang-bidan`.
- Breadcrumb: `BreadcrumbList` di semua halaman level 2 ke atas.

### 5.4 Konten dan Internal Linking
- Satu keyword utama per halaman, H1 tunggal, H2 berupa pertanyaan (`Apa yang terjadi di trimester 2?`).
- Timeline tahap saling link melingkar, setiap artikel link ke 1 tool plus 1 pilar plus 1 artikel terkait.
- Halaman tag dilarang di v1 (thin content). Fokus ke 6 pilar plus 12 artikel awal yang berkualitas.

---

## 6. Struktur File (Astro plus Vue)

```text
/
├─ public/
│  ├─ favicon.svg (crop dari public/logo.jpg), robots.txt (generated), manifest.webmanifest
│  ├─ logo.jpg (LOCKED, logo final header dan footer, 45KB, jangan diganti)
│  └─ img/img.webp (LOCKED, foto hero heading konsultasi bidan dan bumil, 11KB, jangan diganti)
├─ src/
│  ├─ assets/img/ (artikel-*.avif tambahan, bidan-portrait.avif. Hero dan logo tetap baca dari public agar sesuai file final user)
│  ├─ components/
│  │  ├─ Header.astro, Footer.astro, Hero.astro
│  │  ├─ TopicGrid.astro, StageTimeline.astro, ArticleCards.astro
│  │  ├─ ToolsGrid.astro, CtaBanner.astro, Faq.astro
│  │  ├─ SearchBar.vue, PregnancyCalendar.vue, HplCalculator.vue
│  │  ├─ BmiCalculator.vue, ChecklistPersalinan.vue, ImunisasiTable.vue
│  │  └─ Reveal.astro (wrapper GSAP data-reveal)
│  ├─ content/
│  │  ├─ artikel/*.mdx (kehamilan-trimester-2-nutrisi, kontraksi-persalinan, tali-pusat-bayi, ...)
│  │  └─ tahap/*.md (trimester-1, trimester-2, trimester-3, persiapan-persalinan, nifas, bayi-baru-lahir, anak)
│  ├─ data/
│  │  ├─ topics.ts, stages.ts, tools.ts, fetalGrowth.ts, imunisasi.ts, bidan.ts
│  ├─ layouts/
│  │  ├─ BaseLayout.astro (head, SEO, JSON-LD, header dan footer, init GSAP)
│  │  └─ ArticleLayout.astro (TOC, reviewed-by, related)
│  ├─ pages/
│  │  ├─ index.astro
│  │  ├─ kalender-kehamilan.astro, konsultasi.astro, tentang-bidan.astro
│  │  ├─ kehamilan.astro, persalinan.astro, nifas.astro, neonatus.astro, anak.astro, reproduksi-kb.astro
│  │  ├─ tools/[hpl|imt|checklist-persalinan|imunisasi].astro
│  │  └─ artikel/[...slug].astro
│  ├─ styles/global.css (tailwind v4 @theme tokens plus prose)
│  └─ lib/seo.ts, lib/date.ts (Naegele, usia kehamilan), lib/schema.ts, lib/copyLint.ts
├─ astro.config.mjs, tsconfig.json
└─ plan.md (dokumen ini)
```

Token Tailwind v4 (`global.css`):
```css
@theme {
  --color-plum: #602437;
  --color-berry: #8A2846;
  --color-raspberry: #B9375E;
  --color-blush: #FFCAD4;
  --color-rose: #E05780;
  --color-paper: #FFFCF8;
  --color-cream: #FFF4EC;
  --color-line: #F3E6DD;
  --color-ink: #3D2B30;
  --color-muted: #8A7A7E;
  --color-sage: #7C9D8B;
  --color-sage-dark: #6B8C7A;
  --font-sans: "Plus Jakarta Sans", system-ui, sans-serif;
}
```

`lib/copyLint.ts` (baru, wajib):
- Fungsi `assertNoEmdash(text: string)` yang throw error jika menemukan karakter U+2014. Cek via `text.includes("\\u2014")`.
- Dipakai saat validasi frontmatter MDX dan saat build untuk meta title, description, dan alt.
- Script npm: `"lint:copy": "rg -n \\"\\u2014\\" src content public && echo EMDASH_FOUND && exit 1 || echo COPY_CLEAN"`.

---

## 7. Fase Pengerjaan

**Fase 0: Setup (0.5 hari)**
- Init Astro plus Vue plus Tailwind v4 plus TS strict. Pindah `public/img/*` ke `src/assets/` plus optimasi AVIF. Setup `astro.config.mjs` (site, sitemap, robots, image). Buat `BaseLayout` plus token warna. Tambah script `lint:copy`.

**Fase 1: Beranda persis gambar (1-2 hari)**
- Header, Hero plus search (awal non fungsional lalu Pagefind), TopicGrid (6), StageTimeline (7), ArticleCards (3 dummy MDX), ToolsGrid (5 link), CtaBanner, Footer. GSAP reveal plus header shadow. Cek visual berdampingan dengan referensi. Pastikan nol emdash dan nol emoji.

**Fase 2: Tools kehamilan (2 hari)**
- `lib/date.ts` (Naegele plus usia kehamilan, unit test manual). `PregnancyCalendar.vue` plus `fetalGrowth.ts`. HPL, IMT, Checklist (localStorage), Imunisasi. Print CSS plus share `?hpht=`.

**Fase 3: Pilar plus Artikel plus Tentang Bidan (2 hari)**
- 6 halaman pilar plus template FAQ plus box tanda bahaya. 12 MDX awal plus `[...slug]` plus TOC plus reviewed by. Halaman bidan plus konsultasi (link wa.me).

**Fase 4: SEO plus Performa plus Rilis (1 hari)**
- Semua meta, OG, JSON LD, sitemap, robots, Pagefind, manifest, 404, validasi Rich Results plus PageSpeed. Deploy ke `nurturamom.com`, submit Search Console plus Bing. Final check `rg U+2014` harus nol.

---

## 8. Acceptance Criteria (Definisi Selesai)

1. Visual beranda cocok 95 persen dengan referensi pada 1440px dan 390px (tanpa slider rusak, tanpa overflow horizontal).
2. Lighthouse Mobile: Performance minimal 90, Accessibility minimal 95, SEO 100. JS total maksimal 90KB gz di beranda, maksimal 160KB di halaman tools.
3. Kalender: HPHT `2026-03-10` menghasilkan HPL `2026-12-17`, usia dan trimester benar, progress persen benar, tidak crash untuk input kosong atau masa depan.
4. Tanpa emoji sebagai ikon. Semua ikon Lucide. Tanpa lorem ipsum.
5. Setiap artikel menampilkan `Ditinjau oleh` plus tanggal plus disclaimer medis.
6. `https://nurturamom.com/sitemap-index.xml` valid, semua halaman punya canonical plus OG image 1200x630.
7. `prefers-reduced-motion: reduce` menonaktifkan semua animasi GSAP.
8. Nol karakter emdash di seluruh repo (hasil `rg U+2014` nol). Nol frasa slop dari daftar 1.2. Copy lolos `lint:copy`.

---

## 9. Risiko dan Keputusan

- Foto referensi kemungkinan stok. Ganti dengan foto berlisensi atau foto praktik sendiri sebelum rilis, sertakan atribusi jika perlu.
- GSAP hanya untuk reveal dan parallax ringan. Jika budget JS jebol, fallback ke CSS `animation-timeline: view()` dan hapus GSAP tanpa mengubah markup (via abstraksi `Reveal.astro`).
- Konten medis wajib direview bidan sebelum publish. Draf tanpa review diberi `draft: true`.

---

## 10. Langkah Berikutnya

1. Setujui copy final nama bidan, no. WA konsultasi, dan jadwal praktik.
2. Kumpulkan 12 artikel plus foto asli (atau izinkan pakai stok sementara).
3. Jalankan Fase 0 sampai 1, review visual lawan gambar referensi, lalu lanjut ke tools.
