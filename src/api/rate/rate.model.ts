import * as Mongoose from 'mongoose';
import { IRating } from './rate.interface';

export const RateSchema: Mongoose.Schema<IRating> = new Mongoose.Schema(
    {
        rate: { type: Number, default: 0 },
        post: { type: Mongoose.Schema.Types.ObjectId, ref: 'post', required: true },
        user: { type: Mongoose.Schema.Types.ObjectId, required: true }
    }
);

export const RatingModel = Mongoose.model<IRating>(
    'rating',
    RateSchema
);
