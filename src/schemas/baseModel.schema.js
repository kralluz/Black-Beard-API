const { z } = require('zod');

const GenericModelSchema = z.object({
    id: z.number(),
    name: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    delete: z.boolean(),
    deleteAt: z.date(),
});

module.exports = { GenericModelSchema };
