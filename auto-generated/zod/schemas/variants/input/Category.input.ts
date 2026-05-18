import * as z from 'zod';
// prettier-ignore
export const CategoryInputSchema = z.object({
    id: z.string(),
    name: z.string(),
    userId: z.string(),
    user: z.unknown(),
    todos: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type CategoryInputType = z.infer<typeof CategoryInputSchema>;
