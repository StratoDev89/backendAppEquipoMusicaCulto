import { UpdateVerseDto } from "../domain/verses-dto";
import { VerseRepository } from "../domain/verses-repository";

export class UpdateVerse {
  constructor(private verseRepo: VerseRepository) {}

  async run(id: string, changes: UpdateVerseDto) {
    return await this.verseRepo.update(id, changes);
  }
}
