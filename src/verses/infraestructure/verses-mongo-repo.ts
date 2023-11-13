import { Verse } from "../domain/verses";
import { CreateVerseDto, UpdateVerseDto } from "../domain/verses-dto";
import { VerseRepository } from "../domain/verses-repository";
import verseMongoSchema from "./verses-mongo-schema";

export class VerseMongoRepository implements VerseRepository {
  async create(verseFromReq: CreateVerseDto): Promise<Verse | null> {
    const { name, text } = verseFromReq;
    const isVerse = await verseMongoSchema.findOne({ name: name });

    if (isVerse) {
      throw new Error("verse already exists");
    }

    const verse = new Verse(name, text);
    const newVerse = new verseMongoSchema(verse);
    const verseSaved = await newVerse.save();

    return verseSaved;
  }

  async getAll(query?: any): Promise<Verse[] | null> {
    if (query) {
      const regex = new RegExp(query, "i");
      const verses = await verseMongoSchema.find({ name: regex });

      if (!verses) {
        throw new Error("There are not verses in Database");
      }
      return verses;
    }
    const verses = await verseMongoSchema.find();
    if (!verses) {
      throw new Error("There are not verses in Database");
    }
    return verses;
  }

  async get(id: string): Promise<Verse | null> {
    const verse = await verseMongoSchema.findOne({ _id: id });

    if (!verse) {
      throw new Error("verse doesn't exists");
    }

    return verse;
  }

  async delete(id: string): Promise<boolean> {
    const verse = await verseMongoSchema.findByIdAndDelete(id);

    if (!verse) {
      throw new Error("verse doesn't exists");
    }

    return true;
  }

  async update(id: string, changes: UpdateVerseDto): Promise<Verse | null> {
    await this.get(id);

    const verseUpdated = await verseMongoSchema.findByIdAndUpdate(id, changes, {
      new: true,
    });

    return verseUpdated;
  }
}
