import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    kind: z.enum(['built', 'quest']),
    stat: z.string().optional(),
    statLabel: z.string().optional(),
    order: z.number(),
    featured: z.boolean().default(false),
    full: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
  }),
});

export const collections = { projects };
