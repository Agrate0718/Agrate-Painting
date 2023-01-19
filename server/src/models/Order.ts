import mongoose, { Document, Schema} from 'mongoose'

export interface IOrder{

    user: string,
    country: string,
    streetAddress: string,
    city: string,
    zip: number,
    phone: string,

}

export interface IOrderModel extends IOrder, Document {}

const OrderSchema: Schema = new Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false},
        country: {type: String, required: true},
        streetAddress: {type: String, required: true},
        city: {type: String, required: true},
        zip: {type: Number, required: true},
        phone: {type: String, required: true},
    },
    {
        timestamps: true
    }
)

export default mongoose.model<IOrderModel>('Order', OrderSchema)