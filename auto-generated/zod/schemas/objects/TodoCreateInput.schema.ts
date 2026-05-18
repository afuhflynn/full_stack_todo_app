import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritySchema } from '../enums/Priority.schema';
import { UserCreateNestedOneWithoutTodosInputObjectSchema as UserCreateNestedOneWithoutTodosInputObjectSchema } from './UserCreateNestedOneWithoutTodosInput.schema';
import { CategoryCreateNestedOneWithoutTodosInputObjectSchema as CategoryCreateNestedOneWithoutTodosInputObjectSchema } from './CategoryCreateNestedOneWithoutTodosInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  completed: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  priority: PrioritySchema.optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutTodosInputObjectSchema),
  category: z.lazy(() => CategoryCreateNestedOneWithoutTodosInputObjectSchema).optional()
}).strict();
export const TodoCreateInputObjectSchema: z.ZodType<Prisma.TodoCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoCreateInput>;
export const TodoCreateInputObjectZodSchema = makeSchema();
