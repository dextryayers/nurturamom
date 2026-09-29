import { GEMINI_KEY, GEMINI_MODEL, CHAT_COOLDOWN_MS, CHAT_DAILY_LIMIT, CHAT_MAX_TOKENS } from "./config";
import { searchDocs, detectDanger, type Doc } from "./knowledge";

export interface Answer {
  kind: "danger" | "ai" | "local" | "empty" | "limit";
  text: string;
  sources: Doc[];
}

const MODEL_CANDIDATES = [
  GEMINI_MODEL,
  "gemini-2.5-flash",
  "gemini-1.5-flash",
  "gemini-2.0-flash-lite",
  "gemini-1.5-flash-8b",
];

function modelUrl(m: string): string {
  return "https://generativelanguage.googleapis.com/v1beta/models/" + m + ":generateContent";
}

function ingatModel(): string | null {
  try {
    const m = localStorage.getItem("nm-gemini-model");
    if (m && MODEL_CANDIDATES.includes(m)) return m;
  } catch {
    /* abaikan */
  }
  return null;
}

function simpanModel(m: string): void {
  try {
    localStorage.setItem("nm-gemini-model", m);
  } catch {
    /* abaikan */
  }
}

function daftarModel(): string[] {
  const utama = ingatModel();
  const semua = utama ? [utama, ...MODEL_CANDIDATES.filter((m) => m !== utama)] : [...MODEL_CANDIDATES];
  return [...new Set(semua)];
}

function dayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function getCount(): number {
  try {
    const raw = localStorage.getItem("nm-chat-use");
    if (!raw) return 0;
    const o = JSON.parse(raw);
    if (o.day !== dayKey()) return 0;
    return o.n || 0;
  } catch {
    return 0;
  }
}

function bumpCount(): void {
  try {
    localStorage.setItem("nm-chat-use", JSON.stringify({ day: dayKey(), n: getCount() + 1 }));
  } catch {
    /* abaikan */
  }
}

let lastCall = 0;
const memCache = new Map<string, Answer>();
const riwayat: { q: string; a: string }[] = [];
let lastError = "";

export function getLastError(): string {
  return lastError;
}

export function resetHistory(): void {
  riwayat.length = 0;
  memCache.clear();
}

function getCache(q: string): Answer | null {
  const k = q.trim().toLowerCase();
  if (memCache.has(k)) return memCache.get(k) as Answer;
  try {
    const raw = localStorage.getItem("nm-chat-cache");
    if (!raw) return null;
    const o = JSON.parse(raw);
    const hit = o[k];
    if (hit && Date.now() - hit.t < 7 * 86400000) return hit.a as Answer;
  } catch {
    /* abaikan */
  }
  return null;
}

function setCache(q: string, a: Answer): void {
  const k = q.trim().toLowerCase();
  memCache.set(k, a);
  try {
    const raw = localStorage.getItem("nm-chat-cache");
    const o = raw ? JSON.parse(raw) : {};
    o[k] = { t: Date.now(), a };
    const keys = Object.keys(o);
    if (keys.length > 50) {
      const first = keys[0];
      if (first) delete o[first];
    }
    localStorage.setItem("nm-chat-cache", JSON.stringify(o));
  } catch {
    /* abaikan */
  }
}

function systemPrompt(lang: string): string {
  const en = lang === "en";
  return en
    ? "You are Nurtura, the warm big sister assistant of nurturamom.com, a midwife reviewed mom and child health site covering pregnancy, birth, postpartum, newborns, children, and family planning. Personality: friendly, encouraging, calls things by name, never stiff. Always answer the exact question asked, directly first, then 1 short supporting sentence. End with one short relevant follow up question. Rules. Prefer the CONTEXT below. If missing, answer from general midwifery knowledge briefly and honestly. Max 150 words, simple language. NEVER use the em dash character. NEVER diagnose or prescribe. For danger signs always tell the user to go to a health facility now. Reply in English."
    : "Kamu Nurtura, kakak ramah asisten nurturamom.com, situs kesehatan ibu dan anak yang ditinjau bidan. Cakupan ilmumu: kehamilan, persalinan, nifas, bayi baru lahir, anak, KB, ASI, MPASI, dan imunisasi. Kepribadian: hangat, menyemangati, tidak kaku. Selalu jawab tepat pertanyaan yang ditanyakan, langsung ke intinya dulu, lalu 1 kalimat pendukung singkat. Akhiri dengan 1 pertanyaan lanjutan yang relevan dan singkat. Aturan. Utamakan KONTEKS di bawah. Bila tidak ada, jawab dari ilmu kebidanan umum secara singkat dan jujur. Maksimal 150 kata, bahasa sederhana. JANGAN PERNAH pakai karakter em dash. JANGAN PERNAH mendiagnosis atau meresepkan obat. Untuk tanda bahaya selalu arahkan ke faskes sekarang. Balas dalam Bahasa Indonesia.";
}

function generalPrompt(lang: string): string {
  return lang === "en"
    ? "You are Nurtura, the warm big sister assistant of nurturamom.com, a midwife reviewed mom and child site. Always answer the exact question asked, directly first. Friendly and encouraging, never stiff. End with one short relevant follow up question. Max 120 words, simple English. NEVER use the em dash character. NEVER diagnose or prescribe. Danger signs go to a facility now."
    : "Kamu Nurtura, kakak ramah asisten nurturamom.com, situs ibu dan anak yang ditinjau bidan. Selalu jawab tepat pertanyaan yang ditanyakan, langsung ke intinya dulu. Hangat dan menyemangati, tidak kaku. Akhiri dengan 1 pertanyaan lanjutan yang relevan dan singkat. Maksimal 120 kata, bahasa sederhana. JANGAN PERNAH pakai karakter em dash. JANGAN PERNAH mendiagnosis atau meresepkan obat. Tanda bahaya arahkan ke faskes sekarang.";
}

