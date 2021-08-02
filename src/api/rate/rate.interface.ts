import * as Mongoose from 'mongoose';

export interface IRating extends Mongoose.Document {
    post: any;
    user: any;
    rating: number;
}