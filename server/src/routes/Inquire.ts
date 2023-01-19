import  express  from 'express';
import controller from '../controllers/Inquire';

const router = express.Router();

router.post('/create', controller.createInquire);
router.get('/get/:inquireId', controller.readInquire);
router.get('/get/', controller.readAll);
router.patch('/update/:inquireId', controller.updateInquire);
router.delete('/delete/:inquireId', controller.deleteInquire);

export = router;