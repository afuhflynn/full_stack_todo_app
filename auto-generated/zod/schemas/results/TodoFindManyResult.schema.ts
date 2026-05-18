import * as z from 'zod';
export const TodoFindManyResultSchema = z.object({
  data: z.array(z.object({
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
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});