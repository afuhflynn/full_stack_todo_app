import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { EnumPriorityFilterObjectSchema as EnumPriorityFilterObjectSchema } from './EnumPriorityFilter.schema';
import { PrioritySchema } from '../enums/Priority.schema'

const todoscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => TodoScalarWhereInputObjectSchema), z.lazy(() => TodoScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => TodoScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => TodoScalarWhereInputObjectSchema), z.lazy(() => TodoScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  content: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  completed: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  categoryId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  priority: z.union([z.lazy(() => EnumPriorityFilterObjectSchema), PrioritySchema]).optional()
}).strict();
export const TodoScalarWhereInputObjectSchema: z.ZodType<Prisma.TodoScalarWhereInput> = todoscalarwhereinputSchema as unknown as z.ZodType<Prisma.TodoScalarWhereInput>;
export const TodoScalarWhereInputObjectZodSchema = todoscalarwhereinputSchema;
