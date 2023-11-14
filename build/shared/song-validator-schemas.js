"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSongSchema = exports.createSongSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const name = joi_1.default.string()
    // .regex(/^[A-Za-z\s]+$/)
    .min(3);
const tone = joi_1.default.string();
const youtubeUrl = joi_1.default.string();
const style = joi_1.default.string().valid("jubilo", "reflexion");
const observations = joi_1.default.string();
const createSongSchema = joi_1.default.object({
    name: name.required(),
    tone: tone.required(),
    youtubeUrl: youtubeUrl.required(),
    style: style.required(),
    observations: observations.required(),
});
exports.createSongSchema = createSongSchema;
const updateSongSchema = joi_1.default.object({ name, tone, youtubeUrl, style, observations });
exports.updateSongSchema = updateSongSchema;
