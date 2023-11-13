import { CreateVerse } from "../application/create";
import { GetAllVerses } from "../application/getAll";
import { GetVerse } from "../application/get";
import { UpdateVerse } from "../application/update";
import { DeleteVerse } from "../application/delete";

import { VerseMongoRepository } from "./verses-mongo-repo";
import { VerseController } from "./controller";

// Repository
const verseMongoRepository = new VerseMongoRepository();

// use cases
const createVerse = new CreateVerse(verseMongoRepository);
const getAllVerses = new GetAllVerses(verseMongoRepository);
const getVerse = new GetVerse(verseMongoRepository);
const updateVerse = new UpdateVerse(verseMongoRepository);
const deleteVerse = new DeleteVerse(verseMongoRepository);

// Controller
const verseController = new VerseController(
  createVerse,
  getAllVerses,
  getVerse,
  updateVerse,
  deleteVerse
);

export { verseController };
