/* eslint-disable @typescript-eslint/no-unused-vars */
import AppError from '../../Error/AppError';
import { User } from '../User/user.model';
import { TAuth } from './auth.interface';
import httpStatus from 'http-status';
import * as bcrypt from 'bcrypt';
import { jwtHelpers } from '../../utils/JWTHelpers';
import { config } from '../../config';

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

const login = async (payload: TAuth): Promise<LoginResponse> => {
  const user = await User.findOne({ email: payload.email });
  if (!user) {
    // User doesn't exist, create a new one
    try {
      const newUser = await User.create({
        ...payload,
        role: 'user',
      });

      const jwtPayload = {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
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
      throw new AppError(
        httpStatus.INTERNAL_SERVER_ERROR,
        'User creation failed',
      );
    }
  } else {
    // User exists, verify password
    if (payload.password) {
      const passwordMatch = await bcrypt.compare(
        payload.password, // Plain text password
        user.password, // Hashed password
      );

      if (!passwordMatch) {
        throw new AppError(httpStatus.FORBIDDEN, 'Password does not match');
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
