import * as z from 'zod';

export const TodoScalarFieldEnumSchema = z.enum(['id', 'content', 'completed', 'createdAt', 'updatedAt', 'userId', 'categoryId', 'priority'])

export type TodoScalarFieldEnum = z.infer<typeof TodoScalarFieldEnumSchema>;