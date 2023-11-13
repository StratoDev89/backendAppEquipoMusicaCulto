import { hash, compare } from "bcryptjs";
import { HashingServiceInterface } from "../users/domain/hashing-service";

export class HashingService implements HashingServiceInterface {
  async hashPassword(password: string): Promise<string> {
    return await hash(password, 10);
  }

  async comparePassword(password: string, hash: string): Promise<boolean> {
    return await compare(password, hash);
  }
}

