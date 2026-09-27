export interface SeoProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noindex?: boolean;
}

const SITE = "https://nurturamom.com";

export function canonicalUrl(path = "/"): string {
  const clean = path === "/" ? "/" : path.replace(/\/$/, "");
  return SITE + clean;
}

export function defaultTitle(): string {
  return "NurturaMom: Teman Sehat Ibu dan Anak, Kalender Kehamilan dan Info Bidan";
}

export function defaultDescription(): string {
  return "Informasi kehamilan, persalinan, nifas, dan kesehatan bayi yang ditinjau bidan. Hitung HPL, pantau trimester, dan konsultasi di nurturamom.com.";
}
