import { Types } from 'mongoose';

export interface IMeta {
  metatitle: string;
  metaDescription: string;
  metaKeywords: string[];
}

export interface IContent {
  type: string;
  title: string;
  slug: string;
  meta: IMeta;
  description: string;
  content: string;
  category: Types.ObjectId;
  image: string;
  isDeleted: boolean;
}
