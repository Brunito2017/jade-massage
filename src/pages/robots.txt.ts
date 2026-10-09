import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('sitemap-index.xml', site ?? 'https://jadebellezayspa.cl');
  const robots = [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${sitemap.href}`,
    '',
  ].join('\n');

  return new Response(robots, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
