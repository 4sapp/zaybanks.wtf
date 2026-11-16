import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** Published posts, newest first. */
export async function getPosts(): Promise<Post[]> {
    const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
    return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export const formatDate = (date: Date) =>
    date.toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
