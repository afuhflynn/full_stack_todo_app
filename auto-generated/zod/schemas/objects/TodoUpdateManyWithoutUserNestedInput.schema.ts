import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TodoCreateWithoutUserInputObjectSchema as TodoCreateWithoutUserInputObjectSchema } from './TodoCreateWithoutUserInput.schema';
import { TodoUncheckedCreateWithoutUserInputObjectSchema as TodoUncheckedCreateWithoutUserInputObjectSchema } from './TodoUncheckedCreateWithoutUserInput.schema';
import { TodoCreateOrConnectWithoutUserInputObjectSchema as TodoCreateOrConnectWithoutUserInputObjectSchema } from './TodoCreateOrConnectWithoutUserInput.schema';
import { TodoUpsertWithWhereUniqueWithoutUserInputObjectSchema as TodoUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './TodoUpsertWithWhereUniqueWithoutUserInput.schema';
import { TodoCreateManyUserInputEnvelopeObjectSchema as TodoCreateManyUserInputEnvelopeObjectSchema } from './TodoCreateManyUserInputEnvelope.schema';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoUpdateWithWhereUniqueWithoutUserInputObjectSchema as TodoUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './TodoUpdateWithWhereUniqueWithoutUserInput.schema';
import { TodoUpdateManyWithWhereWithoutUserInputObjectSchema as TodoUpdateManyWithWhereWithoutUserInputObjectSchema } from './TodoUpdateManyWithWhereWithoutUserInput.schema';
import { TodoScalarWhereInputObjectSchema as TodoScalarWhereInputObjectSchema } from './TodoScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TodoCreateWithoutUserInputObjectSchema), z.lazy(() => TodoCreateWithoutUserInputObjectSchema).array(), z.lazy(() => TodoUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TodoCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => TodoCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => TodoUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => TodoUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TodoCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => TodoUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => TodoUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => TodoUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => TodoUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => TodoScalarWhereInputObjectSchema), z.lazy(() => TodoScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const TodoUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.TodoUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpdateManyWithoutUserNestedInput>;
export const TodoUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
