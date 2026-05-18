import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { TodoWhereInputObjectSchema as TodoWhereInputObjectSchema } from './objects/TodoWhereInput.schema';
import { TodoOrderByWithAggregationInputObjectSchema as TodoOrderByWithAggregationInputObjectSchema } from './objects/TodoOrderByWithAggregationInput.schema';
import { TodoScalarWhereWithAggregatesInputObjectSchema as TodoScalarWhereWithAggregatesInputObjectSchema } from './objects/TodoScalarWhereWithAggregatesInput.schema';
import { TodoScalarFieldEnumSchema } from './enums/TodoScalarFieldEnum.schema';
import { TodoCountAggregateInputObjectSchema as TodoCountAggregateInputObjectSchema } from './objects/TodoCountAggregateInput.schema';
import { TodoMinAggregateInputObjectSchema as TodoMinAggregateInputObjectSchema } from './objects/TodoMinAggregateInput.schema';
import { TodoMaxAggregateInputObjectSchema as TodoMaxAggregateInputObjectSchema } from './objects/TodoMaxAggregateInput.schema';

export const TodoGroupBySchema: z.ZodType<Prisma.TodoGroupByArgs> = z.object({ where: TodoWhereInputObjectSchema.optional(), orderBy: z.union([TodoOrderByWithAggregationInputObjectSchema, TodoOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TodoScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TodoScalarFieldEnumSchema), _count: z.union([ z.literal(true), TodoCountAggregateInputObjectSchema ]).optional(), _min: TodoMinAggregateInputObjectSchema.optional(), _max: TodoMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.TodoGroupByArgs>;

export const TodoGroupByZodSchema = z.object({ where: TodoWhereInputObjectSchema.optional(), orderBy: z.union([TodoOrderByWithAggregationInputObjectSchema, TodoOrderByWithAggregationInputObjectSchema.array()]).optional(), having: TodoScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(TodoScalarFieldEnumSchema), _count: z.union([ z.literal(true), TodoCountAggregateInputObjectSchema ]).optional(), _min: TodoMinAggregateInputObjectSchema.optional(), _max: TodoMaxAggregateInputObjectSchema.optional() }).strict();