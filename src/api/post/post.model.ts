import * as Mongoose from 'mongoose';
import { IPost } from './post.interface';

export const PostSchema: Mongoose.Schema<IPost> = new Mongoose.Schema(
    {
        text: { type: String, required: true },
        user: { type: Mongoose.Schema.Types.ObjectId, required: true }
    }
);

export const PostModel = Mongoose.model<IPost>(
    'post',
    PostSchema
);
