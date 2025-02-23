import { Router } from 'express';
import { AuthRoutes } from '../module/Auth/auth.route';
import { UserRoutes } from '../module/User/user.route';
import { CategoryRoutes } from '../module/category/category.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/category',
    route: CategoryRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
