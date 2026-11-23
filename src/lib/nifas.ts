import { addDays, diffDays } from "./date";

export type DeliveryType = "spontan" | "caesar";

export const NIFAS_DAYS = 42;

export interface LochiaPhase {
  key: "rubra" | "sanguinolenta" | "serosa" | "alba" | "selesai";
  startDay: number;
  endDay: number;
  color: string;
}

export const LOCHIA_PHASES: LochiaPhase[] = [
  { key: "rubra", startDay: 1, endDay: 3, color: "bg-[#B9375E]" },
  { key: "sanguinolenta", startDay: 4, endDay: 7, color: "bg-[#C76A7D]" },
  { key: "serosa", startDay: 8, endDay: 14, color: "bg-[#E4A6B3]" },
  { key: "alba", startDay: 15, endDay: 42, color: "bg-[#EFD0D6]" },
  { key: "selesai", startDay: 43, endDay: 999, color: "bg-[#DCE9E1]" },
];

export function nifasDay(birth: Date, today: Date = new Date()): number {
  return diffDays(birth, today) + 1;
}

export function lochiaPhase(day: number): LochiaPhase {
  return LOCHIA_PHASES.find((p) => day >= p.startDay && day <= p.endDay) ?? LOCHIA_PHASES[LOCHIA_PHASES.length - 1];
}

export interface NifasVisit {
  key: "KF1" | "KF2" | "KF3" | "KF4";
  startDay: number;
  endDay: number;
  start: Date;
  end: Date;
  status: "done" | "now" | "next";
}

/**
 * Indonesian minimum postpartum visit schedule (4 visits):
 * KF1 6-48 hours, KF2 day 3-7, KF3 day 8-28, KF4 day 29-42.
 * Source: Kemenkes RI, Pedoman Pelayanan Antenatal, Persalinan, Nifas,
 * dan Bayi Baru Lahir; Buku KIA.
 */
export function nifasVisits(birth: Date, today: Date = new Date()): NifasVisit[] {
  const defs: { key: NifasVisit["key"]; startDay: number; endDay: number }[] = [
    { key: "KF1", startDay: 1, endDay: 2 },
    { key: "KF2", startDay: 3, endDay: 7 },
    { key: "KF3", startDay: 8, endDay: 28 },
    { key: "KF4", startDay: 29, endDay: 42 },
  ];
  const day = nifasDay(birth, today);
  return defs.map((d) => {
    const start = addDays(birth, d.startDay - 1);
    const end = addDays(birth, d.endDay - 1);
    const status: NifasVisit["status"] = day > d.endDay ? "done" : day >= d.startDay ? "now" : "next";
    return { ...d, start, end, status };
  });
}

export function nifasEnd(birth: Date): Date {
  return addDays(birth, NIFAS_DAYS - 1);
}

export function nifasProgress(day: number): number {
  return Math.min(100, Math.max(0, Math.round((day / NIFAS_DAYS) * 100)));
}

export interface NifasWeekFocus {
  key: "w1" | "w2" | "w34" | "w56";
  startDay: number;
  endDay: number;
}

export const NIFAS_WEEKS: NifasWeekFocus[] = [
  { key: "w1", startDay: 1, endDay: 7 },
  { key: "w2", startDay: 8, endDay: 14 },
  { key: "w34", startDay: 15, endDay: 28 },
  { key: "w56", startDay: 29, endDay: 42 },
];

export function currentWeekFocus(day: number): NifasWeekFocus {
  return NIFAS_WEEKS.find((w) => day >= w.startDay && day <= w.endDay) ?? NIFAS_WEEKS[NIFAS_WEEKS.length - 1];
}
