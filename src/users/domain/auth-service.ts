import { payload } from "./user-types";

export interface TokenServiceInterface {
  signToken(payload: payload): string;
  verifyToken(token: string): any;
}
