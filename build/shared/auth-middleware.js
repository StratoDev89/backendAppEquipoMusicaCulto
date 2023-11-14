"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthHandler = void 0;
class AuthHandler {
    constructor(tokenService) {
        this.tokenService = tokenService;
    }
    authVerification(req, res, next) {
        const { authorization } = req.headers;
        if (!authorization) {
            res.status(401).send("Not authorized headers");
            return;
        }
        const [authType, token] = authorization.split(" ");
        if (authType !== "Bearer") {
            res.status(401).send("Not authorized Auth");
            return;
        }
        try {
            const user = this.tokenVerification(token);
            req.body["user"] = user;
            next();
        }
        catch (error) {
            res.status(401).send({ message: "Not valid token", error });
            return;
        }
    }
    tokenVerification(token) {
        return this.tokenService.verifyToken(token);
    }
}
exports.AuthHandler = AuthHandler;
