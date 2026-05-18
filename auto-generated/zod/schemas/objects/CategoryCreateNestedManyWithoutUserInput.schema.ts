import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryCreateWithoutUserInputObjectSchema as CategoryCreateWithoutUserInputObjectSchema } from './CategoryCreateWithoutUserInput.schema';
import { CategoryUncheckedCreateWithoutUserInputObjectSchema as CategoryUncheckedCreateWithoutUserInputObjectSchema } from './CategoryUncheckedCreateWithoutUserInput.schema';
import { CategoryCreateOrConnectWithoutUserInputObjectSchema as CategoryCreateOrConnectWithoutUserInputObjectSchema } from './CategoryCreateOrConnectWithoutUserInput.schema';
import { CategoryCreateManyUserInputEnvelopeObjectSchema as CategoryCreateManyUserInputEnvelopeObjectSchema } from './CategoryCreateManyUserInputEnvelope.schema';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CategoryCreateWithoutUserInputObjectSchema), z.lazy(() => CategoryCreateWithoutUserInputObjectSchema).array(), z.lazy(() => CategoryUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CategoryCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => CategoryCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CategoryCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CategoryWhereUniqueInputObjectSchema), z.lazy(() => CategoryWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CategoryCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.CategoryCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateNestedManyWithoutUserInput>;
export const CategoryCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
