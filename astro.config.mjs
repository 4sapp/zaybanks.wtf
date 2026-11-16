// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Your domain: used for canonical URLs, share previews, robots.txt and the sitemap.
  site: 'https://zaybanks.wtf',
  // Fully static: no server, no database. Deployable to any static host.
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  markdown: {
    shikiConfig: { theme: 'one-dark-pro', wrap: false },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
