import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutCategoriesInputObjectSchema as UserCreateNestedOneWithoutCategoriesInputObjectSchema } from './UserCreateNestedOneWithoutCategoriesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutCategoriesInputObjectSchema)
}).strict();
export const CategoryCreateWithoutTodosInputObjectSchema: z.ZodType<Prisma.CategoryCreateWithoutTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateWithoutTodosInput>;
export const CategoryCreateWithoutTodosInputObjectZodSchema = makeSchema();
