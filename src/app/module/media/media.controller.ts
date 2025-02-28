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

const getAllImagesFromDB = CatchAsync(async (req, res) => {
  const result = await MediaServices.getAllImages();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Images fetched successfully',
    data: result,
  });
});

export const MediaController = {
  createMedia,
  getAllImagesFromDB,
};
