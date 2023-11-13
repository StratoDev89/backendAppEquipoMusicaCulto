import { SongRepository } from "../domain/song-repository";

export class DeleteSong {
  constructor(private songRepo: SongRepository) {}

  async run(id: string) {
    return await this.songRepo.delete(id);
  }
}
