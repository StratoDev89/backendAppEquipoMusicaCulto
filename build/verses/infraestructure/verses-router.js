"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verseRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
const validator_middleware_1 = require("../../shared/validator-middleware");
const verse_validator_schemas_1 = require("./verse-validator-schemas");
const dependencies_2 = require("../../users/infraestructure/dependencies");
exports.verseRouter = express_1.default.Router();
exports.verseRouter.post("/", (0, validator_middleware_1.validatorHandler)(verse_validator_schemas_1.createVerseSchema, "body"), dependencies_2.authMiddelware.authVerification.bind(dependencies_2.authMiddelware), dependencies_1.verseController.create.bind(dependencies_1.verseController));
exports.verseRouter.get("/:id", validator_middleware_1.isMongoIdValidatorHandler, dependencies_1.verseController.get.bind(dependencies_1.verseController));
exports.verseRouter.get("/", dependencies_1.verseController.getAll.bind(dependencies_1.verseController));
exports.verseRouter.put("/:id", (0, validator_middleware_1.validatorHandler)(verse_validator_schemas_1.updateVerseSchema, "body"), dependencies_2.authMiddelware.authVerification.bind(dependencies_2.authMiddelware), validator_middleware_1.isMongoIdValidatorHandler, dependencies_1.verseController.update.bind(dependencies_1.verseController));
exports.verseRouter.delete("/:id", validator_middleware_1.isMongoIdValidatorHandler, dependencies_2.authMiddelware.authVerification.bind(dependencies_2.authMiddelware), dependencies_1.verseController.delete.bind(dependencies_1.verseController));
