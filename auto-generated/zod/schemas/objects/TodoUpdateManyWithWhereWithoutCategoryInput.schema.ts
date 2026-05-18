import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TodoScalarWhereInputObjectSchema as TodoScalarWhereInputObjectSchema } from './TodoScalarWhereInput.schema';
import { TodoUpdateManyMutationInputObjectSchema as TodoUpdateManyMutationInputObjectSchema } from './TodoUpdateManyMutationInput.schema';
import { TodoUncheckedUpdateManyWithoutCategoryInputObjectSchema as TodoUncheckedUpdateManyWithoutCategoryInputObjectSchema } from './TodoUncheckedUpdateManyWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => TodoScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => TodoUpdateManyMutationInputObjectSchema), z.lazy(() => TodoUncheckedUpdateManyWithoutCategoryInputObjectSchema)])
}).strict();
export const TodoUpdateManyWithWhereWithoutCategoryInputObjectSchema: z.ZodType<Prisma.TodoUpdateManyWithWhereWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpdateManyWithWhereWithoutCategoryInput>;
export const TodoUpdateManyWithWhereWithoutCategoryInputObjectZodSchema = makeSchema();
