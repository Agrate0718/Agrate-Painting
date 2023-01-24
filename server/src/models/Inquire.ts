import mongoose, { Document, Schema } from 'mongoose';

export interface IInquire {
    user: string;
    color: string;
    prompt: string;
    design: string;
    details: string;
}

export interface IInquireModel extends IInquire, Document {}

const InquireSchema: Schema = new Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        color: { type: String, required: true },
        prompt: { type: String, required: true },
        design: { type: String, required: true },
        details: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

export default mongoose.model<IInquireModel>('Inquire', InquireSchema);
