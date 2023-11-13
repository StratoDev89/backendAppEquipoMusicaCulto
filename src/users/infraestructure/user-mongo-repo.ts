import { HashingService } from "../../shared/hashing-service";
import { User } from "../domain/user";
import { CreateUserDto, UpdateUserDto, UserDto, loginUserDto } from "../domain/user-dto";

import { UserRepository } from "../domain/user-repository";
import userMongoSchema from "./user-mongo-schema";

export class UserMongoRepository implements UserRepository {

  async register(userFromReq: CreateUserDto): Promise<User | null> {
    const isUser = await userMongoSchema.findOne({ nick: userFromReq.nick });

    if (isUser) {
      throw new Error("User already exists");
    }

    const user = new User(userFromReq.nick, userFromReq.password);
    const newUser = new userMongoSchema(user);
    const userSaved = await newUser.save();
    return userSaved;
  }

  async get(userId: string): Promise<User | null> {
    const user = await userMongoSchema.findOne({ _id: userId });

    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }

  async getAll(): Promise<User[] | null> {
    const users = await userMongoSchema.find();

    if (!users || users.length === 0) {
      throw new Error("There are not users in Database");
    }

    return users;
  }

  async update(id: string, changes: UpdateUserDto): Promise<User | null> {
    await this.get(id);
  
    return await userMongoSchema.findByIdAndUpdate(id, changes, { new: true });
  }

  async delete(userId: string): Promise<boolean | null> {
    const userDeleted = await userMongoSchema.findByIdAndDelete(userId);

    if (!userDeleted) {
      throw new Error("User not found");
    }
    return true;
  }

  async login(nick:string): Promise<any> {
    const user = await userMongoSchema.findOne({ nick: nick });

    if (!user) {
      throw new Error("Login error");
    }

    return user;
  }
}
