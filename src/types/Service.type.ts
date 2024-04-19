import { ZodType } from 'zod';
import { serviceSchema, createServiceSchema, serviceResponseSchema } from '../schemas/barber-services.schema';

type Service = ZodType<typeof serviceSchema>;
type CreateService = ZodType<typeof createServiceSchema>;
type ServiceResponse = ZodType<typeof serviceResponseSchema>;

export { Service, CreateService, ServiceResponse };