import * as z from 'zod';
import GenericModelSchema from 'src/schemas/baseModel.schema';

const userSchema = GenericModelSchema.extend({
    companyName: z.string().max(100),
    email: z.string().email().max(100),
    password: z.string().max(300),
    admin: z.boolean().default(false).optional(),
    lastAccess: z.date().default(() => new Date()),
    plans: z.array(z.string()), // Temporariamente definido como string
    clients: z.array(z.string()), // Temporariamente definido como string
    schedules: z.array(z.string()), // Temporariamente definido como string
});

const createUserSchema = userSchema.pick({
    name: true,
    companyName: true,
    email: true,
    password: true,
    admin: true,
});

const createUserResponseSchema = userSchema.pick({
    id: true,
    name: true,
    companyName: true,
    email: true,
    createdAt: true,
});

export { userSchema, createUserSchema, createUserResponseSchema };
