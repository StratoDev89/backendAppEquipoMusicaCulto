"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verseController = void 0;
const create_1 = require("../application/create");
const getAll_1 = require("../application/getAll");
const get_1 = require("../application/get");
const update_1 = require("../application/update");
const delete_1 = require("../application/delete");
const verses_mongo_repo_1 = require("./verses-mongo-repo");
const controller_1 = require("./controller");
// Repository
const verseMongoRepository = new verses_mongo_repo_1.VerseMongoRepository();
// use cases
const createVerse = new create_1.CreateVerse(verseMongoRepository);
const getAllVerses = new getAll_1.GetAllVerses(verseMongoRepository);
const getVerse = new get_1.GetVerse(verseMongoRepository);
const updateVerse = new update_1.UpdateVerse(verseMongoRepository);
const deleteVerse = new delete_1.DeleteVerse(verseMongoRepository);
// Controller
const verseController = new controller_1.VerseController(createVerse, getAllVerses, getVerse, updateVerse, deleteVerse);
exports.verseController = verseController;
