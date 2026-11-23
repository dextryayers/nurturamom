<script setup lang="ts">
import { ref, computed } from "vue";
import { imunisasi } from "../data/imunisasi";
import { parseISODate, addMonths, umurBulan, fmtDate, toISODate, diffDays } from "../lib/date";
import { useLang } from "../i18n/vue";

const { lang, T } = useLang();

const lahir = ref("");
const todayStr = toISODate(new Date());

const tglLahir = computed(() => (lahir.value ? parseISODate(lahir.value) : null));

const usiaAnak = computed(() => (tglLahir.value ? umurBulan(tglLahir.value) : null));

interface Baris {
  usia: string;
  target: Date | null;
  status: "ok" | "now" | "late" | "";
  vaksin: string[];
  catatan: string;
}

const baris = computed<Baris[]>(() => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return imunisasi.map((r) => {
    if (!tglLahir.value) {
      return { usia: r.usia, target: null, status: "" as const, vaksin: r.vaksin, catatan: lang.value === "en" ? r.catatanEn : r.catatan };
    }
    const target = addMonths(tglLahir.value, r.bulan);
    const selisih = diffDays(target, now);
    const status = selisih > 30 ? "ok" : selisih >= -30 ? "now" : "late";
    return { usia: r.usia, target, status: status as Baris["status"], vaksin: r.vaksin, catatan: lang.value === "en" ? r.catatanEn : r.catatan };
  });
});

const berikutnya = computed(() => baris.value.find((b) => b.status === "now" || b.status === "ok") ?? null);

function chipClass(s: string): string {
  if (s === "now") return "bg-raspberrysolid text-white";
  if (s === "late") return "bg-berrysolid text-white";
  return "bg-sagepale text-forest";
}

function chipText(s: string): string {
  if (s === "now") return T.value["imuc.stNow"];
  if (s === "late") return T.value["imuc.stLate"];
  return T.value["imuc.stOk"];
}
</script>

<template>
  <div class="card-soft overflow-hidden">
    <div class="grid gap-3 border-b border-line bg-cream p-5 sm:grid-cols-[1fr_auto] sm:items-end sm:p-6">
      <div class="min-w-0">
        <label for="tgl-lahir" class="text-sm font-bold text-heading">{{ T["imuc.birth"] }}</label>
        <input
          id="tgl-lahir"
          v-model="lahir"
          type="date"
          :max="todayStr"
          class="field-nm mt-2 max-w-[280px]"
        />
        <p class="mt-1.5 text-xs text-muted">{{ T["imuc.pick"] }}</p>
      </div>
      <div v-if="usiaAnak !== null" class="rounded-2xl bg-surface px-4 py-2.5 text-sm ring-1 ring-line">
        <span class="text-xs text-muted">{{ T["imuc.ageNow"] }}: </span>
        <span class="font-extrabold text-heading">{{ usiaAnak }} {{ T["imuc.mo"] }}</span>
      </div>
    </div>

    <div v-if="berikutnya && berikutnya.target" class="border-b border-line bg-sagepale/50 px-5 py-3 text-[13px] sm:px-6">
      <span class="font-bold text-forest">{{ T["imuc.next"] }}: </span>
      <span class="text-forest/80">{{ berikutnya.usia }} ({{ fmtDate(berikutnya.target, lang) }})</span>
    </div>

    <div class="hidden overflow-x-auto md:block">
      <table class="w-full min-w-[720px] text-left text-[13px]">
        <thead>
          <tr class="bg-cream text-heading">
            <th class="px-5 py-3 text-xs font-bold uppercase tracking-wide">{{ T["imuc.age"] }}</th>
            <th class="px-5 py-3 text-xs font-bold uppercase tracking-wide">{{ T["imuc.due"] }}</th>
            <th class="px-5 py-3 text-xs font-bold uppercase tracking-wide">Status</th>
            <th class="px-5 py-3 text-xs font-bold uppercase tracking-wide">{{ T["imuc.vac"] }}</th>
            <th class="px-5 py-3 text-xs font-bold uppercase tracking-wide">{{ T["imuc.noteC"] }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in baris" :key="r.usia" class="border-t border-line">
            <td class="whitespace-nowrap px-5 py-3 font-bold text-heading">{{ lang === "en" ? r.usiaEn : r.usia }}</td>
            <td class="whitespace-nowrap px-5 py-3 text-ink">{{ r.target ? fmtDate(r.target, lang) : "-" }}</td>
            <td class="px-5 py-3">
              <span v-if="r.status" class="inline-block whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-bold" :class="chipClass(r.status)">{{ chipText(r.status) }}</span>
              <span v-else class="text-muted">-</span>
            </td>
            <td class="px-5 py-3 text-ink">
              <span
                v-for="v in r.vaksin"
                :key="v"
                class="mr-1.5 mt-1 inline-block whitespace-nowrap rounded-full bg-sagepale px-2.5 py-1 text-[11px] font-semibold text-forest"
              >
                {{ v }}
              </span>
            </td>
            <td class="px-5 py-3 text-muted">{{ r.catatan }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="space-y-3 p-4 md:hidden">
      <div v-for="r in baris" :key="r.usia" class="rounded-2xl border border-line bg-surface p-4">
        <div class="flex items-center justify-between gap-2">
          <p class="text-sm font-extrabold text-heading">{{ lang === "en" ? r.usiaEn : r.usia }}</p>
          <span v-if="r.status" class="whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-bold" :class="chipClass(r.status)">{{ chipText(r.status) }}</span>
        </div>
        <p v-if="r.target" class="mt-1 text-xs text-muted">{{ T["imuc.due"] }}: <span class="font-bold text-heading">{{ fmtDate(r.target, lang) }}</span></p>
        <div class="mt-2 flex flex-wrap gap-1.5">
          <span
            v-for="v in r.vaksin"
            :key="v"
            class="rounded-full bg-sagepale px-2.5 py-1 text-[11px] font-semibold text-forest"
          >
            {{ v }}
          </span>
        </div>
        <p class="mt-2 text-xs leading-relaxed text-muted">{{ r.catatan }}</p>
      </div>
    </div>

    <p class="border-t border-line bg-paper px-5 py-3 text-xs leading-relaxed text-muted">
      {{ T["imuc.foot"] }}
    </p>
  </div>
</template>
