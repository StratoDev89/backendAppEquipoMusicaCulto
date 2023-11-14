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
exports.VerseMongoRepository = void 0;
const verses_1 = require("../domain/verses");
const verses_mongo_schema_1 = __importDefault(require("./verses-mongo-schema"));
class VerseMongoRepository {
    create(verseFromReq) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, text } = verseFromReq;
            const isVerse = yield verses_mongo_schema_1.default.findOne({ name: name });
            if (isVerse) {
                throw new Error("verse already exists");
            }
            const verse = new verses_1.Verse(name, text);
            const newVerse = new verses_mongo_schema_1.default(verse);
            const verseSaved = yield newVerse.save();
            return verseSaved;
        });
    }
    getAll(query) {
        return __awaiter(this, void 0, void 0, function* () {
            if (query) {
                const regex = new RegExp(query, "i");
                const verses = yield verses_mongo_schema_1.default.find({ name: regex });
                if (!verses) {
                    throw new Error("There are not verses in Database");
                }
                return verses;
            }
            const verses = yield verses_mongo_schema_1.default.find();
            if (!verses) {
                throw new Error("There are not verses in Database");
            }
            return verses;
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const verse = yield verses_mongo_schema_1.default.findOne({ _id: id });
            if (!verse) {
                throw new Error("verse doesn't exists");
            }
            return verse;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const verse = yield verses_mongo_schema_1.default.findByIdAndDelete(id);
            if (!verse) {
                throw new Error("verse doesn't exists");
            }
            return true;
        });
    }
    update(id, changes) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.get(id);
            const verseUpdated = yield verses_mongo_schema_1.default.findByIdAndUpdate(id, changes, {
                new: true,
            });
            return verseUpdated;
        });
    }
}
exports.VerseMongoRepository = VerseMongoRepository;
