import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutCategoriesInputObjectSchema as UserCreateWithoutCategoriesInputObjectSchema } from './UserCreateWithoutCategoriesInput.schema';
import { UserUncheckedCreateWithoutCategoriesInputObjectSchema as UserUncheckedCreateWithoutCategoriesInputObjectSchema } from './UserUncheckedCreateWithoutCategoriesInput.schema';
import { UserCreateOrConnectWithoutCategoriesInputObjectSchema as UserCreateOrConnectWithoutCategoriesInputObjectSchema } from './UserCreateOrConnectWithoutCategoriesInput.schema';
import { UserUpsertWithoutCategoriesInputObjectSchema as UserUpsertWithoutCategoriesInputObjectSchema } from './UserUpsertWithoutCategoriesInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutCategoriesInputObjectSchema as UserUpdateToOneWithWhereWithoutCategoriesInputObjectSchema } from './UserUpdateToOneWithWhereWithoutCategoriesInput.schema';
import { UserUpdateWithoutCategoriesInputObjectSchema as UserUpdateWithoutCategoriesInputObjectSchema } from './UserUpdateWithoutCategoriesInput.schema';
import { UserUncheckedUpdateWithoutCategoriesInputObjectSchema as UserUncheckedUpdateWithoutCategoriesInputObjectSchema } from './UserUncheckedUpdateWithoutCategoriesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCategoriesInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCategoriesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCategoriesInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCategoriesInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCategoriesInputObjectSchema), z.lazy(() => UserUpdateWithoutCategoriesInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCategoriesInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutCategoriesNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCategoriesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutCategoriesNestedInput>;
export const UserUpdateOneRequiredWithoutCategoriesNestedInputObjectZodSchema = makeSchema();
