"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVerseSchema = exports.createVerseSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const name = joi_1.default.string();
const text = joi_1.default.string();
const createVerseSchema = joi_1.default.object({
    name: name.required(),
    text: text.required(),
});
exports.createVerseSchema = createVerseSchema;
const updateVerseSchema = joi_1.default.object({ name, text });
exports.updateVerseSchema = updateVerseSchema;
