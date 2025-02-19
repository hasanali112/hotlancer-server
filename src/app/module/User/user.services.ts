import AppError from '../../Error/AppError';
import { TUser } from './user.interface';
import { User } from './user.model';
import httpStatus from 'http-status';
const signUp = async (payload: TUser) => {
  const user = await User.findOne({ email: payload.email });
  if (user) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'You have already have an account',
    );
  }

  const result = await User.create(payload);
  return result;
};

export const UserServices = {
  signUp,
};
