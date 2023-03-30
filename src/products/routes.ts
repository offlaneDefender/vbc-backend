import brandedController from './branded/controller';
import medicinalController from './medicinal/controller';
import express from 'express';

const router = express.Router();

router.get('/branded', brandedController.getBrandedProducts);

router.get('/branded/:id', brandedController.getBrandedProduct);

router.post('/branded', brandedController.createBrandedProduct);

router.put('/branded/:id', brandedController.updateBrandedProduct);

router.delete('/branded/:id', brandedController.deleteBrandedProduct);

router.get('/medicinal', medicinalController.getMedicinalProducts);

router.get('/medicinal/:id', medicinalController.getMedicinalProduct);

router.post('/medicinal', medicinalController.createMedicinalProduct);

router.put('/medicinal/:id', medicinalController.updateMedicinalProduct);

router.delete('/medicinal/:id', medicinalController.deleteMedicinalProduct);

export default router;