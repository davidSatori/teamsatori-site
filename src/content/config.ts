import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.string().default('david'),
    category: z.enum(['eos', 'strategy', 'team-health', 'fractional', 'people-experience', 'general']),
    summary: z.string(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    industry: z.string(),
    service: z.string(),
    challenge: z.string(),
    solution: z.string(),
    results: z.array(z.string()),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const team = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    bio: z.string(),
    image: z.string().optional(),
    practiceArea: z.enum(['eos', 'fractional', 'people', 'strategy', 'research', 'operations']),
    certifications: z.array(z.string()).default([]),
    linkedin: z.string().url().optional(),
    order: z.number().default(0),
    active: z.boolean().default(true),
  }),
});

const certifications = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    issuer: z.string(),
    logo: z.string().optional(),
    url: z.string().url().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { blog, 'case-studies': caseStudies, team, certifications };
