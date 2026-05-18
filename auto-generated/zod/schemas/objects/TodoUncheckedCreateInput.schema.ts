import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritySchema } from '../enums/Priority.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  completed: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  userId: z.string(),
  categoryId: z.string().optional().nullable(),
  priority: PrioritySchema.optional()
}).strict();
export const TodoUncheckedCreateInputObjectSchema: z.ZodType<Prisma.TodoUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUncheckedCreateInput>;
export const TodoUncheckedCreateInputObjectZodSchema = makeSchema();
