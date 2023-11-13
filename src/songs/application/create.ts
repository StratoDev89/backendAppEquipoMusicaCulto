import { CreateSongDto } from "../domain/song-dto";
import { SongRepository } from "../domain/song-repository";

export class CreateSong {
  constructor(private songRepo: SongRepository) {}

  async run(data: CreateSongDto) {
    return await this.songRepo.create(data);
  }
}
