"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.songController = void 0;
const create_1 = require("../application/create");
const getAll_1 = require("../application/getAll");
const get_1 = require("../application/get");
const update_1 = require("../application/update");
const delete_1 = require("../application/delete");
const song_mongo_repo_1 = require("./song-mongo-repo");
const controller_1 = require("./controller");
// Repository
const songMongoRepository = new song_mongo_repo_1.SongMongoRepository();
// use cases
const createSong = new create_1.CreateSong(songMongoRepository);
const getAllSongs = new getAll_1.GetAllSongs(songMongoRepository);
const getSong = new get_1.GetSong(songMongoRepository);
const updateSong = new update_1.UpdateSong(songMongoRepository);
const deleteSong = new delete_1.DeleteSong(songMongoRepository);
// Controller
const songController = new controller_1.SongController(createSong, getAllSongs, getSong, updateSong, deleteSong);
exports.songController = songController;
