import { IsString } from "class-validator";

export class PostDTO {
    @IsString()
    text: string;

    @IsString()
    user: string;
}

export class EditPostDTO {
    @IsString()
    text: string;

    @IsString()
    postId: string;
}