<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import { checklistPersalinan } from "../data/imunisasi";
import { useLang } from "../i18n/vue";

const { lang, T } = useLang();

const KEY = "nm-checklist-persalinan";
const KEY_OPEN = "nm-checklist-open";
const checked = ref<Record<string, boolean>>({});
const buka = ref<Record<number, boolean>>({ 0: true, 1: true, 2: true, 3: true });

function id(g: number, i: number) {
  return g + "-" + i;
}

const total = computed(() => checklistPersalinan.reduce((a, g) => a + g.items.length, 0));
const done = computed(() => Object.values(checked.value).filter(Boolean).length);
const persen = computed(() => (total.value === 0 ? 0 : Math.round((done.value / total.value) * 100)));

function grupDone(gi: number): number {
  return checklistPersalinan[gi]?.items.filter((_, ii) => checked.value[id(gi, ii)]).length ?? 0;
}

function grupPersen(gi: number): number {
  const n = checklistPersalinan[gi]?.items.length ?? 1;
  return Math.round((grupDone(gi) / n) * 100);
}

function toggle(g: number, i: number) {
  const k = id(g, i);
  checked.value[k] = !checked.value[k];
}

function lipat(g: number) {
  buka.value[g] = !buka.value[g];
  try {
    localStorage.setItem(KEY_OPEN, JSON.stringify(buka.value));
  } catch {
    /* abaikan */
  }
}

function reset() {
  checked.value = {};
}

onMounted(() => {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) checked.value = JSON.parse(raw);
    const ro = localStorage.getItem(KEY_OPEN);
    if (ro) buka.value = { 0: true, 1: true, 2: true, 3: true, ...JSON.parse(ro) };
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
  <div class="card-soft p-5 sm:p-8">
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <p class="text-sm font-bold text-heading">{{ T["chkc.prog"] }}</p>
        <p class="text-xs text-muted">{{ done }} {{ T["chkc.of"] }} {{ total }} {{ T["chkc.item"] }} ({{ persen }}%)</p>
      </div>
      <button
        type="button"
        @click="reset"
        class="rounded-full border border-line px-4 py-2 text-xs font-semibold transition hover:border-raspberry"
      >
        {{ T["chkc.reset"] }}
      </button>
    </div>
    <div class="mt-3 h-2.5 overflow-hidden rounded-full bg-line">
      <div class="h-full rounded-full bg-sagesolid transition-all" :style="{ width: persen + '%' }"></div>
    </div>

    <div class="mt-5 space-y-3 md:grid md:grid-cols-2 md:items-start md:gap-5 md:space-y-0">
      <div v-for="(g, gi) in checklistPersalinan" :key="g.title" class="overflow-hidden rounded-2xl border border-line">
        <button
          type="button"
          @click="lipat(gi)"
          class="flex w-full items-center gap-3 bg-paper p-4 text-left"
          :aria-expanded="!!buka[gi]"
        >
          <span class="min-w-0 flex-1">
            <span class="block text-sm font-bold text-heading">{{ lang === "en" ? g.titleEn : g.title }}</span>
            <span class="mt-1 block h-1.5 overflow-hidden rounded-full bg-line">
              <span class="block h-full rounded-full bg-sagesolid transition-all" :style="{ width: grupPersen(gi) + '%' }"></span>
            </span>
          </span>
          <span class="shrink-0 rounded-full bg-cream px-2.5 py-1 text-[11px] font-bold text-heading">{{ grupDone(gi) }}/{{ g.items.length }}</span>
          <svg viewBox="0 0 24 24" class="h-4 w-4 shrink-0 text-raspberry transition-transform duration-300" :style="{ transform: buka[gi] ? 'rotate(180deg)' : '' }" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        <ul v-show="buka[gi]" class="space-y-1 p-2">
          <li v-for="(item, ii) in g.items" :key="item">
            <button
              type="button"
              @click="toggle(gi, ii)"
              class="flex w-full items-start gap-2.5 rounded-xl px-2.5 py-2.5 text-left text-[13px] transition hover:bg-cream"
              :aria-pressed="!!checked[id(gi, ii)]"
            >
              <span
                class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md border"
                :class="checked[id(gi, ii)] ? 'border-sage bg-sagesolid text-white' : 'border-linestrong bg-surface text-transparent'"
              >
                <svg viewBox="0 0 16 16" class="h-3.5 w-3.5" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M3 8.5l3.5 3.5L13 4.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
              <span :class="checked[id(gi, ii)] ? 'text-muted line-through' : 'text-ink'">{{ lang === "en" ? g.itemsEn[ii] : item }}</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
