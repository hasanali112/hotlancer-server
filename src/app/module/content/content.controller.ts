import CatchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { ContentServices } from './content.service';

const createContent = CatchAsync(async (req, res) => {
  const result = await ContentServices.createContent(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Content created successfully',
    data: result,
  });
});

const getAllContent = CatchAsync(async (req, res) => {
  const result = await ContentServices.getContent();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Content fetched successfully',
    data: result,
  });
});

export const ContentController = {
  createContent,
  getAllContent,
};
