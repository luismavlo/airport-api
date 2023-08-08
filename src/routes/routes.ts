import express from 'express';
import passengerRouter from './../passenger/passenger.route';

const router = express.Router();

router.use('/passenger', passengerRouter);

export default router;
