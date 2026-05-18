import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CategoryWhereUniqueInputObjectSchema as CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryCreateWithoutUserInputObjectSchema as CategoryCreateWithoutUserInputObjectSchema } from './CategoryCreateWithoutUserInput.schema';
import { CategoryUncheckedCreateWithoutUserInputObjectSchema as CategoryUncheckedCreateWithoutUserInputObjectSchema } from './CategoryUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CategoryCreateWithoutUserInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const CategoryCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CategoryCreateOrConnectWithoutUserInput>;
export const CategoryCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
