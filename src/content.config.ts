import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * Blog posts: one Markdown file per post in src/content/blog/.
 * The file name becomes the URL: src/content/blog/mi-post.md → /blog/mi-post
 */
const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        /** Optional cover image path (e.g. /img/blog/mi-post.webp) or URL. */
        image: z.string().optional(),
        /** Drafts are not published. */
        draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
