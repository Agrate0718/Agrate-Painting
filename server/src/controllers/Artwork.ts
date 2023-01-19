import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import Artwork from '../models/Artwork';

const createArtwork = (req: Request, res: Response, next: NextFunction) => {
    const  { title, picture, price, medium }  = req.body;

    const artwork = new Artwork({
        _id: new mongoose.Types.ObjectId(),
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

const readArtwork = (req: Request, res: Response, next: NextFunction) => {
    const artworkId = req.params.artworkId;

    return Artwork.findById(artworkId)
    .then((artwork) => (artwork ? res.status(200).json({ artwork }) : res.status(404).json({
    message: 'Not found' })))
    .catch((error) => res.status(500).json({ error }));
};

const readAll = (req: Request, res: Response, next: NextFunction) => {

    return Artwork.find()
    .then((artworks) =>  res.status(200).json({ artworks }))
    .catch((error) => res.status(500).json({ error }));
};
const updateArtwork = (req: Request, res: Response, next: NextFunction) => {
    const artworkId = req.params.artworkId;

    return Artwork.findById(artworkId)
    .then((artwork) => {
        if (artwork)
        {
            artwork.set(req.body)

            return artwork
            .save()
            .then((artwork) => res.status(201).json({ artwork }))
            .catch((error) => res.status(500).json({ error }));
        }
        else
        {
            res.status(404).json({ message: 'Not found' })
        }
    })
    .catch((error) => res.status(500).json({ error }));
};
const deleteArtwork = (req: Request, res: Response, next: NextFunction) => {
    const artworkId = req.params.artworkId;

    return Artwork.findByIdAndDelete(artworkId)
        .then( artwork => (artwork ? res.status(201).json({ message: 'deleted' }) : res.status(404)
        .json({ message: 'Not found' })))
        .catch((error) => res.status(500).json({ error }));

};

export default { createArtwork, readArtwork, readAll, updateArtwork, deleteArtwork};