import { defineCollection, z } from 'astro:content';

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().optional(),
    image: z.string(),
    excerpt: z.string(),
    link: z.string().optional(),
  }),
});

export const collections = { events };
