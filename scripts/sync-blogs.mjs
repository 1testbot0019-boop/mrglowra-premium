import { mkdir, writeFile } from 'node:fs/promises';

const blogs = [
  ['why-toilet-and-floor-hygiene-matter-more-than-you-think-and-how-most-indian-homes-get-it-wrong','https://www.mrglowra.com/why-toilet-and-floor-hygiene-matter-more-than-you-think-and-how-most-indian-homes-get-it-wrong'],
  ['how-regular-cleaning-helps-prevent-seasonal-illnesses-a-complete-guide','https://www.mrglowra.com/how-regular-cleaning-helps-prevent-seasonal-illnesses-a-complete-guide'],
  ['best-mop-for-cleaning-floors','https://www.mrglowra.com/best-mop-for-cleaning-floors'],
  ['best-toilet-cleaner-for-toilet-bowl','https://www.mrglowra.com/best-toilet-cleaner-for-toilet-bowl'],
  ['pine-oil-vs-phenyle-floor-cleaner-india','https://www.mrglowra.com/pine-oil-vs-phenyle-floor-cleaner-india'],
  ['best-floor-cleaner-in-india-2025-expert-review-by-mr-glowra','https://www.mrglowra.com/best-floor-cleaner-in-india-2025-expert-review-by-mr-glowra']
];

await mkdir('content/blogs', { recursive: true });

for (const [slug, url] of blogs) {
  console.log(`Syncing ${slug}`);
  const response = await fetch(url, { headers: { 'user-agent': 'MrGlowra-Blog-Sync/1.0' } });
  if (!response.ok) throw new Error(`${url} returned ${response.status}`);
  const html = await response.text();
  const match = html.match(/<article[\s\S]*?<\/article>/i) || html.match(/<main[\s\S]*?<\/main>/i);
  const content = (match?.[0] || html)
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<nav[\s\S]*?<\/nav>/gi, '')
    .replace(/<footer[\s\S]*?<\/footer>/gi, '')
    .replace(/<form[\s\S]*?<\/form>/gi, '');

  await writeFile(`content/blogs/${slug}.html`, `<!-- Source: ${url} -->\n${content}\n`, 'utf8');
}

console.log(`Synced ${blogs.length} Mr Glowra blog articles.`);
