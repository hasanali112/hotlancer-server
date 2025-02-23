import { Request } from 'express';
import { Category } from './category.model';

const createCategory = async (req: Request) => {
  const { _id } = req.user;
  const payload = req.body;
  payload.userId = _id;
  const result = await Category.create(payload);
  return result;
};

export const CategoryServices = {
  createCategory,
};
