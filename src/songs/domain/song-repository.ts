import { CreateSongDto, UpdateSongDto } from "./song-dto";
import { Song } from "../domain/song";

export interface SongRepository {
  create(song: CreateSongDto): Promise<Song | null>;
  update(id: string, changes: UpdateSongDto): Promise<Song | null>;
  delete(id: string): Promise<boolean>;
  get(id: string): Promise<Song | null>;
  getAll(title?:string, style?:string): Promise<Song[] | null>;
}
