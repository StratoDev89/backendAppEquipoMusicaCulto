import { UserRepository } from "../domain/user-repository";

export class GetAllUsers {
  constructor(private userRepo: UserRepository) {}

  async run() {
    return await this.userRepo.getAll();
  }
}
