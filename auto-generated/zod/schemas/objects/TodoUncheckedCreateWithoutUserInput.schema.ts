import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritySchema } from '../enums/Priority.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  completed: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  categoryId: z.string().optional().nullable(),
  priority: PrioritySchema.optional()
}).strict();
export const TodoUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.TodoUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUncheckedCreateWithoutUserInput>;
export const TodoUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
