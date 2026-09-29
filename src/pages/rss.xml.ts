import { fullArticles } from "../data/articlesFull";

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function GET(): Response {
  const items = [...fullArticles]
    .sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1))
    .map(
      (a) => `    <item>
      <title>${esc(a.title)}</title>
      <link>https://nurturamom.com/artikel/${a.slug}</link>
      <guid>https://nurturamom.com/artikel/${a.slug}</guid>
      <pubDate>${new Date(a.dateISO + "T00:00:00+07:00").toUTCString()}</pubDate>
      <category>${esc(a.category)}</category>
      <description>${esc(a.excerpt)}</description>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>NurturaMom: Artikel Ibu dan Anak</title>
    <link>https://nurturamom.com/artikel</link>
    <description>Artikel kehamilan, persalinan, nifas, dan bayi yang ditinjau bidan.</description>
    <language>id-ID</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
