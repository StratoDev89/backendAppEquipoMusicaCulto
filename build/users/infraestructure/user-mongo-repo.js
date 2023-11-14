"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMongoRepository = void 0;
const user_1 = require("../domain/user");
const user_mongo_schema_1 = __importDefault(require("./user-mongo-schema"));
class UserMongoRepository {
    register(userFromReq) {
        return __awaiter(this, void 0, void 0, function* () {
            const isUser = yield user_mongo_schema_1.default.findOne({ nick: userFromReq.nick });
            if (isUser) {
                throw new Error("User already exists");
            }
            const user = new user_1.User(userFromReq.nick, userFromReq.password);
            const newUser = new user_mongo_schema_1.default(user);
            const userSaved = yield newUser.save();
            return userSaved;
        });
    }
    get(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_mongo_schema_1.default.findOne({ _id: userId });
            if (!user) {
                throw new Error("User not found");
            }
            return user;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield user_mongo_schema_1.default.find();
            if (!users || users.length === 0) {
                throw new Error("There are not users in Database");
            }
            return users;
        });
    }
    update(id, changes) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.get(id);
            return yield user_mongo_schema_1.default.findByIdAndUpdate(id, changes, { new: true });
        });
    }
    delete(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const userDeleted = yield user_mongo_schema_1.default.findByIdAndDelete(userId);
            if (!userDeleted) {
                throw new Error("User not found");
            }
            return true;
        });
    }
    login(nick) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_mongo_schema_1.default.findOne({ nick: nick });
            if (!user) {
                throw new Error("Login error");
            }
            return user;
        });
    }
}
exports.UserMongoRepository = UserMongoRepository;
