import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryCreateWithoutTodosInputObjectSchema as CategoryCreateWithoutTodosInputObjectSchema } from './CategoryCreateWithoutTodosInput.schema';
import { CategoryUncheckedCreateWithoutTodosInputObjectSchema as CategoryUncheckedCreateWithoutTodosInputObjectSchema } from './CategoryUncheckedCreateWithoutTodosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CategoryCreateWithoutTodosInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutTodosInputObjectSchema)])
}).strict();
export const CategoryCreateOrConnectWithoutTodosInputObjectSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateOrConnectWithoutTodosInput>;
export const CategoryCreateOrConnectWithoutTodosInputObjectZodSchema = makeSchema();
