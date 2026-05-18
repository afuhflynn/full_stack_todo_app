import * as z from 'zod';
export const CategoryUpsertResultSchema = z.object({
  id: z.string(),
  name: z.string(),
  userId: z.string(),
  user: z.unknown(),
  todos: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
});