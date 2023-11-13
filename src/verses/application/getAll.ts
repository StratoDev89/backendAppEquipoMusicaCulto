import { VerseRepository } from "../domain/verses-repository";

export class GetAllVerses {
  constructor(private verseRepo: VerseRepository) {}

  async run(queryParams?: any) {
    return await this.verseRepo.getAll(queryParams);
  }
}
