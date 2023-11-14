"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.songRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
const validator_middleware_1 = require("../../shared/validator-middleware");
const song_validator_schemas_1 = require("../../shared/song-validator-schemas");
const dependencies_2 = require("../../users/infraestructure/dependencies");
exports.songRouter = express_1.default.Router();
exports.songRouter.post("/", (0, validator_middleware_1.validatorHandler)(song_validator_schemas_1.createSongSchema, "body"), dependencies_2.authMiddelware.authVerification.bind(dependencies_2.authMiddelware), dependencies_1.songController.create.bind(dependencies_1.songController));
exports.songRouter.get("/:id", validator_middleware_1.isMongoIdValidatorHandler, dependencies_1.songController.get.bind(dependencies_1.songController));
exports.songRouter.get("/", dependencies_1.songController.getAll.bind(dependencies_1.songController));
exports.songRouter.put("/:id", (0, validator_middleware_1.validatorHandler)(song_validator_schemas_1.updateSongSchema, "body"), dependencies_2.authMiddelware.authVerification.bind(dependencies_2.authMiddelware), validator_middleware_1.isMongoIdValidatorHandler, dependencies_1.songController.update.bind(dependencies_1.songController));
exports.songRouter.delete("/:id", validator_middleware_1.isMongoIdValidatorHandler, dependencies_2.authMiddelware.authVerification.bind(dependencies_2.authMiddelware), dependencies_1.songController.delete.bind(dependencies_1.songController));
