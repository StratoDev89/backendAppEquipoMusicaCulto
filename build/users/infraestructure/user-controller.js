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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    constructor(createUser, updateUser, getUser, getAllUsers, deleteUser, loginUser) {
        this.createUser = createUser;
        this.updateUser = updateUser;
        this.getUser = getUser;
        this.getAllUsers = getAllUsers;
        this.deleteUser = deleteUser;
        this.loginUser = loginUser;
    }
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nick, password } = req.body;
                const userToRegister = { nick, password };
                const userRegistered = yield this.createUser.run(userToRegister);
                res.status(200).json(userRegistered);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    getAll(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.getAllUsers.run();
                res.status(200).json({ users });
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const user = yield this.getUser.run(id);
                res.status(200).json({ message: "Get user OK", user });
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    getProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { user } = req.body;
                res.status(200).json(user);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const changes = req.body;
                const updatedUser = yield this.updateUser.run(id, changes);
                res.status(200).json({ message: "Updated user OK", user: updatedUser });
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const wasUserDeleted = yield this.deleteUser.run(id);
                res.status(200).json({ message: "Delete user OK", wasUserDeleted });
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const credentials = req.body;
                const accessToken = yield this.loginUser.run(credentials);
                res.status(200).json(accessToken);
            }
            catch (error) {
                res.status(500).json({ message: error.message });
            }
        });
    }
}
exports.UserController = UserController;
