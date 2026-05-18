import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoUpdateWithoutCategoryInputObjectSchema as TodoUpdateWithoutCategoryInputObjectSchema } from './TodoUpdateWithoutCategoryInput.schema';
import { TodoUncheckedUpdateWithoutCategoryInputObjectSchema as TodoUncheckedUpdateWithoutCategoryInputObjectSchema } from './TodoUncheckedUpdateWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TodoUpdateWithoutCategoryInputObjectSchema), z.lazy(() => TodoUncheckedUpdateWithoutCategoryInputObjectSchema)])
}).strict();
export const TodoUpdateWithWhereUniqueWithoutCategoryInputObjectSchema: z.ZodType<Prisma.TodoUpdateWithWhereUniqueWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpdateWithWhereUniqueWithoutCategoryInput>;
export const TodoUpdateWithWhereUniqueWithoutCategoryInputObjectZodSchema = makeSchema();
