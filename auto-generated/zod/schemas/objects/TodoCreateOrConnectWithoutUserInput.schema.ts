import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoCreateWithoutUserInputObjectSchema as TodoCreateWithoutUserInputObjectSchema } from './TodoCreateWithoutUserInput.schema';
import { TodoUncheckedCreateWithoutUserInputObjectSchema as TodoUncheckedCreateWithoutUserInputObjectSchema } from './TodoUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => TodoCreateWithoutUserInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const TodoCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.TodoCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoCreateOrConnectWithoutUserInput>;
export const TodoCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
