/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseContent } from './content.model';

const createContent = async (payload: any) => {
  const result = await BaseContent.create(payload);
  return result;
};

const getContent = async () => {
  const result = await BaseContent.find().populate('category');
  return result;
};

export const ContentServices = {
  createContent,
  getContent,
};
