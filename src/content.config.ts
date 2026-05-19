import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';

export const collections = {
  // Starlight 標準ドキュメント (src/content/docs/**)
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema(),
  }),
  // VuePress の posts に相当: お知らせ / メンテナンス
  posts: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
    schema: z.object({
      title: z.string(),
      date: z.coerce.date(),
      author: z.string().optional(),
      description: z.string().optional(),
      excerpt: z.string().optional(),
      category: z.array(z.enum(['おしらせ', 'メンテナンス'])).default([]),
      tag: z.array(z.string()).default([]),
      status: z.string().optional(),
      statclass: z.enum(['tip', 'note', 'caution', 'danger']).optional(),
      planneddate: z.coerce.date().optional(),
      sticky: z.boolean().or(z.number()).optional(),
    }),
  }),
};
