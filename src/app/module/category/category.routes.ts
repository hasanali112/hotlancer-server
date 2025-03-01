import { Router } from 'express';
import { CategoryController } from './category.controller';
import auth from '../../middleware/auth';

const router = Router();

router.get('/get-category', auth('user'), CategoryController.getCategory);

router.post(
  '/create-category',
  auth('user'),
  CategoryController.createCategory,
);

export const CategoryRoutes = router;
