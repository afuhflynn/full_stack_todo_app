import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutCategoriesInputObjectSchema as UserCreateWithoutCategoriesInputObjectSchema } from './UserCreateWithoutCategoriesInput.schema';
import { UserUncheckedCreateWithoutCategoriesInputObjectSchema as UserUncheckedCreateWithoutCategoriesInputObjectSchema } from './UserUncheckedCreateWithoutCategoriesInput.schema';
import { UserCreateOrConnectWithoutCategoriesInputObjectSchema as UserCreateOrConnectWithoutCategoriesInputObjectSchema } from './UserCreateOrConnectWithoutCategoriesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCategoriesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCategoriesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCategoriesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutCategoriesInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCategoriesInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutCategoriesInput>;
export const UserCreateNestedOneWithoutCategoriesInputObjectZodSchema = makeSchema();
