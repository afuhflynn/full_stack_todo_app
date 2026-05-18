import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCountOutputTypeCountSessionsArgsObjectSchema as UserCountOutputTypeCountSessionsArgsObjectSchema } from './UserCountOutputTypeCountSessionsArgs.schema';
import { UserCountOutputTypeCountAccountsArgsObjectSchema as UserCountOutputTypeCountAccountsArgsObjectSchema } from './UserCountOutputTypeCountAccountsArgs.schema';
import { UserCountOutputTypeCountTodosArgsObjectSchema as UserCountOutputTypeCountTodosArgsObjectSchema } from './UserCountOutputTypeCountTodosArgs.schema';
import { UserCountOutputTypeCountCategoriesArgsObjectSchema as UserCountOutputTypeCountCategoriesArgsObjectSchema } from './UserCountOutputTypeCountCategoriesArgs.schema'

const makeSchema = () => z.object({
  sessions: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountSessionsArgsObjectSchema)]).optional(),
  accounts: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountAccountsArgsObjectSchema)]).optional(),
  todos: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountTodosArgsObjectSchema)]).optional(),
  categories: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeCountCategoriesArgsObjectSchema)]).optional()
}).strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
