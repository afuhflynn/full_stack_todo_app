import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TodoCreateWithoutCategoryInputObjectSchema as TodoCreateWithoutCategoryInputObjectSchema } from './TodoCreateWithoutCategoryInput.schema';
import { TodoUncheckedCreateWithoutCategoryInputObjectSchema as TodoUncheckedCreateWithoutCategoryInputObjectSchema } from './TodoUncheckedCreateWithoutCategoryInput.schema';
import { TodoCreateOrConnectWithoutCategoryInputObjectSchema as TodoCreateOrConnectWithoutCategoryInputObjectSchema } from './TodoCreateOrConnectWithoutCategoryInput.schema';
import { TodoUpsertWithWhereUniqueWithoutCategoryInputObjectSchema as TodoUpsertWithWhereUniqueWithoutCategoryInputObjectSchema } from './TodoUpsertWithWhereUniqueWithoutCategoryInput.schema';
import { TodoCreateManyCategoryInputEnvelopeObjectSchema as TodoCreateManyCategoryInputEnvelopeObjectSchema } from './TodoCreateManyCategoryInputEnvelope.schema';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoUpdateWithWhereUniqueWithoutCategoryInputObjectSchema as TodoUpdateWithWhereUniqueWithoutCategoryInputObjectSchema } from './TodoUpdateWithWhereUniqueWithoutCategoryInput.schema';
import { TodoUpdateManyWithWhereWithoutCategoryInputObjectSchema as TodoUpdateManyWithWhereWithoutCategoryInputObjectSchema } from './TodoUpdateManyWithWhereWithoutCategoryInput.schema';
import { TodoScalarWhereInputObjectSchema as TodoScalarWhereInputObjectSchema } from './TodoScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TodoCreateWithoutCategoryInputObjectSchema), z.lazy(() => TodoCreateWithoutCategoryInputObjectSchema).array(), z.lazy(() => TodoUncheckedCreateWithoutCategoryInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutCategoryInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TodoCreateOrConnectWithoutCategoryInputObjectSchema), z.lazy(() => TodoCreateOrConnectWithoutCategoryInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TodoUpsertWithWhereUniqueWithoutCategoryInputObjectSchema), z.lazy(() => TodoUpsertWithWhereUniqueWithoutCategoryInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TodoCreateManyCategoryInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TodoUpdateWithWhereUniqueWithoutCategoryInputObjectSchema), z.lazy(() => TodoUpdateWithWhereUniqueWithoutCategoryInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TodoUpdateManyWithWhereWithoutCategoryInputObjectSchema), z.lazy(() => TodoUpdateManyWithWhereWithoutCategoryInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TodoScalarWhereInputObjectSchema), z.lazy(() => TodoScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TodoUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema: z.ZodType<Prisma.TodoUncheckedUpdateManyWithoutCategoryNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUncheckedUpdateManyWithoutCategoryNestedInput>;
export const TodoUncheckedUpdateManyWithoutCategoryNestedInputObjectZodSchema = makeSchema();
