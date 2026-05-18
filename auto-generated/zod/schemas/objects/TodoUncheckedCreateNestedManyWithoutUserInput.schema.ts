import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TodoCreateWithoutUserInputObjectSchema as TodoCreateWithoutUserInputObjectSchema } from './TodoCreateWithoutUserInput.schema';
import { TodoUncheckedCreateWithoutUserInputObjectSchema as TodoUncheckedCreateWithoutUserInputObjectSchema } from './TodoUncheckedCreateWithoutUserInput.schema';
import { TodoCreateOrConnectWithoutUserInputObjectSchema as TodoCreateOrConnectWithoutUserInputObjectSchema } from './TodoCreateOrConnectWithoutUserInput.schema';
import { TodoCreateManyUserInputEnvelopeObjectSchema as TodoCreateManyUserInputEnvelopeObjectSchema } from './TodoCreateManyUserInputEnvelope.schema';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => TodoCreateWithoutUserInputObjectSchema), z.lazy(() => TodoCreateWithoutUserInputObjectSchema).array(), z.lazy(() => TodoUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => TodoCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => TodoCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => TodoCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => TodoWhereUniqueInputObjectSchema), z.lazy(() => TodoWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const TodoUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.TodoUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUncheckedCreateNestedManyWithoutUserInput>;
export const TodoUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
