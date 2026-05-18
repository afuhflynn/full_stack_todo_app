import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutTodosInputObjectSchema as UserCreateWithoutTodosInputObjectSchema } from './UserCreateWithoutTodosInput.schema';
import { UserUncheckedCreateWithoutTodosInputObjectSchema as UserUncheckedCreateWithoutTodosInputObjectSchema } from './UserUncheckedCreateWithoutTodosInput.schema';
import { UserCreateOrConnectWithoutTodosInputObjectSchema as UserCreateOrConnectWithoutTodosInputObjectSchema } from './UserCreateOrConnectWithoutTodosInput.schema';
import { UserUpsertWithoutTodosInputObjectSchema as UserUpsertWithoutTodosInputObjectSchema } from './UserUpsertWithoutTodosInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutTodosInputObjectSchema as UserUpdateToOneWithWhereWithoutTodosInputObjectSchema } from './UserUpdateToOneWithWhereWithoutTodosInput.schema';
import { UserUpdateWithoutTodosInputObjectSchema as UserUpdateWithoutTodosInputObjectSchema } from './UserUpdateWithoutTodosInput.schema';
import { UserUncheckedUpdateWithoutTodosInputObjectSchema as UserUncheckedUpdateWithoutTodosInputObjectSchema } from './UserUncheckedUpdateWithoutTodosInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutTodosInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTodosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTodosInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutTodosInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutTodosInputObjectSchema), z.lazy(() => UserUpdateWithoutTodosInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutTodosInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutTodosNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTodosNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutTodosNestedInput>;
export const UserUpdateOneRequiredWithoutTodosNestedInputObjectZodSchema = makeSchema();
