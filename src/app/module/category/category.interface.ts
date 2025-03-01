import { Types } from 'mongoose';

export interface ICategory {
  userId: Types.ObjectId;
  name: string;
  slug: string;
  parentCategory: string | null;
  description: string;
  type: 'Parent' | 'Subcategory';
}