const FALLBACK_LINKS: Doc[] = [
  { id: "fb-artikel", title: "Semua artikel", text: "Kumpulan artikel kehamilan, nifas, dan bayi.", href: "/artikel", tags: "" },
  { id: "fb-kalender", title: "Kalender Kehamilan", text: "Hitung usia kehamilan dan HPL.", href: "/kalender-kehamilan", tags: "" },
  { id: "fb-tools", title: "Semua tools", text: "Kalkulator HPL, IMT, checklist, dan imunisasi.", href: "/tools", tags: "" },
];

function kalimat(text: string): string[] {
  return text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
}

function sapaan(lang: string): string {
  return lang === "en" ? "Hi! Here is what I know: " : "Hai! Ini yang aku tahu: ";
}

function penutup(lang: string): string {
  return lang === "en"
    ? " Hope that helps. Want me to explain any part in more detail?"
    : " Semoga membantu ya. Mau dijelaskan bagian mana lebih detail?";
}

function localAnswer(docs: Doc[], lang: string, question: string): Answer {
  if (docs.length === 0) {
    return {
      kind: "local",
      text:
        lang === "en"
          ? "Hmm, I could not reach the AI and found no matching article. Try keywords like HPL, nausea, or breastfeeding. These pages may help."
          : "Hmm, AI tidak terjangkau dan aku tidak menemukan artikel yang cocok. Coba kata kunci seperti HPL, mual, atau ASI. Halaman ini bisa membantu.",
      sources: FALLBACK_LINKS,
    };
  }
  const qs = tokens(question);
  let terbaik = "";
  let skorTerbaik = -1;
  for (const d of docs.slice(0, 3)) {
    for (const s of kalimat(d.text)) {
      const st = new Set(tokens(s));
      let sc = 0;
      for (const w of qs) if (st.has(w)) sc += 1;
      if (sc > skorTerbaik) {
        skorTerbaik = sc;
        terbaik = s;
      }
    }
  }
  const utama = docs[0] as Doc;
  const isi = skorTerbaik > 0 ? terbaik : kalimat(utama.text)[0] ?? utama.text;
  return { kind: "local", text: sapaan(lang) + isi + penutup(lang), sources: docs };
}

export async function ask(question: string, lang: string): Promise<Answer> {
  const q = question.trim();
  if (!q) {
    return { kind: "empty", text: "", sources: [] };
  }
  if (detectDanger(q)) {
    const docs = searchDocs(q, 2);
    return { kind: "danger", text: "", sources: docs };
  }
  const hit = getCache(q);
  if (hit) return hit;

  const docs = searchDocs(q, 3);
  const now = Date.now();
  if (now - lastCall < CHAT_COOLDOWN_MS) {
    await new Promise((r) => setTimeout(r, CHAT_COOLDOWN_MS - (now - lastCall)));
  }
  if (getCount() >= CHAT_DAILY_LIMIT) {
    return localAnswer(docs, lang, q);
  }
  if (!GEMINI_KEY) {
    lastError = "no-key";
    try {
      console.error("[nurtura] PUBLIC_GEMINI_KEY kosong. Isi file .env lalu restart dev server.");
    } catch {
      /* abaikan */
    }
    return localAnswer(docs, lang, q);
  }

  const punyaKonteks = docs.length > 0;
  const konteks = punyaKonteks
    ? docs.map((d, i) => "[" + (i + 1) + "] " + d.title + ": " + d.text).join("\n")
    : "";
  const system = punyaKonteks ? systemPrompt(lang) : generalPrompt(lang);
  const userText = punyaKonteks ? "KONTEKS:\n" + konteks + "\n\nPERTANYAAN: " + q : "PERTANYAAN: " + q;
  const isi = riwayat.slice(-2).flatMap((r) => [
    { role: "user", parts: [{ text: r.q }] },
    { role: "model", parts: [{ text: r.a }] },
  ]);
  isi.push({ role: "user", parts: [{ text: userText }] });

  try {
    lastCall = Date.now();
    const body = JSON.stringify({
      system_instruction: { parts: [{ text: system }] },
      contents: isi,
      generationConfig: { temperature: 0.5, maxOutputTokens: CHAT_MAX_TOKENS },
    });
    let text = "";
    let gagal = "";
    for (const m of daftarModel()) {
      try {
        const res = await fetch(modelUrl(m) + "?key=" + encodeURIComponent(GEMINI_KEY), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body,
        });
        if (res.status === 404) {
          gagal = "api-404";
          continue;
        }
        if (!res.ok) throw new Error("api-" + res.status);
        const data = await res.json();
        const parts = data?.candidates?.[0]?.content?.parts ?? [];
        text = parts
          .map((p: { text?: string }) => p.text ?? "")
          .join("")
          .trim();
        if (!text) throw new Error("empty");
        simpanModel(m);
        gagal = "";
        break;
      } catch (e) {
        gagal = e instanceof Error ? e.message : "network";
        if (gagal !== "api-404") throw e;
      }
    }
    if (!text) throw new Error(gagal || "empty");
    bumpCount();
    riwayat.push({ q, a: text.slice(0, 300) });
    if (riwayat.length > 4) riwayat.shift();
    const ans: Answer = { kind: "ai", text, sources: docs };
    setCache(q, ans);
    return ans;
  } catch (e) {
    lastError = e instanceof Error ? e.message : "network";
    try {
      console.error("[nurtura] AI gagal:", lastError);
    } catch {
      /* abaikan */
    }
    return localAnswer(docs, lang, q);
  }
}
