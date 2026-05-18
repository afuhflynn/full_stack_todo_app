import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryCountOutputTypeCountTodosArgsObjectSchema as CategoryCountOutputTypeCountTodosArgsObjectSchema } from './CategoryCountOutputTypeCountTodosArgs.schema'

const makeSchema = () => z.object({
  todos: z.union([z.boolean(), z.lazy(() => CategoryCountOutputTypeCountTodosArgsObjectSchema)]).optional()
}).strict();
export const CategoryCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.CategoryCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCountOutputTypeSelect>;
export const CategoryCountOutputTypeSelectObjectZodSchema = makeSchema();
