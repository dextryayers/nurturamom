export const GEMINI_KEY: string = (import.meta.env.PUBLIC_GEMINI_KEY as string | undefined) ?? "";
export const GEMINI_MODEL = "gemini-2.0-flash";
export const GEMINI_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/" + GEMINI_MODEL + ":generateContent";

export const CHAT_COOLDOWN_MS = 4000;
export const CHAT_DAILY_LIMIT = 50;
export const CHAT_MAX_TOKENS = 400;
