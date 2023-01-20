import  express  from 'express';
import controller from '../controllers/Artwork';
import { Schemas, ValidateSchema } from '../middleware/ValidateSchema';

const router = express.Router();

router.post('/create', ValidateSchema(Schemas.artwork.create), controller.createArtwork);
router.get('/get/:artworkId', controller.readArtwork);
router.get('/get/', controller.readAll);
router.patch('/update/:artworkId', ValidateSchema(Schemas.artwork.update), controller.updateArtwork);
router.delete('/delete/:artworkId', controller.deleteArtwork);

export = router;