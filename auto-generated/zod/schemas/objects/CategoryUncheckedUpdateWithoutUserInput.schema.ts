import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { TodoUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema as TodoUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema } from './TodoUncheckedUpdateManyWithoutCategoryNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  todos: z.lazy(() => TodoUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema).optional()
}).strict();
export const CategoryUncheckedUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.CategoryUncheckedUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryUncheckedUpdateWithoutUserInput>;
export const CategoryUncheckedUpdateWithoutUserInputObjectZodSchema = makeSchema();
