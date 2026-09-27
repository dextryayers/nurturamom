<script setup lang="ts">
import { ref, computed } from "vue";
import { hitungIMT, kategoriIMT } from "../lib/date";

const berat = ref<number | null>(null);
const tinggi = ref<number | null>(null);

const hasil = computed(() => {
  if (!berat.value || !tinggi.value) return null;
  if (berat.value <= 0 || tinggi.value <= 0) return null;
  const n = hitungIMT(berat.value, tinggi.value);
  return { n, kategori: kategoriIMT(n) };
});
</script>

<template>
  <div class="card-soft p-6 sm:p-8">
    <div class="grid gap-4 sm:grid-cols-2">
      <div>
        <label for="bb" class="text-sm font-bold text-[#602437]">Berat badan (kg)</label>
        <input
          id="bb"
          v-model.number="berat"
          type="number"
          min="20"
          max="200"
          placeholder="Contoh: 60"
          class="mt-2 w-full rounded-2xl border border-[#F3E6DD] px-4 py-3 text-sm focus:border-[#B9375E] focus:outline-none"
        />
      </div>
      <div>
        <label for="tb" class="text-sm font-bold text-[#602437]">Tinggi badan (cm)</label>
        <input
          id="tb"
          v-model.number="tinggi"
          type="number"
          min="120"
          max="220"
          placeholder="Contoh: 160"
          class="mt-2 w-full rounded-2xl border border-[#F3E6DD] px-4 py-3 text-sm focus:border-[#B9375E] focus:outline-none"
        />
      </div>
    </div>
    <div v-if="hasil" class="mt-4 rounded-2xl bg-[#DCE9E1] p-5">
      <p class="text-xs font-bold uppercase tracking-wide text-[#4A6B5B]">Indeks massa tubuh</p>
      <p class="mt-1 text-2xl font-extrabold text-[#2F3A34]">{{ hasil.n.toFixed(1) }}</p>
      <p class="text-sm font-semibold text-[#2F3A34]">Kategori: {{ hasil.kategori }}</p>
      <p class="mt-1 text-xs leading-relaxed text-[#2F3A34]/70">
        Untuk ibu hamil, nilai IMT awal dipakai untuk target kenaikan berat badan. Diskusikan target personal dengan bidan.
      </p>
    </div>
    <p v-else class="mt-4 text-sm text-[#8A7A7E]">Isi berat dan tinggi untuk melihat hasil.</p>
  </div>
</template>
