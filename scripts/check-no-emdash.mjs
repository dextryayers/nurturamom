import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const roots = ["src", "public", "astro.config.mjs", "package.json"];
const BAD = String.fromCharCode(8212);
const BAD2 = String.fromCharCode(8211);
let found = 0;

function walk(p) {
  let st;
  try {
    st = statSync(p);
  } catch {
    return;
  }
  if (st.isDirectory()) {
    for (const f of readdirSync(p)) {
      if (f === "node_modules" || f === "dist" || f === ".git") continue;
      walk(join(p, f));
    }
  } else if (/\.(astro|vue|ts|js|mjs|css|md|mdx|json|html)$/.test(p)) {
    const t = readFileSync(p, "utf8");
    if (t.includes(BAD) || t.includes(BAD2)) {
      console.error("EMDASH FOUND in " + p);
      found++;
    }
  }
}

for (const r of roots) walk(r);
if (found > 0) {
  console.error("COPY_CHECK FAILED: hapus karakter U+2014 dan U+2013.");
  process.exit(1);
} else {
  console.log("COPY_CLEAN: nol emdash.");
}
