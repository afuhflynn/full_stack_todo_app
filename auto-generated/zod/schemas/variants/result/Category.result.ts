import * as z from 'zod';
// prettier-ignore
export const CategoryResultSchema = z.object({
    id: z.string(),
    name: z.string(),
    userId: z.string(),
    user: z.unknown(),
    todos: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type CategoryResultType = z.infer<typeof CategoryResultSchema>;
