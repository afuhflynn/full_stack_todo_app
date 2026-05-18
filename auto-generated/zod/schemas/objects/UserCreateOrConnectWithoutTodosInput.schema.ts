import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutTodosInputObjectSchema as UserCreateWithoutTodosInputObjectSchema } from './UserCreateWithoutTodosInput.schema';
import { UserUncheckedCreateWithoutTodosInputObjectSchema as UserUncheckedCreateWithoutTodosInputObjectSchema } from './UserUncheckedCreateWithoutTodosInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutTodosInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutTodosInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutTodosInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTodosInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutTodosInput>;
export const UserCreateOrConnectWithoutTodosInputObjectZodSchema = makeSchema();
