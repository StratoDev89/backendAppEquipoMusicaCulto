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
exports.SongMongoRepository = void 0;
const song_1 = require("../domain/song");
const song_mongo_schema_1 = __importDefault(require("./song-mongo-schema"));
class SongMongoRepository {
    create(songFromReq) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, tone, youtubeUrl, style, observations } = songFromReq;
            const isSong = yield song_mongo_schema_1.default.findOne({ name: name });
            if (isSong) {
                throw new Error("Song already exists");
            }
            const song = new song_1.Song(name, tone, youtubeUrl, style, observations);
            const newSong = new song_mongo_schema_1.default(song);
            const songSaved = yield newSong.save();
            return songSaved;
        });
    }
    getAll(title, style) {
        return __awaiter(this, void 0, void 0, function* () {
            let filters = {};
            if (title) {
                const regex = new RegExp(title, "i");
                filters.name = regex;
            }
            if (style) {
                filters.style = style;
            }
            const songs = yield song_mongo_schema_1.default.find(filters);
            if (!songs) {
                throw new Error("There are not songs in Database");
            }
            return songs;
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const song = yield song_mongo_schema_1.default.findOne({ _id: id });
            if (!song) {
                throw new Error("Song doesn't exists");
            }
            return song;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const song = yield song_mongo_schema_1.default.findByIdAndDelete(id);
            if (!song) {
                throw new Error("Song doesn't exists");
            }
            return true;
        });
    }
    update(id, changes) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.get(id);
            const songUpdated = yield song_mongo_schema_1.default.findByIdAndUpdate(id, changes, {
                new: true,
            });
            return songUpdated;
        });
    }
}
exports.SongMongoRepository = SongMongoRepository;
