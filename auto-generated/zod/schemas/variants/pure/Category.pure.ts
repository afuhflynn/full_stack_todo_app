import * as z from 'zod';
// prettier-ignore
export const CategoryModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    userId: z.string(),
    user: z.unknown(),
    todos: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type CategoryPureType = z.infer<typeof CategoryModelSchema>;
