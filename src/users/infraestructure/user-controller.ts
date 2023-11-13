import { Request, Response } from "express";
import { DeleteUser } from "../application/delete";
import { GetUser } from "../application/get";
import { GetAllUsers } from "../application/getAll";
import { CreateUser } from "../application/create";
import { UpdateUser } from "../application/update";
import { LoginUser } from "../application/login";

export class UserController {
  constructor(
    private readonly createUser: CreateUser,
    private readonly updateUser: UpdateUser,
    private readonly getUser: GetUser,
    private readonly getAllUsers: GetAllUsers,
    private readonly deleteUser: DeleteUser,
    private readonly loginUser: LoginUser
  ) {}

  async register(req: Request, res: Response) {
    try {
      const { nick, password } = req.body;
      const userToRegister = { nick, password };
      const userRegistered = await this.createUser.run(userToRegister);
      res.status(200).json(userRegistered);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAll(_req: Request, res: Response) {
    try {
      const users = await this.getAllUsers.run();
      res.status(200).json({ users });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async get(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await this.getUser.run(id);
      res.status(200).json({ message: "Get user OK", user });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async getProfile(req: Request, res: Response) {
    try {
      const { user } = req.body;
      res.status(200).json(user);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const changes = req.body;
      const updatedUser = await this.updateUser.run(id, changes);
      res.status(200).json({ message: "Updated user OK", user: updatedUser });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const wasUserDeleted = await this.deleteUser.run(id);
      res.status(200).json({ message: "Delete user OK", wasUserDeleted });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const credentials = req.body;
      const accessToken = await this.loginUser.run(credentials);
      res.status(200).json(accessToken);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}
