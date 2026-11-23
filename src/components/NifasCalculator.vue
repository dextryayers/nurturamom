<script setup lang="ts">
import { ref, computed } from "vue";
import { parseISODate, toISODate, fmtDate, diffDays } from "../lib/date";
import { nifasDay, lochiaPhase, nifasVisits, nifasEnd, nifasProgress, currentWeekFocus, NIFAS_DAYS, LOCHIA_PHASES, NIFAS_WEEKS, type DeliveryType } from "../lib/nifas";
import { useLang } from "../i18n/vue";

const { lang, T } = useLang();

const today = new Date();
today.setHours(0, 0, 0, 0);
const todayStr = toISODate(today);

const birth = ref("");
const delivery = ref<DeliveryType>("spontan");
const error = ref("");
const copied = ref(false);

const status = computed(() => {
  error.value = "";
  if (!birth.value) return null;
  const d = parseISODate(birth.value);
  if (!d) {
    error.value = T.value["ncal.errDate"];
    return null;
  }
  if (d.getTime() > today.getTime()) {
    error.value = T.value["ncal.errFuture"];
    return null;
  }
  if (diffDays(d, today) > 365) {
    error.value = T.value["ncal.errOld"];
    return null;
  }
  const day = nifasDay(d, today);
  return {
    birth: d,
    day,
    phase: lochiaPhase(day),
    visits: nifasVisits(d, today),
    end: nifasEnd(d),
    progress: nifasProgress(day),
    week: currentWeekFocus(day),
    done: day > NIFAS_DAYS,
  };
});

const phaseLabel = computed(() => T.value["ncal.phase." + (status.value?.phase.key ?? "rubra")]);
const phaseDesc = computed(() => T.value["ncal.phaseDesc." + (status.value?.phase.key ?? "rubra")]);

const waLink = computed(() => {
  if (!status.value) return "#";
  const s = status.value;
  const text =
    "Catatan nifas saya: persalinan " +
    birth.value +
    ". Hari ke-" +
    s.day +
    " dari 42. Kunjungan nifas berikutnya: " +
    nextVisit.value +
    ". Masa nifas berakhir " +
    fmtDate(s.end, lang.value) +
    ".";
  return "https://wa.me/?text=" + encodeURIComponent(text);
});

const nextVisit = computed(() => {
  if (!status.value) return "-";
  const v = status.value.visits.find((x) => x.status !== "done");
  if (!v) return T.value["ncal.allDone"];
  return v.key + " (" + fmtDate(v.start, lang.value) + " - " + fmtDate(v.end, lang.value) + ")";
});

function salin() {
  const url = new URL(window.location.href);
  if (birth.value) {
    url.searchParams.set("lahir", birth.value);
    url.searchParams.set("jenis", delivery.value);
  }
  navigator.clipboard?.writeText(url.toString()).then(() => {
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000);
  });
}

function cetak() {
  window.print();
}

const dangerKeys = ["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8"];
const caesarKeys = ["c1", "c2", "c3", "c4"];
</script>

