import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateWithoutTodosInputObjectSchema as UserUpdateWithoutTodosInputObjectSchema } from './UserUpdateWithoutTodosInput.schema';
import { UserUncheckedUpdateWithoutTodosInputObjectSchema as UserUncheckedUpdateWithoutTodosInputObjectSchema } from './UserUncheckedUpdateWithoutTodosInput.schema';
import { UserCreateWithoutTodosInputObjectSchema as UserCreateWithoutTodosInputObjectSchema } from './UserCreateWithoutTodosInput.schema';
import { UserUncheckedCreateWithoutTodosInputObjectSchema as UserUncheckedCreateWithoutTodosInputObjectSchema } from './UserUncheckedCreateWithoutTodosInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutTodosInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTodosInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutTodosInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTodosInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutTodosInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutTodosInput>;
export const UserUpsertWithoutTodosInputObjectZodSchema = makeSchema();
