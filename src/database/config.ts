import { ErrorEntity } from './../errors/entities/error.entity';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Passenger } from '../passenger/entities/passenger.entity';

const AppDataSource = new DataSource({
  type: process.env.DB_TYPE as any,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT as any,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Passenger, ErrorEntity],
  synchronize: true,
  logging: false,
});

export default AppDataSource;
