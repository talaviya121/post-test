import { Application } from "express";
import { useExpressServer } from "routing-controllers";
import PostController from "./api/post/post.controller";
import RatingController from "./api/rate/rate.controller";

const basePath = `/api/v1`;

function initRoute(app: Application) {
    useExpressServer(app, {
        controllers: [
            PostController,
            RatingController
        ],
        defaultErrorHandler: true,
        routePrefix: basePath
    })
}

export default initRoute