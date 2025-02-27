import { IMedia } from './media.interface';
import { Media } from './media.model';

const createMediaImage = async (payload: IMedia) => {
  const result = await Media.create(payload);
  return result;
};

export const MediaServices = {
  createMediaImage,
};
