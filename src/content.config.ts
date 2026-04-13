import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({
    base: './src/content/docs',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    library: z.string().optional().default(''),
    category: z.string().optional().default(''),
    published: z.boolean().default(true),
  }),
});

export const collections = { docs };
