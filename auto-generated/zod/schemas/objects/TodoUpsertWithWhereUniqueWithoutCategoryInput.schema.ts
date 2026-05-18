import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoUpdateWithoutCategoryInputObjectSchema as TodoUpdateWithoutCategoryInputObjectSchema } from './TodoUpdateWithoutCategoryInput.schema';
import { TodoUncheckedUpdateWithoutCategoryInputObjectSchema as TodoUncheckedUpdateWithoutCategoryInputObjectSchema } from './TodoUncheckedUpdateWithoutCategoryInput.schema';
import { TodoCreateWithoutCategoryInputObjectSchema as TodoCreateWithoutCategoryInputObjectSchema } from './TodoCreateWithoutCategoryInput.schema';
import { TodoUncheckedCreateWithoutCategoryInputObjectSchema as TodoUncheckedCreateWithoutCategoryInputObjectSchema } from './TodoUncheckedCreateWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TodoUpdateWithoutCategoryInputObjectSchema), z.lazy(() => TodoUncheckedUpdateWithoutCategoryInputObjectSchema)]),
  create: z.union([z.lazy(() => TodoCreateWithoutCategoryInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutCategoryInputObjectSchema)])
}).strict();
export const TodoUpsertWithWhereUniqueWithoutCategoryInputObjectSchema: z.ZodType<Prisma.TodoUpsertWithWhereUniqueWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpsertWithWhereUniqueWithoutCategoryInput>;
export const TodoUpsertWithWhereUniqueWithoutCategoryInputObjectZodSchema = makeSchema();
