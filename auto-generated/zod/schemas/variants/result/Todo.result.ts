import * as z from 'zod';
import { PrioritySchema } from '../../enums/Priority.schema';
// prettier-ignore
export const TodoResultSchema = z.object({
    id: z.string(),
    content: z.string(),
    completed: z.boolean(),
    createdAt: z.date(),
    updatedAt: z.date(),
    userId: z.string(),
    user: z.unknown(),
    categoryId: z.string().nullable(),
    category: z.unknown().nullable(),
    priority: PrioritySchema
}).strict();

export type TodoResultType = z.infer<typeof TodoResultSchema>;
