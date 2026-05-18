import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutTodosInputObjectSchema as UserUpdateWithoutTodosInputObjectSchema } from './UserUpdateWithoutTodosInput.schema';
import { UserUncheckedUpdateWithoutTodosInputObjectSchema as UserUncheckedUpdateWithoutTodosInputObjectSchema } from './UserUncheckedUpdateWithoutTodosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutTodosInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTodosInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutTodosInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTodosInput>;
export const UserUpdateToOneWithWhereWithoutTodosInputObjectZodSchema = makeSchema();
