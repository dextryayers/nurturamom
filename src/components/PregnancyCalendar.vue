<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import { parseISODate, hitungHPL, hitungUsia, formatID, toISODate, diffDays } from "../lib/date";
import { fetalGrowth, getWeekInfo } from "../data/fetalGrowth";

const props = defineProps<{ initialHpht?: string }>();

const hpht = ref(props.initialHpht ?? "");
const error = ref("");
const lihatMinggu = ref<number | null>(null);
const disalin = ref(false);
const todayStr = toISODate(new Date());

const parsed = computed(() => (hpht.value ? parseISODate(hpht.value) : null));

const hasil = computed(() => {
  error.value = "";
  if (!hpht.value) return null;
  const d = parsed.value;
  if (!d) {
    error.value = "Format tanggal tidak valid. Gunakan format YYYY-MM-DD.";
    return null;
  }
  const now = new Date();
  if (d.getTime() > now.getTime()) {
    error.value = "HPHT tidak boleh di masa depan. Pilih tanggal hari pertama haid terakhir.";
    return null;
  }
  const usia = hitungUsia(d, now);
  if (usia.totalHari > 294) {
    error.value = "HPHT lebih dari 42 minggu lalu. Periksa kembali atau konsultasi ke bidan.";
    return null;
  }
  const hpl = hitungHPL(d);
  const sisa = Math.max(0, diffDays(now, hpl));
  return { usia, hpl, sisa };
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
  if (t === 1) return "bg-[#FFCAD4]/50 text-[#8A2846]";
  if (t === 2) return "bg-[#DCE9E1] text-[#2F3A34]";
  return "bg-[#602437] text-white";
});

const waLink = computed(() => {
  if (!hasil.value || !hpht.value) return "#";
  const h = hasil.value;
  const teks = "Halo Bidan, saya ingin konsultasi. HPHT saya " + hpht.value + ". Usia kehamilan " + h.usia.minggu + " minggu " + h.usia.hari + " hari. HPL " + formatID(h.hpl) + ".";
  return "https://wa.me/6280000000000?text=" + encodeURIComponent(teks);
});

const shareLink = computed(() => {
  if (!hpht.value) return "https://nurturamom.com/kalender-kehamilan";
  return "https://nurturamom.com/kalender-kehamilan?hpht=" + hpht.value;
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
  const q = new URLSearchParams(window.location.search).get("hpht");
  if (q && !hpht.value) hpht.value = q;
});
</script>

