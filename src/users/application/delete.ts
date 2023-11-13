import { UserRepository } from "../domain/user-repository";

export class DeleteUser {
  constructor(private userRepo: UserRepository) {}

  async run(id: string) {
    return await this.userRepo.delete(id);
  }
}
