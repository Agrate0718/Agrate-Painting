import express from 'express';
import controller from '../controllers/Order';
import { Schemas, ValidateSchema } from '../middleware/ValidateSchema';

const router = express.Router();

router.post('/create', ValidateSchema(Schemas.order.create), controller.createOrder);
router.get('/get/:orderId', controller.readOrder);
router.get('/get/', controller.readAll);
router.patch('/update/:orderId', ValidateSchema(Schemas.order.update), controller.updateOrder);
router.delete('/delete/:orderId', controller.deleteOrder);

export = router;
