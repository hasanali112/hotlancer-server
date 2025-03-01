import { model, Schema } from 'mongoose';
import { IMedia } from './media.interface';

const mediaSchema = new Schema<IMedia>(
  {
    mediaImage: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Media = model<IMedia>('Media', mediaSchema);
