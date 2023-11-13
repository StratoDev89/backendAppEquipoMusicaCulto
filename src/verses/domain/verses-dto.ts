export interface VerseDto {
  id: string;
  name: string;
  text: string;
}

export interface CreateVerseDto extends Omit<VerseDto, "id"> {}
export interface UpdateVerseDto extends Partial<CreateVerseDto> {}
