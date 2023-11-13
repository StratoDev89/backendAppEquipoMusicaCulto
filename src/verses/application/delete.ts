import { VerseRepository } from "../domain/verses-repository";

export class DeleteVerse {
  constructor(private verseRepo: VerseRepository) {}

  async run(id: string) {
    return await this.verseRepo.delete(id);
  }
}
