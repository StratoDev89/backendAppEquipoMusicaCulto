import { CreateVerseDto } from "../domain/verses-dto";
import { VerseRepository } from "../domain/verses-repository";

export class CreateVerse {
  constructor(private verseRepo: VerseRepository) {}

  async run(data: CreateVerseDto) {
    return await this.verseRepo.create(data);
  }
}
