import * as z from 'zod';

export const CategoryScalarFieldEnumSchema = z.enum(['id', 'name', 'userId', 'createdAt', 'updatedAt'])

export type CategoryScalarFieldEnum = z.infer<typeof CategoryScalarFieldEnumSchema>;