import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema as BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { EnumPriorityWithAggregatesFilterObjectSchema as EnumPriorityWithAggregatesFilterObjectSchema } from './EnumPriorityWithAggregatesFilter.schema';
import { PrioritySchema } from '../enums/Priority.schema'

const todoscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => TodoScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TodoScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TodoScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TodoScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => TodoScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  completed: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  categoryId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  priority: z.union([z.lazy(() => EnumPriorityWithAggregatesFilterObjectSchema), PrioritySchema]).optional()
}).strict();
export const TodoScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.TodoScalarWhereWithAggregatesInput> = todoscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.TodoScalarWhereWithAggregatesInput>;
export const TodoScalarWhereWithAggregatesInputObjectZodSchema = todoscalarwherewithaggregatesinputSchema;
