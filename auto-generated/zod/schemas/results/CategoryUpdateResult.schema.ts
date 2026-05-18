import * as z from 'zod';
export const CategoryUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  userId: z.string(),
  user: z.unknown(),
  todos: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));