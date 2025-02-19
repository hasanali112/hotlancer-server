import CatchAsync from '../../utils/catchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { UserServices } from './user.services';

const signup = CatchAsync(async (req, res) => {
  const result = await UserServices.signUp(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'User registered successfully',
    data: result,
  });
});

export const UserController = {
  signup,
};
