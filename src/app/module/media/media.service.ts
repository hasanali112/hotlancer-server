import { IMedia } from './media.interface';
import { Media } from './media.model';

const createMediaImage = async (payload: IMedia) => {
  const result = await Media.create(payload);
  return result;
};

const getAllImages = async () => {
  const result = await Media.find();
  return result;
};

export const MediaServices = {
  createMediaImage,
  getAllImages,
};
