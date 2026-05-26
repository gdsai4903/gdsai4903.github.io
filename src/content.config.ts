import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['Case Study', 'Personal Project', 'In Progress', 'Coming Soon']),
    featured: z.boolean().default(false),
    order: z.number().default(999),
    techTags: z.array(z.string()),
    thumbnail: z.string().optional(),
    repoUrl: z.string().url().optional(),
    date: z.date(),
  }),
});

const writeups = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writeups' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    status: z.enum(['draft', 'published']),
  }),
});

export const collections = { projects, writeups };
