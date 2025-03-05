import { Types } from 'mongoose';

export interface IMeta {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
}

//post, blog, service
export interface IContent {
  title: string;
  content: string;
  contentImage?: string;
}

export interface IBaseContent {
  type: string;
  slug: string;
  category?: Types.ObjectId;
  content: IContent[];
  image?: string;
  page_id?: string;
  meta?: IMeta;
  pulishType: string;
  isDeleted?: boolean;
}
