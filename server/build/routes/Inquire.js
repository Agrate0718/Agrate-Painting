"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const Inquire_1 = __importDefault(require("../controllers/Inquire"));
const ValidateSchema_1 = require("../middleware/ValidateSchema");
const router = express_1.default.Router();
router.post('/create', (0, ValidateSchema_1.ValidateSchema)(ValidateSchema_1.Schemas.inquire.create), Inquire_1.default.createInquire);
router.get('/get/:inquireId', Inquire_1.default.readInquire);
router.get('/get/', Inquire_1.default.readAll);
router.patch('/update/:inquireId', (0, ValidateSchema_1.ValidateSchema)(ValidateSchema_1.Schemas.inquire.update), Inquire_1.default.updateInquire);
router.delete('/delete/:inquireId', Inquire_1.default.deleteInquire);
module.exports = router;
