import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryUpdateWithoutTodosInputObjectSchema as CategoryUpdateWithoutTodosInputObjectSchema } from './CategoryUpdateWithoutTodosInput.schema';
import { CategoryUncheckedUpdateWithoutTodosInputObjectSchema as CategoryUncheckedUpdateWithoutTodosInputObjectSchema } from './CategoryUncheckedUpdateWithoutTodosInput.schema';
import { CategoryCreateWithoutTodosInputObjectSchema as CategoryCreateWithoutTodosInputObjectSchema } from './CategoryCreateWithoutTodosInput.schema';
import { CategoryUncheckedCreateWithoutTodosInputObjectSchema as CategoryUncheckedCreateWithoutTodosInputObjectSchema } from './CategoryUncheckedCreateWithoutTodosInput.schema';
import { CategoryWhereInputObjectSchema as CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CategoryUpdateWithoutTodosInputObjectSchema), z.lazy(() => CategoryUncheckedUpdateWithoutTodosInputObjectSchema)]),
  create: z.union([z.lazy(() => CategoryCreateWithoutTodosInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutTodosInputObjectSchema)]),
  where: z.lazy(() => CategoryWhereInputObjectSchema).optional()
}).strict();
export const CategoryUpsertWithoutTodosInputObjectSchema: z.ZodType<Prisma.CategoryUpsertWithoutTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpsertWithoutTodosInput>;
export const CategoryUpsertWithoutTodosInputObjectZodSchema = makeSchema();
