import * as Mongoose from 'mongoose';

export interface IPost extends Mongoose.Document {
    text: string;
    user: any;
}