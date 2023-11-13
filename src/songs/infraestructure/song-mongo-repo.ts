import { FilterQuery } from "mongoose";
import { Song } from "../domain/song";
import { CreateSongDto, UpdateSongDto } from "../domain/song-dto";
import { SongRepository } from "../domain/song-repository";
import songMongoSchema from "./song-mongo-schema";

export class SongMongoRepository implements SongRepository {
  async create(songFromReq: CreateSongDto): Promise<Song | null> {
    const { name, tone, youtubeUrl, style, observations } = songFromReq;
    const isSong = await songMongoSchema.findOne({ name: name });

    if (isSong) {
      throw new Error("Song already exists");
    }

    const song = new Song(name, tone, youtubeUrl, style, observations);
    const newSong = new songMongoSchema(song);
    const songSaved = await newSong.save();

    return songSaved;
  }

  async getAll(title?: string, style?: string): Promise<Song[] | null> {
    let filters: FilterQuery<Song> = {};

    if (title) {
      const regex = new RegExp(title, "i");
      filters.name = regex;
    }

    if (style) {
      filters.style = style;
    }

    const songs = await songMongoSchema.find(filters);
    if (!songs) {
      throw new Error("There are not songs in Database");
    }
    return songs;
  }

  async get(id: string): Promise<Song | null> {
    const song = await songMongoSchema.findOne({ _id: id });

    if (!song) {
      throw new Error("Song doesn't exists");
    }

    return song;
  }

  async delete(id: string): Promise<boolean> {
    const song = await songMongoSchema.findByIdAndDelete(id);

    if (!song) {
      throw new Error("Song doesn't exists");
    }

    return true;
  }

  async update(id: string, changes: UpdateSongDto): Promise<Song | null> {
    await this.get(id);

    const songUpdated = await songMongoSchema.findByIdAndUpdate(id, changes, {
      new: true,
    });

    return songUpdated;
  }
}
