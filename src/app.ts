import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

//routes
import routes from './routes/routes';
import globalErrorHander from './errors/error.middleware';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1', routes);

app.use(globalErrorHander);

export default app;
