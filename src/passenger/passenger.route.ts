import express from 'express';

//controllers
import {
  create,
  findAll,
  update,
  findOne,
  remove,
} from './passenger.controller';

//middlewares
import {
  createPassengerValidation,
  updatePassengerValidation,
} from './passenger.middleware';

const router = express.Router();

router.route('/').get(findAll).post(createPassengerValidation, create);

router
  .route('/:id')
  .get(findOne)
  .patch(updatePassengerValidation, update)
  .delete(remove);

export default router;
