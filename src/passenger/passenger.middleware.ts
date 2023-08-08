import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import catchAsync from '../errors/utils/catchAsync';
import AppError from '../errors/utils/appError';

export const createPassengerValidation = catchAsync(
  async (req: Request, _res: Response, next: NextFunction) => {
    const schema = Joi.object({
      nroPassport: Joi.number().required(),
      name: Joi.string().required().max(49),
      surname: Joi.string().required().max(99),
      birthDate: Joi.string().required(),
      gender: Joi.string().required(),
      email: Joi.string().email().required(),
      celphone: Joi.string().required(),
      createdBy: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return next(new AppError(error.details[0].message, 400));
    }

    return next();
  }
);

export const updatePassengerValidation = catchAsync(
  async (req: Request, _res: Response, next: NextFunction) => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      celphone: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      return next(new AppError(error.details[0].message, 400));
    }

    return next();
  }
);
