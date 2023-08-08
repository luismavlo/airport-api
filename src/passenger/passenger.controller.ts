import { NextFunction, Request, Response } from 'express';
import { Passenger } from './entities/passenger.entity';
import { PassengerService } from './passenger.service';
import { Repository } from 'typeorm';
import AppDataSource from './../database/config';
import AppError from '../errors/utils/appError';
import catchAsync from '../errors/utils/catchAsync';

const passengerRepository: Repository<Passenger> =
  AppDataSource.getRepository('Passenger');

const passengerService = new PassengerService(passengerRepository);

export const findAll = catchAsync(
  async (_req: Request, res: Response, _next: NextFunction) => {
    const passengers = await passengerService.findAllPassengers();

    return res.status(200).json(passengers);
  }
);

export const create = catchAsync(
  async (req: Request, res: Response, _next: NextFunction) => {
    const passenger = await passengerService.createPassenger(req.body);

    return res.status(201).json(passenger);
  }
);

export const findOne = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const passenger = await passengerService.findOnePassenger(req.params.id);

    if (!passenger) {
      return next(new AppError('No passenger found with that ID', 404));
    }

    return res.status(200).json(passenger);
  }
);

export const update = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const passenger = await passengerService.findOnePassenger(req.params.id);

    if (!passenger) {
      return next(new AppError('No passenger found with that ID', 404));
    }

    const passengerUpdated = await passengerService.updatePassenger(
      passenger,
      req.body
    );

    return res.status(200).json(passengerUpdated);
  }
);

export const remove = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const passenger = await passengerService.findOnePassenger(req.params.id);

    if (!passenger) {
      return next(new AppError('No passenger found with that ID', 404));
    }

    const passengerDeleted = await passengerService.deletePassenger(passenger);

    return res.status(200).json(passengerDeleted);
  }
);
