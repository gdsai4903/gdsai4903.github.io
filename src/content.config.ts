import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sharedSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  tags: z.array(z.string()),
  status: z.enum(['draft', 'published']),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: sharedSchema,
});

const writeups = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writeups' }),
  schema: sharedSchema,
});

export const collections = { projects, writeups };
