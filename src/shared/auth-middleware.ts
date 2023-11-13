import { NextFunction, Request, Response } from "express";
import { TokenService } from "./token-service";

export class AuthHandler {
  constructor(private tokenService: TokenService) {}

  authVerification(req: Request, res: Response, next: NextFunction) {
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
    } catch (error: any) {
      res.status(401).send({ message: "Not valid token", error });
      return;
    }
  }

  tokenVerification(token: string) {
    return this.tokenService.verifyToken(token);
  }
}
