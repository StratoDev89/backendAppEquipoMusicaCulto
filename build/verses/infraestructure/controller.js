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
exports.VerseController = void 0;
class VerseController {
    constructor(createVerse, getAllVerses, getVerse, updateVerse, deleteVerse) {
        this.createVerse = createVerse;
        this.getAllVerses = getAllVerses;
        this.getVerse = getVerse;
        this.updateVerse = updateVerse;
        this.deleteVerse = deleteVerse;
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = req.body;
                const newVerse = yield this.createVerse.run(data);
                res.status(200).send({ message: "Create verse Ok", newVerse });
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.query;
                if (name) {
                    const verses = yield this.getAllVerses.run(name);
                    res.status(200).send(verses);
                    return;
                }
                const verses = yield this.getAllVerses.run();
                res.status(200).send(verses);
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
                const verse = yield this.getVerse.run(id);
                res.status(200).send({ message: "Get verse Ok", verse });
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
                const verse = yield this.updateVerse.run(id, changes);
                res.status(200).send({ message: "Update verse Ok", wasVerseDeleted: verse });
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
                const verse = yield this.deleteVerse.run(id);
                res.status(200).send(verse);
            }
            catch (error) {
                res.status(500).send(error.message);
            }
        });
    }
}
exports.VerseController = VerseController;
