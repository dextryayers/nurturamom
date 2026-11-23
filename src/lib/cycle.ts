import { addDays, diffDays, toISODate } from "./date";

export const MIN_CYCLE = 21;
export const MAX_CYCLE = 45;
export const MIN_PERIOD = 2;
export const MAX_PERIOD = 10;
export const LUTEAL_DAYS = 14;

export function clampCycle(n: number): number {
  if (!Number.isFinite(n)) return 28;
  return Math.min(MAX_CYCLE, Math.max(MIN_CYCLE, Math.round(n)));
}

export function clampPeriod(n: number): number {
  if (!Number.isFinite(n)) return 5;
  return Math.min(MAX_PERIOD, Math.max(MIN_PERIOD, Math.round(n)));
}

export interface CycleWindow {
  start: Date;
  cycleEnd: Date;
  ovulation: Date;
  fertileStart: Date;
  fertileEnd: Date;
  index: number;
}

/**
 * Ovulation is estimated from the next period minus a 14 day luteal phase.
 * This is the same arithmetic used by ACOG's ovulation guidance. It assumes a
 * regular cycle and is an estimate, not a diagnosis and not contraception.
 */
export function cycleWindow(start: Date, cycleLength: number, index = 0): CycleWindow {
  const len = clampCycle(cycleLength);
  const periodStart = addDays(start, len * index);
  const nextStart = addDays(periodStart, len);
  const ovulation = addDays(nextStart, -LUTEAL_DAYS);
  return {
    start: periodStart,
    cycleEnd: addDays(periodStart, len - 1),
    ovulation,
    fertileStart: addDays(ovulation, -5),
    fertileEnd: addDays(ovulation, 1),
    index,
  };
}

export interface CycleStatus {
  currentStart: Date;
  nextStart: Date;
  cycleDay: number;
  cycleLength: number;
  periodLength: number;
  ovulation: Date;
  fertileStart: Date;
  fertileEnd: Date;
  phase: "menstrual" | "follicular" | "ovulation" | "luteal";
  daysToNextPeriod: number;
  upcomingOvulation: Date;
  upcomingFertileStart: Date;
  upcomingFertileEnd: Date;
}

export function cycleStatus(
  lastPeriod: Date,
  cycleLength: number,
  periodLength: number,
  today: Date = new Date()
): CycleStatus {
  const len = clampCycle(cycleLength);
  const plen = clampPeriod(periodLength);
  const daysSince = Math.max(0, diffDays(lastPeriod, today));
  const cyclesPassed = Math.floor(daysSince / len);
  const currentStart = addDays(lastPeriod, cyclesPassed * len);
  const cycleDay = diffDays(currentStart, today) + 1;
  const nextStart = addDays(currentStart, len);
  const ovulation = addDays(nextStart, -LUTEAL_DAYS);
  const fertileStart = addDays(ovulation, -5);
  const fertileEnd = addDays(ovulation, 1);
  const ovulationDay = diffDays(currentStart, ovulation) + 1;

  let phase: CycleStatus["phase"] = "luteal";
  if (cycleDay <= plen) phase = "menstrual";
  else if (cycleDay < ovulationDay - 1) phase = "follicular";
  else if (cycleDay <= ovulationDay + 1) phase = "ovulation";

  const upcoming = cycleDay > ovulationDay + 1 ? cycleWindow(lastPeriod, len, cyclesPassed + 1) : cycleWindow(lastPeriod, len, cyclesPassed);

  return {
    currentStart,
    nextStart,
    cycleDay,
    cycleLength: len,
    periodLength: plen,
    ovulation,
    fertileStart,
    fertileEnd,
    phase,
    daysToNextPeriod: Math.max(0, diffDays(today, nextStart)),
    upcomingOvulation: upcoming.ovulation,
    upcomingFertileStart: upcoming.fertileStart,
    upcomingFertileEnd: upcoming.fertileEnd,
  };
}

export interface CycleMonthDay {
  date: Date;
  iso: string;
  day: number;
  inMonth: boolean;
  isToday: boolean;
  isPeriod: boolean;
  isFertile: boolean;
  isOvulation: boolean;
  isPredicted: boolean;
}

export interface CycleMonth {
  year: number;
  month: number;
  label: string;
  days: (CycleMonthDay | null)[];
}

export function cycleMonths(
  lastPeriod: Date,
  cycleLength: number,
  periodLength: number,
  today: Date,
  locale: "id" | "en",
  count = 3
): CycleMonth[] {
  const len = clampCycle(cycleLength);
  const plen = clampPeriod(periodLength);
  const months: CycleMonth[] = [];
  const monthNames =
    locale === "en"
      ? ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      : ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  for (let m = 0; m < count; m++) {
    const base = new Date(today.getFullYear(), today.getMonth() + m, 1);
    const year = base.getFullYear();
    const month = base.getMonth();
    const first = new Date(year, month, 1);
    const offset = (first.getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells: (CycleMonthDay | null)[] = [];
    for (let i = 0; i < offset; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      const diff = diffDays(lastPeriod, date);
      let isPeriod = false;
      let isFertile = false;
      let isOvulation = false;
      if (diff >= 0) {
        const dayInCycle = (diff % len) + 1;
        isPeriod = dayInCycle <= plen;
        const ovulationDay = len - LUTEAL_DAYS + 1;
        isOvulation = dayInCycle === ovulationDay;
        isFertile = dayInCycle >= ovulationDay - 5 && dayInCycle <= ovulationDay + 1;
      }
      cells.push({
        date,
        iso: toISODate(date),
        day: d,
        inMonth: true,
        isToday: toISODate(date) === toISODate(today),
        isPeriod,
        isFertile,
        isOvulation,
        isPredicted: diff >= 0,
      });
    }
    months.push({ year, month, label: monthNames[month] + " " + year, days: cells });
  }
  return months;
}

export function phaseKey(phase: CycleStatus["phase"]): string {
  return "mcal.phase." + phase;
}
