import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutTodosInputObjectSchema as UserCreateWithoutTodosInputObjectSchema } from './UserCreateWithoutTodosInput.schema';
import { UserUncheckedCreateWithoutTodosInputObjectSchema as UserUncheckedCreateWithoutTodosInputObjectSchema } from './UserUncheckedCreateWithoutTodosInput.schema';
import { UserCreateOrConnectWithoutTodosInputObjectSchema as UserCreateOrConnectWithoutTodosInputObjectSchema } from './UserCreateOrConnectWithoutTodosInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutTodosInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTodosInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTodosInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutTodosInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutTodosInput>;
export const UserCreateNestedOneWithoutTodosInputObjectZodSchema = makeSchema();
