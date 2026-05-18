import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryWhereInputObjectSchema as CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema';
import { CategoryUpdateWithoutTodosInputObjectSchema as CategoryUpdateWithoutTodosInputObjectSchema } from './CategoryUpdateWithoutTodosInput.schema';
import { CategoryUncheckedUpdateWithoutTodosInputObjectSchema as CategoryUncheckedUpdateWithoutTodosInputObjectSchema } from './CategoryUncheckedUpdateWithoutTodosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CategoryWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CategoryUpdateWithoutTodosInputObjectSchema), z.lazy(() => CategoryUncheckedUpdateWithoutTodosInputObjectSchema)])
}).strict();
export const CategoryUpdateToOneWithWhereWithoutTodosInputObjectSchema: z.ZodType<Prisma.CategoryUpdateToOneWithWhereWithoutTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpdateToOneWithWhereWithoutTodosInput>;
export const CategoryUpdateToOneWithWhereWithoutTodosInputObjectZodSchema = makeSchema();
