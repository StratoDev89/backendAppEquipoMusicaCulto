import Express from "express";
import { authMiddelware, userController } from "./dependencies";
import {
  validatorHandler,
  isMongoIdValidatorHandler,
  adminPasswordHandler,
} from "../../shared/validator-middleware";
import {
  createUserSchema,
  loginUserSchema,
  updateUserSchema,
} from "../../shared/user-validatator-schemas";

export const userRouter = Express.Router();

userRouter.post(
  "/",
  validatorHandler(createUserSchema, "body"),
  adminPasswordHandler,
  userController.register.bind(userController)
);

userRouter.get("/", userController.getAll.bind(userController));

userRouter.get(
  "/profile",
  authMiddelware.authVerification.bind(authMiddelware),
  userController.getProfile.bind(userController)
);

userRouter.get(
  "/:id",
  isMongoIdValidatorHandler,
  userController.get.bind(userController)
);

userRouter.put(
  "/:id",
  isMongoIdValidatorHandler,
  validatorHandler(updateUserSchema, "body"),
  userController.update.bind(userController)
);

userRouter.delete(
  "/:id",
  isMongoIdValidatorHandler,
  userController.delete.bind(userController)
);

userRouter.post(
  "/login",
  validatorHandler(loginUserSchema, "body"),
  userController.login.bind(userController)
);