<template>
  <div class="card-soft overflow-hidden">
    <div class="border-b border-line bg-cream p-5 sm:p-7">
      <div class="flex flex-wrap items-start justify-between gap-3">
        <div class="max-w-[560px]">
          <p class="eyebrow"><span class="h-1.5 w-1.5 rounded-full bg-raspberry"></span>{{ T["ncal.eyebrow"] }}</p>
          <h2 class="mt-3 text-[20px] font-extrabold tracking-tight text-heading">{{ T["ncal.title"] }}</h2>
          <p class="mt-1 text-[13px] leading-relaxed text-muted">{{ T["ncal.sub"] }}</p>
        </div>
        <div class="flex gap-2 no-print">
          <button type="button" class="chip-nm" @click="salin">{{ copied ? T["ncal.copied"] : T["ncal.copy"] }}</button>
          <button type="button" class="chip-nm" @click="cetak">{{ T["ncal.print"] }}</button>
        </div>
      </div>

      <div class="mt-5 grid gap-4 sm:grid-cols-[1fr_1fr]">
        <div>
          <label for="ncal-birth" class="text-sm font-bold text-heading">{{ T["ncal.birth"] }}</label>
          <input id="ncal-birth" v-model="birth" type="date" :max="todayStr" class="field-nm mt-2" />
        </div>
        <div>
          <p class="text-sm font-bold text-heading">{{ T["ncal.type"] }}</p>
          <div class="mt-2 grid grid-cols-2 gap-2" role="radiogroup" :aria-label="T['ncal.type']">
            <button
              type="button"
              role="radio"
              :aria-checked="delivery === 'spontan'"
              class="rounded-2xl border p-3 text-left transition"
              :class="delivery === 'spontan' ? 'border-raspberry bg-surface shadow-sm' : 'border-line bg-surface/60'"
              @click="delivery = 'spontan'"
            >
              <span class="block text-[13px] font-bold text-heading">{{ T["ncal.spontan"] }}</span>
              <span class="mt-0.5 block text-[11px] leading-snug text-muted">{{ T["ncal.spontanHint"] }}</span>
            </button>
            <button
              type="button"
              role="radio"
              :aria-checked="delivery === 'caesar'"
              class="rounded-2xl border p-3 text-left transition"
              :class="delivery === 'caesar' ? 'border-raspberry bg-surface shadow-sm' : 'border-line bg-surface/60'"
              @click="delivery = 'caesar'"
            >
              <span class="block text-[13px] font-bold text-heading">{{ T["ncal.caesar"] }}</span>
              <span class="mt-0.5 block text-[11px] leading-snug text-muted">{{ T["ncal.caesarHint"] }}</span>
            </button>
          </div>
        </div>
      </div>
      <p class="mt-3 max-w-[640px] text-xs leading-relaxed text-muted">{{ T["ncal.hint"] }}</p>
      <p v-if="error" class="mt-3 rounded-2xl bg-blush/40 p-3 text-xs font-semibold leading-relaxed text-berry">{{ error }}</p>
    </div>

    <div v-if="!status" class="grid place-items-center p-10 text-center sm:p-14">
      <div>
        <p class="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-cream text-xl font-extrabold text-raspberry">?</p>
        <p class="mt-4 text-[15px] font-bold text-heading">{{ T["ncal.emptyT"] }}</p>
        <p class="mx-auto mt-1 max-w-[380px] text-[13px] leading-relaxed text-muted">{{ T["ncal.emptyS"] }}</p>
      </div>
    </div>

    <div v-else class="p-5 sm:p-7">
      <div class="grid gap-3 sm:grid-cols-3">
        <div class="rounded-2xl bg-plum p-5 text-white">
          <p class="text-[11px] font-bold uppercase tracking-wide text-white/70">{{ T["ncal.dayLabel"] }}</p>
          <p class="mt-1 text-[28px] font-extrabold leading-none">{{ Math.min(status.day, NIFAS_DAYS) }}<span class="text-sm font-bold"> / {{ NIFAS_DAYS }}</span></p>
          <p class="mt-2 text-xs text-white/80">{{ status.done ? T["ncal.finished"] : T["ncal.dayLeft"].replace("{n}", String(NIFAS_DAYS - status.day)) }}</p>
          <div class="mt-3 h-2 overflow-hidden rounded-full bg-white/20">
            <div class="h-full rounded-full bg-blush" :style="{ width: status.progress + '%' }"></div>
          </div>
        </div>
        <div class="rounded-2xl border border-line bg-cream p-5">
          <p class="text-[11px] font-bold uppercase tracking-wide text-muted">{{ T["ncal.phaseLabel"] }}</p>
          <p class="mt-1 inline-block rounded-full bg-surface px-2.5 py-1 text-[11px] font-bold text-heading">{{ phaseLabel }}</p>
          <p class="mt-2 text-xs leading-relaxed text-ink/80">{{ phaseDesc }}</p>
        </div>
        <div class="rounded-2xl bg-sagepale p-5">
          <p class="text-[11px] font-bold uppercase tracking-wide text-pine">{{ T["ncal.endLabel"] }}</p>
          <p class="mt-1 text-[18px] font-extrabold leading-snug text-forest">{{ fmtDate(status.end, lang) }}</p>
          <p class="mt-1 text-xs leading-relaxed text-forest/80">{{ T["ncal.nextVisit"] }}: {{ nextVisit }}</p>
        </div>
      </div>

      <div class="mt-6">
        <div class="flex flex-wrap items-end justify-between gap-2">
          <p class="text-sm font-bold text-heading">{{ T["ncal.lochiaT"] }}</p>
          <p class="text-[11px] text-muted">{{ T["ncal.lochiaNote"] }}</p>
        </div>
        <div class="mt-3 grid grid-cols-4 gap-1.5">
          <div
            v-for="p in LOCHIA_PHASES.slice(0, 4)"
            :key="p.key"
            class="rounded-xl border p-2.5 text-center transition"
            :class="status.phase.key === p.key ? 'border-raspberry bg-surface shadow-sm' : 'border-line bg-surface/60'"
          >
            <span class="mx-auto block h-2 w-8 rounded-full" :class="p.color"></span>
            <span class="mt-1.5 block text-[10.5px] font-bold leading-tight text-heading">{{ T["ncal.phase." + p.key] }}</span>
            <span class="mt-0.5 block text-[10px] text-muted">{{ T["ncal.day"] }} {{ p.startDay }}-{{ p.endDay }}</span>
          </div>
        </div>
      </div>

      <div class="mt-6 overflow-hidden rounded-2xl border border-line">
        <div class="flex flex-wrap items-center justify-between gap-2 border-b border-line bg-cream px-4 py-3">
          <p class="text-sm font-bold text-heading">{{ T["ncal.visitsT"] }}</p>
          <span class="text-[11px] font-semibold text-muted">{{ T["ncal.visitsNote"] }}</span>
        </div>
        <div class="divide-y divide-line">
          <div v-for="v in status.visits" :key="v.key" class="flex flex-wrap items-center gap-3 p-4">
            <span
              class="grid h-9 w-9 shrink-0 place-items-center rounded-full text-[11px] font-extrabold"
              :class="v.status === 'done' ? 'bg-sagepale text-forest' : v.status === 'now' ? 'bg-raspberrysolid text-white' : 'bg-cream text-muted'"
            >{{ v.key }}</span>
            <div class="min-w-0 flex-1">
              <p class="text-[13px] font-bold text-heading">{{ T["ncal." + v.key] }}</p>
              <p class="text-[11.5px] text-muted">{{ fmtDate(v.start, lang) }} - {{ fmtDate(v.end, lang) }}</p>
            </div>
            <span
              class="rounded-full px-2.5 py-1 text-[10.5px] font-bold"
              :class="v.status === 'done' ? 'bg-sagepale text-forest' : v.status === 'now' ? 'bg-blush text-heading' : 'bg-cream text-muted'"
            >{{ T["ncal.status." + v.status] }}</span>
          </div>
        </div>
      </div>

      <div class="mt-6">
        <p class="text-sm font-bold text-heading">{{ T["ncal.focusT"] }}</p>
        <div class="mt-3 grid gap-2 sm:grid-cols-2">
          <div
            v-for="w in NIFAS_WEEKS"
            :key="w.key"
            class="rounded-2xl border p-4 transition"
            :class="status.week.key === w.key ? 'border-raspberry bg-surface shadow-sm' : 'border-line bg-surface/60'"
          >
            <p class="text-[12px] font-extrabold text-heading">{{ T["ncal.focus." + w.key] }}</p>
            <p class="mt-1 text-[12.5px] leading-relaxed text-ink/80">{{ T["ncal.focusDesc." + w.key] }}</p>
          </div>
        </div>
      </div>

      <div v-if="delivery === 'caesar'" class="mt-6 rounded-2xl border border-line bg-cream p-4">
        <p class="text-sm font-bold text-heading">{{ T["ncal.caesarT"] }}</p>
        <ul class="mt-2 space-y-1.5">
          <li v-for="k in caesarKeys" :key="k" class="flex gap-2 text-[12.5px] leading-relaxed text-ink/85">
            <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-raspberry"></span>
            <span>{{ T["ncal.caesar." + k] }}</span>
          </li>
        </ul>
      </div>

      <div class="mt-6 rounded-2xl border border-line bg-blush/20 p-4">
        <p class="flex items-center gap-2 text-sm font-bold text-heading">
          <span class="grid h-5 w-5 place-items-center rounded-full bg-raspberrysolid text-[10px] text-white">!</span>
          {{ T["ncal.dangerT"] }}
        </p>
        <ul class="mt-2 grid gap-1.5 sm:grid-cols-2">
          <li v-for="k in dangerKeys" :key="k" class="flex gap-2 text-[12.5px] leading-relaxed text-ink/85">
            <span class="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-raspberry"></span>
            <span>{{ T["ncal.danger." + k] }}</span>
          </li>
        </ul>
      </div>

      <div class="mt-4 rounded-2xl border border-line bg-surface p-4">
        <p class="text-sm font-bold text-heading">{{ T["ncal.kbT"] }}</p>
        <p class="mt-1 text-[12.5px] leading-relaxed text-ink/80">{{ T["ncal.kbS"] }}</p>
      </div>

      <div class="mt-4 rounded-2xl border border-line bg-cream p-4">
        <p class="text-[13px] font-bold text-heading">{{ T["ncal.noteT"] }}</p>
        <p class="mt-1 text-xs leading-relaxed text-muted">{{ T["ncal.noteS"] }}</p>
      </div>

      <div class="mt-5 flex flex-col gap-2.5 no-print sm:flex-row">
        <a :href="waLink" target="_blank" rel="noopener" class="btn-sage w-full sm:w-auto">{{ T["ncal.share"] }}</a>
        <a href="/nifas" class="btn-outline w-full sm:w-auto">{{ T["ncal.openGuide"] }}</a>
        <a href="/tools/kalkulator-haid" class="btn-outline w-full sm:w-auto">{{ T["ncal.openHaid"] }}</a>
      </div>
    </div>
  </div>
</template>
