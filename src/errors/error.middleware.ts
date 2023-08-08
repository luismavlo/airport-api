import { NextFunction, Request, Response } from 'express';
import { ErrorEntity } from './entities/error.entity';
// import AppError from './utils/AppError';

const sendErrorDev = (err: any, res: Response) => {
  ErrorEntity.create({
    status: err.status,
    message: err.message,
    stack: err.stack,
  }).save();

  return res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
    err: err,
  });
};

const sendErrorProd = (err: any, res: Response) => {
  console.log(err);
  //operational, trusted error: send message to client
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    //programming or other unknown error: don't leak error detail
    return res.status(500).json({
      status: 'fail',
      message: 'Something went very wrong!',
    });
  }
};

const globalErrorHander = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'fail';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  }

  if (process.env.NODE_ENV === 'production') {
    let error = err;

    sendErrorProd(error, res);
  }
};

export default globalErrorHander;
