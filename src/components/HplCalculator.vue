<script setup lang="ts">
import { ref, computed } from "vue";
import { parseISODate, hitungHPL, hitungPembuahan, rentangLahirNormal, clampSiklus, formatID, toISODate } from "../lib/date";
import { useLang } from "../i18n/vue";

const { T } = useLang();

const hpht = ref("");
const siklus = ref(28);
const todayStr = toISODate(new Date());
const error = ref("");

const siklusFix = computed(() => clampSiklus(Number(siklus.value) || 28));

const hasil = computed(() => {
  error.value = "";
  if (!hpht.value) return null;
  const d = parseISODate(hpht.value);
  if (!d) {
    error.value = T.value["hplc.err"];
    return null;
  }
  if (d.getTime() > Date.now()) {
    error.value = T.value["hplc.errFut"];
    return null;
  }
  return {
    hpl: hitungHPL(d, siklusFix.value),
    buahHati: hitungPembuahan(d, siklusFix.value),
    rentang: rentangLahirNormal(d, siklusFix.value),
  };
});
</script>

<template>
  <div class="card-soft p-5 sm:p-8">
    <div class="grid gap-4 sm:grid-cols-[1fr_150px]">
      <div class="min-w-0">
        <label for="hpl-hpht" class="text-sm font-bold text-[#58293A]">{{ T["hplc.hpht"] }}</label>
        <input
          id="hpl-hpht"
          v-model="hpht"
          type="date"
          :max="todayStr"
          class="field-nm mt-2"
        />
      </div>
      <div>
        <label for="hpl-siklus" class="text-sm font-bold text-[#58293A]">{{ T["cal.cycle"] }}</label>
        <input
          id="hpl-siklus"
          v-model.number="siklus"
          type="number"
          min="21"
          max="45"
          inputmode="numeric"
          class="field-nm mt-2"
        />
      </div>
    </div>
    <div v-if="hasil" class="mt-4 space-y-3">
      <div class="rounded-2xl bg-[#58293A] p-5 text-white">
        <p class="text-xs font-bold uppercase tracking-wide text-white/70">{{ T["hplc.res"] }}</p>
        <p class="mt-1 text-[26px] font-extrabold leading-tight">{{ formatID(hasil.hpl) }}</p>
      </div>
      <div class="grid gap-3 rounded-2xl border border-[#F3E6DD] bg-[#FFFCF8] p-4 text-[13px] sm:grid-cols-2">
        <p class="text-[#3D2B30]/80"><span class="font-bold text-[#58293A]">{{ T["cal.conc"] }}</span> {{ formatID(hasil.buahHati) }}</p>
        <p class="text-[#3D2B30]/80"><span class="font-bold text-[#58293A]">{{ T["cal.range"] }}</span> {{ formatID(hasil.rentang.awal) }} {{ T["cal.until"] }} {{ formatID(hasil.rentang.akhir) }}</p>
      </div>
      <p class="text-xs leading-relaxed text-[#8A7A7E]">
        {{ T["hplc.note"] }}
      </p>
    </div>
    <p v-else class="mt-4 text-sm text-[#8A7A7E]">{{ T["hplc.empty"] }}</p>
    <p v-if="error" class="mt-2 text-xs font-semibold text-[#76304A]">{{ error }}</p>
  </div>
</template>
