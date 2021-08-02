import { Body, Delete, JsonController, Post, Put, Req, Res } from "routing-controllers";
import PostService from "./post.service";
import { EditPostDTO, PostDTO } from "./post.validator";

@JsonController('/post')
export default class PostController {

    private postService: PostService = new PostService();

    @Post('/create', { transformResponse: true })
    async createPost(@Req() request: any, @Res() response: any, @Body({ validate: true }) body: PostDTO) {
        try {
            const {
                text,
                user
            } = body;

            const postData: any = {
                text,
                user
            }

            const post = await this.postService.create(postData);

            return response.formatter.ok(post, true, 'POST_CREATED_SUCCESS');
        } catch (error) {
            console.log("ERR:: ", error)
            return response.formatter.error({}, false, 'POST_CREATE_FAILED', error);
        }
    }

    @Put('/edit', { transformResponse: true })
    async editPost(@Req() request: any, @Res() response: any, @Body({ validate: true }) body: EditPostDTO) {
        try {
            const {
                text,
                postId
            } = body;

            const post = await this.postService.updateOne({
                _id: postId
            }, {
                $set: {
                    text
                }
            });

            if(!post) return response.formatter.error({}, false, 'POST_NOT_FOUND');

            return response.formatter.ok(post, true, 'POST_UPDATED_SUCCESS');
        } catch (error) {
            console.log("ERR:: ", error)
            return response.formatter.error({}, false, 'POST_UPDATED_FAILED', error);
        }
    }

    @Delete('/:id', { transformResponse: true })
    async deletePost(@Req() request: any, @Res() response: any) {
        try {
            const {
                id
            } = request.params;

            const post = await this.postService.delete(id);
            if(!post) return response.formatter.error({}, false, 'POST_NOT_FOUND');

            return response.formatter.ok({}, true, 'POST_DELETE_SUCCESS');
        } catch (error) {
            console.log("ERR:: ", error)
            return response.formatter.error({}, false, 'POST_DELETE_FAILED', error);
        }
    }
}