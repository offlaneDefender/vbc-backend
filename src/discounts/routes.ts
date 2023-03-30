import express from 'express';
import controller from './controller';

const router = express.Router();

router.get('/', controller.getDiscounts);

router.get('/:id', controller.getDiscount);

router.post('/', controller.createDiscount);

router.put('/:id', controller.updateDiscount);

router.delete('/:id', controller.deleteDiscount);

export default router;
