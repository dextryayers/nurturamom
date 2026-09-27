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

export function hitungHPL(hpht: Date): Date {
  const c = new Date(hpht);
  c.setDate(c.getDate() + 7);
  c.setMonth(c.getMonth() - 3);
  c.setFullYear(c.getFullYear() + 1);
  return c;
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
