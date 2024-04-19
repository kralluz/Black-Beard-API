import { z } from 'zod';

const serviceSchema = z.object({
    id: z.number(),
    userId: z.number(),
    name: z.string(),
    description: z.string().max(100),
    price: z.number(),
    createdAt: z.date(),
    updatedAt: z.date(),
    delete: z.boolean(),
    deleteAt: z.date(), 
});

const createServiceSchema = serviceSchema.pick({
    userId: true,
    name: true,
    description: true,
    price: true,
});

const updateServiceSchema = serviceSchema.partial();

const serviceResponseSchema = serviceSchema.omit({
    delete: true,
    deleteAt: true,
    updatedAt: true,
});

const listServicesResponseSchema = z.array(serviceResponseSchema);

export {
    serviceSchema,
    createServiceSchema,
    serviceResponseSchema,
    listServicesResponseSchema,
    updateServiceSchema,
};
