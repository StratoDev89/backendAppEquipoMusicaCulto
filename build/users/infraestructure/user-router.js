"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
const validator_middleware_1 = require("../../shared/validator-middleware");
const user_validatator_schemas_1 = require("../../shared/user-validatator-schemas");
exports.userRouter = express_1.default.Router();
exports.userRouter.post("/", (0, validator_middleware_1.validatorHandler)(user_validatator_schemas_1.createUserSchema, "body"), validator_middleware_1.adminPasswordHandler, dependencies_1.userController.register.bind(dependencies_1.userController));
exports.userRouter.get("/", dependencies_1.userController.getAll.bind(dependencies_1.userController));
exports.userRouter.get("/profile", dependencies_1.authMiddelware.authVerification.bind(dependencies_1.authMiddelware), dependencies_1.userController.getProfile.bind(dependencies_1.userController));
exports.userRouter.get("/:id", validator_middleware_1.isMongoIdValidatorHandler, dependencies_1.userController.get.bind(dependencies_1.userController));
exports.userRouter.put("/:id", validator_middleware_1.isMongoIdValidatorHandler, (0, validator_middleware_1.validatorHandler)(user_validatator_schemas_1.updateUserSchema, "body"), dependencies_1.userController.update.bind(dependencies_1.userController));
exports.userRouter.delete("/:id", validator_middleware_1.isMongoIdValidatorHandler, dependencies_1.userController.delete.bind(dependencies_1.userController));
exports.userRouter.post("/login", (0, validator_middleware_1.validatorHandler)(user_validatator_schemas_1.loginUserSchema, "body"), dependencies_1.userController.login.bind(dependencies_1.userController));
