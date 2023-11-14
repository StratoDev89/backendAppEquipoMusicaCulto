"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddelware = exports.userController = void 0;
const delete_1 = require("../application/delete");
const get_1 = require("../application/get");
const getAll_1 = require("../application/getAll");
const create_1 = require("../application/create");
const update_1 = require("../application/update");
const login_1 = require("../application/login");
const user_mongo_repo_1 = require("./user-mongo-repo");
const user_controller_1 = require("./user-controller");
const hashing_service_1 = require("../../shared/hashing-service");
const token_service_1 = require("../../shared/token-service");
const auth_middleware_1 = require("../../shared/auth-middleware");
// security
const hashingService = new hashing_service_1.HashingService();
const tokenService = new token_service_1.TokenService();
// middelwares
const authMiddelware = new auth_middleware_1.AuthHandler(tokenService);
exports.authMiddelware = authMiddelware;
// repositories
const userMongoRepository = new user_mongo_repo_1.UserMongoRepository();
// use cases
const createUser = new create_1.CreateUser(userMongoRepository, hashingService);
const updateUser = new update_1.UpdateUser(userMongoRepository, hashingService);
const deleteUser = new delete_1.DeleteUser(userMongoRepository);
const getUser = new get_1.GetUser(userMongoRepository);
const getAllUsers = new getAll_1.GetAllUsers(userMongoRepository);
const loginUser = new login_1.LoginUser(userMongoRepository, hashingService, tokenService);
// controller
const userController = new user_controller_1.UserController(createUser, updateUser, getUser, getAllUsers, deleteUser, loginUser);
exports.userController = userController;
