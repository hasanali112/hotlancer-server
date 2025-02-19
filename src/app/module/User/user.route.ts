import { Router } from 'express';

import { UserController } from './user.controller';
import { createUserValidationSchema } from './user.validation';
import { validateRequest } from '../../middleware/validateRequest';

const router = Router();

router.post(
  '/signup',
  validateRequest(createUserValidationSchema),
  UserController.signup,
);

export const UserRoutes = router;
