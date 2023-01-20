"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const Artwork_1 = __importDefault(require("../controllers/Artwork"));
const ValidateSchema_1 = require("../middleware/ValidateSchema");
const router = express_1.default.Router();
router.post('/create', (0, ValidateSchema_1.ValidateSchema)(ValidateSchema_1.Schemas.artwork.create), Artwork_1.default.createArtwork);
router.get('/get/:artworkId', Artwork_1.default.readArtwork);
router.get('/get/', Artwork_1.default.readAll);
router.patch('/update/:artworkId', (0, ValidateSchema_1.ValidateSchema)(ValidateSchema_1.Schemas.artwork.update), Artwork_1.default.updateArtwork);
router.delete('/delete/:artworkId', Artwork_1.default.deleteArtwork);
module.exports = router;
