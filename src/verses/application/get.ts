import { VerseRepository } from "../domain/verses-repository";

export class GetVerse {
  constructor(private verseRepo: VerseRepository) {}

  async run(id: string) {
    return await this.verseRepo.get(id);
  }
}
