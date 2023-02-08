"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Order_1 = __importDefault(require("../models/Order"));
const createOrder = (req, res, next) => {
    const { user, country, streetAddress, city, zip, phone } = req.body;
    const order = new Order_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        user,
        country,
        streetAddress,
        city,
        zip,
        phone
    });
    return order
        .save()
        .then((order) => res.status(201).json({ order }))
        .catch((error) => res.status(500).json({ error }));
};
const readOrder = (req, res, next) => {
    const orderId = req.params.orderId;
    return Order_1.default.findById(orderId)
        .populate('user')
        .then((order) => order
        ? res.status(200).json({ order })
        : res.status(404).json({
            message: 'Not found'
        }))
        .catch((error) => res.status(500).json({ error }));
};
const readAll = (req, res, next) => {
    return Order_1.default.find()
        .populate('user')
        .then((orders) => res.status(200).json({ orders }))
        .catch((error) => res.status(500).json({ error }));
};
const updateOrder = (req, res, next) => {
    const orderId = req.params.orderId;
    return Order_1.default.findById(orderId)
        .then((order) => {
        if (order) {
            order.set(req.body);
            return order
                .save()
                .then((order) => res.status(201).json({ order }))
                .catch((error) => res.status(500).json({ error }));
        }
        else {
            res.status(404).json({ message: 'Not found' });
        }
    })
        .catch((error) => res.status(500).json({ error }));
};
const deleteOrder = (req, res, next) => {
    const orderId = req.params.orderId;
    return Order_1.default.findByIdAndDelete(orderId)
        .then((order) => (order ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};
exports.default = { createOrder, readOrder, readAll, updateOrder, deleteOrder };
