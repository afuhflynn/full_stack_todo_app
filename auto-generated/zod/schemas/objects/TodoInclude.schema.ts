import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { CategoryArgsObjectSchema as CategoryArgsObjectSchema } from './CategoryArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  category: z.union([z.boolean(), z.lazy(() => CategoryArgsObjectSchema)]).optional()
}).strict();
export const TodoIncludeObjectSchema: z.ZodType<Prisma.TodoInclude> = makeSchema() as unknown as z.ZodType<Prisma.TodoInclude>;
export const TodoIncludeObjectZodSchema = makeSchema();
