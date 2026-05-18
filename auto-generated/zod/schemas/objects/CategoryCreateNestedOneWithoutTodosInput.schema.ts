import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryCreateWithoutTodosInputObjectSchema as CategoryCreateWithoutTodosInputObjectSchema } from './CategoryCreateWithoutTodosInput.schema';
import { CategoryUncheckedCreateWithoutTodosInputObjectSchema as CategoryUncheckedCreateWithoutTodosInputObjectSchema } from './CategoryUncheckedCreateWithoutTodosInput.schema';
import { CategoryCreateOrConnectWithoutTodosInputObjectSchema as CategoryCreateOrConnectWithoutTodosInputObjectSchema } from './CategoryCreateOrConnectWithoutTodosInput.schema';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CategoryCreateWithoutTodosInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutTodosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutTodosInputObjectSchema).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional()
}).strict();
export const CategoryCreateNestedOneWithoutTodosInputObjectSchema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateNestedOneWithoutTodosInput>;
export const CategoryCreateNestedOneWithoutTodosInputObjectZodSchema = makeSchema();