<template>
  <div class="card-soft overflow-hidden">
    <div class="border-b border-[#F3E6DD] bg-[#FFF4EC] p-6 sm:p-7">
      <div class="grid items-end gap-4 md:grid-cols-[1fr_auto]">
        <div>
          <label for="hpht" class="text-sm font-bold text-[#602437]">Hari pertama haid terakhir (HPHT)</label>
          <input
            id="hpht"
            v-model="hpht"
            type="date"
            :max="todayStr"
            class="field-nm mt-2 max-w-[320px]"
          />
          <p class="mt-2 max-w-[480px] text-xs leading-relaxed text-[#8A7A7E]">
            Contoh: haid terakhir mulai 10 Maret 2026, pilih tanggal itu. HPL dihitung dengan rumus Naegele untuk siklus 28 hari.
          </p>
        </div>
        <div class="flex flex-wrap gap-2 no-print">
          <button
            type="button"
            @click="salinTautan"
            class="rounded-full border border-[#F3E6DD] bg-white px-4 py-2 text-xs font-semibold text-[#3D2B30] transition hover:border-[#B9375E]"
          >
            {{ disalin ? "Tautan disalin" : "Salin tautan" }}
          </button>
          <button
            type="button"
            @click="cetak"
            class="rounded-full border border-[#F3E6DD] bg-white px-4 py-2 text-xs font-semibold text-[#3D2B30] transition hover:border-[#B9375E]"
          >
            Unduh ringkasan
          </button>
        </div>
      </div>
      <p v-if="error" class="mt-3 rounded-2xl bg-[#FFCAD4]/40 p-3 text-xs leading-relaxed text-[#8A2846]">
        {{ error }}
      </p>
    </div>

    <div v-if="!hasil" class="grid place-items-center p-10 text-center sm:p-14">
      <div>
        <p class="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[#FFF4EC] text-xl font-extrabold text-[#B9375E]">?</p>
        <p class="mt-4 text-[15px] font-bold text-[#602437]">Isi HPHT untuk melihat hasil</p>
        <p class="mx-auto mt-1 max-w-[360px] text-[13px] leading-relaxed text-[#8A7A7E]">
          Usia kehamilan, trimester, HPL, hitung mundur, dan ukuran janin akan muncul otomatis di sini.
        </p>
      </div>
    </div>

    <div v-else class="p-6 sm:p-7">
      <div class="grid gap-3 sm:grid-cols-3">
        <div class="rounded-2xl bg-[#602437] p-5 text-white">
          <p class="text-[11px] font-bold uppercase tracking-wide text-white/70">Usia kehamilan</p>
          <p class="mt-1 text-[26px] font-extrabold leading-none">{{ hasil.usia.minggu }}<span class="text-sm font-bold"> mg</span> {{ hasil.usia.hari }}<span class="text-sm font-bold"> hr</span></p>
          <p class="mt-2 inline-block rounded-full px-2.5 py-1 text-[11px] font-bold" :class="trimesterWarna">Trimester {{ hasil.usia.trimester }}</p>
        </div>
        <div class="rounded-2xl bg-[#FFF4EC] p-5">
          <p class="text-[11px] font-bold uppercase tracking-wide text-[#8A7A7E]">Hari perkiraan lahir</p>
          <p class="mt-1 text-[19px] font-extrabold leading-snug text-[#602437]">{{ formatID(hasil.hpl) }}</p>
          <p class="mt-1 text-xs font-semibold text-[#B9375E]">{{ hasil.sisa }} hari lagi</p>
        </div>
        <div class="rounded-2xl bg-[#DCE9E1] p-5">
          <p class="text-[11px] font-bold uppercase tracking-wide text-[#4A6B5B]">Ukuran janin</p>
          <p class="mt-1 text-[19px] font-extrabold leading-snug text-[#2F3A34]">Sebesar {{ infoAktif.size }}</p>
          <p class="mt-1 text-xs text-[#2F3A34]/70">{{ infoAktif.length }}, {{ infoAktif.weight }}</p>
        </div>
      </div>

      <div class="mt-5">
        <div class="flex items-center justify-between text-xs text-[#8A7A7E]">
          <span>Progress 280 hari</span>
          <span class="font-bold text-[#602437]">{{ hasil.usia.progress }} persen</span>
        </div>
        <div class="mt-1.5 h-2.5 overflow-hidden rounded-full bg-[#F3E6DD]">
          <div class="h-full rounded-full bg-gradient-to-r from-[#E05780] to-[#B9375E] transition-all" :style="{ width: hasil.usia.progress + '%' }"></div>
        </div>
      </div>

      <div class="mt-6 rounded-2xl border border-[#F3E6DD]">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-[#F3E6DD] bg-[#FFFCF8] px-4 py-3">
          <p class="text-sm font-bold text-[#602437]">Jelajah minggu kehamilan</p>
          <div class="flex items-center gap-2 no-print">
            <button type="button" @click="geserMinggu(-1)" :disabled="(lihatMinggu ?? 12) <= 4" class="grid h-8 w-8 place-items-center rounded-full border border-[#F3E6DD] bg-white text-sm font-bold transition hover:border-[#B9375E] disabled:opacity-40" aria-label="Minggu sebelumnya">‹</button>
            <select v-model.number="lihatMinggu" class="rounded-full border border-[#F3E6DD] bg-white px-3 py-1.5 text-xs font-bold text-[#3D2B30] focus:border-[#B9375E] focus:outline-none" aria-label="Pilih minggu">
              <option v-for="w in fetalGrowth" :key="w.week" :value="w.week">Minggu {{ w.week }}</option>
            </select>
            <button type="button" @click="geserMinggu(1)" :disabled="(lihatMinggu ?? 12) >= 42" class="grid h-8 w-8 place-items-center rounded-full border border-[#F3E6DD] bg-white text-sm font-bold transition hover:border-[#B9375E] disabled:opacity-40" aria-label="Minggu berikutnya">›</button>
          </div>
        </div>
        <div class="p-4 sm:p-5">
          <p class="text-[15px] font-bold text-[#2F2A2E]">Minggu {{ infoAktif.week }}: sebesar {{ infoAktif.size }} ({{ infoAktif.length }}, {{ infoAktif.weight }})</p>
          <p class="mt-2 text-sm leading-relaxed text-[#3D2B30]/80">{{ infoAktif.desc }}</p>
          <div class="mt-3 rounded-xl bg-[#DCE9E1]/60 p-3.5">
            <p class="text-[13px] leading-relaxed text-[#2F3A34]"><span class="font-bold">Tips minggu ini:</span> {{ infoAktif.tips }}</p>
          </div>
        </div>
      </div>

      <div class="mt-5 flex flex-wrap gap-2.5 no-print">
        <a :href="waLink" target="_blank" rel="noopener" class="btn-sage">Simpan dan ingatkan via WhatsApp</a>
        <a href="/tools/checklist-persalinan" class="btn-outline">Siapkan tas persalinan</a>
      </div>
    </div>
  </div>
</template>
