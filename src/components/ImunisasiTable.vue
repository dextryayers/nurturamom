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
  if (s === "now") return "bg-[#9C3D5C] text-white";
  if (s === "late") return "bg-[#76304A] text-white";
  return "bg-[#DCE9E1] text-[#2F3A34]";
}

function chipText(s: string): string {
  if (s === "now") return T.value["imuc.stNow"];
  if (s === "late") return T.value["imuc.stLate"];
  return T.value["imuc.stOk"];
}
</script>

<template>
  <div class="card-soft overflow-hidden">
    <div class="grid gap-3 border-b border-[#F3E6DD] bg-[#FFF4EC] p-5 sm:grid-cols-[1fr_auto] sm:items-end sm:p-6">
      <div class="min-w-0">
        <label for="tgl-lahir" class="text-sm font-bold text-[#58293A]">{{ T["imuc.birth"] }}</label>
        <input
          id="tgl-lahir"
          v-model="lahir"
          type="date"
          :max="todayStr"
          class="field-nm mt-2 max-w-[280px]"
        />
        <p class="mt-1.5 text-xs text-[#8A7A7E]">{{ T["imuc.pick"] }}</p>
      </div>
      <div v-if="usiaAnak !== null" class="rounded-2xl bg-white px-4 py-2.5 text-sm ring-1 ring-[#F3E6DD]">
        <span class="text-xs text-[#8A7A7E]">{{ T["imuc.ageNow"] }}: </span>
        <span class="font-extrabold text-[#58293A]">{{ usiaAnak }} {{ T["imuc.mo"] }}</span>
      </div>
    </div>

    <div v-if="berikutnya && berikutnya.target" class="border-b border-[#F3E6DD] bg-[#DCE9E1]/50 px-5 py-3 text-[13px] sm:px-6">
      <span class="font-bold text-[#2F3A34]">{{ T["imuc.next"] }}: </span>
      <span class="text-[#2F3A34]/80">{{ berikutnya.usia }} ({{ fmtDate(berikutnya.target, lang) }})</span>
    </div>

    <div class="hidden overflow-x-auto md:block">
      <table class="w-full min-w-[720px] text-left text-[13px]">
        <thead>
          <tr class="bg-[#FFF4EC] text-[#58293A]">
            <th class="px-5 py-3 text-xs font-bold uppercase tracking-wide">{{ T["imuc.age"] }}</th>
            <th class="px-5 py-3 text-xs font-bold uppercase tracking-wide">{{ T["imuc.due"] }}</th>
            <th class="px-5 py-3 text-xs font-bold uppercase tracking-wide">Status</th>
            <th class="px-5 py-3 text-xs font-bold uppercase tracking-wide">{{ T["imuc.vac"] }}</th>
            <th class="px-5 py-3 text-xs font-bold uppercase tracking-wide">{{ T["imuc.noteC"] }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in baris" :key="r.usia" class="border-t border-[#F3E6DD]">
            <td class="whitespace-nowrap px-5 py-3 font-bold text-[#2F2A2E]">{{ lang === "en" ? r.usiaEn : r.usia }}</td>
            <td class="whitespace-nowrap px-5 py-3 text-[#3D2B30]">{{ r.target ? fmtDate(r.target, lang) : "-" }}</td>
            <td class="px-5 py-3">
              <span v-if="r.status" class="inline-block whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-bold" :class="chipClass(r.status)">{{ chipText(r.status) }}</span>
              <span v-else class="text-[#8A7A7E]">-</span>
            </td>
            <td class="px-5 py-3 text-[#3D2B30]">
              <span
                v-for="v in r.vaksin"
                :key="v"
                class="mr-1.5 mt-1 inline-block whitespace-nowrap rounded-full bg-[#DCE9E1] px-2.5 py-1 text-[11px] font-semibold text-[#2F3A34]"
              >
                {{ v }}
              </span>
            </td>
            <td class="px-5 py-3 text-[#8A7A7E]">{{ r.catatan }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="space-y-3 p-4 md:hidden">
      <div v-for="r in baris" :key="r.usia" class="rounded-2xl border border-[#F3E6DD] bg-white p-4">
        <div class="flex items-center justify-between gap-2">
          <p class="text-sm font-extrabold text-[#2F2A2E]">{{ lang === "en" ? r.usiaEn : r.usia }}</p>
          <span v-if="r.status" class="whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-bold" :class="chipClass(r.status)">{{ chipText(r.status) }}</span>
        </div>
        <p v-if="r.target" class="mt-1 text-xs text-[#8A7A7E]">{{ T["imuc.due"] }}: <span class="font-bold text-[#58293A]">{{ fmtDate(r.target, lang) }}</span></p>
        <div class="mt-2 flex flex-wrap gap-1.5">
          <span
            v-for="v in r.vaksin"
            :key="v"
            class="rounded-full bg-[#DCE9E1] px-2.5 py-1 text-[11px] font-semibold text-[#2F3A34]"
          >
            {{ v }}
          </span>
        </div>
        <p class="mt-2 text-xs leading-relaxed text-[#8A7A7E]">{{ r.catatan }}</p>
      </div>
    </div>

    <p class="border-t border-[#F3E6DD] bg-[#FFFCF8] px-5 py-3 text-xs leading-relaxed text-[#8A7A7E]">
      {{ T["imuc.foot"] }}
    </p>
  </div>
</template>
