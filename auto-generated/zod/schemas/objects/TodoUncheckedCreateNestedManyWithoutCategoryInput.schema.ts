import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TodoCreateWithoutCategoryInputObjectSchema as TodoCreateWithoutCategoryInputObjectSchema } from './TodoCreateWithoutCategoryInput.schema';
import { TodoUncheckedCreateWithoutCategoryInputObjectSchema as TodoUncheckedCreateWithoutCategoryInputObjectSchema } from './TodoUncheckedCreateWithoutCategoryInput.schema';
import { TodoCreateOrConnectWithoutCategoryInputObjectSchema as TodoCreateOrConnectWithoutCategoryInputObjectSchema } from './TodoCreateOrConnectWithoutCategoryInput.schema';
import { TodoCreateManyCategoryInputEnvelopeObjectSchema as TodoCreateManyCategoryInputEnvelopeObjectSchema } from './TodoCreateManyCategoryInputEnvelope.schema';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TodoCreateWithoutCategoryInputObjectSchema), z.lazy(() => TodoCreateWithoutCategoryInputObjectSchema).array(), z.lazy(() => TodoUncheckedCreateWithoutCategoryInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutCategoryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TodoCreateOrConnectWithoutCategoryInputObjectSchema), z.lazy(() => TodoCreateOrConnectWithoutCategoryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TodoCreateManyCategoryInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TodoUncheckedCreateNestedManyWithoutCategoryInputObjectSchema: z.ZodType<Prisma.TodoUncheckedCreateNestedManyWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUncheckedCreateNestedManyWithoutCategoryInput>;
export const TodoUncheckedCreateNestedManyWithoutCategoryInputObjectZodSchema = makeSchema();
