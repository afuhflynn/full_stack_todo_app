import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  completed: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  categoryId: SortOrderSchema.optional(),
  priority: SortOrderSchema.optional()
}).strict();
export const TodoCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TodoCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoCountOrderByAggregateInput>;
export const TodoCountOrderByAggregateInputObjectZodSchema = makeSchema();
