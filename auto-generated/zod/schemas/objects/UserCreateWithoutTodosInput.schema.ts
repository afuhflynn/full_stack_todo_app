import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SessionCreateNestedManyWithoutUserInputObjectSchema as SessionCreateNestedManyWithoutUserInputObjectSchema } from './SessionCreateNestedManyWithoutUserInput.schema';
import { AccountCreateNestedManyWithoutUserInputObjectSchema as AccountCreateNestedManyWithoutUserInputObjectSchema } from './AccountCreateNestedManyWithoutUserInput.schema';
import { CategoryCreateNestedManyWithoutUserInputObjectSchema as CategoryCreateNestedManyWithoutUserInputObjectSchema } from './CategoryCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  emailVerified: z.boolean().optional(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
  categories: z.lazy(() => CategoryCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutTodosInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutTodosInput>;
export const UserCreateWithoutTodosInputObjectZodSchema = makeSchema();
