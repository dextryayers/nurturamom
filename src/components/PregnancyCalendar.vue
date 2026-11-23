<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import { parseISODate, hitungHPL, hitungUsia, hitungPembuahan, rentangLahirNormal, clampSiklus, fmtDate, toISODate, diffDays } from "../lib/date";
import { fetalGrowth, getWeekInfo } from "../data/fetalGrowth";
import { useLang } from "../i18n/vue";

const props = defineProps<{ initialHpht?: string; initialSiklus?: number }>();
const { lang, T } = useLang();

const hpht = ref(props.initialHpht ?? "");
const siklus = ref(props.initialSiklus ?? 28);
const error = ref("");
const lihatMinggu = ref<number | null>(null);
const disalin = ref(false);
const todayStr = toISODate(new Date());

const siklusFix = computed(() => clampSiklus(Number(siklus.value) || 28));
const parsed = computed(() => (hpht.value ? parseISODate(hpht.value) : null));

const hasil = computed(() => {
  error.value = "";
  if (!hpht.value) return null;
  const d = parsed.value;
  if (!d) {
    error.value = T.value["cal.errF"];
    return null;
  }
  const now = new Date();
  if (d.getTime() > now.getTime()) {
    error.value = T.value["cal.errFut"];
    return null;
  }
  const usia = hitungUsia(d, now);
  if (usia.totalHari > 294 + (siklusFix.value - 28)) {
    error.value = T.value["cal.errOld"];
    return null;
  }
  const hpl = hitungHPL(d, siklusFix.value);
  const sisa = Math.max(0, diffDays(now, hpl));
  const sisaMinggu = Math.ceil(sisa / 7);
  const buahHati = hitungPembuahan(d, siklusFix.value);
  const rentang = rentangLahirNormal(d, siklusFix.value);
  return { usia, hpl, sisa, sisaMinggu, buahHati, rentang };
});

watch(
  () => hasil.value?.usia.minggu,
  (m) => {
    if (typeof m === "number") lihatMinggu.value = Math.max(4, Math.min(42, m === 0 ? 4 : m));
  },
  { immediate: true }
);

const infoAktif = computed(() => {
  const w = lihatMinggu.value ?? hasil.value?.usia.minggu ?? 12;
  return getWeekInfo(Math.max(4, Math.min(42, w === 0 ? 4 : w)));
});

const trimesterWarna = computed(() => {
  const t = hasil.value?.usia.trimester ?? 1;
  if (t === 1) return "bg-blush/50 text-berry";
  if (t === 2) return "bg-sagepale text-forest";
  return "bg-plum text-white";
});

const waLink = computed(() => {
  if (!hasil.value || !hpht.value) return "#";
  const h = hasil.value;
  const teks = "Halo, ini hasil kalender kehamilan saya. HPHT " + hpht.value + " (siklus " + siklusFix.value + " hari). Usia " + h.usia.minggu + " minggu " + h.usia.hari + " hari. HPL " + fmtDate(h.hpl, lang.value) + ".";
  return "https://wa.me/?text=" + encodeURIComponent(teks);
});

const shareLink = computed(() => {
  if (!hpht.value) return "https://nurturamom.com/kalender-kehamilan";
  return "https://nurturamom.com/kalender-kehamilan?hpht=" + hpht.value + "&siklus=" + siklusFix.value;
});

function salinTautan() {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(shareLink.value).then(() => {
      disalin.value = true;
      setTimeout(() => (disalin.value = false), 2000);
    });
  }
}

function cetak() {
  window.print();
}

function geserMinggu(n: number) {
  const w = (lihatMinggu.value ?? 12) + n;
  lihatMinggu.value = Math.max(4, Math.min(42, w));
}

onMounted(() => {
  const q = new URLSearchParams(window.location.search);
  const h = q.get("hpht");
  const s = q.get("siklus");
  if (h && !hpht.value) hpht.value = h;
  if (s && !props.initialSiklus) siklus.value = clampSiklus(Number(s) || 28);
});
</script>

