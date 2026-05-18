import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { TodoCreateManyUserInputObjectSchema as TodoCreateManyUserInputObjectSchema } from './TodoCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => TodoCreateManyUserInputObjectSchema), z.lazy(() => TodoCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const TodoCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.TodoCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.TodoCreateManyUserInputEnvelope>;
export const TodoCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
