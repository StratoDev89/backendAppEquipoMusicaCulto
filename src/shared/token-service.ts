import jwt from "jsonwebtoken";
import { TokenServiceInterface } from "../users/domain/auth-service";
import { payload } from "../users/domain/user-types";

export class TokenService implements TokenServiceInterface {
  secretKey = 'asdasdasdasda';

  signToken(payload: payload): string {
    return jwt.sign(payload, this.secretKey!, { expiresIn: '2h' });
  }

  verifyToken(token: string): any {
    return jwt.verify(token, this.secretKey!);
  }
}
