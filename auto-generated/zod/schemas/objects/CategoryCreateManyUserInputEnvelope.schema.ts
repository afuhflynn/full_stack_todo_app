import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryCreateManyUserInputObjectSchema as CategoryCreateManyUserInputObjectSchema } from './CategoryCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => CategoryCreateManyUserInputObjectSchema), z.lazy(() => CategoryCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const CategoryCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.CategoryCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateManyUserInputEnvelope>;
export const CategoryCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
