import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { BoolFieldUpdateOperationsInputObjectSchema as BoolFieldUpdateOperationsInputObjectSchema } from './BoolFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { PrioritySchema } from '../enums/Priority.schema';
import { EnumPriorityFieldUpdateOperationsInputObjectSchema as EnumPriorityFieldUpdateOperationsInputObjectSchema } from './EnumPriorityFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutTodosNestedInputObjectSchema as UserUpdateOneRequiredWithoutTodosNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutTodosNestedInput.schema';
import { CategoryUpdateOneWithoutTodosNestedInputObjectSchema as CategoryUpdateOneWithoutTodosNestedInputObjectSchema } from './CategoryUpdateOneWithoutTodosNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  completed: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  priority: z.union([PrioritySchema, z.lazy(() => EnumPriorityFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutTodosNestedInputObjectSchema).optional(),
  category: z.lazy(() => CategoryUpdateOneWithoutTodosNestedInputObjectSchema).optional()
}).strict();
export const TodoUpdateInputObjectSchema: z.ZodType<Prisma.TodoUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.TodoUpdateInput>;
export const TodoUpdateInputObjectZodSchema = makeSchema();
