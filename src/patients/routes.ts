import express from 'express';
import patientsController from './controller';

const router = express.Router();

router.get('/', patientsController.getPatients);

router.get('/:id', patientsController.getPatient);

router.post('/', patientsController.createPatient);

router.put('/:id', patientsController.updatePatient);

router.delete('/:id', patientsController.deletePatient);

export default router;