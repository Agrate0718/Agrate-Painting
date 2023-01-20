"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const Order_1 = __importDefault(require("../controllers/Order"));
const ValidateSchema_1 = require("../middleware/ValidateSchema");
const router = express_1.default.Router();
router.post('/create', (0, ValidateSchema_1.ValidateSchema)(ValidateSchema_1.Schemas.order.create), Order_1.default.createOrder);
router.get('/get/:orderId', Order_1.default.readOrder);
router.get('/get/', Order_1.default.readAll);
router.patch('/update/:orderId', (0, ValidateSchema_1.ValidateSchema)(ValidateSchema_1.Schemas.order.update), Order_1.default.updateOrder);
router.delete('/delete/:orderId', Order_1.default.deleteOrder);
module.exports = router;
