<script setup lang="ts">
import { imunisasi } from "../data/imunisasi";
</script>

<template>
  <div class="card-soft overflow-hidden">
    <div class="overflow-x-auto">
      <table class="w-full min-w-[640px] text-left text-[13px]">
        <thead>
          <tr class="bg-[#FFF4EC] text-[#602437]">
            <th class="px-5 py-3 text-xs font-bold uppercase tracking-wide">Usia</th>
            <th class="px-5 py-3 text-xs font-bold uppercase tracking-wide">Vaksin</th>
            <th class="px-5 py-3 text-xs font-bold uppercase tracking-wide">Catatan</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in imunisasi" :key="r.usia" class="border-t border-[#F3E6DD]">
            <td class="px-5 py-3 font-bold text-[#2F2A2E]">{{ r.usia }}</td>
            <td class="px-5 py-3 text-[#3D2B30]">
              <span
                v-for="v in r.vaksin"
                :key="v"
                class="mr-1.5 mt-1 inline-block rounded-full bg-[#DCE9E1] px-2.5 py-1 text-[11px] font-semibold text-[#2F3A34]"
              >
                {{ v }}
              </span>
            </td>
            <td class="px-5 py-3 text-[#8A7A7E]">{{ r.catatan }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="border-t border-[#F3E6DD] bg-[#FFFCF8] px-5 py-3 text-xs leading-relaxed text-[#8A7A7E]">
      Jadwal mengacu pedoman IDAI. Jadwal bisa menyesuaikan ketersediaan di puskesmas. Bawa buku KIA tiap kunjungan.
    </p>
  </div>
</template>
