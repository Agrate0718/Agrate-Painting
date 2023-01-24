import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Inquire from '../models/Inquire';

const createInquire = (req: Request, res: Response, next: NextFunction) => {
    const { user, color, prompt, design, details } = req.body;

    const inquire = new Inquire({
        _id: new mongoose.Types.ObjectId(),
        user,
        color,
        prompt,
        design,
        details
    });

    return inquire
        .save()
        .then((inquire) => res.status(201).json({ inquire }))
        .catch((error) => res.status(500).json({ error }));
};

const readInquire = (req: Request, res: Response, next: NextFunction) => {
    const inquireId = req.params.inquireId;

    return Inquire.findById(inquireId)
        .populate('user')
        .then((inquire) =>
            inquire
                ? res.status(200).json({ inquire })
                : res.status(404).json({
                      message: 'Not found'
                  })
        )
        .catch((error) => res.status(500).json({ error }));
};

const readAll = (req: Request, res: Response, next: NextFunction) => {
    return Inquire.find()
        .populate('user')
        .then((inquires) => res.status(200).json({ inquires }))
        .catch((error) => res.status(500).json({ error }));
};
const updateInquire = (req: Request, res: Response, next: NextFunction) => {
    const inquireId = req.params.inquireId;

    return Inquire.findById(inquireId)
        .then((inquire) => {
            if (inquire) {
                inquire.set(req.body);

                return inquire
                    .save()
                    .then((inquire) => res.status(201).json({ inquire }))
                    .catch((error) => res.status(500).json({ error }));
            } else {
                res.status(404).json({ message: 'Not found' });
            }
        })
        .catch((error) => res.status(500).json({ error }));
};
const deleteInquire = (req: Request, res: Response, next: NextFunction) => {
    const inquireId = req.params.inquireId;

    return Inquire.findByIdAndDelete(inquireId)
        .then((inquire) => (inquire ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};

export default { createInquire, readInquire, readAll, updateInquire, deleteInquire };
