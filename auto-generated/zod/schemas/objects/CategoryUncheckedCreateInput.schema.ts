import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TodoUncheckedCreateNestedManyWithoutCategoryInputObjectSchema as TodoUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './TodoUncheckedCreateNestedManyWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  todos: z.lazy(() => TodoUncheckedCreateNestedManyWithoutCategoryInputObjectSchema).optional()
}).strict();
export const CategoryUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CategoryUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUncheckedCreateInput>;
export const CategoryUncheckedCreateInputObjectZodSchema = makeSchema();
