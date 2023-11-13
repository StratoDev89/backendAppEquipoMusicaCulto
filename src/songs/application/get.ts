import { SongRepository } from "../domain/song-repository";

export class GetSong {
  constructor(private songRepo: SongRepository) {}

  async run(id: string) {
    return await this.songRepo.get(id);
  }
}
