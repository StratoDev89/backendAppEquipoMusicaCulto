import { TokenServiceInterface } from "../domain/auth-service";
import { HashingServiceInterface } from "../domain/hashing-service";
import { loginUserDto } from "../domain/user-dto";
import { UserRepository } from "../domain/user-repository";
import { payload } from "../domain/user-types";

export class LoginUser {
  constructor(
    private readonly userRepo: UserRepository,
    private hashingService: HashingServiceInterface,
    private tokenService: TokenServiceInterface
  ) {}

  async run(credentials: loginUserDto) {
    const { nick, password } = credentials;
    const user = await this.userRepo.login(nick);

    const isAuth = await this.hashingService.comparePassword(
      password,
      user!.password
    );
    if (!isAuth) {
      throw new Error("Login Error");
    }

    const payload: payload = {
      sub: user._id,
      nick: user.nick!,
    };

    return this.tokenService.signToken(payload);
  }
}
