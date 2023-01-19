import  express  from 'express';
import controller from '../controllers/Artwork';

const router = express.Router();

router.post('/create', controller.createArtwork);
router.get('/get/:artworkId', controller.readArtwork);
router.get('/get/', controller.readAll);
router.patch('/update/:artworkId', controller.updateArtwork);
router.delete('/delete/:artworkId', controller.deleteArtwork);

export = router;