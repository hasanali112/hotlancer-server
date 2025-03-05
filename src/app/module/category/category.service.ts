import { Request } from 'express';
import { Category } from './category.model';
import { BaseContent } from '../content/content.model';

const createCategory = async (req: Request) => {
  const { _id } = req.user;
  const payload = req.body;
  payload.userId = _id;
  const result = await Category.create(payload);
  return result;
};

const getAllCategories = async (req: Request) => {
  const { _id } = req.user;

  const result = await Category.find({ userId: _id });

  const categoriesWithContentCount = await Promise.all(
    result.map(async (category) => {
      const count = await BaseContent.countDocuments({
        category: { $in: category._id },
      });
      return { ...category.toJSON(), contentCount: count };
    }),
  );
  return categoriesWithContentCount;
};

const getSingleCategory = async (slug: string) => {
  const findCategory = await Category.findOne({ slug });
  if (!findCategory) {
    throw new Error('Category not found');
  }

  const result = await BaseContent.find({
    category: { $in: findCategory._id },
  });
  return {
    category: findCategory,
    content: result,
  };
};

export const CategoryServices = {
  createCategory,
  getAllCategories,
  getSingleCategory,
};
