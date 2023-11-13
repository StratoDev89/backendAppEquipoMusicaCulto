import { CreateVerseDto, UpdateVerseDto } from "./verses-dto";
import { Verse } from "./verses";

export interface VerseRepository {
  create(verse: CreateVerseDto): Promise<Verse | null>;
  update(id: string, changes: UpdateVerseDto): Promise<Verse | null>;
  delete(id: string): Promise<boolean>;
  get(id: string): Promise<Verse | null>;
  getAll(queryParams?: string): Promise<Verse[] | null>;
}
