import { IsNumber, IsString } from "class-validator";

export class RatingDTO {
    @IsString()
    postId: string;

    @IsString()
    userId: string;

    @IsNumber()
    rate: number;
}