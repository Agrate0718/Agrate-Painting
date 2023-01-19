import mongoose, { Document, Schema} from 'mongoose';

export interface IArtwork {
    title: string,
    picture: string,
    price: number,
    medium: string,

}

export interface IArtworkModel extends IArtwork, Document {}

const ArtworkSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        picture: { type: String, required: true },
        price: { type: Number, required: true },
        medium: { type: String, required: true },
    },
    {
        timestamps: true 
    }
);

export default mongoose.model<IArtworkModel>('Artwork', ArtworkSchema)