import  express  from 'express';
import controller from '../controllers/Inquire';
import { Schemas, ValidateSchema } from '../middleware/ValidateSchema';

const router = express.Router();

router.post('/create', ValidateSchema(Schemas.inquire.create), controller.createInquire);
router.get('/get/:inquireId', controller.readInquire);
router.get('/get/', controller.readAll);
router.patch('/update/:inquireId', ValidateSchema(Schemas.inquire.update), controller.updateInquire);
router.delete('/delete/:inquireId', controller.deleteInquire);

export = router;