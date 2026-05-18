import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TodoScalarWhereInputObjectSchema as TodoScalarWhereInputObjectSchema } from './TodoScalarWhereInput.schema';
import { TodoUpdateManyMutationInputObjectSchema as TodoUpdateManyMutationInputObjectSchema } from './TodoUpdateManyMutationInput.schema';
import { TodoUncheckedUpdateManyWithoutUserInputObjectSchema as TodoUncheckedUpdateManyWithoutUserInputObjectSchema } from './TodoUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TodoUpdateManyMutationInputObjectSchema), z.lazy(() => TodoUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const TodoUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<Prisma.TodoUpdateManyWithWhereWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpdateManyWithWhereWithoutUserInput>;
export const TodoUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
