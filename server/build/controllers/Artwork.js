"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Artwork_1 = __importDefault(require("../models/Artwork"));
const createArtwork = (req, res, next) => {
    const { title, picture, price, medium } = req.body;
    const artwork = new Artwork_1.default({
        _id: new mongoose_1.default.Types.ObjectId(),
        title,
        picture,
        price,
        medium
    });
    return artwork
        .save()
        .then((artwork) => res.status(201).json({ artwork }))
        .catch((error) => res.status(500).json({ error }));
};
const readArtwork = (req, res, next) => {
    const artworkId = req.params.artworkId;
    return Artwork_1.default.findById(artworkId)
        .then((artwork) => (artwork ? res.status(200).json({ artwork }) : res.status(404).json({
        message: 'Not found'
    })))
        .catch((error) => res.status(500).json({ error }));
};
const readAll = (req, res, next) => {
    return Artwork_1.default.find()
        .then((artworks) => res.status(200).json({ artworks }))
        .catch((error) => res.status(500).json({ error }));
};
const updateArtwork = (req, res, next) => {
    const artworkId = req.params.artworkId;
    return Artwork_1.default.findById(artworkId)
        .then((artwork) => {
        if (artwork) {
            artwork.set(req.body);
            return artwork
                .save()
                .then((artwork) => res.status(201).json({ artwork }))
                .catch((error) => res.status(500).json({ error }));
        }
        else {
            res.status(404).json({ message: 'Not found' });
        }
    })
        .catch((error) => res.status(500).json({ error }));
};
const deleteArtwork = (req, res, next) => {
    const artworkId = req.params.artworkId;
    return Artwork_1.default.findByIdAndDelete(artworkId)
        .then(artwork => (artwork ? res.status(201).json({ message: 'deleted' }) : res.status(404)
        .json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));
};
exports.default = { createArtwork, readArtwork, readAll, updateArtwork, deleteArtwork };
