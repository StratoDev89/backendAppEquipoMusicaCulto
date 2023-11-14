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
exports.SongController = void 0;
class SongController {
    constructor(createSong, getAllSongs, getSong, updateSong, deleteSong) {
        this.createSong = createSong;
        this.getAllSongs = getAllSongs;
        this.getSong = getSong;
        this.updateSong = updateSong;
        this.deleteSong = deleteSong;
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const newSong = yield this.createSong.run(data);
                res.status(200).send({ message: "Create song Ok", newSong });
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title, style } = req.query;
                if (title || style) {
                    const songs = yield this.getAllSongs.run(title, style);
                    res.status(200).send(songs);
                    return;
                }
                const songs = yield this.getAllSongs.run();
                res.status(200).send(songs);
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const song = yield this.getSong.run(id);
                res.status(200).send({ message: "Get song Ok", song });
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const changes = req.body;
                const song = yield this.updateSong.run(id, changes);
                res.status(200).send({ message: "Update song Ok", wasSongDeleted: song });
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const song = yield this.deleteSong.run(id);
                res.status(200).send(song);
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
}
exports.SongController = SongController;
