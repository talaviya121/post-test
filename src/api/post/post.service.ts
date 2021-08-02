import {
    Model, QueryFindOneAndUpdateOptions, UpdateQuery
} from "mongoose";
import { Nullable } from "src/constants/customTypes";
import { IBaseService } from "../../baseService/baseService.interface";
import { IPost } from "./post.interface";
import { PostModel } from "./post.model";

export default class PostService implements IBaseService<IPost> {
    private model: Model<IPost>;

    public constructor() {
        this.model = PostModel;
    }

    create = async (item: IPost): Promise<IPost> => {
        return this.model.create(item);
    };

    updateOne = async (
        query: any,
        updateObj: UpdateQuery<IPost>,
        options: QueryFindOneAndUpdateOptions = { new: true }
    ): Promise<Nullable<IPost>> => {
        return this.model.findOneAndUpdate(query, updateObj, options).lean();
    };

    delete = async (id: string): Promise<Nullable<IPost>> => {
        return this.model.findByIdAndRemove(id);
    };
}