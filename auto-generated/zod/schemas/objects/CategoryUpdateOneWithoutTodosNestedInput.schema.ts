import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryCreateWithoutTodosInputObjectSchema as CategoryCreateWithoutTodosInputObjectSchema } from './CategoryCreateWithoutTodosInput.schema';
import { CategoryUncheckedCreateWithoutTodosInputObjectSchema as CategoryUncheckedCreateWithoutTodosInputObjectSchema } from './CategoryUncheckedCreateWithoutTodosInput.schema';
import { CategoryCreateOrConnectWithoutTodosInputObjectSchema as CategoryCreateOrConnectWithoutTodosInputObjectSchema } from './CategoryCreateOrConnectWithoutTodosInput.schema';
import { CategoryUpsertWithoutTodosInputObjectSchema as CategoryUpsertWithoutTodosInputObjectSchema } from './CategoryUpsertWithoutTodosInput.schema';
import { CategoryWhereInputObjectSchema as CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryUpdateToOneWithWhereWithoutTodosInputObjectSchema as CategoryUpdateToOneWithWhereWithoutTodosInputObjectSchema } from './CategoryUpdateToOneWithWhereWithoutTodosInput.schema';
import { CategoryUpdateWithoutTodosInputObjectSchema as CategoryUpdateWithoutTodosInputObjectSchema } from './CategoryUpdateWithoutTodosInput.schema';
import { CategoryUncheckedUpdateWithoutTodosInputObjectSchema as CategoryUncheckedUpdateWithoutTodosInputObjectSchema } from './CategoryUncheckedUpdateWithoutTodosInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CategoryCreateWithoutTodosInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutTodosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => CategoryCreateOrConnectWithoutTodosInputObjectSchema).optional(),
  upsert: z.lazy(() => CategoryUpsertWithoutTodosInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => CategoryWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => CategoryWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => CategoryUpdateToOneWithWhereWithoutTodosInputObjectSchema), z.lazy(() => CategoryUpdateWithoutTodosInputObjectSchema), z.lazy(() => CategoryUncheckedUpdateWithoutTodosInputObjectSchema)]).optional()
}).strict();
export const CategoryUpdateOneWithoutTodosNestedInputObjectSchema: z.ZodType<Prisma.CategoryUpdateOneWithoutTodosNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpdateOneWithoutTodosNestedInput>;
export const CategoryUpdateOneWithoutTodosNestedInputObjectZodSchema = makeSchema();
