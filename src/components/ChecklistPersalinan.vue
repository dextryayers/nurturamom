<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import { checklistPersalinan } from "../data/imunisasi";

const KEY = "nm-checklist-persalinan";
const checked = ref<Record<string, boolean>>({});

function id(g: number, i: number) {
  return g + "-" + i;
}

const total = computed(() => checklistPersalinan.reduce((a, g) => a + g.items.length, 0));
const done = computed(() => Object.values(checked.value).filter(Boolean).length);
const persen = computed(() => (total.value === 0 ? 0 : Math.round((done.value / total.value) * 100)));

function toggle(g: number, i: number) {
  const k = id(g, i);
  checked.value[k] = !checked.value[k];
}

function reset() {
  checked.value = {};
}

onMounted(() => {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) checked.value = JSON.parse(raw);
  } catch {
    checked.value = {};
  }
});

watch(
  checked,
  (v) => {
    try {
      localStorage.setItem(KEY, JSON.stringify(v));
    } catch {
      /* abaikan */
    }
  },
  { deep: true }
);
</script>

<template>
  <div class="card-soft p-6 sm:p-8">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <p class="text-sm font-bold text-[#602437]">Progress persiapan</p>
        <p class="text-xs text-[#8A7A7E]">{{ done }} dari {{ total }} item ({{ persen }} persen)</p>
      </div>
      <button
        type="button"
        @click="reset"
        class="rounded-full border border-[#F3E6DD] px-4 py-2 text-xs font-semibold hover:border-[#B9375E]"
      >
        Ulangi
      </button>
    </div>
    <div class="mt-3 h-2.5 overflow-hidden rounded-full bg-[#F3E6DD]">
      <div class="h-full rounded-full bg-[#7C9D8B] transition-all" :style="{ width: persen + '%' }"></div>
    </div>

    <div class="mt-6 grid gap-5 md:grid-cols-2">
      <div v-for="(g, gi) in checklistPersalinan" :key="g.title" class="rounded-2xl border border-[#F3E6DD] p-4">
        <p class="text-sm font-bold text-[#2F2A2E]">{{ g.title }}</p>
        <ul class="mt-3 space-y-2">
          <li v-for="(item, ii) in g.items" :key="item">
            <button
              type="button"
              @click="toggle(gi, ii)"
              class="flex w-full items-start gap-2.5 rounded-xl px-2 py-2 text-left text-[13px] hover:bg-[#FFF4EC]"
              :aria-pressed="!!checked[id(gi, ii)]"
            >
              <span
                class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border"
                :class="checked[id(gi, ii)] ? 'border-[#7C9D8B] bg-[#7C9D8B] text-white' : 'border-[#E8CFC2] bg-white text-transparent'"
              >
                <svg viewBox="0 0 16 16" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M3 8.5l3.5 3.5L13 4.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              <span :class="checked[id(gi, ii)] ? 'text-[#8A7A7E] line-through' : 'text-[#3D2B30]'">{{ item }}</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
