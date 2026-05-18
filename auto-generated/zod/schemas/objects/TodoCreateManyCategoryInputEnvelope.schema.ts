import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TodoCreateManyCategoryInputObjectSchema as TodoCreateManyCategoryInputObjectSchema } from './TodoCreateManyCategoryInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TodoCreateManyCategoryInputObjectSchema), z.lazy(() => TodoCreateManyCategoryInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TodoCreateManyCategoryInputEnvelopeObjectSchema: z.ZodType<Prisma.TodoCreateManyCategoryInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TodoCreateManyCategoryInputEnvelope>;
export const TodoCreateManyCategoryInputEnvelopeObjectZodSchema = makeSchema();
