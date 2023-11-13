import { HashingServiceInterface } from "../domain/hashing-service";
import { CreateUserDto } from "../domain/user-dto";
import { UserRepository } from "../domain/user-repository";

export class CreateUser {
  constructor(
    private userRepo: UserRepository,
    private hashsingService: HashingServiceInterface
  ) {}

  async run(user: CreateUserDto) {
    const hashedPassword = await this.hashsingService.hashPassword(
      user.password
    );
    const userWithHashedPassword = { ...user, password: hashedPassword };
    return await this.userRepo.register(userWithHashedPassword);
  }
}
