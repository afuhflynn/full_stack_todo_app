import * as z from 'zod';
import { PrioritySchema } from '../../enums/Priority.schema';
// prettier-ignore
export const TodoInputSchema = z.object({
    id: z.string(),
    content: z.string(),
    completed: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    userId: z.string(),
    user: z.unknown(),
    categoryId: z.string().optional().nullable(),
    category: z.unknown().optional().nullable(),
    priority: PrioritySchema
}).strict();

export type TodoInputType = z.infer<typeof TodoInputSchema>;
