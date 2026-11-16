import type { APIRoute } from 'astro';
import { getPosts } from '../lib/blog';

const STATIC_PAGES = ['', 'portfolio', 'about', 'blog', 'legal'];

export const GET: APIRoute = async ({ site }) => {
    const baseUrl = site!.toString().replace(/\/$/, '');
    const posts = await getPosts();
    const today = new Date().toISOString();

    const entries = [
        ...STATIC_PAGES.map((page) => ({ loc: page ? `${baseUrl}/${page}` : `${baseUrl}/`, lastmod: today })),
        ...posts.map((post) => ({ loc: `${baseUrl}/blog/${post.id}`, lastmod: post.data.date.toISOString() })),
    ];

    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map((e) => `  <url><loc>${e.loc}</loc><lastmod>${e.lastmod}</lastmod></url>`).join('\n')}
</urlset>`;

    return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
