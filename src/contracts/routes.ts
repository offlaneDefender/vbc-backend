import controller from './controller';
import express from 'express';

const router = express.Router();

router.get('/', controller.getContracts);

router.get('/:id', controller.getContract);

router.post('/', controller.createContract);

router.put('/:id', controller.updateContract);

router.delete('/:id', controller.deleteContract);

export default router;