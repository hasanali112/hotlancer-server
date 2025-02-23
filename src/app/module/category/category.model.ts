import { model, Schema } from 'mongoose';
import { ICategory } from './category.interface';

const CategorySchema = new Schema<ICategory>({
  userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  name: { type: String, required: true },
  slug: { type: String, required: true },
  parentCategory: { type: String, default: null },
  description: { type: String, default: '' },
  type: { type: String, enum: ['Parent', 'Subcategory'], required: true },
});

export const Category = model<ICategory>('Category', CategorySchema);
