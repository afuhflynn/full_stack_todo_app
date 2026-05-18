import * as z from 'zod';
export const TodoUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  content: z.string(),
  completed: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  userId: z.string(),
  user: z.unknown(),
  categoryId: z.string().optional(),
  category: z.unknown().optional(),
  priority: z.unknown()
}));