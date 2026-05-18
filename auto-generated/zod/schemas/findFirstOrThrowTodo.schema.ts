import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TodoIncludeObjectSchema as TodoIncludeObjectSchema } from './objects/TodoInclude.schema';
import { TodoOrderByWithRelationInputObjectSchema as TodoOrderByWithRelationInputObjectSchema } from './objects/TodoOrderByWithRelationInput.schema';
import { TodoWhereInputObjectSchema as TodoWhereInputObjectSchema } from './objects/TodoWhereInput.schema';
import { TodoWhereUniqueInputObjectSchema as TodoWhereUniqueInputObjectSchema } from './objects/TodoWhereUniqueInput.schema';
import { TodoScalarFieldEnumSchema } from './enums/TodoScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TodoFindFirstOrThrowSelectSchema: z.ZodType<Prisma.TodoSelect> = z.object({
    id: z.boolean().optional(),
    content: z.boolean().optional(),
    completed: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    categoryId: z.boolean().optional(),
    category: z.boolean().optional(),
    priority: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.TodoSelect>;

export const TodoFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    content: z.boolean().optional(),
    completed: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    categoryId: z.boolean().optional(),
    category: z.boolean().optional(),
    priority: z.boolean().optional()
  }).strict();

export const TodoFindFirstOrThrowSchema: z.ZodType<Prisma.TodoFindFirstOrThrowArgs> = z.object({ select: TodoFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => TodoIncludeObjectSchema.optional()), orderBy: z.union([TodoOrderByWithRelationInputObjectSchema, TodoOrderByWithRelationInputObjectSchema.array()]).optional(), where: TodoWhereInputObjectSchema.optional(), cursor: TodoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TodoScalarFieldEnumSchema, TodoScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.TodoFindFirstOrThrowArgs>;

export const TodoFindFirstOrThrowZodSchema = z.object({ select: TodoFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => TodoIncludeObjectSchema.optional()), orderBy: z.union([TodoOrderByWithRelationInputObjectSchema, TodoOrderByWithRelationInputObjectSchema.array()]).optional(), where: TodoWhereInputObjectSchema.optional(), cursor: TodoWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([TodoScalarFieldEnumSchema, TodoScalarFieldEnumSchema.array()]).optional() }).strict();