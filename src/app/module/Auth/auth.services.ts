import AppError from '../../Error/AppError';
import { User } from '../User/user.model';
import { TAuth } from './auth.interface';
import httpStatus from 'http-status';
import * as bcrypt from 'bcrypt';
import { jwtHelpers } from '../../utils/JWTHelpers';
import { config } from '../../config';

export const login = async (payload: TAuth) => {
  const user = await User.findOne({ email: payload.email });
  if (!user) {
    try {
      const user = await User.create({
        ...payload,
        role: 'user',
      });
      const jwtPayload = {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      };

      const accessToken = jwtHelpers.generateToken(
        jwtPayload,
        config.jwt_access_secret as string,
        config.jwt_access_expire_in as string,
      );

      const refreshToken = jwtHelpers.generateToken(
        jwtPayload,
        config.jwt_refresh_secret as string,
        config.jwt_refresh_expire_in as string,
      );

      return {
        accessToken,
        refreshToken,
      };
    } catch (error) {
      console.log(error);
    }
  } else {
    if (payload.password) {
      const passwordMatch = await bcrypt.compare(
        payload.password, //plain text password
        user.password, //hash password
      );
      if (!passwordMatch) {
        throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');
      }
    }

    const jwtPayload = {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    const accessToken = jwtHelpers.generateToken(
      jwtPayload,
      config.jwt_access_secret as string,
      config.jwt_access_expire_in as string,
    );

    const refreshToken = jwtHelpers.generateToken(
      jwtPayload,
      config.jwt_refresh_secret as string,
      config.jwt_refresh_expire_in as string,
    );

    return {
      accessToken,
      refreshToken,
    };
  }
};

export const AuthService = {
  login,
};
