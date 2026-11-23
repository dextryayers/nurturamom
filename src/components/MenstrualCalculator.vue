<script setup lang="ts">
import { ref, computed } from "vue";
import { parseISODate, toISODate, fmtDate, diffDays } from "../lib/date";
import { clampCycle, clampPeriod, cycleStatus, cycleWindow, cycleMonths } from "../lib/cycle";
import { useLang } from "../i18n/vue";

const { lang, T } = useLang();

const today = new Date();
today.setHours(0, 0, 0, 0);
const todayStr = toISODate(today);

const lastPeriod = ref("");
const cycleLen = ref(28);
const periodLen = ref(5);
const error = ref("");
const copied = ref(false);

const len = computed(() => clampCycle(Number(cycleLen.value) || 28));
const plen = computed(() => clampPeriod(Number(periodLen.value) || 5));

const status = computed(() => {
  error.value = "";
  if (!lastPeriod.value) return null;
  const d = parseISODate(lastPeriod.value);
  if (!d) {
    error.value = T.value["mcal.errDate"];
    return null;
  }
  if (d.getTime() > today.getTime()) {
    error.value = T.value["mcal.errFuture"];
    return null;
  }
  if (diffDays(d, today) > 400) {
    error.value = T.value["mcal.errOld"];
    return null;
  }
  return cycleStatus(d, len.value, plen.value, today);
});

const predictions = computed(() => {
  if (!status.value) return [];
  return Array.from({ length: 6 }, (_, i) => cycleWindow(status.value!.nextStart, len.value, i));
});

const months = computed(() => {
  const d = parseISODate(lastPeriod.value);
  if (!d || !status.value) return [];
  return cycleMonths(d, len.value, plen.value, today, lang.value, 3);
});

const phaseName = computed(() => T.value["mcal.phase." + (status.value?.phase ?? "luteal")]);
const phaseDesc = computed(() => T.value["mcal.phaseDesc." + (status.value?.phase ?? "luteal")]);
const phaseClass = computed(() => {
  const p = status.value?.phase;
  if (p === "menstrual") return "bg-blush text-heading";
  if (p === "follicular") return "bg-sagepale text-forest";
  if (p === "ovulation") return "bg-raspberrysolid text-white";
  return "bg-cream text-heading";
});

const progress = computed(() => {
  if (!status.value) return 0;
  return Math.min(100, Math.round((status.value.cycleDay / status.value.cycleLength) * 100));
});

const waLink = computed(() => {
  if (!status.value) return "#";
  const s = status.value;
  const text =
    "Kalender haid saya: HPHT " +
    lastPeriod.value +
    ", siklus " +
    s.cycleLength +
    " hari. Haid berikutnya " +
    fmtDate(s.nextStart, lang.value) +
    ". Perkiraan ovulasi " +
    fmtDate(s.upcomingOvulation, lang.value) +
    ".";
  return "https://wa.me/?text=" + encodeURIComponent(text);
});

const weekdays = computed(() =>
  lang.value === "en" ? ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] : ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"]
);

function setCycle(n: number) {
  cycleLen.value = n;
}

function salin() {
  const url = new URL(window.location.href);
  if (lastPeriod.value) {
    url.searchParams.set("hpht", lastPeriod.value);
    url.searchParams.set("siklus", String(len.value));
    url.searchParams.set("haid", String(plen.value));
  }
  navigator.clipboard?.writeText(url.toString()).then(() => {
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000);
  });
}

function cetak() {
  window.print();
}
</script>

