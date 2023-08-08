import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';

//routes
import routes from './routes/routes';
import globalErrorHander from './errors/error.middleware';
import AppError from './errors/utils/appError';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1', routes);

app.all('*', (req: Request, _res: Response, next: NextFunction) => {
  return next(
    new AppError(`Can't find ${req.originalUrl} on this server!`, 404)
  );
});

app.use(globalErrorHander);

export default app;
