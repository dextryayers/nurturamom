export const catEn: Record<string, string> = {
  Kehamilan: "Pregnancy",
  Persalinan: "Childbirth",
  Nifas: "Postpartum",
  Neonatus: "Newborn",
  Anak: "Child",
  KB: "Family Planning",
};

export function catName(id: string, lang: string): string {
  if (lang === "en") return catEn[id] ?? id;
  return id;
}
