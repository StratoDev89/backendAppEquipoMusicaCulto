import express from "express";
import { songController } from "./dependencies";
import {
  validatorHandler,
  isMongoIdValidatorHandler,
} from "../../shared/validator-middleware";
import {
  createSongSchema,
  updateSongSchema,
} from "../../shared/song-validator-schemas";
import { authMiddelware } from "../../users/infraestructure/dependencies";

export const songRouter = express.Router();

songRouter.post(
  "/",
  validatorHandler(createSongSchema, "body"),
  authMiddelware.authVerification.bind(authMiddelware),
  songController.create.bind(songController)
);

songRouter.get(
  "/:id",
  isMongoIdValidatorHandler,
  songController.get.bind(songController)
);

songRouter.get("/", songController.getAll.bind(songController));


songRouter.put(
  "/:id",
  validatorHandler(updateSongSchema, "body"),
  authMiddelware.authVerification.bind(authMiddelware),
  isMongoIdValidatorHandler,
  songController.update.bind(songController)
);

songRouter.delete(
  "/:id",
  isMongoIdValidatorHandler,
  authMiddelware.authVerification.bind(authMiddelware),
  songController.delete.bind(songController)
);
