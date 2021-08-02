"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var routing_controllers_1 = require("routing-controllers");
var post_service_1 = __importDefault(require("./post.service"));
var post_validator_1 = require("./post.validator");
var PostController = /** @class */ (function () {
    function PostController() {
        this.postService = new post_service_1.default();
    }
    PostController.prototype.createPost = function (request, response, body) {
        return __awaiter(this, void 0, void 0, function () {
            var text, user, postData, post, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        text = body.text, user = body.user;
                        postData = {
                            text: text,
                            user: user
                        };
                        return [4 /*yield*/, this.postService.create(postData)];
                    case 1:
                        post = _a.sent();
                        return [2 /*return*/, response.formatter.ok(post, true, 'POST_CREATED_SUCCESS')];
                    case 2:
                        error_1 = _a.sent();
                        console.log("ERR:: ", error_1);
                        return [2 /*return*/, response.formatter.error({}, false, 'POST_CREATE_FAILED', error_1)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PostController.prototype.editPost = function (request, response, body) {
        return __awaiter(this, void 0, void 0, function () {
            var text, postId, post, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        text = body.text, postId = body.postId;
                        return [4 /*yield*/, this.postService.updateOne({
                                _id: postId
                            }, {
                                $set: {
                                    text: text
                                }
                            })];
                    case 1:
                        post = _a.sent();
                        if (!post)
                            return [2 /*return*/, response.formatter.error({}, false, 'POST_NOT_FOUND')];
                        return [2 /*return*/, response.formatter.ok(post, true, 'POST_UPDATED_SUCCESS')];
                    case 2:
                        error_2 = _a.sent();
                        console.log("ERR:: ", error_2);
                        return [2 /*return*/, response.formatter.error({}, false, 'POST_UPDATED_FAILED', error_2)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PostController.prototype.deletePost = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, post, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = request.params.id;
                        return [4 /*yield*/, this.postService.delete(id)];
                    case 1:
                        post = _a.sent();
                        if (!post)
                            return [2 /*return*/, response.formatter.error({}, false, 'POST_NOT_FOUND')];
                        return [2 /*return*/, response.formatter.ok({}, true, 'POST_DELETE_SUCCESS')];
                    case 2:
                        error_3 = _a.sent();
                        console.log("ERR:: ", error_3);
                        return [2 /*return*/, response.formatter.error({}, false, 'POST_DELETE_FAILED', error_3)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        routing_controllers_1.Post('/create', { transformResponse: true }),
        __param(0, routing_controllers_1.Req()),
        __param(1, routing_controllers_1.Res()),
        __param(2, routing_controllers_1.Body({ validate: true })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, post_validator_1.PostDTO]),
        __metadata("design:returntype", Promise)
    ], PostController.prototype, "createPost", null);
    __decorate([
        routing_controllers_1.Put('/edit', { transformResponse: true }),
        __param(0, routing_controllers_1.Req()),
        __param(1, routing_controllers_1.Res()),
        __param(2, routing_controllers_1.Body({ validate: true })),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object, post_validator_1.EditPostDTO]),
        __metadata("design:returntype", Promise)
    ], PostController.prototype, "editPost", null);
    __decorate([
        routing_controllers_1.Delete('/:id', { transformResponse: true }),
        __param(0, routing_controllers_1.Req()),
        __param(1, routing_controllers_1.Res()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Promise)
    ], PostController.prototype, "deletePost", null);
    PostController = __decorate([
        routing_controllers_1.JsonController('/post')
    ], PostController);
    return PostController;
}());
exports.default = PostController;
