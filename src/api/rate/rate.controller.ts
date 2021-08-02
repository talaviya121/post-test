import { Body, Delete, Get, JsonController, Post, Put, Req, Res } from "routing-controllers";
import RatingService from "./rate.service";
import { RatingDTO } from "./rate.validator";

@JsonController('/rating')
export default class RatingController {

    private ratingService: RatingService = new RatingService();

    @Post('/add', { transformResponse: true })
    async addRating(@Req() request: any, @Res() response: any, @Body({ validate: true }) body: RatingDTO) {
        try {
            const {
                rate,
                userId,
                postId
            } = body;

            const rateData: any = {
                rate,
                user: userId,
                post: postId
            }

            const rating = await this.ratingService.create(rateData);

            return response.formatter.ok(rating, true, 'RATING_ADDED_SUCCESS');
        } catch (error) {
            console.log("ERR:: ", error)
            return response.formatter.error({}, false, 'RATING_ADDED_FAILED', error);
        }
    }

    @Get('/:id', { transformResponse: true })
    async editPost(@Req() request: any, @Res() response: any) {
        try {
            const {
                id
            } = request.params;

            const rating = await this.ratingService.getRating(id);

            return response.formatter.ok({
                rating: rating[0] ? rating[0].avg_rating : 0
            }, true, '');
        } catch (error) {
            console.log("ERR:: ", error)
            return response.formatter.error({}, false, 'GET_RATING_FAILED', error);
        }
    }
}