import { ZodType } from 'zod';
import {
    userSchema,
    createUserSchema,
    userResponseSchema,
} from '../user/user.schema';

type User = ZodType<typeof userSchema>;

type CreateUser = ZodType<typeof createUserSchema>;

type userResponse = ZodType<typeof userResponseSchema>;
export { User, CreateUser, userResponse };
