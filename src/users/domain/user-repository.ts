import { User } from "./user";
import { CreateUserDto, UpdateUserDto } from "./user-dto";

export interface UserRepository {
  register(user: CreateUserDto): Promise<User | null>;
  getAll(): Promise<User[] | null>;
  get(userId: string): Promise<User | null>;
  update(id: string, user: UpdateUserDto): Promise<User | null>;
  delete(userId: string): Promise<boolean | null>;
  login(nick: string): Promise<any>;
}
