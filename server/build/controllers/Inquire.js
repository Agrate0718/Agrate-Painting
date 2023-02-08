"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Inquire_1 = __importDefault(require("../models/Inquire"));
const createInquire = (req, res, next) => {
    const { user, color, prompt, design, details } = req.body;
    const inquire = new Inquire_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
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
const readInquire = (req, res, next) => {
    const inquireId = req.params.inquireId;
    return Inquire_1.default.findById(inquireId)
        .populate('user')
        .then((inquire) => inquire
        ? res.status(200).json({ inquire })
        : res.status(404).json({
            message: 'Not found'
        }))
        .catch((error) => res.status(500).json({ error }));
};
const readAll = (req, res, next) => {
    return Inquire_1.default.find()
        .populate('user')
        .then((inquires) => res.status(200).json({ inquires }))
        .catch((error) => res.status(500).json({ error }));
};
const updateInquire = (req, res, next) => {
    const inquireId = req.params.inquireId;
    return Inquire_1.default.findById(inquireId)
        .then((inquire) => {
        if (inquire) {
            inquire.set(req.body);
            return inquire
                .save()
                .then((inquire) => res.status(201).json({ inquire }))
                .catch((error) => res.status(500).json({ error }));
        }
        else {
            res.status(404).json({ message: 'Not found' });
        }
    })
        .catch((error) => res.status(500).json({ error }));
};
const deleteInquire = (req, res, next) => {
    const inquireId = req.params.inquireId;
    return Inquire_1.default.findByIdAndDelete(inquireId)
        .then((inquire) => (inquire ? res.status(201).json({ message: 'deleted' }) : res.status(404).json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};
exports.default = { createInquire, readInquire, readAll, updateInquire, deleteInquire };
