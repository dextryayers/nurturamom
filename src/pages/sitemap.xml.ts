import { fullArticles } from "../data/articlesFull";
import { panduan } from "../data/panduan";

const SITE = "https://nurturamom.com";
const TODAY = "2026-09-27";

interface Entry {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function GET(): Response {
  const statis: Entry[] = [
    { loc: "/", lastmod: TODAY, changefreq: "weekly", priority: "1.0" },
    { loc: "/kalender-kehamilan", lastmod: TODAY, changefreq: "weekly", priority: "1.0" },
    { loc: "/kehamilan", lastmod: TODAY, changefreq: "monthly", priority: "0.7" },
    { loc: "/persalinan", lastmod: TODAY, changefreq: "monthly", priority: "0.7" },
    { loc: "/nifas", lastmod: TODAY, changefreq: "monthly", priority: "0.7" },
    { loc: "/neonatus", lastmod: TODAY, changefreq: "monthly", priority: "0.7" },
    { loc: "/anak", lastmod: TODAY, changefreq: "monthly", priority: "0.7" },
    { loc: "/reproduksi-kb", lastmod: TODAY, changefreq: "monthly", priority: "0.7" },
    { loc: "/tentang-bidan", lastmod: TODAY, changefreq: "monthly", priority: "0.7" },
    { loc: "/artikel", lastmod: TODAY, changefreq: "weekly", priority: "0.8" },
    { loc: "/tools", lastmod: TODAY, changefreq: "monthly", priority: "0.7" },
    { loc: "/tools/hpl", lastmod: TODAY, changefreq: "monthly", priority: "0.7" },
    { loc: "/tools/imt", lastmod: TODAY, changefreq: "monthly", priority: "0.7" },
    { loc: "/tools/checklist-persalinan", lastmod: TODAY, changefreq: "monthly", priority: "0.7" },
    { loc: "/tools/imunisasi", lastmod: TODAY, changefreq: "monthly", priority: "0.7" },
  ];

  const artikel: Entry[] = fullArticles.map((a) => ({
    loc: "/artikel/" + a.slug,
    lastmod: a.dateISO,
    changefreq: "monthly",
    priority: "0.8",
  }));

  const tahap: Entry[] = panduan.map((p) => ({
    loc: "/panduan/" + p.slug,
    lastmod: TODAY,
    changefreq: "monthly",
    priority: "0.7",
  }));

  const semua = [...statis, ...artikel, ...tahap];
  const urls = semua
    .map(
      (e) => `  <url>
    <loc>${SITE}${esc(e.loc)}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
