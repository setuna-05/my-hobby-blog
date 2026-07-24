import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.enum(['gadget', 'reading', 'outdoor']), // カテゴリを制限
  }),
});

export const collections = { blog };