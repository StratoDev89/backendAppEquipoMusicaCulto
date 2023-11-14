"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserSchema = exports.updateUserSchema = exports.createUserSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const nick = joi_1.default.string()
    .regex(/^[A-Za-z\s]+$/)
    .min(3);
const password = joi_1.default.string().min(6);
const loginUserSchema = joi_1.default.object({
    nick: nick.required(),
    password: password.required(),
});
exports.loginUserSchema = loginUserSchema;
const createUserSchema = loginUserSchema.keys({
    adminPassword: joi_1.default.string().required(),
});
exports.createUserSchema = createUserSchema;
const updateUserSchema = joi_1.default.object({ nick, password });
exports.updateUserSchema = updateUserSchema;
