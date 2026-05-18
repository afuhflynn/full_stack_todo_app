import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutCategoriesNestedInputObjectSchema as UserUpdateOneRequiredWithoutCategoriesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutCategoriesNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCategoriesNestedInputObjectSchema).optional()
}).strict();
export const CategoryUpdateWithoutTodosInputObjectSchema: z.ZodType<Prisma.CategoryUpdateWithoutTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUpdateWithoutTodosInput>;
export const CategoryUpdateWithoutTodosInputObjectZodSchema = makeSchema();
