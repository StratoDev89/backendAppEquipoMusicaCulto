import { HashingServiceInterface } from "../domain/hashing-service";
import { UpdateUserDto } from "../domain/user-dto";
import { UserRepository } from "../domain/user-repository";

export class UpdateUser {
  constructor(
    private userRepo: UserRepository,
    private hashsingService: HashingServiceInterface
  ) {}

  async run(id: string, changes: UpdateUserDto) {
    const { password } = changes;

    if (password) {
      const hashedPassword = await this.hashsingService.hashPassword(
        changes.password!
      );

      const changesWithHashedPassword = { ...changes, password: hashedPassword };
      return await this.userRepo.update(id, changesWithHashedPassword);
    }

    return await this.userRepo.update(id, changes);
  }
}
