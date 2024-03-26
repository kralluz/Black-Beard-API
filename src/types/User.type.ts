import { ZodType } from 'zod';
import {
    userSchema,
    createUserSchema,
    createUserResponseSchema,
} from 'src/schemas/user.schema';

type User = ZodType<typeof userSchema>;

type CreateUser = ZodType<typeof createUserSchema>;

type CreateUserResponse = ZodType<typeof createUserResponseSchema>;
export { User, CreateUser, CreateUserResponse };
