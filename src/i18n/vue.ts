import { ref, onMounted, onUnmounted, computed } from "vue";
import { strings, type Lang } from "./dict";

export function useLang() {
  const lang = ref<Lang>("id");
  const update = (e?: Event) => {
    const v = (e as CustomEvent)?.detail;
    if (v === "en" || v === "id") {
      lang.value = v;
      return;
    }
    try {
      lang.value = localStorage.getItem("nm-lang") === "en" ? "en" : "id";
    } catch {
      lang.value = "id";
    }
  };
  onMounted(() => {
    update();
    window.addEventListener("nm-lang", update);
  });
  onUnmounted(() => {
    window.removeEventListener("nm-lang", update);
  });
  const T = computed(() => strings[lang.value]);
  return { lang, T };
}
