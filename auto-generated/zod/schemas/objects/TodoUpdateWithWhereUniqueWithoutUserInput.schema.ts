import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './TodoWhereUniqueInput.schema';
import { TodoUpdateWithoutUserInputObjectSchema as TodoUpdateWithoutUserInputObjectSchema } from './TodoUpdateWithoutUserInput.schema';
import { TodoUncheckedUpdateWithoutUserInputObjectSchema as TodoUncheckedUpdateWithoutUserInputObjectSchema } from './TodoUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => TodoUpdateWithoutUserInputObjectSchema), z.lazy(() => TodoUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const TodoUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.TodoUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpdateWithWhereUniqueWithoutUserInput>;
export const TodoUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