<template>
  <div class="card-soft overflow-hidden">
    <div class="border-b border-line bg-cream p-5 sm:p-7">
      <div class="flex flex-wrap items-start justify-between gap-3">
        <div class="max-w-[560px]">
          <p class="eyebrow"><span class="h-1.5 w-1.5 rounded-full bg-raspberry"></span>{{ T["mcal.eyebrow"] }}</p>
          <h2 class="mt-3 text-[20px] font-extrabold tracking-tight text-heading">{{ T["mcal.title"] }}</h2>
          <p class="mt-1 text-[13px] leading-relaxed text-muted">{{ T["mcal.sub"] }}</p>
        </div>
        <div class="flex gap-2 no-print">
          <button type="button" class="chip-nm" @click="salin">{{ copied ? T["mcal.copied"] : T["mcal.copy"] }}</button>
          <button type="button" class="chip-nm" @click="cetak">{{ T["mcal.print"] }}</button>
        </div>
      </div>

      <div class="mt-5 grid gap-4 sm:grid-cols-3">
        <div>
          <label for="mcal-last" class="text-sm font-bold text-heading">{{ T["mcal.last"] }}</label>
          <input id="mcal-last" v-model="lastPeriod" type="date" :max="todayStr" class="field-nm mt-2" />
        </div>
        <div>
          <label for="mcal-cycle" class="text-sm font-bold text-heading">{{ T["mcal.cycle"] }}</label>
          <input id="mcal-cycle" v-model.number="cycleLen" type="number" min="21" max="45" inputmode="numeric" class="field-nm mt-2" />
          <div class="mt-2 flex flex-wrap gap-1.5 no-print">
            <button v-for="n in [21, 26, 28, 30, 35]" :key="n" type="button" class="rounded-full border border-line bg-surface px-2.5 py-1 text-[11px] font-bold transition hover:border-raspberry" :class="len === n ? 'border-raspberry text-raspberry' : 'text-muted'" @click="setCycle(n)">{{ n }}</button>
          </div>
        </div>
        <div>
          <label for="mcal-period" class="text-sm font-bold text-heading">{{ T["mcal.period"] }}</label>
          <input id="mcal-period" v-model.number="periodLen" type="number" min="2" max="10" inputmode="numeric" class="field-nm mt-2" />
          <p class="mt-2 text-[11px] leading-snug text-muted">{{ T["mcal.periodHint"] }}</p>
        </div>
      </div>
      <p class="mt-3 max-w-[640px] text-xs leading-relaxed text-muted">{{ T["mcal.hint"] }}</p>
      <p v-if="error" class="mt-3 rounded-2xl bg-blush/40 p-3 text-xs font-semibold leading-relaxed text-berry">{{ error }}</p>
    </div>

    <div v-if="!status" class="grid place-items-center p-10 text-center sm:p-14">
      <div>
        <p class="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-cream text-xl font-extrabold text-raspberry">?</p>
        <p class="mt-4 text-[15px] font-bold text-heading">{{ T["mcal.emptyT"] }}</p>
        <p class="mx-auto mt-1 max-w-[380px] text-[13px] leading-relaxed text-muted">{{ T["mcal.emptyS"] }}</p>
      </div>
    </div>

    <div v-else class="p-5 sm:p-7">
      <div class="grid gap-3 sm:grid-cols-3">
        <div class="rounded-2xl bg-plum p-5 text-white">
          <p class="text-[11px] font-bold uppercase tracking-wide text-white/70">{{ T["mcal.next"] }}</p>
          <p class="mt-1 text-[24px] font-extrabold leading-tight">{{ fmtDate(status.nextStart, lang) }}</p>
          <p class="mt-2 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-bold">
            {{ status.daysToNextPeriod }} {{ T["mcal.days"] }}
          </p>
        </div>
        <div class="rounded-2xl border border-line bg-cream p-5">
          <p class="text-[11px] font-bold uppercase tracking-wide text-muted">{{ T["mcal.ovulation"] }}</p>
          <p class="mt-1 text-[19px] font-extrabold leading-snug text-heading">{{ fmtDate(status.upcomingOvulation, lang) }}</p>
          <p class="mt-1 text-xs leading-relaxed text-muted">{{ T["mcal.fertile"] }} {{ fmtDate(status.upcomingFertileStart, lang) }} {{ T["mcal.until"] }} {{ fmtDate(status.upcomingFertileEnd, lang) }}</p>
        </div>
        <div class="rounded-2xl bg-sagepale p-5">
          <p class="text-[11px] font-bold uppercase tracking-wide text-pine">{{ T["mcal.phase"] }}</p>
          <p class="mt-1 inline-block rounded-full px-2.5 py-1 text-[11px] font-bold" :class="phaseClass">{{ phaseName }}</p>
          <p class="mt-2 text-xs leading-relaxed text-forest">{{ phaseDesc }}</p>
          <p class="mt-1 text-[11px] font-semibold text-forest/80">{{ T["mcal.cycleDay"] }} {{ status.cycleDay }} / {{ status.cycleLength }}</p>
        </div>
      </div>

      <div class="mt-4">
        <div class="flex items-center justify-between text-xs text-muted">
          <span>{{ T["mcal.progress"] }}</span>
          <span class="font-bold text-heading">{{ status.cycleDay }} / {{ status.cycleLength }}</span>
        </div>
        <div class="mt-1.5 h-2.5 overflow-hidden rounded-full bg-line">
          <div class="h-full rounded-full bg-gradient-to-r from-rose to-raspberry transition-all" :style="{ width: progress + '%' }"></div>
        </div>
        <div class="mt-2 flex flex-wrap gap-3 text-[11px] text-muted">
          <span class="inline-flex items-center gap-1.5"><span class="h-2 w-2 rounded-full bg-raspberrysolid"></span>{{ T["mcal.legend.period"] }}</span>
          <span class="inline-flex items-center gap-1.5"><span class="h-2 w-2 rounded-full bg-rose"></span>{{ T["mcal.legend.fertile"] }}</span>
          <span class="inline-flex items-center gap-1.5"><span class="h-2 w-2 rounded-full bg-sagesolid"></span>{{ T["mcal.legend.ovulation"] }}</span>
        </div>
      </div>

      <div class="mt-6 overflow-hidden rounded-2xl border border-line">
        <div class="flex items-center justify-between gap-3 border-b border-line bg-cream px-4 py-3">
          <p class="text-sm font-bold text-heading">{{ T["mcal.predict"] }}</p>
          <span class="text-[11px] font-semibold text-muted">{{ T["mcal.predictNote"] }}</span>
        </div>
        <div class="overflow-x-auto">
          <table class="table-nm">
            <thead>
              <tr>
                <th>{{ T["mcal.periodStart"] }}</th>
                <th>{{ T["mcal.ovul"] }}</th>
                <th>{{ T["mcal.fertileWin"] }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(p, i) in predictions" :key="i">
                <td class="font-bold text-heading">{{ fmtDate(p.start, lang) }}</td>
                <td>{{ fmtDate(p.ovulation, lang) }}</td>
                <td>{{ fmtDate(p.fertileStart, lang) }} - {{ fmtDate(p.fertileEnd, lang) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="mt-6">
        <div class="flex items-end justify-between gap-3">
          <p class="text-sm font-bold text-heading">{{ T["mcal.calendar"] }}</p>
          <div class="flex flex-wrap gap-2 text-[10.5px] text-muted">
            <span class="inline-flex items-center gap-1"><span class="h-2 w-2 rounded-full bg-raspberrysolid"></span>{{ T["mcal.legend.period"] }}</span>
            <span class="inline-flex items-center gap-1"><span class="h-2 w-2 rounded-full bg-rose"></span>{{ T["mcal.legend.fertile"] }}</span>
            <span class="inline-flex items-center gap-1"><span class="h-2 w-2 rounded-full bg-sagesolid"></span>{{ T["mcal.legend.ovulation"] }}</span>
          </div>
        </div>
        <div class="mt-3 grid gap-4 sm:grid-cols-3">
          <div v-for="m in months" :key="m.label" class="rounded-2xl border border-line bg-surface p-3">
            <p class="text-center text-[12px] font-extrabold text-heading">{{ m.label }}</p>
            <div class="mt-2 grid grid-cols-7 gap-0.5 text-center text-[9px] font-bold uppercase text-muted">
              <span v-for="w in weekdays" :key="w">{{ w }}</span>
            </div>
            <div class="mt-1 grid grid-cols-7 gap-0.5">
              <template v-for="(d, i) in m.days" :key="i">
                <span v-if="!d" class="h-7"></span>
                <span
                  v-else
                  class="grid h-7 place-items-center rounded-lg text-[10.5px] font-semibold"
                  :class="[
                    d.isToday ? 'ring-2 ring-raspberry' : '',
                    d.isOvulation ? 'bg-sagesolid text-white' : d.isFertile ? 'bg-rose/25 text-heading' : d.isPeriod ? 'bg-raspberrysolid text-white' : 'text-ink',
                  ]"
                >{{ d.day }}</span>
              </template>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5 rounded-2xl border border-line bg-cream p-4">
        <p class="text-[13px] font-bold text-heading">{{ T["mcal.noteT"] }}</p>
        <p class="mt-1 text-xs leading-relaxed text-muted">{{ T["mcal.noteS"] }}</p>
      </div>

      <div class="mt-5 flex flex-col gap-2.5 no-print sm:flex-row">
        <a :href="waLink" target="_blank" rel="noopener" class="btn-sage w-full sm:w-auto">{{ T["mcal.share"] }}</a>
        <a href="/tools/kalkulator-nifas" class="btn-outline w-full sm:w-auto">{{ T["mcal.tryNifas"] }}</a>
        <a href="/artikel/siklus-haid-dan-masa-subur" class="btn-outline w-full sm:w-auto">{{ T["mcal.readMore"] }}</a>
      </div>
    </div>
  </div>
</template>
