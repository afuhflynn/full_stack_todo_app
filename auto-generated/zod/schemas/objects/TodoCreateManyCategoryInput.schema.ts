import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritySchema } from '../enums/Priority.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  completed: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string(),
  priority: PrioritySchema.optional()
}).strict();
export const TodoCreateManyCategoryInputObjectSchema: z.ZodType<Prisma.TodoCreateManyCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoCreateManyCategoryInput>;
export const TodoCreateManyCategoryInputObjectZodSchema = makeSchema();
