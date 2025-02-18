import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import { USER_ROLE } from './user.constant';

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['MALE', 'FEMALE'],
      required: true,
    },
    role: {
      type: String,
      enum: Object.values(USER_ROLE),
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    profileImg: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const User = model<TUser>('User', userSchema);
