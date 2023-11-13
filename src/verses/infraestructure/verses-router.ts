import express from "express";
import { verseController } from "./dependencies";
import {
  validatorHandler,
  isMongoIdValidatorHandler,
} from "../../shared/validator-middleware";
import {
  createVerseSchema,
  updateVerseSchema,
} from "./verse-validator-schemas";
import { authMiddelware } from "../../users/infraestructure/dependencies";

export const verseRouter = express.Router();

verseRouter.post(
  "/",
  validatorHandler(createVerseSchema, "body"),
  authMiddelware.authVerification.bind(authMiddelware),
  verseController.create.bind(verseController)
);

verseRouter.get(
  "/:id",
  isMongoIdValidatorHandler,
  verseController.get.bind(verseController)
);

verseRouter.get(
  "/",
  verseController.getAll.bind(verseController)
);

verseRouter.put(
  "/:id",
  validatorHandler(updateVerseSchema, "body"),
  authMiddelware.authVerification.bind(authMiddelware),
  isMongoIdValidatorHandler,
  verseController.update.bind(verseController)
);

verseRouter.delete(
  "/:id",
  isMongoIdValidatorHandler,
  authMiddelware.authVerification.bind(authMiddelware),
  verseController.delete.bind(verseController)
);
