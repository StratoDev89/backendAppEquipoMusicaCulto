import { UserRepository } from "../domain/user-repository";

export class GetUser {
  constructor(private userRepo: UserRepository) {}

  async run(userId: string) {
    return await this.userRepo.get(userId);
  }
}
