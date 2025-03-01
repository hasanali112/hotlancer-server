import { z } from 'zod';
import { USER_ROLE } from './user.constant';

export const createUserValidationSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    email: z
      .string({
        required_error: 'Email is required',
      })
      .email({
        message: 'Invalid email format',
      }),
    password: z.string({
      required_error: 'Password is required',
    }),
    role: z.nativeEnum(USER_ROLE).default(USER_ROLE.user),
    passwordChangedAt: z.date().optional(),
    isDeleted: z.boolean().default(false),
  }),
});
