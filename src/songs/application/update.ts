import { UpdateSongDto } from "../domain/song-dto";
import { SongRepository } from "../domain/song-repository";

export class UpdateSong {
  constructor(private songRepo: SongRepository) {}

  async run(id: string, changes: UpdateSongDto) {
    return await this.songRepo.update(id, changes);
  }
}
