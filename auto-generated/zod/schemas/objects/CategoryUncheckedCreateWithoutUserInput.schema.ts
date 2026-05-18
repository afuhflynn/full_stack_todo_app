import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TodoUncheckedCreateNestedManyWithoutCategoryInputObjectSchema as TodoUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './TodoUncheckedCreateNestedManyWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  todos: z.lazy(() => TodoUncheckedCreateNestedManyWithoutCategoryInputObjectSchema).optional()
}).strict();
export const CategoryUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUncheckedCreateWithoutUserInput>;
export const CategoryUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
