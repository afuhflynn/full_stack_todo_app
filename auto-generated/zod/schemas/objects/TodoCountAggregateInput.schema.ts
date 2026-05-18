import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  content: z.literal(true).optional(),
  completed: z.literal(true).optional(),
  createdAt: z.literal(true).optional(),
  updatedAt: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  categoryId: z.literal(true).optional(),
  priority: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const TodoCountAggregateInputObjectSchema: z.ZodType<Prisma.TodoCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.TodoCountAggregateInputType>;
export const TodoCountAggregateInputObjectZodSchema = makeSchema();
