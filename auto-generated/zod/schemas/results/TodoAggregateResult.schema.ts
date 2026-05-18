import * as z from 'zod';
export const TodoAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    content: z.number(),
    completed: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    userId: z.number(),
    user: z.number(),
    categoryId: z.number(),
    category: z.number(),
    priority: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    content: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    userId: z.string().nullable(),
    categoryId: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    content: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable(),
    userId: z.string().nullable(),
    categoryId: z.string().nullable()
  }).nullable().optional()});