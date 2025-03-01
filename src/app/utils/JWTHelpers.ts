/* eslint-disable @typescript-eslint/ban-ts-comment */
import jwt, { Secret } from 'jsonwebtoken';
import { USER_ROLE } from '../module/User/user.constant';

interface JwtPayload {
  id: string;
  email: string;
  role: keyof typeof USER_ROLE;
  profileImg?: string;
}

const generateToken = (
  payload: Record<string, unknown>,
  secret: Secret,
  expiresIn: string | number,
) => {
  //@ts-ignore
  const token = jwt.sign(payload, secret, {
    expiresIn,
    algorithm: 'HS256',
  });
  return token;
};

const verifyToken = (token: string, secret: Secret) => {
  return jwt.verify(token, secret) as JwtPayload;
};

export const jwtHelpers = {
  generateToken,
  verifyToken,
};
