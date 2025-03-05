import { Schema, model, Types } from 'mongoose';
import { IBaseContent, IContent, IMeta } from './content.interface';

// Define the schema for IMeta
const MetaSchema = new Schema<IMeta>({
  metaTitle: { type: String },
  metaDescription: { type: String },
  metaKeywords: { type: [String] },
});

// Define the schema for IContent
const ContentSchema = new Schema<IContent>({
  title: { type: String },
  content: { type: String },
  contentImage: { type: String },
});

// Define the schema for IBaseContent
const BaseContentSchema = new Schema<IBaseContent>(
  {
    type: { type: String },
    slug: { type: String, unique: true },
    category: { type: [Types.ObjectId], ref: 'Category' },
    content: { type: [ContentSchema] },
    image: { type: String },
    page_id: { type: String },
    meta: MetaSchema,
    pulishType: { type: String },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export const BaseContent = model<IBaseContent>(
  'BaseContent',
  BaseContentSchema,
);
