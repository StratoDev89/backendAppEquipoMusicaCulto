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
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const router_index_1 = require("./router-index");
const mongo_config_1 = __importDefault(require("./database/mongo-config"));
const cors_1 = __importDefault(require("cors"));
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        const PORT = config_1.default.port;
        app.use((0, cors_1.default)());
        app.use(express_1.default.json());
        app.use(express_1.default.urlencoded({ extended: false }));
        (0, router_index_1.routerApi)(app);
        app.get("/ping", (_, res) => {
            console.log("Bang");
            res.send("someone pinned here!!");
        });
        yield (0, mongo_config_1.default)(config_1.default.dbConnection, config_1.default.dbHost, config_1.default.dbUser, config_1.default.dbPassword, config_1.default.dbName);
        app.listen(PORT, () => {
            console.log(`server running on port ${PORT}`);
        });
    });
}
bootstrap();
