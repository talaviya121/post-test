import {
    Model,
    Types
} from "mongoose";
import { IBaseService } from "../../baseService/baseService.interface";
import { IRating } from "./rate.interface";
import { RatingModel } from "./rate.model";

export default class RatingService implements IBaseService<IRating> {
    private model: Model<IRating>;

    public constructor() {
        this.model = RatingModel;
    }

    create = async (item: IRating): Promise<IRating> => {
        return this.model.create(item);
    };

    getRating = async (id: string) => {
        return this.model.aggregate([
            {
                $match: {
                    post: Types.ObjectId(id)
                }
            },
            {
                $group: {
                    _id: '$post',
                    avg_rating: {
                        $avg: '$rate'
                    }
                }
            }
        ])
    }
}