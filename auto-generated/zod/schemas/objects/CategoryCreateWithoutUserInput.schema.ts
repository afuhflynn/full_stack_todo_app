import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TodoCreateNestedManyWithoutCategoryInputObjectSchema as TodoCreateNestedManyWithoutCategoryInputObjectSchema } from './TodoCreateNestedManyWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  todos: z.lazy(() => TodoCreateNestedManyWithoutCategoryInputObjectSchema).optional()
}).strict();
export const CategoryCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.CategoryCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateWithoutUserInput>;
export const CategoryCreateWithoutUserInputObjectZodSchema = makeSchema();
