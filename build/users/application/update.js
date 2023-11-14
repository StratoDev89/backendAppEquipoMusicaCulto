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
exports.UpdateUser = void 0;
class UpdateUser {
    constructor(userRepo, hashsingService) {
        this.userRepo = userRepo;
        this.hashsingService = hashsingService;
    }
    run(id, changes) {
        return __awaiter(this, void 0, void 0, function* () {
            const { password } = changes;
            if (password) {
                const hashedPassword = yield this.hashsingService.hashPassword(changes.password);
                const changesWithHashedPassword = Object.assign(Object.assign({}, changes), { password: hashedPassword });
                return yield this.userRepo.update(id, changesWithHashedPassword);
            }
            return yield this.userRepo.update(id, changes);
        });
    }
}
exports.UpdateUser = UpdateUser;
