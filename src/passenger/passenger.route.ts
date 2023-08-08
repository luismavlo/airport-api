import express from 'express';

//controllers
import {
  create,
  findAll,
  update,
  findOne,
  remove,
} from './passenger.controller';

const router = express.Router();

router.route('/').get(findAll).post(create);

router.route('/:id').get(findOne).patch(update).delete(remove);

export default router;
