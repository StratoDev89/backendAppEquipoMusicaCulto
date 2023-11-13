import { CreateSong } from "../application/create";
import { GetAllSongs } from "../application/getAll";
import { GetSong } from "../application/get";
import { UpdateSong } from "../application/update";
import { DeleteSong } from "../application/delete";

import { SongMongoRepository } from "./song-mongo-repo";
import { SongController } from "./controller";

// Repository
const songMongoRepository = new SongMongoRepository();

// use cases
const createSong = new CreateSong(songMongoRepository);
const getAllSongs = new GetAllSongs(songMongoRepository);
const getSong = new GetSong(songMongoRepository);
const updateSong = new UpdateSong(songMongoRepository);
const deleteSong = new DeleteSong(songMongoRepository);

// Controller
const songController = new SongController(
  createSong,
  getAllSongs,
  getSong,
  updateSong,
  deleteSong
);

export { songController };
