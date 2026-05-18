import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoUpdateWithoutUserInputObjectSchema as TodoUpdateWithoutUserInputObjectSchema } from './TodoUpdateWithoutUserInput.schema';
import { TodoUncheckedUpdateWithoutUserInputObjectSchema as TodoUncheckedUpdateWithoutUserInputObjectSchema } from './TodoUncheckedUpdateWithoutUserInput.schema';
import { TodoCreateWithoutUserInputObjectSchema as TodoCreateWithoutUserInputObjectSchema } from './TodoCreateWithoutUserInput.schema';
import { TodoUncheckedCreateWithoutUserInputObjectSchema as TodoUncheckedCreateWithoutUserInputObjectSchema } from './TodoUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => TodoUpdateWithoutUserInputObjectSchema), z.lazy(() => TodoUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => TodoCreateWithoutUserInputObjectSchema), z.lazy(() => TodoUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const TodoUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.TodoUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpsertWithWhereUniqueWithoutUserInput>;
export const TodoUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
