export interface SongDto {
  id: string;
  name: string;
  tone: string;
  youtubeUrl: string;
  style: string;
  observations: string;
}

export interface CreateSongDto extends Omit<SongDto, "id"> {}
export interface UpdateSongDto extends Partial<CreateSongDto> {}
