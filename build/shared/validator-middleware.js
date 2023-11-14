"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminPasswordHandler = exports.isMongoIdValidatorHandler = exports.validatorHandler = void 0;
const class_validator_1 = require("class-validator");
const config_1 = __importDefault(require("../config"));
function validatorHandler(schema, property) {
    return (req, res, next) => {
        const data = req[property];
        const { error } = schema.validate(data);
        if (error) {
            res.status(400).json({ message: error.message });
            return;
        }
        next();
    };
}
exports.validatorHandler = validatorHandler;
function isMongoIdValidatorHandler(req, res, next) {
    const { id } = req.params;
    if (!id || !(0, class_validator_1.isMongoId)(id)) {
        throw new Error("Id must be a valid MongoId");
    }
    next();
}
exports.isMongoIdValidatorHandler = isMongoIdValidatorHandler;
function adminPasswordHandler(req, res, next) {
    const { adminPassword } = req.body;
    if (adminPassword !== config_1.default.adminPassword) {
        throw new Error("Error on register AP");
    }
    next();
}
exports.adminPasswordHandler = adminPasswordHandler;
