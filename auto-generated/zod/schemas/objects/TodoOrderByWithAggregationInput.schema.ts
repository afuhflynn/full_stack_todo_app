import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TodoCountOrderByAggregateInputObjectSchema as TodoCountOrderByAggregateInputObjectSchema } from './TodoCountOrderByAggregateInput.schema';
import { TodoMaxOrderByAggregateInputObjectSchema as TodoMaxOrderByAggregateInputObjectSchema } from './TodoMaxOrderByAggregateInput.schema';
import { TodoMinOrderByAggregateInputObjectSchema as TodoMinOrderByAggregateInputObjectSchema } from './TodoMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  completed: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  categoryId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  priority: SortOrderSchema.optional(),
  _count: z.lazy(() => TodoCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => TodoMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => TodoMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const TodoOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.TodoOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoOrderByWithAggregationInput>;
export const TodoOrderByWithAggregationInputObjectZodSchema = makeSchema();
