import express from 'express';
import controller from '../controllers/User';
import extractJWt from '../middleware/extractJWT';
import { Schemas, ValidateSchema } from '../middleware/ValidateSchema';

const router = express.Router();

// router.post('/create', ValidateSchema(Schemas.user.create), controller.createUser);
// router.get('/get/:userId', controller.readUser);
// router.get('/get/', controller.readAll);
// router.patch('/update/:userId', ValidateSchema(Schemas.user.update), controller.updateUser);
// router.delete('/delete/:userId', controller.deleteUser);

router.get('/validate', extractJWt, controller.validateToken);
router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/get/all', controller.getAllusers);
router.get('/delete/:firstName', controller.deleteUser);

export = router;
