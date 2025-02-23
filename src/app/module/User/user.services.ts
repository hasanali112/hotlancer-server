import { TUser } from './user.interface';
import { User } from './user.model';

const signUp = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

const getAllUsers = async (query: Record<string, unknown>) => {
  const result = await User.find(query);
  return result;
};

export const UserServices = {
  signUp,
  getAllUsers,
};
