import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Order from '../models/Order';

const createOrder = (req: Request, res: Response, next: NextFunction) => {
    const { user, country, streetAddress, city, zip, phone } = req.body;

    const order = new Order({
        _id: new mongoose.Types.ObjectId(),
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

const readOrder = (req: Request, res: Response, next: NextFunction) => {
    const orderId = req.params.orderId;

    return Order.findById(orderId)
        .populate('user')
        .then((order) =>
            order
                ? res.status(200).json({ order })
                : res.status(404).json({
                      message: 'Not found'
                  })
        )
        .catch((error) => res.status(500).json({ error }));
};

const readAll = (req: Request, res: Response, next: NextFunction) => {
    return Order.find()
        .populate('user')
        .then((orders) => res.status(200).json({ orders }))
        .catch((error) => res.status(500).json({ error }));
};
const updateOrder = (req: Request, res: Response, next: NextFunction) => {
    const orderId = req.params.orderId;

    return Order.findById(orderId)
        .then((order) => {
            if (order) {
                order.set(req.body);

                return order
                    .save()
                    .then((order) => res.status(201).json({ order }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                res.status(404).json({ message: 'Not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};
const deleteOrder = (req: Request, res: Response, next: NextFunction) => {
    const orderId = req.params.orderId;

    return Order.findByIdAndDelete(orderId)
        .then((order) => (order ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createOrder, readOrder, readAll, updateOrder, deleteOrder };
