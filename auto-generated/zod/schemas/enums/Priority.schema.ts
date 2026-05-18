import * as z from 'zod';

export const PrioritySchema = z.enum(['LOW', 'MEDIUM', 'HIGH'])

export type Priority = z.infer<typeof PrioritySchema>;