<template>
  <div class="card-soft overflow-hidden">
    <div class="border-b border-line bg-cream p-5 sm:p-7">
      <div class="grid gap-4 md:grid-cols-[1fr_1fr_auto] md:items-end">
        <div class="min-w-0">
          <label for="hpht" class="text-sm font-bold text-heading">{{ T["cal.hpht"] }}</label>
          <input
            id="hpht"
            v-model="hpht"
            type="date"
            :max="todayStr"
            class="field-nm mt-2"
          />
        </div>
        <div class="md:max-w-[150px]">
          <label for="siklus" class="text-sm font-bold text-heading">{{ T["cal.cycle"] }}</label>
          <div class="mt-2 flex items-center gap-2">
            <input
              id="siklus"
              v-model.number="siklus"
              type="number"
              min="21"
              max="45"
              inputmode="numeric"
              class="field-nm"
            />
          </div>
        </div>
        <div class="flex gap-2 no-print">
          <button
            type="button"
            @click="salinTautan"
            class="flex-1 whitespace-nowrap rounded-full border border-line bg-surface px-4 py-2.5 text-xs font-semibold text-ink transition hover:border-raspberry sm:flex-none"
          >
            {{ disalin ? T["cal.copied"] : T["cal.copy"] }}
          </button>
          <button
            type="button"
            @click="cetak"
            class="flex-1 whitespace-nowrap rounded-full border border-line bg-surface px-4 py-2.5 text-xs font-semibold text-ink transition hover:border-raspberry sm:flex-none"
          >
            {{ T["cal.print"] }}
          </button>
        </div>
      </div>
      <p class="mt-2.5 max-w-[560px] text-xs leading-relaxed text-muted">
        {{ T["cal.hint"] }}
      </p>
      <p v-if="error" class="mt-3 rounded-2xl bg-blush/40 p-3 text-xs leading-relaxed text-berry">
        {{ error }}
      </p>
    </div>

    <div v-if="!hasil" class="grid place-items-center p-10 text-center sm:p-14">
      <div>
        <p class="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-cream text-xl font-extrabold text-raspberry">?</p>
        <p class="mt-4 text-[15px] font-bold text-heading">{{ T["cal.emptyT"] }}</p>
        <p class="mx-auto mt-1 max-w-[360px] text-[13px] leading-relaxed text-muted">
          {{ T["cal.emptyS"] }}
        </p>
      </div>
    </div>

    <div v-else class="p-5 sm:p-7">
      <div class="grid gap-3 sm:grid-cols-3">
        <div class="rounded-2xl bg-plum p-5 text-white">
          <p class="text-[11px] font-bold uppercase tracking-wide text-white/70">{{ T["cal.age"] }}</p>
          <p class="mt-1 text-[26px] font-extrabold leading-none">{{ hasil.usia.minggu }}<span class="text-sm font-bold"> {{ T["cal.mg"] }}</span> {{ hasil.usia.hari }}<span class="text-sm font-bold"> {{ T["cal.hr"] }}</span></p>
          <p class="mt-2 inline-block rounded-full px-2.5 py-1 text-[11px] font-bold" :class="trimesterWarna">{{ T["cal.tri"] }} {{ hasil.usia.trimester }}</p>
        </div>
        <div class="rounded-2xl bg-cream p-5">
          <p class="text-[11px] font-bold uppercase tracking-wide text-muted">{{ T["cal.hpl"] }}</p>
          <p class="mt-1 text-[19px] font-extrabold leading-snug text-heading">{{ fmtDate(hasil.hpl, lang) }}</p>
          <p class="mt-1 text-xs font-semibold text-raspberry">{{ hasil.sisa }} {{ T["cal.left"] }} ({{ hasil.sisaMinggu }} {{ T["cal.weeks"] }})</p>
        </div>
        <div class="rounded-2xl bg-sagepale p-5">
          <p class="text-[11px] font-bold uppercase tracking-wide text-pine">{{ T["cal.size"] }}</p>
          <p class="mt-1 text-[19px] font-extrabold leading-snug text-forest">{{ lang === "en" ? infoAktif.sizeEn : "Sebesar " + infoAktif.size }}</p>
          <p class="mt-1 text-xs text-forest/70">{{ infoAktif.length }}, {{ infoAktif.weight }}</p>
        </div>
      </div>

      <div class="mt-3 grid gap-3 rounded-2xl border border-line bg-paper p-4 text-[13px] sm:grid-cols-2">
        <p class="text-ink/80"><span class="font-bold text-heading">{{ T["cal.conc"] }}</span> {{ fmtDate(hasil.buahHati, lang) }}</p>
        <p class="text-ink/80"><span class="font-bold text-heading">{{ T["cal.range"] }}</span> {{ fmtDate(hasil.rentang.awal, lang) }} {{ T["cal.until"] }} {{ fmtDate(hasil.rentang.akhir, lang) }}</p>
      </div>

      <div class="mt-4">
        <div class="flex items-center justify-between text-xs text-muted">
          <span>{{ T["cal.prog"] }}</span>
          <span class="font-bold text-heading">{{ hasil.usia.progress }} {{ T["cal.percent"] }}</span>
        </div>
        <div class="mt-1.5 h-2.5 overflow-hidden rounded-full bg-line">
          <div class="h-full rounded-full bg-gradient-to-r from-rose to-raspberry transition-all" :style="{ width: hasil.usia.progress + '%' }"></div>
        </div>
      </div>

      <div class="mt-6 rounded-2xl border border-line">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-paper px-4 py-3">
          <p class="text-sm font-bold text-heading">{{ T["cal.browse"] }}</p>
          <div class="flex w-full items-center gap-2 no-print sm:w-auto">
            <button type="button" @click="geserMinggu(-1)" :disabled="(lihatMinggu ?? 12) <= 4" class="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line bg-surface text-base font-bold transition hover:border-raspberry disabled:opacity-40" :aria-label="T['cal.prev']">‹</button>
            <select v-model.number="lihatMinggu" class="min-w-0 flex-1 rounded-full border border-line bg-surface px-3 py-2 text-xs font-bold text-ink focus:border-raspberry focus:outline-none sm:flex-none" aria-label="Pilih minggu">
              <option v-for="w in fetalGrowth" :key="w.week" :value="w.week">{{ T["cal.week"] }} {{ w.week }}</option>
            </select>
            <button type="button" @click="geserMinggu(1)" :disabled="(lihatMinggu ?? 12) >= 42" class="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line bg-surface text-base font-bold transition hover:border-raspberry disabled:opacity-40" :aria-label="T['cal.next']">›</button>
          </div>
        </div>
        <div class="p-4 sm:p-5">
          <p class="text-[15px] font-bold text-heading">{{ T["cal.week"] }} {{ infoAktif.week }}: {{ lang === "en" ? infoAktif.sizeEn : "sebesar " + infoAktif.size }} ({{ infoAktif.length }}, {{ infoAktif.weight }})</p>
          <p class="mt-2 text-sm leading-relaxed text-ink/80">{{ lang === "en" ? infoAktif.descEn : infoAktif.desc }}</p>
          <div class="mt-3 rounded-xl bg-sagepale/60 p-3.5">
            <p class="text-[13px] leading-relaxed text-forest"><span class="font-bold">{{ T["cal.tip"] }}</span> {{ lang === "en" ? infoAktif.tipsEn : infoAktif.tips }}</p>
          </div>
        </div>
      </div>

      <div class="mt-5 flex flex-col gap-2.5 no-print sm:flex-row">
        <a :href="waLink" target="_blank" rel="noopener" class="btn-sage w-full sm:w-auto">{{ T["cal.share"] }}</a>
        <a href="/tools/checklist-persalinan" class="btn-outline w-full sm:w-auto">{{ T["cal.pack"] }}</a>
      </div>
    </div>
  </div>
</template>
