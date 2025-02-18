import { AnyZodObject } from 'zod';
import { NextFunction, Request, Response } from 'express';

export const validateRequest = async (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
      });
    } catch (error) {
      next(error);
    }
  };
};
