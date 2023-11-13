import { DeleteUser } from "../application/delete";
import { GetUser } from "../application/get";
import { GetAllUsers } from "../application/getAll";
import { CreateUser } from "../application/create";
import { UpdateUser } from "../application/update";
import { LoginUser } from "../application/login";
import { UserMongoRepository } from "./user-mongo-repo";
import { UserController } from "./user-controller";
import { HashingService } from "../../shared/hashing-service";
import { TokenService } from "../../shared/token-service";
import { AuthHandler } from "../../shared/auth-middleware";

// security
const hashingService = new HashingService();
const tokenService = new TokenService();

// middelwares
const authMiddelware = new AuthHandler(tokenService);

// repositories
const userMongoRepository = new UserMongoRepository();

// use cases
const createUser = new CreateUser(userMongoRepository, hashingService);
const updateUser = new UpdateUser(userMongoRepository, hashingService);
const deleteUser = new DeleteUser(userMongoRepository);
const getUser = new GetUser(userMongoRepository);
const getAllUsers = new GetAllUsers(userMongoRepository);
const loginUser = new LoginUser(
  userMongoRepository,
  hashingService,
  tokenService
);

// controller
const userController = new UserController(
  createUser,
  updateUser,
  getUser,
  getAllUsers,
  deleteUser,
  loginUser
);

export { userController, authMiddelware };
