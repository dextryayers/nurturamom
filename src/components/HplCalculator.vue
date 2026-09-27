<script setup lang="ts">
import { ref, computed } from "vue";
import { parseISODate, hitungHPL, formatID, toISODate } from "../lib/date";

const hpht = ref("");
const todayStr = toISODate(new Date());
const error = ref("");

const hpl = computed(() => {
  error.value = "";
  if (!hpht.value) return null;
  const d = parseISODate(hpht.value);
  if (!d) {
    error.value = "Tanggal tidak valid.";
    return null;
  }
  if (d.getTime() > Date.now()) {
    error.value = "HPHT tidak boleh di masa depan.";
    return null;
  }
  return hitungHPL(d);
});
</script>

<template>
  <div class="card-soft p-6 sm:p-8">
    <label for="hpl-hpht" class="text-sm font-bold text-[#602437]">HPHT</label>
    <input
      id="hpl-hpht"
      v-model="hpht"
      type="date"
      :max="todayStr"
      class="mt-2 w-full max-w-[320px] rounded-2xl border border-[#F3E6DD] px-4 py-3 text-sm focus:border-[#B9375E] focus:outline-none"
    />
    <div v-if="hpl" class="mt-4 rounded-2xl bg-[#FFF4EC] p-5">
      <p class="text-xs font-bold uppercase tracking-wide text-[#8A7A7E]">Hari perkiraan lahir</p>
      <p class="mt-1 text-2xl font-extrabold text-[#602437]">{{ formatID(hpl) }}</p>
      <p class="mt-1 text-xs leading-relaxed text-[#8A7A7E]">
        Hasil ini memakai rumus Naegele untuk siklus 28 hari. Konfirmasi dengan USG trimester 1 agar lebih akurat.
      </p>
    </div>
    <p v-else class="mt-4 text-sm text-[#8A7A7E]">Pilih HPHT untuk melihat HPL.</p>
    <p v-if="error" class="mt-2 text-xs text-[#8A2846]">{{ error }}</p>
  </div>
</template>
