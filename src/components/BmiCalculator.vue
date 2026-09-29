<script setup lang="ts">
import { ref, computed } from "vue";
import { hitungIMT, targetKenaikanBB, beratIdealRange } from "../lib/date";
import { useLang } from "../i18n/vue";

const { T } = useLang();

const berat = ref<number | null>(null);
const tinggi = ref<number | null>(null);

const hasil = computed(() => {
  if (!berat.value || !tinggi.value) return null;
  if (berat.value <= 0 || tinggi.value <= 0) return null;
  if (tinggi.value < 120 || tinggi.value > 220) return null;
  if (berat.value < 20 || berat.value > 250) return null;
  const n = hitungIMT(berat.value, tinggi.value);
  const kategori = n < 18.5 ? T.value["bmic.u"] : n < 25 ? T.value["bmic.n"] : n < 30 ? T.value["bmic.o"] : T.value["bmic.ob"];
  return { n, kategori, target: targetKenaikanBB(n), ideal: beratIdealRange(tinggi.value) };
});
</script>

<template>
  <div class="card-soft p-5 sm:p-8">
    <div class="grid gap-4 sm:grid-cols-2">
      <div class="min-w-0">
        <label for="bb" class="text-sm font-bold text-[#58293A]">{{ T["bmic.bb"] }}</label>
        <input
          id="bb"
          v-model.number="berat"
          type="number"
          min="20"
          max="250"
          inputmode="decimal"
          :placeholder="T['bmic.bbPh']"
          class="field-nm mt-2"
        />
      </div>
      <div class="min-w-0">
        <label for="tb" class="text-sm font-bold text-[#58293A]">{{ T["bmic.tb"] }}</label>
        <input
          id="tb"
          v-model.number="tinggi"
          type="number"
          min="120"
          max="220"
          inputmode="decimal"
          :placeholder="T['bmic.tbPh']"
          class="field-nm mt-2"
        />
      </div>
    </div>
    <div v-if="hasil" class="mt-4 space-y-3">
      <div class="rounded-2xl bg-[#58293A] p-5 text-white">
        <p class="text-xs font-bold uppercase tracking-wide text-white/70">{{ T["bmic.res"] }}</p>
        <p class="mt-1 text-[26px] font-extrabold leading-none">{{ hasil.n.toFixed(1) }}</p>
        <p class="mt-2 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-bold">{{ T["bmic.cat"] }} {{ hasil.kategori }}</p>
      </div>
      <div class="grid gap-3 sm:grid-cols-2">
        <div class="rounded-2xl bg-[#DCE9E1] p-4">
          <p class="text-[11px] font-bold uppercase tracking-wide text-[#4A6B5B]">{{ T["bmic.gain"] }}</p>
          <p class="mt-1 text-lg font-extrabold text-[#2F3A34]">{{ hasil.target.min }}-{{ hasil.target.max }} kg</p>
          <p class="mt-0.5 text-xs text-[#2F3A34]/70">{{ hasil.target.laju }}</p>
        </div>
        <div class="rounded-2xl bg-[#FFF4EC] p-4">
          <p class="text-[11px] font-bold uppercase tracking-wide text-[#8A7A7E]">{{ T["bmic.ideal"] }}</p>
          <p class="mt-1 text-lg font-extrabold text-[#58293A]">{{ hasil.ideal.min }}-{{ hasil.ideal.max }} kg</p>
          <p class="mt-0.5 text-xs text-[#8A7A7E]">IMT 18,5-24,9</p>
        </div>
      </div>
      <p class="text-xs leading-relaxed text-[#8A7A7E]">
        {{ T["bmic.note"] }}
      </p>
    </div>
    <p v-else class="mt-4 text-sm text-[#8A7A7E]">{{ T["bmic.empty"] }}</p>
  </div>
</template>
