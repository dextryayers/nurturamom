export interface SourceLink {
  label: string;
  url: string;
}

const links: Record<string, string> = {
  "Buku Kesehatan Ibu dan Anak (KIA), Kementerian Kesehatan RI.":
    "https://kesprimkom.kemkes.go.id/assets/uploads/contents/others/Buku_KIA_2024.pdf",
  "Buku Saku Pelayanan Kesehatan Ibu di Fasilitas Kesehatan, Kementerian Kesehatan RI.":
    "https://repository.kemkes.go.id/book/122",
  "Buku Saku Pelayanan Kesehatan Neonatal Esensial, Kementerian Kesehatan RI.":
    "https://repository.kemkes.go.id/book/122",
  "Pedoman Pemberian Tablet Tambah Darah, Kementerian Kesehatan RI.":
    "https://ayosehat.kemkes.go.id/buku-pedoman-penatalaksanaan-pemberian-tablet-tambah-darah",
  "Modul Kelas Ibu Hamil, Kementerian Kesehatan RI.":
    "https://repository.kemkes.go.id/book/264",
  "Buku Panduan Asuhan Nifas, Kementerian Kesehatan RI.":
    "https://repository.kemkes.go.id/book/873",
  "Buku Panduan Pelayanan KB, Kementerian Kesehatan RI.":
    "https://repository.kemkes.go.id/book/571",
  "Buku Saku Pelayanan Kesehatan Anak, Kementerian Kesehatan RI.":
    "https://repository.kemkes.go.id/book/122",
  "Modul Konseling Menyusui, Kementerian Kesehatan RI.":
    "https://repository.kemkes.go.id/book/246",
  "Pedoman Kesehatan Gigi Anak, Kementerian Kesehatan RI.":
    "https://keslan.kemkes.go.id/view_artikel/765/jaga-kesehatan-gigi-anak-sejak-dini",
  "Pedoman Pemberian Makan Bayi dan Anak, Kementerian Kesehatan RI.":
    "https://repository.kemkes.go.id/book/319",
  "Pedoman Pengelolaan Diabetes dalam Kehamilan, Kementerian Kesehatan RI.":
    "https://keslan.kemkes.go.id/view_artikel/1017/diabetes-dalam-kehamilan",
  "WHO recommendations on antenatal care for a positive pregnancy experience, 2016.":
    "https://www.who.int/publications/i/item/9789241549912",
  "WHO recommendations: intrapartum care for a positive childbirth experience, 2018.":
    "https://www.who.int/publications/i/item/9789241550390",
  "WHO guide for integration of perinatal mental health, 2022.":
    "https://www.who.int/publications/i/item/9789240048751",
  "WHO Medical eligibility criteria for contraceptive use, 2015.":
    "https://www.who.int/publications/i/item/9789241549158",
  "WHO recommendations for prevention and treatment of pre-eclampsia, 2011.":
    "https://www.who.int/publications/i/item/9789241548335",
  "ACOG, The Menstrual Cycle: Menstruation, Ovulation, and How Pregnancy Happens":
    "https://www.acog.org/womens-health/infographics/the-menstrual-cycle",
  "ACOG, Fertility Awareness-Based Methods of Family Planning":
    "https://www.acog.org/womens-health/faqs/fertility-awareness-based-methods-of-family-planning",
  "NHS, Periods and fertility in the menstrual cycle":
    "https://www.nhs.uk/conditions/periods/fertility-in-the-menstrual-cycle/",
  "Kementerian Kesehatan RI, Pedoman Pelayanan Antenatal, Persalinan, Nifas, dan Bayi Baru Lahir":
    "https://repository.kemkes.go.id/book/873",
  "WHO, Recommendations on maternal and newborn care for a positive postnatal experience (2022)":
    "https://www.who.int/publications/i/item/9789240045989",
  "ACOG, Optimizing Postpartum Care":
    "https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/05/optimizing-postpartum-care",
};

const fallback = "https://kemkes.go.id/id/";

export function toSourceLinks(labels: string[]): SourceLink[] {
  return labels.map((label) => ({ label, url: links[label] ?? fallback }));
}
