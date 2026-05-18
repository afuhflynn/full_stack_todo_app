import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const categoryscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CategoryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CategoryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CategoryScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CategoryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CategoryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const CategoryScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CategoryScalarWhereWithAggregatesInput> = categoryscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CategoryScalarWhereWithAggregatesInput>;
export const CategoryScalarWhereWithAggregatesInputObjectZodSchema = categoryscalarwherewithaggregatesinputSchema;
