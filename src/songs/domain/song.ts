export class Song {
  constructor(
    public name: string,
    readonly tone: string,
    readonly youtubeUrl: string,
    public style: string,
    readonly observations: string
  ) {}
}
