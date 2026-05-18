import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritySchema } from '../enums/Priority.schema';
import { CategoryCreateNestedOneWithoutTodosInputObjectSchema as CategoryCreateNestedOneWithoutTodosInputObjectSchema } from './CategoryCreateNestedOneWithoutTodosInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  completed: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  priority: PrioritySchema.optional(),
  category: z.lazy(() => CategoryCreateNestedOneWithoutTodosInputObjectSchema).optional()
}).strict();
export const TodoCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.TodoCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoCreateWithoutUserInput>;
export const TodoCreateWithoutUserInputObjectZodSchema = makeSchema();
