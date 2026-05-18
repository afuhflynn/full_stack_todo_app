import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoCreateWithoutCategoryInputObjectSchema as TodoCreateWithoutCategoryInputObjectSchema } from './TodoCreateWithoutCategoryInput.schema';
import { TodoUncheckedCreateWithoutCategoryInputObjectSchema as TodoUncheckedCreateWithoutCategoryInputObjectSchema } from './TodoUncheckedCreateWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TodoCreateWithoutCategoryInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutCategoryInputObjectSchema)])
}).strict();
export const TodoCreateOrConnectWithoutCategoryInputObjectSchema: z.ZodType<Prisma.TodoCreateOrConnectWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoCreateOrConnectWithoutCategoryInput>;
export const TodoCreateOrConnectWithoutCategoryInputObjectZodSchema = makeSchema();
