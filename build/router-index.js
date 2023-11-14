"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerApi = void 0;
const express_1 = __importDefault(require("express"));
const user_router_1 = require("./users/infraestructure/user-router");
const song_router_1 = require("./songs/infraestructure/song-router");
const verses_router_1 = require("./verses/infraestructure/verses-router");
function routerApi(app) {
    const router = express_1.default.Router();
    app.use("/api/v1", router);
    router.use("/users", user_router_1.userRouter);
    router.use("/songs", song_router_1.songRouter);
    router.use("/verses", verses_router_1.verseRouter);
}
exports.routerApi = routerApi;
