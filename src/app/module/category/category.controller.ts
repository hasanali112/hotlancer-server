import CatchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { CategoryServices } from './category.service';

const createCategory = CatchAsync(async (req, res) => {
  const result = await CategoryServices.createCategory(req);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Category created successfully',
    data: result,
  });
});

const getCategory = CatchAsync(async (req, res) => {
  const result = await CategoryServices.getAllCategories(req);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Category created successfully',
    data: result,
  });
});

export const CategoryController = {
  createCategory,
  getCategory,
};
