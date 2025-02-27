import CatchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { MediaServices } from './media.service';

const createMedia = CatchAsync(async (req, res) => {
  const result = await MediaServices.createMediaImage(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Media created successfully',
    data: result,
  });
});

export const MediaController = {
  createMedia,
};
