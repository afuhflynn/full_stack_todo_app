import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritySchema } from '../enums/Priority.schema';
import { UserCreateNestedOneWithoutTodosInputObjectSchema as UserCreateNestedOneWithoutTodosInputObjectSchema } from './UserCreateNestedOneWithoutTodosInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  content: z.string(),
  completed: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  priority: PrioritySchema.optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutTodosInputObjectSchema)
}).strict();
export const TodoCreateWithoutCategoryInputObjectSchema: z.ZodType<Prisma.TodoCreateWithoutCategoryInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoCreateWithoutCategoryInput>;
export const TodoCreateWithoutCategoryInputObjectZodSchema = makeSchema();
