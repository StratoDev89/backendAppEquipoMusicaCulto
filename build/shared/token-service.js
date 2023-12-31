"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class TokenService {
    constructor() {
        this.secretKey = 'asdasdasdasda';
    }
    signToken(payload) {
        return jsonwebtoken_1.default.sign(payload, this.secretKey, { expiresIn: '2h' });
    }
    verifyToken(token) {
        return jsonwebtoken_1.default.verify(token, this.secretKey);
    }
}
exports.TokenService = TokenService;
