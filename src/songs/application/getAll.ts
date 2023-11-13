import { SongRepository } from "../domain/song-repository";

export class GetAllSongs {
  constructor(private songRepo: SongRepository) {}

  async run(title?: any, style?: any) {
    return await this.songRepo.getAll(title, style);
  }
}
