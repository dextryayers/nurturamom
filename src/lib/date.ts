export function parseISODate(s: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return null;
  const d = new Date(s + "T00:00:00");
  if (Number.isNaN(d.getTime())) return null;
  return d;
}

export function toISODate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return y + "-" + m + "-" + day;
}

export function addDays(d: Date, n: number): Date {
  const c = new Date(d);
  c.setDate(c.getDate() + n);
  return c;
}

export function diffDays(a: Date, b: Date): number {
  const ms = b.getTime() - a.getTime();
  return Math.floor(ms / 86400000);
}

export function clampSiklus(n: number): number {
  if (Number.isNaN(n)) return 28;
  return Math.min(45, Math.max(21, Math.round(n)));
}

export function hitungHPL(hpht: Date, siklus = 28): Date {
  const s = clampSiklus(siklus);
  const c = new Date(hpht);
  c.setDate(c.getDate() + 7);
  c.setMonth(c.getMonth() - 3);
  c.setFullYear(c.getFullYear() + 1);
  const koreksi = s - 28;
  if (koreksi !== 0) c.setDate(c.getDate() + koreksi);
  return c;
}

export function hitungPembuahan(hpht: Date, siklus = 28): Date {
  const s = clampSiklus(siklus);
  return addDays(hpht, s - 14);
}

export interface RentangLahir {
  awal: Date;
  akhir: Date;
}

export function rentangLahirNormal(hpht: Date, siklus = 28): RentangLahir {
  const offset = clampSiklus(siklus) - 28;
  return { awal: addDays(hpht, 259 + offset), akhir: addDays(hpht, 293 + offset) };
}

export interface UsiaHamil {
  minggu: number;
  hari: number;
  totalHari: number;
  trimester: 1 | 2 | 3;
  progress: number;
}

export function hitungUsia(hpht: Date, today: Date = new Date()): UsiaHamil {
  const t0 = new Date(hpht);
  t0.setHours(0, 0, 0, 0);
  const t1 = new Date(today);
  t1.setHours(0, 0, 0, 0);
  const total = Math.max(0, diffDays(t0, t1));
  const minggu = Math.floor(total / 7);
  const hari = total % 7;
  const trimester: 1 | 2 | 3 = minggu < 13 ? 1 : minggu < 28 ? 2 : 3;
  const progress = Math.min(100, Math.round((total / 280) * 100));
  return { minggu, hari, totalHari: total, trimester, progress };
}

export function formatID(d: Date): string {
  return d.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}

export function formatEN(d: Date): string {
  return d.toLocaleDateString("en-US", { day: "numeric", month: "long", year: "numeric" });
}

export function fmtDate(d: Date, lang: string): string {
  return lang === "en" ? formatEN(d) : formatID(d);
}

export function hitungIMT(beratKg: number, tinggiCm: number): number {
  const m = tinggiCm / 100;
  if (m <= 0) return 0;
  return beratKg / (m * m);
}

export function kategoriIMT(n: number): string {
  if (n <= 0) return "Belum dihitung";
  if (n < 18.5) return "Berat kurang";
  if (n < 25) return "Normal";
  if (n < 30) return "Berat lebih";
  return "Obesitas";
}

export interface TargetBB {
  min: number;
  max: number;
  laju: string;
}

export function targetKenaikanBB(imt: number): TargetBB {
  if (imt < 18.5) return { min: 12.5, max: 18, laju: "0,4 sampai 0,6 kg per minggu" };
  if (imt < 25) return { min: 11.5, max: 16, laju: "0,35 sampai 0,5 kg per minggu" };
  if (imt < 30) return { min: 7, max: 11.5, laju: "0,2 sampai 0,3 kg per minggu" };
  return { min: 5, max: 9, laju: "0,15 sampai 0,25 kg per minggu" };
}

export function beratIdealRange(tinggiCm: number): { min: number; max: number } {
  const m = tinggiCm / 100;
  return { min: Math.round(18.5 * m * m * 10) / 10, max: Math.round(24.9 * m * m * 10) / 10 };
}

export function addMonths(d: Date, n: number): Date {
  const c = new Date(d);
  const day = c.getDate();
  c.setMonth(c.getMonth() + n);
  if (c.getDate() < day) c.setDate(0);
  return c;
}

export function umurBulan(tglLahir: Date, today: Date = new Date()): number {  const a = new Date(tglLahir);
  a.setHours(0, 0, 0, 0);
  const b = new Date(today);
  b.setHours(0, 0, 0, 0);
  let bulan = (b.getFullYear() - a.getFullYear()) * 12 + (b.getMonth() - a.getMonth());
  if (b.getDate() < a.getDate()) bulan -= 1;
  return Math.max(0, bulan);
}
